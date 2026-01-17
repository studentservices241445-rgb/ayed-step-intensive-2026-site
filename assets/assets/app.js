/* ===== Utilities ===== */
const $ = (sel, el=document) => el.querySelector(sel);
const $$ = (sel, el=document) => [...el.querySelectorAll(sel)];

function clamp(n, a, b){ return Math.max(a, Math.min(b, n)); }
function fmt2(n){ return String(n).padStart(2, '0'); }

function setLS(key, val){ localStorage.setItem(key, JSON.stringify(val)); }
function getLS(key, fallback=null){
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
  catch { return fallback; }
}

/* ===== Topbar rotating text ===== */
(function topbarRotate(){
  const el = $("#topbarText");
  if(!el) return;
  const msgs = [
    "📣 التسجيل مفتوح — لا تخلّي التشتت يضيّع محاولاتك",
    "✅ تحديد المستوى إلزامي عشان تطلع لك خطة على قدّك",
    "⏳ آخر موعد للتسجيل: 29/01/2026 — بعدها السعر الرسمي",
    "🎯 ركّز على نقاط ضعفك بدل ما تذاكر كل شي عشوائي",
    "💡 إذا اختبارك قريب… المسار السريع بيساعدك ترتّب أولوياتك"
  ];
  let i=0;
  setInterval(()=>{ i=(i+1)%msgs.length; el.textContent = msgs[i]; }, 6500);
})();

/* ===== Countdown ===== */
(function countdown(){
  const dEl=$("#d"), hEl=$("#h"), mEl=$("#m"), sEl=$("#s");
  if(!dEl) return;
  // Deadline: 29/01/2026 23:59:59 (local time)
  const deadline = new Date("2026-01-29T23:59:59");
  function tick(){
    const now = new Date();
    let diff = Math.max(0, deadline - now);
    const days = Math.floor(diff / (1000*60*60*24));
    diff -= days*(1000*60*60*24);
    const hours = Math.floor(diff / (1000*60*60));
    diff -= hours*(1000*60*60);
    const mins = Math.floor(diff / (1000*60));
    diff -= mins*(1000*60);
    const secs = Math.floor(diff / 1000);

    dEl.textContent = fmt2(days);
    hEl.textContent = fmt2(hours);
    mEl.textContent = fmt2(mins);
    sEl.textContent = fmt2(secs);
  }
  tick();
  setInterval(tick, 1000);
})();

/* ===== Seats remaining (local simulation) ===== */
(function seats(){
  const numEl = $("#seatsNum");
  const fillEl = $("#seatsFill");
  if(!numEl || !fillEl) return;

  const cfg = { start: 120, min: 7 };
  const key = "seatsRemainingV1";

  let v = getLS(key, null);
  if(v === null){
    v = cfg.start - Math.floor(Math.random()*12); // slight variation on first visit
  } else {
    // decrease slowly per visit (not every reload)
    const last = getLS(key+"_last", 0);
    const now = Date.now();
    const sixHours = 6*60*60*1000;
    if(now - last > sixHours){
      v = Math.max(cfg.min, v - (1 + Math.floor(Math.random()*3)));
      setLS(key+"_last", now);
    }
  }
  setLS(key, v);

  numEl.textContent = v;
  const pct = clamp((v/cfg.start)*100, 5, 100);
  fillEl.style.width = pct + "%";
})();

/* ===== Tabs ===== */
(function tabs(){
  const tabs = $$(".tab");
  if(!tabs.length) return;
  tabs.forEach(t=>{
    t.addEventListener("click", ()=>{
      tabs.forEach(x=>x.classList.remove("is-active"));
      t.classList.add("is-active");
      const id = t.dataset.tab;
      $$(".pane").forEach(p=>p.classList.remove("is-active"));
      $("#pane-"+id)?.classList.add("is-active");
    });
  });
})();

/* ===== Copy buttons ===== */
(function copyButtons(){
  $$("[data-copy]").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      const target = btn.getAttribute("data-copy");
      const el = $(target);
      if(!el) return;
      const text = el.textContent.trim();
      try{
        await navigator.clipboard.writeText(text);
        btn.textContent = "تم ✅";
        setTimeout(()=>btn.textContent="نسخ", 900);
      }catch{
        alert("انسخ يدويًا: " + text);
      }
    });
  });
})();

