const TOPICS = {
  cloud: "Describe cloud concepts",
  architecture: "Describe Azure architecture and services",
  management: "Describe Azure management and governance"
};

const QUESTIONS = [
  {topic:"cloud",q:"What is cloud computing?",options:["Using computing services over the internet","Saving every file only on a USB drive","A type of computer screen","A programming language"],answer:0,explanation:"Cloud computing delivers services such as computing power, storage and databases over a network, usually the internet. It can help an organisation access resources without owning every physical server."},
  {topic:"cloud",q:"Which cloud model combines a private environment with public cloud services?",options:["Public cloud only","Hybrid cloud","Offline cloud","Single-user cloud"],answer:1,explanation:"A hybrid cloud combines private infrastructure with public cloud services, allowing an organisation to use both where appropriate."},
  {topic:"cloud",q:"What is one common benefit of cloud scalability?",options:["Resources can be adjusted to meet demand","Every service must run on one computer","The internet is no longer needed","Costs can never change"],answer:0,explanation:"Scalability means resources can be increased or decreased to meet changing workloads. For example, an online shop may need more resources during a busy sale."},
  {topic:"cloud",q:"In a consumption-based pricing model, what does a customer generally pay for?",options:["Every possible service whether used or not","The resources and services they consume","A fixed fee for all Azure services worldwide","Only the physical data centre building"],answer:1,explanation:"Consumption-based pricing generally charges for the services or resources used. The exact billing rules depend on the service and pricing terms."},
  {topic:"cloud",q:"What is the main idea of high availability?",options:["Keeping a service accessible with minimal interruption","Making a password longer","Deleting backup copies","Using only one server with no recovery plan"],answer:0,explanation:"High availability aims to keep a service running and accessible, often by using redundancy and reducing single points of failure."},
  {topic:"cloud",q:"Which cloud service model gives customers the most control over the operating system?",options:["SaaS","PaaS","IaaS","A finished email application"],answer:2,explanation:"Infrastructure as a Service (IaaS) gives customers control over virtual machines, including the operating system, while the provider manages the underlying physical infrastructure."},
  {topic:"cloud",q:"What does the shared responsibility model describe?",options:["How cloud customers and providers divide security responsibilities","How all users share one password","How to split a cloud bill equally","How to share public files"],answer:0,explanation:"The shared responsibility model explains which security and management tasks belong to the cloud provider and which remain the customer's responsibility. The split varies by service model."},
  {topic:"architecture",q:"What is an Azure region?",options:["A group of people who use an app","A geographical area containing one or more data centres","A type of subscription password","A billing invoice"],answer:1,explanation:"An Azure region is a geographical area that contains one or more data centres connected through a dedicated, low-latency network."},
  {topic:"architecture",q:"What is an Azure availability zone designed to provide?",options:["A separate failure-isolated location within a region","A discount code","A way to rename a subscription","A replacement for identity management"],answer:0,explanation:"Availability zones are physically separate locations within an Azure region, designed to help protect applications and data from certain data-centre-level failures."},
  {topic:"architecture",q:"Which Azure service lets you run Windows or Linux virtual machines?",options:["Azure Policy","Azure Virtual Machines","Microsoft Purview","Azure Cost Management"],answer:1,explanation:"Azure Virtual Machines provides virtualised computing resources where you can run supported operating systems and applications."},
  {topic:"architecture",q:"Which Azure service is designed for object storage of unstructured data such as images and documents?",options:["Azure Blob Storage","Azure Advisor","Azure Policy","Azure DNS only"],answer:0,explanation:"Azure Blob Storage stores large amounts of unstructured data, such as images, video, documents and backup files."},
  {topic:"architecture",q:"What is the purpose of Microsoft Entra ID?",options:["Identity and access management","Photo editing","Physical server cooling","Creating SQL tables only"],answer:0,explanation:"Microsoft Entra ID provides identity and access management capabilities, helping users sign in and access resources according to configured permissions."},
  {topic:"architecture",q:"What is an Azure subscription mainly used for?",options:["Organising resources and billing boundaries","Replacing the internet","Guaranteeing every app is free","Storing only photographs"],answer:0,explanation:"An Azure subscription is a logical unit used to provision and manage resources, and it is associated with billing and access controls."},
  {topic:"architecture",q:"Which service can help distribute incoming web traffic across backend resources?",options:["Azure Load Balancer","Azure Policy","Microsoft Purview","Azure Advisor"],answer:0,explanation:"Azure Load Balancer distributes network traffic across backend resources to help improve availability and scale for supported workloads."},
  {topic:"architecture",q:"What is an Azure resource group?",options:["A logical container for related Azure resources","A physical keyboard","A type of internet cable","A personal Microsoft email inbox"],answer:0,explanation:"A resource group is a logical container for Azure resources that you manage together, such as the parts of a web application."},
  {topic:"management",q:"What is Azure Policy used for?",options:["Creating and enforcing rules for resources","Writing social media posts","Replacing multi-factor authentication","Designing computer hardware"],answer:0,explanation:"Azure Policy helps assess and enforce organisational standards for resources, such as allowed locations or required tags."},
  {topic:"management",q:"Which tool helps estimate and review Azure spending?",options:["Azure Cost Management","Azure Virtual Network only","Microsoft Paint","Azure DNS"],answer:0,explanation:"Azure Cost Management provides tools to monitor, analyse and help manage cloud costs and budgets."},
  {topic:"management",q:"What is the purpose of resource tags in Azure?",options:["Adding metadata to organise and report on resources","Encrypting every file automatically","Increasing internet speed","Replacing resource groups"],answer:0,explanation:"Tags are name-value pairs that help categorise resources, for example by department, project or environment, and can support cost reporting."},
  {topic:"management",q:"Which Azure tool provides personalised recommendations for reliability, security, performance and cost?",options:["Azure Advisor","Azure Blob Storage","Azure Virtual Machines","Microsoft Entra ID"],answer:0,explanation:"Azure Advisor analyses resource configuration and usage to offer recommendations in areas such as cost, security, reliability and performance."},
  {topic:"management",q:"What is the purpose of multi-factor authentication (MFA)?",options:["Adding another verification step during sign-in","Making all resources public","Removing the need for identity checks","Backing up a database"],answer:0,explanation:"MFA requires more than one form of verification, making it harder for someone to access an account with only a stolen password."},
  {topic:"management",q:"What is the Azure Service Level Agreement (SLA) for a service?",options:["A document describing Microsoft's service availability or connectivity commitments and terms","A list of employee holidays","A cloud storage folder","A guarantee that an application has no bugs"],answer:0,explanation:"An SLA describes service-specific commitments and the terms that apply, often including availability targets and conditions. It does not mean an application can never fail."},
  {topic:"management",q:"What is the purpose of role-based access control (RBAC)?",options:["Assigning permissions based on roles","Automatically lowering every bill","Moving data to another region","Replacing all backups"],answer:0,explanation:"Azure role-based access control helps manage who can access Azure resources and what actions they can perform, following the principle of granting appropriate permissions."}
];

