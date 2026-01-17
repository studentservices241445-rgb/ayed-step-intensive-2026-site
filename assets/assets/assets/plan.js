function generatePlan(profile, result){
  const time = Number(profile.timeToExam ?? 30);
  const weakest = profile.weakest ?? "grammar";
  const style = profile.studyStyle ?? "balanced";

  // Determine level
  const avg = Math.round(((result.grammar||0)+(result.reading||0)+(result.listening||0))/3);
  let level = "متوسط";
  if(avg >= 75) level = "متقدم";
  else if(avg <= 45) level = "مبتدئ";

  // Choose track
  let track = "مسار 14 يوم";
  if(time === 7) track = "مسار 7 أيام";
  else if(time === 14) track = "مسار 14 يوم";
  else if(time === 30) track = "مسار 30 يوم";
  else if(time === 0) track = "مسار 30 يوم (لين تحجز)";

  // Focus recommendation
  const focus = [];
  if(result.grammar < 60) focus.push("Grammar (قواعد + استثناءات)");
  if(result.reading < 60) focus.push("Reading (استراتيجيات + قطع)");
  if(result.listening < 60) focus.push("Listening (Main idea + تدريب)");

  if(!focus.length) focus.push("رفع السرعة + مراجعة نماذج حديثة");

  const tips = [];
  tips.push("لا تذاكر كل شي بنفس الوقت… ركّز على نقاط ضعفك أول.");
  tips.push("أي سؤال تخطئ فيه: افهم السبب وارجع له بعد يومين.");
  tips.push("خل يومين قبل الاختبار للمراجعة فقط (نماذج + أخطاء).");

  const planDays = buildPlanDays(track, weakest, style);

  const html = `
    <div class="muted">مستواك التقريبي: <b>${level}</b> — متوسط أداءك: <b>${avg}%</b></div>
    <div class="divider"></div>
    <div><b>المسار المقترح:</b> ${track}</div>
    <div><b>تركيزك الأساسي:</b> ${focus.join(" + ")}</div>
    <div class="divider"></div>
    <div><b>خطة مختصرة (تبدأ فيها بعد الاشتراك):</b></div>
    <ul class="list">${planDays.map(x=>`<li>${x}</li>`).join("")}</ul>
    <div class="divider"></div>
    <div><b>نصايح سريعة:</b></div>
    <ul class="list">${tips.map(t=>`<li>${t}</li>`).join("")}</ul>
  `;

  return {
    title: track,
    level,
    avg,
    focus,
    html
  };
}

function buildPlanDays(track, weakest, style){
  const w = weakest;
  const emphasis = (s)=> s===w ? " (تركيز زيادة)" : "";
  const day = (n, text)=> `اليوم ${n}: ${text}`;

  if(track.includes("7")){
    return [
      day(1, `تأسيس سريع Grammar + مراجعة أخطاءك${emphasis("grammar")}`),
      day(2, `Reading استراتيجيات + قطع متكررة${emphasis("reading")}`),
      day(3, `Listening تدريب (Main idea/Details)${emphasis("listening")}`),
      day(4, `نماذج مركزة + تصحيح أخطاء`),
      day(5, `مراجعة الاستثناءات + كلمات/مرادفات`),
      day(6, `نماذج حديثة + كويزات على نقاط ضعفك`),
      day(7, `مراجعة نهائية: أخطاءك + نموذج كامل خفيف`),
    ];
  }

  if(track.includes("30") || track.includes("لين تحجز")){
    return [
      "الأسبوع 1: تأسيس (Grammar + Reading basics + Listening basics) حسب وقتك.",
      "الأسبوع 2: تدريب يومي (نماذج + كويزات) + تثبيت الأخطاء.",
      "الأسبوع 3: رفع السرعة + قطع متكررة + استثناءات.",
      "الأسبوع 4: نماذج أحدث + مراجعة أخطاء + محاكاة اختبار."
    ];
  }

  // 14 days default
  return [
    day(1, `Grammar تأسيس + قواعد متكررة${emphasis("grammar")}`),
    day(2, `Reading استراتيجيات + تطبيق${emphasis("reading")}`),
    day(3, `Listening مهارة التقاط الإجابة${emphasis("listening")}`),
    day(4, `نماذج Grammar + تصحيح`),
    day(5, `قطع Reading متكررة + أسئلة شائعة`),
    day(6, `Listening تدريب + مراجعة مفردات`),
    day(7, `مراجعة أسبوع: أخطاء + كويزات مركزة`),
    day(8, `Grammar استثناءات + ترتيب الجملة`),
    day(9, `Reading رسوم/جداول + Inference`),
    day(10, `Listening تفاصيل + كلمات ربط`),
    day(11, `نماذج حديثة + تصحيح`),
    day(12, `مراجعة نقاط ضعفك (حسب تقريرك)`),
    day(13, `محاكاة اختبار + تحليل`),
    day(14, `مراجعة نهائية: أخطاءك فقط + تهدئة قبل الاختبار`)
  ];
}