/* ===== Gate register page (require assessment) ===== */
(function gateRegister(){
  const gate = $("#gateCard");
  const main = $("#mainRegister");
  if(!gate || !main) return;

  const done = getLS("assessmentCompleted", false);
  if(done){
    gate.classList.add("hidden");
    main.classList.remove("hidden");
  } else {
    gate.classList.remove("hidden");
    main.classList.add("hidden");
  }
})();

/* ===== Quiz logic (on test.html) ===== */
(function quiz(){
  const startBtn = $("#startTest");
  if(!startBtn) return;

  const profileCard = $("#stepProfile");
  const quizCard = $("#quizCard");
  const resultCard = $("#resultCard");

  const pillSection = $("#pillSection");
  const pillProgress = $("#pillProgress");
  const stimulusBox = $("#stimulusBox");
  const qText = $("#qText");
  const choicesEl = $("#choices");
  const prevBtn = $("#prevBtn");
  const nextBtn = $("#nextBtn");
  const quitBtn = $("#quitBtn");

  const scoresEl = $("#scores");
  const planBox = $("#planBox");
  const retryBtn = $("#retry");

  let quiz = null;
  let idx = 0;
  let selected = {}; // index -> choiceIndex

  function getProfile(){
    const timeToExam = Number($("#timeToExam").value);
    const tookBefore = $("#tookBefore").value;
    const prevScore = Number($("#prevScore").value || 0);
    const targetScore = $("#targetScore").value;
    const weakest = $("#weakest").value;
    const studyStyle = $("#studyStyle").value;

    const profile = { timeToExam, tookBefore, prevScore, targetScore, weakest, studyStyle };
    setLS("studentProfile", profile);
    return profile;
  }

  function buildQuiz(){
    // take 6 questions per section = 18 total each attempt
    const pick = (section, n) => pickRandomBySection(QUESTION_BANK, section, n);
    const qs = [
      ...pick("grammar", 6),
      ...pick("reading", 6),
      ...pick("listening", 6),
    ];
    // shuffle overall
    for(let i=qs.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [qs[i],qs[j]]=[qs[j],qs[i]];
    }
    return qs;
  }

  function render(){
    const q = quiz[idx];
    const total = quiz.length;

    pillProgress.textContent = `${idx+1}/${total}`;
    pillSection.textContent = q.section.toUpperCase();

    if(q.stimulus){
      stimulusBox.classList.remove("hidden");
      stimulusBox.innerHTML = `<b>النص:</b><br>${escapeHtml(q.stimulus).replace(/\n/g,"<br>")}`;
    }else{
      stimulusBox.classList.add("hidden");
      stimulusBox.textContent = "";
    }

    qText.textContent = q.prompt;

    choicesEl.innerHTML = "";
    q.choices.forEach((c, ci)=>{
      const div = document.createElement("div");
      div.className = "choice";
      div.innerHTML = `<div>${escapeHtml(c)}</div>`;
      div.addEventListener("click", ()=>{
        selected[idx]=ci;
        $$(".choice", choicesEl).forEach(x=>x.classList.remove("is-selected"));
        div.classList.add("is-selected");
        nextBtn.disabled = false;
      });
      if(selected[idx] === ci){
        div.classList.add("is-selected");
      }
      choicesEl.appendChild(div);
    });

    prevBtn.disabled = idx===0;
    nextBtn.disabled = (selected[idx]===undefined);

    if(idx === total-1) nextBtn.textContent = "عرض النتيجة";
    else nextBtn.textContent = "التالي";
  }

  function finish(){
    const answers = quiz.map((q, i)=>({
      id:q.id, section:q.section,
      correct: (selected[i] === q.answerIndex),
      chosen: selected[i],
      answerIndex: q.answerIndex,
      explanation: q.explanation
    }));

    // section scores
    const by = {grammar:[], reading:[], listening:[]};
    answers.forEach(a=>by[a.section].push(a));
    const scorePct = s => {
      const arr = by[s];
      const ok = arr.filter(x=>x.correct).length;
      return Math.round((ok/arr.length)*100);
    };

    const result = {
      grammar: scorePct("grammar"),
      reading: scorePct("reading"),
      listening: scorePct("listening"),
      answers
    };
    setLS("assessmentResult", result);
    setLS("assessmentCompleted", true);

    // show result card
    quizCard.classList.add("hidden");
    resultCard.classList.remove("hidden");

    scoresEl.innerHTML = `
      <div class="scoreCard"><div class="muted">Grammar</div><b>${result.grammar}%</b></div>
      <div class="scoreCard"><div class="muted">Reading</div><b>${result.reading}%</b></div>
      <div class="scoreCard"><div class="muted">Listening</div><b>${result.listening}%</b></div>
    `;

    const profile = getLS("studentProfile", {});
    const plan = generatePlan(profile, result);
    planBox.innerHTML = plan.html;

    // Also store plan
    setLS("studyPlan", plan);
  }

  function escapeHtml(str){
    return String(str).replace(/[&<>"']/g, s=>({
      "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
    }[s]));
  }

  startBtn.addEventListener("click", ()=>{
    getProfile();
    profileCard.classList.add("hidden");
    quizCard.classList.remove("hidden");
    resultCard.classList.add("hidden");

    quiz = buildQuiz();
    idx = 0; selected = {};
    render();
  });

  prevBtn.addEventListener("click", ()=>{
    if(idx>0){ idx--; render(); }
  });

  nextBtn.addEventListener("click", ()=>{
    if(idx < quiz.length-1){
      idx++;
      render();
    } else {
      finish();
    }
  });

  quitBtn.addEventListener("click", ()=>{
    // go back to profile
    profileCard.classList.remove("hidden");
    quizCard.classList.add("hidden");
    resultCard.classList.add("hidden");
  });

  retryBtn?.addEventListener("click", ()=>{
    setLS("assessmentCompleted", false);
    setLS("assessmentResult", null);
    setLS("studyPlan", null);
    window.location.reload();
  });
})();