const FLASHCARDS = [
  {topic:"Cloud concepts",front:"What is cloud computing?",back:"Delivering computing services over a network, usually the internet."},
  {topic:"Cloud concepts",front:"What is scalability?",back:"Adjusting resources to handle changing workload demands."},
  {topic:"Cloud concepts",front:"What is elasticity?",back:"Automatically or quickly adding and removing resources as demand changes."},
  {topic:"Cloud concepts",front:"What is high availability?",back:"Designing a service to remain accessible with minimal interruption."},
  {topic:"Cloud concepts",front:"What does IaaS mean?",back:"Infrastructure as a Service: rent infrastructure such as virtual machines."},
  {topic:"Cloud concepts",front:"What does PaaS mean?",back:"Platform as a Service: a managed platform for building and running applications."},
  {topic:"Cloud concepts",front:"What does SaaS mean?",back:"Software as a Service: use a provider-managed application over a network."},
  {topic:"Azure architecture",front:"What is an Azure region?",back:"A geographical area containing one or more Azure data centres."},
  {topic:"Azure architecture",front:"What is an availability zone?",back:"A separate, failure-isolated location within an Azure region."},
  {topic:"Azure architecture",front:"What is a resource group?",back:"A logical container for related Azure resources."},
  {topic:"Azure architecture",front:"What is Azure Blob Storage for?",back:"Storing unstructured data such as images, documents and backups."},
  {topic:"Azure architecture",front:"What does Microsoft Entra ID manage?",back:"Digital identities and access to applications and resources."},
  {topic:"Management & governance",front:"What does Azure Policy do?",back:"Helps enforce and assess rules for resources."},
  {topic:"Management & governance",front:"Why use resource tags?",back:"To label resources for organisation, reporting and cost analysis."},
  {topic:"Management & governance",front:"What does Azure Cost Management help with?",back:"Monitoring, analysing and managing cloud spending."},
  {topic:"Management & governance",front:"What is MFA?",back:"Multi-factor authentication: more than one verification step at sign-in."}
];

