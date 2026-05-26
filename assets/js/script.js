/* ============================================================
   PORTFOLIO — Roger Solorzano Canales · Data Analyst
   Script : traductions FR/EN, animations, formulaire
   ------------------------------------------------------------
   POUR MODIFIER LE TEXTE : change les valeurs dans l'objet i18n.
   Chaque clé existe en "fr" et en "en".
   ============================================================ */

const i18n = {
  fr:{
    role:"Data Analyst",
    sidebar_tag:"Analyse, visualisation et valorisation de la donnée.",
    nav_about:"À propos", nav_skills:"Compétences", nav_work:"Réalisations", nav_contact:"Contact",
    hero_1:"La donnée,", hero_2:"racontée clairement.",
    about_title:"Transformer les données en décisions",
    about_lead:"Data Analyst en formation (Titre RNCP 37837, OpenClassrooms). Je conçois des analyses, des tableaux de bord et des visualisations qui rendent l'information lisible et actionnable. Mon parcours allie rigueur analytique, sens de la communication et curiosité continue.",
    stat_1:"Livrables de projet", stat_2:"Langues maîtrisées", stat_3:"Outils data", stat_4:"An d'alternance data",
    skills_title:"Ce que je sais faire",
    skills_lead:"Trois familles de compétences au service de l'analyse de données : le savoir-faire technique, les qualités humaines et la maîtrise des outils.",
    sk1_h:"Compétences techniques",
    sk1_1:"Analyse exploratoire des données", sk1_2:"Requêtes et modélisation SQL", sk1_3:"Data visualisation",
    sk1_4:"Maquettage de tableaux de bord", sk1_5:"Statistiques descriptives", sk1_6:"Nettoyage et préparation des données",
    sk2_h:"Soft skills",
    sk2_1:"Travail d'équipe et coordination", sk2_2:"Communication interpersonnelle", sk2_3:"Autonomie et autodidaxie",
    sk2_4:"Rigueur et sens du détail", sk2_5:"Empathie et écoute", sk2_6:"Curiosité intellectuelle continue",
    sk3_h:"Outils",
    sk3_1:"Power BI", sk3_2:"Tableau", sk3_3:"PostgreSQL", sk3_4:"JupyterLab / Python", sk3_5:"Dataiku & KNIME", sk3_6:"Excel & Salesforce",
    work_title:"Les 7 livrables du projet",
    work_lead:"Chaque carte correspond à un livrable de la formation. Les titres, descriptions et images sont à compléter.",
    liv1_badge:"Livrable 1", liv1_title:"Titre du livrable", liv1_desc:"Courte description du livrable : contexte, objectif et résultat. À compléter.", liv1_tag:"À compléter",
    liv2_badge:"Livrable 2", liv2_title:"Titre du livrable", liv2_desc:"Courte description du livrable : contexte, objectif et résultat. À compléter.", liv2_tag:"À compléter",
    liv3_badge:"Livrable 3", liv3_title:"Titre du livrable", liv3_desc:"Courte description du livrable : contexte, objectif et résultat. À compléter.", liv3_tag:"À compléter",
    liv4_badge:"Livrable 4", liv4_title:"Titre du livrable", liv4_desc:"Courte description du livrable : contexte, objectif et résultat. À compléter.", liv4_tag:"À compléter",
    liv5_badge:"Livrable 5", liv5_title:"Titre du livrable", liv5_desc:"Courte description du livrable : contexte, objectif et résultat. À compléter.", liv5_tag:"À compléter",
    liv6_badge:"Livrable 6", liv6_title:"Titre du livrable", liv6_desc:"Courte description du livrable : contexte, objectif et résultat. À compléter.", liv6_tag:"À compléter",
    liv7_badge:"Livrable 7", liv7_title:"Titre du livrable", liv7_desc:"Courte description du livrable : contexte, objectif et résultat. À compléter.", liv7_tag:"À compléter",
    liv_btn:"Voir sur GitHub",
    contact_title:"Travaillons ensemble",
    contact_lead:"Une question, une opportunité, un échange autour de la donnée ? N'hésitez pas à me contacter.",
    ci_phone:"Téléphone", ci_loc:"Localisation",
    ph_name:"Nom", ph_email:"Email", ph_subj:"Sujet", ph_msg:"Message", btn_send:"Envoyer le message",
    footer_l:"© 2026 Roger Solorzano Canales — Tous droits réservés.",
    footer_r:"Design : template Read Only (HTML5 UP), adapté."
  },
  en:{
    role:"Data Analyst",
    sidebar_tag:"Analysing, visualising and adding value to data.",
    nav_about:"About", nav_skills:"Skills", nav_work:"Projects", nav_contact:"Contact",
    hero_1:"Data,", hero_2:"told clearly.",
    about_title:"Turning data into decisions",
    about_lead:"Data Analyst in training (RNCP Title 37837, OpenClassrooms). I build analyses, dashboards and visualisations that make information readable and actionable. My background combines analytical rigour, communication skills and continuous curiosity.",
    stat_1:"Project deliverables", stat_2:"Languages spoken", stat_3:"Data tools", stat_4:"Year of data apprenticeship",
    skills_title:"What I can do",
    skills_lead:"Three families of skills serving data analysis: technical know-how, human qualities and tool mastery.",
    sk1_h:"Technical skills",
    sk1_1:"Exploratory data analysis", sk1_2:"SQL querying and modelling", sk1_3:"Data visualisation",
    sk1_4:"Dashboard prototyping", sk1_5:"Descriptive statistics", sk1_6:"Data cleaning and preparation",
    sk2_h:"Soft skills",
    sk2_1:"Teamwork and coordination", sk2_2:"Interpersonal communication", sk2_3:"Autonomy and self-learning",
    sk2_4:"Rigour and attention to detail", sk2_5:"Empathy and active listening", sk2_6:"Continuous intellectual curiosity",
    sk3_h:"Tools",
    sk3_1:"Power BI", sk3_2:"Tableau", sk3_3:"PostgreSQL", sk3_4:"JupyterLab / Python", sk3_5:"Dataiku & KNIME", sk3_6:"Excel & Salesforce",
    work_title:"The 7 project deliverables",
    work_lead:"Each card matches one deliverable of the training. Titles, descriptions and images are placeholders to be completed.",
    liv1_badge:"Deliverable 1", liv1_title:"Deliverable title", liv1_desc:"Short description: context, goal and outcome. To be completed.", liv1_tag:"To complete",
    liv2_badge:"Deliverable 2", liv2_title:"Deliverable title", liv2_desc:"Short description: context, goal and outcome. To be completed.", liv2_tag:"To complete",
    liv3_badge:"Deliverable 3", liv3_title:"Deliverable title", liv3_desc:"Short description: context, goal and outcome. To be completed.", liv3_tag:"To complete",
    liv4_badge:"Deliverable 4", liv4_title:"Deliverable title", liv4_desc:"Short description: context, goal and outcome. To be completed.", liv4_tag:"To complete",
    liv5_badge:"Deliverable 5", liv5_title:"Deliverable title", liv5_desc:"Short description: context, goal and outcome. To be completed.", liv5_tag:"To complete",
    liv6_badge:"Deliverable 6", liv6_title:"Deliverable title", liv6_desc:"Short description: context, goal and outcome. To be completed.", liv6_tag:"To complete",
    liv7_badge:"Deliverable 7", liv7_title:"Deliverable title", liv7_desc:"Short description: context, goal and outcome. To be completed.", liv7_tag:"To complete",
    liv_btn:"View on GitHub",
    contact_title:"Let's work together",
    contact_lead:"A question, an opportunity, a conversation about data? Feel free to get in touch.",
    ci_phone:"Phone", ci_loc:"Location",
    ph_name:"Name", ph_email:"Email", ph_subj:"Subject", ph_msg:"Message", btn_send:"Send message",
    footer_l:"© 2026 Roger Solorzano Canales — All rights reserved.",
    footer_r:"Design: Read Only template (HTML5 UP), adapted."
  }
};

