// ===== Question bank (60) — Difficult mixed, original content =====
// Structure:
// { id, section: "grammar"|"reading"|"listening", stimulus?: "text", prompt, choices[], answerIndex, explanation }

const QUESTION_BANK = [
  // ===== Grammar (20) =====
  {id:"G1",section:"grammar",prompt:"Choose the best sentence.",choices:[
    "Hardly had I arrived when the meeting started.",
    "Hardly I had arrived when started the meeting.",
    "Hardly had arrived I when the meeting started.",
    "Hardly did I arrived when the meeting started."
  ],answerIndex:0,explanation:"After 'Hardly' we invert: 'Hardly had I arrived...'"},
  {id:"G2",section:"grammar",prompt:"Pick the correct option: If I ____ more time, I would learn another language.",choices:["have","had","will have","having"],answerIndex:1,explanation:"Second conditional uses past simple: 'If I had...'"},
  {id:"G3",section:"grammar",prompt:"Choose the correct form: Neither the students nor the teacher ____ happy with the schedule.",choices:["are","were","is","be"],answerIndex:2,explanation:"With 'neither...nor', verb agrees with the nearer subject: teacher -> 'is' (present)."},
  {id:"G4",section:"grammar",prompt:"Select the best correction: The information you gave me were helpful.",choices:[
    "The information you gave me was helpful.",
    "The informations you gave me were helpful.",
    "The information you gave me are helpful.",
    "The information you gave me being helpful."
  ],answerIndex:0,explanation:"'Information' is uncountable -> singular verb 'was'."},
  {id:"G5",section:"grammar",prompt:"Choose: She insisted that he ____ on time.",choices:["is","was","be","being"],answerIndex:2,explanation:"Subjunctive after 'insist' -> base form 'be'."},
  {id:"G6",section:"grammar",prompt:"Pick the correct sentence.",choices:[
    "Not only did he apologize, but he also fixed the problem.",
    "Not only he did apologize, but he also fixed the problem.",
    "Not only did he apologized, but he also fixed the problem.",
    "Not only he apologized, but he also fixed the problem."
  ],answerIndex:0,explanation:"Inversion after 'Not only': 'Not only did he...'"},
  {id:"G7",section:"grammar",prompt:"Choose the best option: This is the first time I ____ such a confusing form.",choices:["see","saw","have seen","had seen"],answerIndex:2,explanation:"'This is the first time' -> present perfect: have seen."},
  {id:"G8",section:"grammar",prompt:"Pick the correct punctuation.",choices:[
    "However, the results were disappointing.",
    "However the results, were disappointing.",
    "However the results were, disappointing.",
    "However; the results were disappointing."
  ],answerIndex:0,explanation:"Transition word 'However,' at sentence start -> comma."},
  {id:"G9",section:"grammar",prompt:"Choose: The project was completed ____ schedule despite the delays.",choices:["in","on","at","to"],answerIndex:1,explanation:"Correct collocation: on schedule."},
  {id:"G10",section:"grammar",prompt:"Select the correct form: Having ____ the report, she emailed it to the manager.",choices:["finish","finished","finishing","to finish"],answerIndex:1,explanation:"Perfect participle: Having finished."},
  {id:"G11",section:"grammar",prompt:"Choose the best sentence.",choices:[
    "The man whom you spoke to is my uncle.",
    "The man which you spoke to is my uncle.",
    "The man who you spoke to is my uncle whom.",
    "The man whose you spoke to is my uncle."
  ],answerIndex:0,explanation:"Object relative pronoun: whom (formal) / who (informal)."},
  {id:"G12",section:"grammar",prompt:"Pick: It’s essential that every applicant ____ the form carefully.",choices:["reads","read","reading","to read"],answerIndex:1,explanation:"Subjunctive after 'essential that' -> base form 'read'."},
  {id:"G13",section:"grammar",prompt:"Choose: She is responsible ____ updating the database.",choices:["of","for","to","with"],answerIndex:1,explanation:"Responsible for + gerund."},
  {id:"G14",section:"grammar",prompt:"Select: The harder you work, the ____ you become.",choices:["more successful","most successful","successfully","more success"],answerIndex:0,explanation:"Comparative correlative: the + comparative."},
  {id:"G15",section:"grammar",prompt:"Choose: I would rather you ____ me before making that decision.",choices:["tell","told","have told","telling"],answerIndex:1,explanation:"Would rather + past simple for present preference about others."},
  {id:"G16",section:"grammar",prompt:"Pick the correct sentence.",choices:[
    "By the time we got there, the show had already started.",
    "By the time we get there, the show had already started.",
    "By the time we got there, the show has already started.",
    "By the time we got there, the show already start."
  ],answerIndex:0,explanation:"Past point + earlier past -> past perfect."},
  {id:"G17",section:"grammar",prompt:"Choose: The proposal, along with the supporting documents, ____ on the desk.",choices:["are","is","were","have"],answerIndex:1,explanation:"'Along with' doesn't change subject; proposal -> singular 'is'."},
  {id:"G18",section:"grammar",prompt:"Select: No sooner ____ the door than the phone rang.",choices:["I had closed","had I closed","I closed","did I closed"],answerIndex:1,explanation:"Inversion after 'No sooner': had I closed."},
  {id:"G19",section:"grammar",prompt:"Pick: The report was written ____ a clear and professional style.",choices:["with","in","at","by"],answerIndex:1,explanation:"Written in a style."},
  {id:"G20",section:"grammar",prompt:"Choose the best correction: Each of the answers have been checked.",choices:[
    "Each of the answers has been checked.",
    "Each of the answers have checked.",
    "Each answers has been checked.",
    "Each of answers have been checked."
  ],answerIndex:0,explanation:"Each -> singular verb 'has'."},

  // ===== Reading (20) =====
  {id:"R1",section:"reading",stimulus:"In a recent study, researchers found that people who sleep less than six hours are more likely to make risky decisions. Interestingly, the effect was strongest when participants were asked to decide quickly rather than after careful reflection.",
   prompt:"What is the main idea of the passage?",choices:[
    "Sleeping less leads to better decision-making.",
    "Short sleep is linked to riskier decisions, especially under time pressure.",
    "People should never make decisions quickly.",
    "Researchers do not agree on the importance of sleep."
  ],answerIndex:1,explanation:"Main idea: less sleep -> risky decisions; stronger with quick decisions."},
  {id:"R2",section:"reading",stimulus:"The city introduced electric buses to reduce pollution. While the buses cost more upfront, officials expect lower maintenance expenses and improved air quality over time.",
   prompt:"The word 'upfront' is closest in meaning to:",choices:["eventually","in advance","carelessly","secretly"],answerIndex:1,explanation:"Upfront = at the beginning / in advance."},
  {id:"R3",section:"reading",stimulus:"Many students believe multitasking helps them study faster. However, evidence suggests switching between tasks increases mistakes and makes learning less efficient.",
   prompt:"Which statement is supported by the passage?",choices:[
    "Multitasking always improves grades.",
    "Task-switching can reduce efficiency and increase errors.",
    "Students should avoid studying completely.",
    "Evidence shows multitasking is necessary."
  ],answerIndex:1,explanation:"The passage says switching increases mistakes and reduces efficiency."},
  {id:"R4",section:"reading",stimulus:"A museum launched an online tour. Visitors can explore exhibits from home, but some critics argue it cannot replace the experience of seeing artifacts in person.",
   prompt:"Critics mainly argue that the online tour:",choices:[
    "is too expensive to produce",
    "cannot fully replace the in-person experience",
    "should be limited to students only",
    "makes museums unnecessary"
  ],answerIndex:1,explanation:"Directly stated: cannot replace in-person experience."},
  {id:"R5",section:"reading",stimulus:"When Sara moved to a new city, she felt isolated. Joining a volunteer group helped her build friendships and feel connected to the community.",
   prompt:"Why did joining the volunteer group help Sara?",choices:[
    "It gave her a higher salary.",
    "It helped her meet people and feel connected.",
    "It forced her to move again.",
    "It made her stop volunteering."
  ],answerIndex:1,explanation:"The group helped her build friendships and connect."},
  {id:"R6",section:"reading",stimulus:"The company promised to reduce waste by 30% within a year. After six months, it had reduced waste by only 5%, and managers admitted the goal might be unrealistic without major changes.",
   prompt:"What can be inferred?",choices:[
    "The company will definitely meet its goal easily.",
    "The company may fail unless it changes its approach significantly.",
    "Waste reduction is impossible for any company.",
    "Managers refuse to track waste."
  ],answerIndex:1,explanation:"Infer: may fail unless major changes happen."},
  {id:"R7",section:"reading",stimulus:"A new language-learning app uses short daily lessons. Users are more consistent when lessons take under five minutes.",
   prompt:"According to the passage, users are more consistent when:",choices:[
    "lessons are long and detailed",
    "lessons are very short",
    "the app is expensive",
    "they study only once a month"
  ],answerIndex:1,explanation:"Under five minutes -> more consistent."},
  {id:"R8",section:"reading",stimulus:"Some plants thrive in harsh deserts because they store water in thick leaves and reduce water loss through tiny pores.",
   prompt:"The passage mainly explains:",choices:[
    "why deserts have no plants",
    "how certain plants survive in deserts",
    "why leaves are always thick",
    "how to increase rainfall"
  ],answerIndex:1,explanation:"Survival mechanisms in deserts."},
  {id:"R9",section:"reading",stimulus:"The professor did not reject the idea; instead, he asked for stronger evidence to support it.",
   prompt:"The professor's response was:",choices:["completely negative","cautiously supportive","irrelevant","confused"],answerIndex:1,explanation:"He asked for evidence; not rejection -> cautious."},
  {id:"R10",section:"reading",stimulus:"In the early 1900s, many factories relied on human labor for repetitive tasks. Today, robots perform many of these tasks, which can increase production but also changes job requirements.",
   prompt:"What is the passage comparing?",choices:[
    "Factories in the future and the past",
    "Human labor in early factories vs robot labor today",
    "Robots and animals",
    "Job requirements in schools"
  ],answerIndex:1,explanation:"It compares labor then vs now."},
  {id:"R11",section:"reading",stimulus:"Although the device is small, it can store thousands of books. As a result, it is popular among travelers who want to read without carrying heavy luggage.",
   prompt:"Why is the device popular among travelers?",choices:[
    "It is heavy and large.",
    "It stores many books without adding weight.",
    "It can only store one book.",
    "It replaces luggage entirely."
  ],answerIndex:1,explanation:"Stores thousands of books -> no heavy luggage."},
  {id:"R12",section:"reading",stimulus:"The report emphasized that public transportation improves when routes are redesigned based on real passenger data rather than assumptions.",
   prompt:"Public transportation improves when routes are redesigned based on:",choices:[
    "assumptions only",
    "real passenger data",
    "random guesses",
    "old maps only"
  ],answerIndex:1,explanation:"Directly stated."},
  {id:"R13",section:"reading",stimulus:"Many historians argue that written letters provide unique insights into daily life because they capture emotions and personal details often missing from official records.",
   prompt:"Letters are valuable because they:",choices:[
    "are always official",
    "contain emotions and personal details",
    "are impossible to preserve",
    "avoid daily life"
  ],answerIndex:1,explanation:"Unique insights via emotions/details."},
  {id:"R14",section:"reading",stimulus:"The athlete trained intensely but still lost the race. Nevertheless, she considered the experience valuable because it revealed her weaknesses.",
   prompt:"The word 'Nevertheless' indicates:",choices:["addition","contrast","cause","time"],answerIndex:1,explanation:"Nevertheless = despite that -> contrast."},
  {id:"R15",section:"reading",stimulus:"A diet rich in fiber can support digestion. However, sudden increases in fiber may cause discomfort, so gradual changes are recommended.",
   prompt:"What is recommended?",choices:[
    "Avoid fiber completely",
    "Increase fiber gradually",
    "Increase fiber suddenly",
    "Never change diet"
  ],answerIndex:1,explanation:"Gradual increases recommended."},
  {id:"R16",section:"reading",stimulus:"The island's economy depends largely on tourism. When travel restrictions were introduced, local businesses struggled and unemployment rose.",
   prompt:"What caused unemployment to rise?",choices:[
    "Tourism increased",
    "Travel restrictions reduced tourism",
    "Businesses hired more workers",
    "The island stopped tourism intentionally"
  ],answerIndex:1,explanation:"Restrictions -> less tourism -> struggling -> unemployment."},
  {id:"R17",section:"reading",stimulus:"Scientists once believed the brain stopped developing after childhood. Current research, however, shows that the adult brain can form new connections through learning.",
   prompt:"What does current research show?",choices:[
    "The adult brain cannot change",
    "The adult brain can form new connections",
    "Learning is useless for adults",
    "Childhood is the only learning period"
  ],answerIndex:1,explanation:"Adult brain can form new connections."},
  {id:"R18",section:"reading",stimulus:"The author describes two solutions to the problem but concludes that neither will work without cooperation among the groups involved.",
   prompt:"What is required for the solutions to work?",choices:[
    "More problems",
    "Cooperation among groups",
    "Less cooperation",
    "Ignoring the groups"
  ],answerIndex:1,explanation:"Directly stated."},
  {id:"R19",section:"reading",stimulus:"The documentary was praised for being informative, yet some viewers found it overly technical and difficult to follow.",
   prompt:"Some viewers found the documentary:",choices:["funny","too technical","short","unreliable"],answerIndex:1,explanation:"Overly technical and difficult."},
  {id:"R20",section:"reading",stimulus:"To reduce stress, experts suggest setting realistic goals and taking short breaks. These habits can prevent burnout during busy periods.",
   prompt:"Which habit helps prevent burnout?",choices:[
    "Setting unrealistic goals",
    "Taking short breaks",
    "Never taking breaks",
    "Avoiding goals"
  ],answerIndex:1,explanation:"Short breaks + realistic goals prevent burnout."},

  // ===== Listening (20) — Using transcript as stimulus =====
  {id:"L1",section:"listening",stimulus:"Speaker: We’re almost out of time. Focus on the questions you can answer quickly, then return to the hard ones if you have minutes left.",
   prompt:"What is the speaker advising?",choices:[
    "Answer the hardest questions first",
    "Skip all questions",
    "Prioritize easy questions, then return to difficult ones",
    "Stop the test early"
  ],answerIndex:2,explanation:"He says answer quickly first, return later."},
  {id:"L2",section:"listening",stimulus:"Woman: I studied for hours, but I didn’t improve. Man: Maybe your method is the issue—try reviewing mistakes instead of repeating the same type of question.",
   prompt:"What does the man suggest?",choices:[
    "Study fewer hours",
    "Stop studying completely",
    "Change method by reviewing mistakes",
    "Repeat the same questions only"
  ],answerIndex:2,explanation:"Review mistakes rather than repeating."},
  {id:"L3",section:"listening",stimulus:"Instructor: Don’t translate every word. Listen for keywords and the main idea. If you miss one detail, don’t panic—keep listening.",
   prompt:"What is the instructor emphasizing?",choices:[
    "Translate every word",
    "Focus on keywords and main idea",
    "Stop listening if you miss a detail",
    "Memorize the entire audio"
  ],answerIndex:1,explanation:"Focus on keywords/main idea, keep going."},
  {id:"L4",section:"listening",stimulus:"Student: The reading section feels impossible. Tutor: It’s not about reading every line slowly. It’s about scanning for information and managing time.",
   prompt:"Why does the tutor think reading is manageable?",choices:[
    "Because you should ignore the passage",
    "Because speed is irrelevant",
    "Because scanning and time management help",
    "Because questions do not require reading"
  ],answerIndex:2,explanation:"Scanning/time management."},
  {id:"L5",section:"listening",stimulus:"Speaker: The library will close early today due to maintenance. Please return borrowed books before 5 p.m.",
   prompt:"Why will the library close early?",choices:["Holiday","Maintenance","Staff meeting","Weather"],answerIndex:1,explanation:"Due to maintenance."},
  {id:"L6",section:"listening",stimulus:"Man: I can’t pay by bank transfer right now. Woman: Then use the alternative method provided. It activates automatically without sending proof.",
   prompt:"What does the woman imply about the alternative method?",choices:[
    "It requires proof later",
    "It activates automatically",
    "It is unavailable",
    "It costs more"
  ],answerIndex:1,explanation:"Activates automatically without proof."},
  {id:"L7",section:"listening",stimulus:"Coach: Your score is stuck because you keep practicing what you’re already good at. Spend more time on your weakest section.",
   prompt:"What is causing the score to stay the same?",choices:[
    "Practicing only strengths",
    "Practicing weaknesses",
    "Not practicing at all",
    "Taking too many breaks"
  ],answerIndex:0,explanation:"He practices what he's good at; needs focus on weaknesses."},
  {id:"L8",section:"listening",stimulus:"Narrator: The train to Downtown is delayed by ten minutes. Passengers should remain on the platform.",
   prompt:"How long is the delay?",choices:["5 minutes","10 minutes","15 minutes","No delay"],answerIndex:1,explanation:"Delayed by ten minutes."},
  {id:"L9",section:"listening",stimulus:"Woman: Did you finish the model tests? Man: I did some, but I realized I was repeating the same mistakes. Now I’m writing notes to avoid them.",
   prompt:"What is the man doing now?",choices:[
    "Stopping practice",
    "Writing notes to avoid repeated mistakes",
    "Ignoring mistakes",
    "Only reading theory"
  ],answerIndex:1,explanation:"He writes notes to avoid repeated mistakes."},
  {id:"L10",section:"listening",stimulus:"Speaker: If your exam is in a week, don’t start long textbooks. Use high-yield reviews and practice tests.",
   prompt:"What is recommended for an exam in one week?",choices:[
    "Long textbooks",
    "High-yield reviews and practice tests",
    "No study at all",
    "Only vocabulary lists"
  ],answerIndex:1,explanation:"High-yield reviews and practice tests."},
  {id:"L11",section:"listening",stimulus:"Teacher: Pay attention to signal words like 'however', 'therefore', and 'in contrast'. They tell you the relationship between ideas.",
   prompt:"Why are signal words important?",choices:[
    "They are always the answer",
    "They show relationships between ideas",
    "They make listening slower",
    "They replace reading"
  ],answerIndex:1,explanation:"They indicate relationships."},
  {id:"L12",section:"listening",stimulus:"Man: I’m nervous about the test. Woman: Nervous is normal. Simulate the exam at home and time yourself—confidence comes from practice.",
   prompt:"What does the woman suggest to build confidence?",choices:[
    "Avoid practice",
    "Simulate the exam and time yourself",
    "Only talk about fear",
    "Skip timing"
  ],answerIndex:1,explanation:"Simulate + timing builds confidence."},
  {id:"L13",section:"listening",stimulus:"Speaker: We updated the materials to match the latest format. If you follow the plan, you’ll know exactly what to focus on each day.",
   prompt:"What is the benefit of the plan?",choices:[
    "It makes daily focus clear",
    "It increases confusion",
    "It removes practice",
    "It changes the test date"
  ],answerIndex:0,explanation:"You know what to focus on daily."},
  {id:"L14",section:"listening",stimulus:"Receptionist: Please fill out the form and attach the receipt. After that, send the receipt again in the chat for final confirmation.",
   prompt:"What must be done after attaching the receipt in the form?",choices:[
    "Nothing else",
    "Send the receipt again in the chat",
    "Delete the receipt",
    "Print the form"
  ],answerIndex:1,explanation:"Send again in chat for final confirmation."},
  {id:"L15",section:"listening",stimulus:"Student: Should I memorize everything? Tutor: Memorize high-frequency items, but prioritize understanding patterns and practicing.",
   prompt:"What does the tutor recommend?",choices:[
    "Memorize everything",
    "Only memorize, no practice",
    "Memorize high-frequency items but focus on understanding and practice",
    "Avoid memorization completely"
  ],answerIndex:2,explanation:"High-frequency + understanding + practice."},
  {id:"L16",section:"listening",stimulus:"Speaker: The workshop starts at 3 p.m., but please arrive 15 minutes early to register.",
   prompt:"When should participants arrive?",choices:["3:00","2:45","3:15","2:30"],answerIndex:1,explanation:"15 minutes early -> 2:45."},
  {id:"L17",section:"listening",stimulus:"Man: My listening score is low. Coach: Then practice identifying the main idea first. Details come after you master that.",
   prompt:"What should the man practice first?",choices:[
    "Details only",
    "Main idea identification",
    "Grammar rules",
    "Reading graphs"
  ],answerIndex:1,explanation:"Main idea first."},
  {id:"L18",section:"listening",stimulus:"Speaker: Don’t send multiple messages. It may delay your confirmation because the queue becomes harder to track.",
   prompt:"Why shouldn’t you send multiple messages?",choices:[
    "It costs money",
    "It delays confirmation",
    "It improves speed",
    "It is required"
  ],answerIndex:1,explanation:"Multiple messages may delay confirmation."},
  {id:"L19",section:"listening",stimulus:"Woman: I haven’t booked the exam yet. Man: That’s fine. Start with the 30-day plan, and once you book, we’ll adjust the last week for review.",
   prompt:"What does the man suggest?",choices:[
    "Wait until booking to study",
    "Start a 30-day plan and adjust later",
    "Only study one day",
    "Cancel the exam"
  ],answerIndex:1,explanation:"Start 30-day plan and adjust after booking."},
  {id:"L20",section:"listening",stimulus:"Speaker: If you keep getting the same score, it’s often because you repeat the same habits. Change the strategy, not the effort.",
   prompt:"What is the speaker’s point?",choices:[
    "Work harder with same strategy",
    "Change strategy rather than just increasing effort",
    "Stop studying",
    "Scores never change"
  ],answerIndex:1,explanation:"Change strategy, not just effort."},
];

// ===== Helpers =====
function pickRandomBySection(bank, section, n){
  const pool = bank.filter(q=>q.section===section);
  const copy = [...pool];
  // Fisher-Yates shuffle
  for(let i=copy.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [copy[i],copy[j]]=[copy[j],copy[i]];
  }
  return copy.slice(0,n);
}