const BUDDY_GUIDE = [
  {keys:["cloud computing","cloud"],title:"Cloud computing",plain:"Cloud computing means using computing services over the internet instead of owning and managing every physical computer yourself.",example:"A local spaza shop could use an online stock system hosted in the cloud, instead of running its own server in the shop.",remember:"Cloud = computing resources you can access when you need them."},
  {keys:["iaas","paas","saas","service model"],title:"IaaS, PaaS and SaaS",plain:"IaaS gives you virtual infrastructure; PaaS gives you a managed platform to build and run an app; SaaS gives you a ready-to-use application.",example:"Think of housing: IaaS is like renting an empty space you furnish; PaaS is like renting a furnished workspace; SaaS is like using a complete service.",remember:"IaaS = infrastructure, PaaS = platform, SaaS = software."},
  {keys:["virtual machine","vm"],title:"Virtual machines",plain:"A virtual machine is a software-based computer that runs an operating system and applications on shared physical hardware.",example:"A school could run a virtual machine for its website without buying a separate physical computer just for that website.",remember:"A VM behaves like a computer, but it is virtual."},
  {keys:["high availability","availability"],title:"High availability",plain:"High availability is about keeping a service accessible with as little interruption as practical. Redundancy helps reduce single points of failure.",example:"A school portal designed with resilient components is less likely to become unavailable if one component fails.",remember:"High availability = keep the service available."},
  {keys:["shared responsibility","responsibility model"],title:"Shared responsibility model",plain:"The cloud provider and customer each have security responsibilities. The exact split depends on the service being used.",example:"A cloud provider secures its physical data centre, while a customer still needs to protect accounts and configure access correctly.",remember:"Cloud security is shared, but the division changes by service."},
  {keys:["region","geography"],title:"Azure regions",plain:"An Azure region is a geographical area containing one or more data centres. Region choice can affect latency, availability and data-location requirements.",example:"A South African organisation might evaluate nearby Azure regions for latency and applicable data requirements.",remember:"Region = geographical area."},
  {keys:["availability zone","zone"],title:"Availability zones",plain:"Availability zones are physically separate locations within an Azure region. They help protect supported workloads against certain local failures.",example:"A business can design supported services across zones so one zone's issue does not necessarily take down the whole solution.",remember:"Zone = separate location inside a region."},
  {keys:["blob","storage","unstructured"],title:"Azure storage",plain:"Azure Blob Storage is designed for large amounts of unstructured data such as images, documents, audio and backups.",example:"A community organisation could store event photos and PDF documents in object storage.",remember:"Blob storage = unstructured objects."},
  {keys:["entra","identity","mfa","multi-factor"],title:"Identity and access",plain:"Microsoft Entra ID supports identity and access management. Multi-factor authentication adds another verification step to sign-in.",example:"A learner signs in with a password and confirms a second verification request to help protect the account.",remember:"Identity confirms who you are; access controls what you can do."},
  {keys:["policy","governance","tag"],title:"Governance and policy",plain:"Azure Policy helps assess and enforce rules. Tags add labels to resources, such as project, department or environment.",example:"A training company could tag resources by project and use policy to restrict deployments to approved locations.",remember:"Policy = rules; tags = labels."},
  {keys:["cost","pricing","budget"],title:"Cloud costs",plain:"Cloud spending depends on the services, configurations and usage. Cost management tools help monitor spending, budgets and trends.",example:"A small business can review which test resources are running and shut down what it no longer needs.",remember:"Monitor usage, set budgets and review recommendations."},
  {keys:["scalability","elasticity"],title:"Scalability and elasticity",plain:"Scalability is the ability to adjust capacity. Elasticity is the ability to respond to changing demand by adding or removing resources.",example:"An online ticket site may need more capacity when bookings open, then less when demand falls.",remember:"Both help match resources to workload demand."}
];