function setLang(lang){
  const dict = i18n[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k = el.getAttribute('data-i18n');
    if(dict[k]!==undefined) el.textContent = dict[k];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    const k = el.getAttribute('data-i18n-ph');
    if(dict[k]!==undefined) el.placeholder = dict[k];
  });
  document.getElementById('btn-fr').classList.toggle('on',lang==='fr');
  document.getElementById('btn-en').classList.toggle('on',lang==='en');
}

/* ---------- formulaire mailto ---------- */
function sendMail(){
  const n=document.getElementById('f-name').value;
  const e=document.getElementById('f-email').value;
  const s=document.getElementById('f-subj').value||'Contact portfolio';
  const m=document.getElementById('f-msg').value;
  const body=encodeURIComponent((m||'')+'\n\n— '+(n||'')+' ('+(e||'')+')');
  window.location.href='mailto:solorzano.roger@gmail.com?subject='
    +encodeURIComponent(s)+'&body='+body;
}

/* ---------- scroll progress ---------- */
window.addEventListener('scroll',()=>{
  const h=document.documentElement;
  const p=h.scrollTop/(h.scrollHeight-h.clientHeight)*100;
  document.getElementById('progress').style.width=p+'%';
});

/* ---------- reveal au scroll ---------- */
const io=new IntersectionObserver(es=>{
  es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
},{threshold:.15});
document.querySelectorAll('.reveal,.stagger').forEach(el=>io.observe(el));

/* ---------- compteurs animés ---------- */
const cio=new IntersectionObserver(es=>{
  es.forEach(e=>{
    if(!e.isIntersecting) return;
    const el=e.target, end=+el.dataset.count, suf=el.dataset.suffix||'';
    let cur=0; const step=Math.max(1,Math.ceil(end/28));
    const t=setInterval(()=>{
      cur+=step; if(cur>=end){cur=end;clearInterval(t);}
      el.textContent=cur+suf;
    },28);
    cio.unobserve(el);
  });
},{threshold:.6});
document.querySelectorAll('[data-count]').forEach(el=>cio.observe(el));

/* ---------- nav active au scroll ---------- */
const links=[...document.querySelectorAll('#nav a')];
const secs=links.map(a=>document.querySelector(a.getAttribute('href')));
const nio=new IntersectionObserver(es=>{
  es.forEach(e=>{
    if(e.isIntersecting){
      links.forEach(l=>l.classList.remove('active'));
      const i=secs.indexOf(e.target);
      if(i>-1) links[i].classList.add('active');
    }
  });
},{rootMargin:'-45% 0px -50% 0px'});
secs.forEach(s=>s&&nio.observe(s));

/* fermer le menu mobile après clic */
links.forEach(l=>l.addEventListener('click',()=>document.getElementById('nav').classList.remove('open')));

/* burger menu */
document.getElementById('burger').addEventListener('click',()=>{
  document.getElementById('nav').classList.toggle('open');
});