/* ===== Registration form submit -> open Telegram message ===== */
(function registerSubmit(){
  const form = $("#regForm");
  if(!form) return;

  form.addEventListener("submit", (e)=>{
    e.preventDefault();

    // Validate receipt presence
    const fileInput = form.querySelector('input[name="receipt"]');
    if(!fileInput?.files?.length){
      alert("لازم ترفق الإيصال قبل الإرسال ✅");
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());

    const profile = getLS("studentProfile", {});
    const res = getLS("assessmentResult", {});
    const plan = getLS("studyPlan", {});

    const examDate = data.examDate ? data.examDate : "لسا ما حددت";
    const region = data.region ? data.region : "—";

    const msg =
`السلام عليكم ورحمة الله وبركاته

أبغى تأكيد اشتراكي في دورة STEP المكثفة 2026 ✅
تم التحويل الآن، وبرفق الإيصال في نفس المحادثة للتأكيد النهائي.

الاسم: ${data.fullName}
التواصل: (${data.contactType}) ${data.contactValue}
موعد الاختبار: ${examDate}
منطقة الاختبار: ${region}
الدرجة المستهدفة: ${data.goal}
هل اختبرت قبل؟: ${data.tookBefore === "yes" ? "نعم" : "لا"}
الدرجة السابقة: ${data.prevScore || "—"}
سبب الاختبار: ${data.reason || "—"}
ملاحظات: ${data.notes || "—"}

نتيجة تحديد المستوى (مختصر):
Grammar: ${res.grammar ?? "—"}% | Reading: ${res.reading ?? "—"}% | Listening: ${res.listening ?? "—"}%
المسار المقترح: ${plan.title || "—"}

بيانات التحويل (للتحقق):
البنك: بنك الإنماء
رقم الحساب: 68206067557000
الآيبان: SA4905000068206067557000
المستفيد: مؤسسة كريتيفا جلوبال لتقنية المعلومات
غرض التحويل: مشتريات دورة STEP المكثفة

_______
ملاحظة: برفق الإيصال الآن (صورة/ PDF). رجاءً لا أتلقى تأخير — وبإذن الله تنتظرون مني أي معلومات إضافية.`;

    const username = "Ayed_Academy_2026";
    const url = "https://t.me/" + username + "?text=" + encodeURIComponent(msg);

    // Open telegram message
    window.open(url, "_blank");

    alert("تم تجهيز الرسالة ✅\nافتح التليجرام وأرسل الإيصال داخل نفس المحادثة للتأكيد النهائي.");
    form.reset();
  });
})();