const STORAGE_KEY = "cloudreadyAfricaV1";
const defaultState = {attempts:[],cardsKnown:[],cardsMissed:[],cardsReviewed:0,planner:null};
let state = loadState();
let currentQuiz = [];
let quizIndex = 0;
let quizAnswers = [];
let currentCard = 0;
let cardFlipped = false;
let toastTimer;

function loadState(){
  try { return {...defaultState,...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}")}; }
  catch { return {...defaultState}; }
}
function saveState(){
  try { localStorage.setItem(STORAGE_KEY,JSON.stringify(state)); }
  catch { showToast("Could not save data in this browser."); }
}
function showToast(message){
  const toast=document.getElementById("toast");
  toast.textContent=message;toast.classList.add("show");
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),2600);
}
function escapeHTML(value){return String(value).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));}
function goTo(view){
  document.querySelectorAll(".view").forEach(el=>el.classList.toggle("active",el.id===`view-${view}`));
  document.querySelectorAll(".nav-link").forEach(el=>el.classList.toggle("active",el.dataset.view===view));
  const titles={dashboard:"Welcome back, learner ✦",quiz:"Smart Quiz",flashcards:"Flashcards",planner:"Personal Study Planner",buddy:"AI Study Buddy",readiness:"Readiness Tracker"};
  document.getElementById("page-title").textContent=titles[view]||"CloudReady Africa";
  if(view==="dashboard")renderDashboard();
  if(view==="readiness")renderReadiness();
  if(view==="flashcards")renderFlashcard();
  window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll("[data-view]").forEach(button=>button.addEventListener("click",()=>goTo(button.dataset.view)));
document.querySelectorAll("[data-go]").forEach(button=>button.addEventListener("click",()=>goTo(button.dataset.go)));

function allScores(){return state.attempts.flatMap(a=>a.details||[]);}
function averageScore(){
  const total=allScores();
  return total.length ? Math.round(total.filter(x=>x.correct).length/total.length*100) : null;
}
function renderDashboard(){
  const avg=averageScore();
  document.getElementById("stat-quizzes").textContent=state.attempts.length;
  document.getElementById("stat-average").textContent=avg===null?"—":`${avg}%`;
  document.getElementById("stat-cards").textContent=state.cardsReviewed;
  document.getElementById("stat-readiness").textContent=avg===null?"Starting":avg>=80?"Building well":avg>=60?"Keep going":"Keep practising";
  document.getElementById("stat-readiness-note").textContent=avg===null?"Take a quiz to begin":avg>=80?"Review all topics regularly":"Focus on weaker topics";
}
function setupQuiz(){
  const topic=document.getElementById("quiz-topic").value;
  const count=document.getElementById("quiz-count").value;
  let pool=topic==="all"?[...QUESTIONS]:QUESTIONS.filter(q=>q.topic===topic);
  pool=pool.sort(()=>Math.random()-.5);
  currentQuiz=count==="all"?pool:pool.slice(0,Number(count));
  quizIndex=0;quizAnswers=[];
  document.getElementById("quiz-setup").classList.add("hidden");
  document.getElementById("quiz-results").classList.add("hidden");
  document.getElementById("quiz-play").classList.remove("hidden");
  renderQuestion();
}
function renderQuestion(){
  const q=currentQuiz[quizIndex];
  document.getElementById("quiz-topic-pill").textContent=TOPICS[q.topic];
  document.getElementById("quiz-progress-label").textContent=`Question ${quizIndex+1} of ${currentQuiz.length}`;
  document.getElementById("quiz-progress-bar").style.width=`${quizIndex/currentQuiz.length*100}%`;
  document.getElementById("question-text").textContent=q.q;
  const options=document.getElementById("answer-options");
  options.innerHTML="";
  q.options.forEach((option,index)=>{
    const btn=document.createElement("button");
    btn.className="answer-option";
    btn.innerHTML=`<span class="option-letter">${String.fromCharCode(65+index)}</span><span>${escapeHTML(option)}</span>`;
    btn.addEventListener("click",()=>selectAnswer(index));
    options.appendChild(btn);
  });
  const feedback=document.getElementById("answer-feedback");
  feedback.className="feedback hidden";feedback.innerHTML="";
  document.getElementById("next-question").classList.add("hidden");
}
function selectAnswer(selected){
  const q=currentQuiz[quizIndex];
  if(quizAnswers[quizIndex])return;
  const correct=selected===q.answer;
  quizAnswers[quizIndex]={topic:q.topic,correct,question:q.q,selected,answer:q.options[q.answer]};
  document.querySelectorAll(".answer-option").forEach((button,index)=>{
    button.disabled=true;
    if(index===q.answer)button.classList.add("correct");
    else if(index===selected)button.classList.add("incorrect");
  });
  const feedback=document.getElementById("answer-feedback");
  feedback.className=`feedback ${correct?"good":"bad"}`;
  feedback.innerHTML=`<strong>${correct?"✓ Correct!":"Not quite — let's learn from it."}</strong><span>${escapeHTML(q.explanation)}</span>`;
  document.getElementById("quiz-progress-bar").style.width=`${(quizIndex+1)/currentQuiz.length*100}%`;
  const next=document.getElementById("next-question");
  next.textContent=quizIndex===currentQuiz.length-1?"See my results →":"Next question →";
  next.classList.remove("hidden");
}
function finishQuiz(){
  const correct=quizAnswers.filter(a=>a.correct).length;
  const score=Math.round(correct/currentQuiz.length*100);
  state.attempts.unshift({date:new Date().toISOString(),score,total:currentQuiz.length,correct,details:quizAnswers});
  state.attempts=state.attempts.slice(0,50);saveState();
  document.getElementById("quiz-play").classList.add("hidden");
  const results=document.getElementById("quiz-results");
  const weak=[...new Set(quizAnswers.filter(a=>!a.correct).map(a=>TOPICS[a.topic]))];
  results.innerHTML=`<span class="pill">QUIZ COMPLETE</span><div class="result-summary"><div class="result-score">${score}%</div><div><h3>${score>=80?"Great work! Keep it up.":score>=60?"Good effort — keep building.":"Every mistake is a chance to learn."}</h3><p>You answered ${correct} out of ${currentQuiz.length} questions correctly.</p></div></div><h3>What to do next</h3><p class="muted">${weak.length?`Spend extra time revising: ${weak.map(escapeHTML).join(", ")}.`:"You got every question correct in this attempt. Try another topic to keep practising."}</p><button class="btn btn-primary" id="quiz-again">Try another quiz →</button> <button class="btn btn-secondary" id="quiz-progress">View readiness</button>`;
  results.classList.remove("hidden");
  document.getElementById("quiz-again").addEventListener("click",()=>{results.classList.add("hidden");document.getElementById("quiz-setup").classList.remove("hidden");});
  document.getElementById("quiz-progress").addEventListener("click",()=>goTo("readiness"));
  renderDashboard();
}
document.getElementById("start-quiz").addEventListener("click",setupQuiz);
document.getElementById("next-question").addEventListener("click",()=>{if(quizIndex<currentQuiz.length-1){quizIndex++;renderQuestion();}else finishQuiz();});

function renderFlashcard(){
  const card=FLASHCARDS[currentCard];
  document.getElementById("flashcard-topic").textContent=card.topic.toUpperCase();
  document.getElementById("flashcard-count").textContent=`Card ${currentCard+1} of ${FLASHCARDS.length}`;
  document.getElementById("flash-label").textContent=cardFlipped?"ANSWER":"QUESTION";
  document.getElementById("flash-front").textContent=cardFlipped?card.back:card.front;
  document.getElementById("flash-hint").textContent=cardFlipped?"Click to see question ↗":"Click to reveal answer ↗";
  document.getElementById("flashcard").classList.toggle("flipped",cardFlipped);
  document.getElementById("flash-status").textContent=`Reviewed ${state.cardsReviewed} cards · ${state.cardsKnown.length} marked as known · ${state.cardsMissed.length} to revisit`;
}
function moveCard(delta){currentCard=(currentCard+delta+FLASHCARDS.length)%FLASHCARDS.length;cardFlipped=false;renderFlashcard();}
document.getElementById("flashcard").addEventListener("click",()=>{cardFlipped=!cardFlipped;renderFlashcard();});
document.getElementById("flash-prev").addEventListener("click",()=>moveCard(-1));
document.getElementById("flash-next").addEventListener("click",()=>moveCard(1));
document.getElementById("flash-known").addEventListener("click",()=>{
  const front=FLASHCARDS[currentCard].front;
  state.cardsKnown=[...new Set([...state.cardsKnown,front])];state.cardsMissed=state.cardsMissed.filter(x=>x!==front);state.cardsReviewed++;saveState();showToast("Marked as known. Nice work!");moveCard(1);renderDashboard();
});
document.getElementById("flash-missed").addEventListener("click",()=>{
  const front=FLASHCARDS[currentCard].front;
  state.cardsMissed=[...new Set([...state.cardsMissed,front])];state.cardsKnown=state.cardsKnown.filter(x=>x!==front);state.cardsReviewed++;saveState();showToast("Added to your revision list.");moveCard(1);renderDashboard();
});

document.getElementById("exam-date").min=new Date().toISOString().slice(0,10);
document.getElementById("planner-form").addEventListener("submit",event=>{
  event.preventDefault();
  const date=document.getElementById("exam-date").value;
  const hours=Number(document.getElementById("study-hours").value);
  const topics=[...document.querySelectorAll('input[name="weak-topic"]:checked')].map(x=>x.value);
  if(!date||!hours||hours<.5||!topics.length){showToast("Choose an exam date, study hours and at least one topic.");return;}
  const today=new Date();today.setHours(0,0,0,0);
  const target=new Date(`${date}T00:00:00`);
  const days=Math.ceil((target-today)/86400000);
  if(days<1){showToast("Choose a future exam date so we can build your plan.");return;}
  state.planner={date,hours,topics,days};saveState();
  const names={cloud:"Cloud concepts",architecture:"Azure architecture and services",management:"Azure management and governance"};
  const output=document.getElementById("planner-output");
  const perDay=Math.max(1,Math.ceil(days/topics.length));
  let planHTML=`<h3>Your personalised revision plan</h3><p class="muted">A practical starting schedule based on your choices.</p><div class="plan-summary"><span class="plan-chip">📅 ${days} days available</span><span class="plan-chip">⏱ ${hours} hours/day</span><span class="plan-chip">🎯 ${topics.length} focus areas</span></div>`;
  const stages=[["Learn the basics","Read notes and explain key terms in your own words."],["Practise and review","Take topic quizzes and write down why each missed answer was wrong."],["Mix and recap","Mix questions from all selected topics and revisit difficult flashcards."]];
  topics.forEach((topic,index)=>{
    const stage=stages[index%stages.length];
    planHTML+=`<div class="plan-day"><strong>Days ${Math.floor(index*days/topics.length)+1}–${Math.max(Math.floor(index*days/topics.length)+1,Math.floor((index+1)*days/topics.length))}</strong><div><p><strong>${names[topic]}</strong> — ${stage[0]}</p><small>${stage[1]} Suggested time: ${hours} hour(s) per day.</small></div></div>`;
  });
  planHTML+=`<div class="bottom-note"><span>💡</span><p>Leave time before your exam for rest and a final review. This schedule is a guide; adjust it as your confidence changes.</p></div>`;
  output.innerHTML=planHTML;
});

function answerBuddy(raw){
  const question=raw.toLowerCase();
  let found=BUDDY_GUIDE.find(item=>item.keys.some(key=>question.includes(key)));
  if(!found && (question.includes("network")||question.includes("virtual network")||question.includes("vnet")))found={title:"Azure virtual networks",plain:"An Azure virtual network (VNet) lets Azure resources communicate with one another, the internet, and on-premises networks according to the network setup.",example:"A small company can place its web server and internal services on a virtual network and control how they communicate.",remember:"A VNet is a private network boundary for Azure resources."};
  if(!found && (question.includes("database")||question.includes("sql")))found={title:"Cloud databases",plain:"A cloud database stores and organises data while the cloud service provides some or much of the underlying infrastructure management, depending on the product.",example:"A community clinic might use a properly secured database-backed system to manage appointments.",remember:"Choose a database service based on data, workload, security and management needs."};
  if(!found && (question.includes("backup")||question.includes("disaster recovery")))found={title:"Backup and disaster recovery",plain:"Backups are copies used to recover data. Disaster recovery is the broader plan for restoring systems and services after a serious disruption.",example:"A school keeps recoverable copies of important documents and practises how to restore services after an outage.",remember:"Backup protects copies of data; disaster recovery restores services and operations."};
  if(!found)found={title:"Let's explore that concept",plain:"I don't have a prepared explanation for that exact wording yet. Try a core AZ-900 topic such as cloud computing, IaaS/PaaS/SaaS, Azure regions, virtual machines, storage, identity, governance or cost management.",example:"Think about what problem the service solves, who manages it, and how it could help a school or small business.",remember:"For accurate exam preparation, compare explanations with the public Microsoft Learn AZ-900 skills outline."};
  const answer=document.getElementById("buddy-answer");
  answer.innerHTML=`<span class="pill">STUDY BUDDY EXPLAINS</span><h3 class="answer-title">${escapeHTML(found.title)}</h3><p>${escapeHTML(found.plain)}</p><div class="example-box"><strong>🌍 REAL-LIFE EXAMPLE</strong><p>${escapeHTML(found.example)}</p></div><p><strong>Remember:</strong> ${escapeHTML(found.remember)}</p><p class="small-note">Prepared learning guide · Check the official Microsoft Learn outline for current exam objectives.</p>`;
}
document.getElementById("buddy-form").addEventListener("submit",event=>{event.preventDefault();const input=document.getElementById("buddy-input");if(input.value.trim())answerBuddy(input.value.trim());});
document.querySelectorAll("[data-question]").forEach(button=>button.addEventListener("click",()=>{document.getElementById("buddy-input").value=button.dataset.question;answerBuddy(button.dataset.question);}));

function renderReadiness(){
  const avg=averageScore();
  document.getElementById("readiness-score").textContent=avg===null?"—":`${avg}%`;
  document.getElementById("readiness-heading").textContent=avg===null?"Your journey is just beginning":avg>=80?"You're building strong practice habits":avg>=60?"You're making progress — keep practising":"Build your foundations one topic at a time";
  document.getElementById("readiness-description").textContent=avg===null?"Complete a quiz to start building your readiness picture.":avg>=80?"Your practice average is encouraging. Keep reviewing every topic and check the current skills outline.":"Use your topic results to guide revision. This score is a practice indicator, not an official pass prediction.";
  document.getElementById("readiness-circle").style.borderColor=avg===null?"#d8f4ee":avg>=80?"#a7ead7":avg>=60?"#f8dca8":"#f5c7c7";
  const details=allScores();
  document.getElementById("topic-progress").innerHTML=Object.entries(TOPICS).map(([key,name])=>{
    const rows=details.filter(d=>d.topic===key);
    const score=rows.length?Math.round(rows.filter(d=>d.correct).length/rows.length*100):null;
    return `<div class="topic-row"><div><strong>${escapeHTML(name)}</strong><span class="topic-sub">${rows.length} question(s) answered</span></div><div class="progress-track"><div class="progress-fill" style="width:${score===null?0:score}%"></div></div><div class="topic-score">${score===null?"—":score+"%"}</div></div>`;
  }).join("");
  const history=document.getElementById("attempt-history");
  if(!state.attempts.length){history.innerHTML='<div class="history-empty">No quiz attempts yet. Take a Smart Quiz to see your results here.</div>';return;}
  history.innerHTML=state.attempts.slice(0,10).map(item=>`<div class="history-item"><div><strong>Practice quiz</strong><small>${new Date(item.date).toLocaleString()} · ${item.correct}/${item.total} correct</small></div><span class="history-score">${item.score}%</span></div>`).join("");
}
document.getElementById("clear-progress").addEventListener("click",()=>{
  if(confirm("Reset all quiz history, flashcard review counts and saved study plan on this device? This cannot be undone.")){
    state={...defaultState};saveState();renderReadiness();renderDashboard();showToast("Your local progress has been reset.");
  }
});
renderDashboard();
renderFlashcard();
if(state.planner){
  document.getElementById("exam-date").value=state.planner.date;
  document.getElementById("study-hours").value=state.planner.hours;
  document.querySelectorAll('input[name="weak-topic"]').forEach(input=>input.checked=state.planner.topics.includes(input.value));
}
