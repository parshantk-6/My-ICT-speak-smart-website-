

const phrases = [
  "Hello! How are you today?",
  "I would like a cup of coffee please.",
  "Could you tell me the way to the library?",
  "I am studying English to improve my career.",
  "What time does the train arrive?",
  "Do you have any recommendations for dinner?",
  "I enjoy reading books in my free time.",
  "Could you repeat that more slowly?",
  "Please write your name clearly.",
  "I prefer to travel by train than by car.",
  "What is the difference between these two words?",
  "I need help understanding this sentence.",
  "Can I have the menu, please?",
  "Where is the nearest restroom?",
  "I have an appointment at three o'clock.",
  "How long will it take to get there?",
  "Would you like to join us for lunch?",
  "My favorite subject at school is science.",
  "I am saving money to buy a new laptop.",
  "Could you explain this grammar rule?",
  "She enjoys playing the piano every evening.",
  "They went to the market to buy vegetables.",
  "Tomorrow I will start a new project.",
  "We organized a meeting for next Tuesday.",
  "He promised to send the email later today.",
  "I lost my keys and can't find them.",
  "This problem requires a careful solution.",
  "I practiced speaking English for thirty minutes.",
  "How do I improve my pronunciation quickly?",
  "Reading every day helps increase vocabulary.",
  "Can you correct my pronunciation mistakes?",
  "What are your hobbies and interests?",
  "I'm interested in learning about world history.",
  "The weather forecast predicts rain tomorrow.",
  "I prefer tea to coffee in the morning.",
  "Make a reservation for two at seven pm.",
  "She studies hard because she wants good grades.",
  "Please tell me more about your hometown.",
  "They decided to take a short vacation.",
  "I enjoy hiking in the mountains during summer.",
  "What do you like most about your job?",
  "The museum opens at nine in the morning.",
  "He explained the process clearly and simply.",
  "Can you suggest a short book for beginners?",
  "I will prepare a presentation for the meeting.",
  "She invited her friends to celebrate the birthday.",
  "I'm learning English to travel and make friends.",
  "Practice a little every day for steady progress."
];

let currentPhrase = '';
const phraseText = document.getElementById('phraseText');
const resultBox = document.getElementById('resultBox');
const historyList = document.getElementById('historyList');

function pickPhrase(){
  currentPhrase = phrases[Math.floor(Math.random()*phrases.length)];
  phraseText.textContent = `"${currentPhrase}"`;
}
pickPhrase();

document.getElementById('listenBtn').onclick = ()=>{
  speakPhrase(currentPhrase);
};
document.getElementById('newBtn').onclick = ()=> { pickPhrase(); resultBox.textContent=''; };

function speakPhrase(txt){
  if(!txt) return;
  if('speechSynthesis' in window){
    const utter = new SpeechSynthesisUtterance(txt);
    utter.lang = 'en-US';
    
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  } else alert('TTS not supported in this browser.');
}


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
let recognition;
if(SpeechRecognition){
  recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
} else {
  resultBox.textContent = 'SpeechRecognition not supported in this browser.';
}

let listening = false;
const micBtn = document.getElementById('micBtn');
micBtn.onclick = ()=>{
  if(!recognition){ alert('SpeechRecognition not available'); return; }
  if(!listening){
    recognition.start();
    listening = true;
    micBtn.textContent = '🎙️';
    micBtn.classList.add('primary');
  } else {
    recognition.stop();
    listening = false;
    micBtn.textContent = '🎤';
    micBtn.classList.remove('primary');
  }
};

if(recognition){
  recognition.onresult = (e)=>{
    const said = e.results[0][0].transcript;
    resultBox.innerHTML = `<div style="font-weight:700">${said}</div>`;
    evaluateSpeech(said);
    listening = false;
    micBtn.textContent = '🎤'; micBtn.classList.remove('primary');
  };
  recognition.onerror = (err)=> {
    resultBox.textContent = 'Error: '+ err.error;
    listening = false;
    micBtn.textContent = '🎤'; micBtn.classList.remove('primary');
  };
}


function evaluateSpeech(transcript){
  const tWords = currentPhrase.toLowerCase().replace(/[^\w\s]/g,'').split(/\s+/);
  const sWords = transcript.toLowerCase().replace(/[^\w\s]/g,'').split(/\s+/);
  let matched = 0;
  tWords.forEach(w=> { if(sWords.includes(w)) matched++; });
  const ratio = matched / tWords.length;
  const points = Math.round(ratio * 20); // up to 20 pts
  addPoints(points);
  recordAttempt(ratio > 0.5);
  if(ratio > 0.8) awardBadge('Clear Speaker');
 
  let hist = JSON.parse(localStorage.getItem('el_history') || "[]");
  hist.unshift({ phrase: currentPhrase, said: transcript, score: Math.round(ratio*100), when: new Date().toISOString() });
  localStorage.setItem('el_history', JSON.stringify(hist.slice(0,30)));
  renderHistory();
}

function renderHistory(){
  const hist = JSON.parse(localStorage.getItem('el_history') || "[]");
  historyList.innerHTML = hist.length ? hist.map(h=> `<div style="margin-bottom:8px"><strong>${h.score}%</strong> — <span class="small">${h.phrase}</span><br><span class="small text-muted">${new Date(h.when).toLocaleString()}</span></div>`).join('') : '<div class="small">No attempts yet</div>';
}
renderHistory();

document.getElementById('giveUp').onclick = ()=>{
  addPoints(5);
  recordAttempt(false);
  alert('Skipped. +5 pts');
};

document.getElementById('savePhrase').onclick = ()=>{
  const saved = JSON.parse(localStorage.getItem('el_saved_phrases')||"[]");
  saved.push({ phrase: currentPhrase, savedAt: new Date().toISOString() });
  localStorage.setItem('el_saved_phrases', JSON.stringify(saved));
  alert('Saved for review');
};
