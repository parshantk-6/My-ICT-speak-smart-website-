
const prompts = [
  "Write 3 sentences describing your last holiday.",
  "Explain your favorite hobby in 4 sentences.",
  "Write a polite email asking for a day off.",
  "Describe your daily routine using present simple tense.",
  "Write about a memorable meal you had recently.",
  "Explain how to make your favorite sandwich.",
  "Describe a city you would like to visit and why.",
  "Write a short story of 5 sentences that includes a surprise.",
  "Describe a problem you solved and how you solved it.",
  "Write about someone you admire and why."

];



let currentPrompt = prompts[Math.floor(Math.random()*prompts.length)];
document.getElementById('promptArea').textContent = currentPrompt;

document.getElementById('newPrompt').onclick = ()=>{
  currentPrompt = prompts[Math.floor(Math.random()*prompts.length)];
  document.getElementById('promptArea').textContent = currentPrompt;
  document.getElementById('writeBox').value = '';
  document.getElementById('feedback').innerHTML = '';
};

document.getElementById('ttsBtn').onclick = ()=> {
  const t = currentPrompt;
  if('speechSynthesis' in window){ const u = new SpeechSynthesisUtterance(t); u.lang='en-US'; speechSynthesis.speak(u); }
};

document.getElementById('checkBtn').onclick = ()=>{
  const text = document.getElementById('writeBox').value.trim();
  if(!text) return alert('Please write something first.');
  
  let score = 0;
  const words = text.split(/\s+/).length;
  if(words >= 30) score += 40;
  if(/[A-Z][\s\S]*\./.test(text)) score += 20;
  const links = ['and','but','because','however','therefore','so','also'];
  links.forEach(l => { if(text.toLowerCase().includes(' '+l+' ')) score += 5; });

  const endsWithPunct = /[.!?]$/.test(text);
  if(endsWithPunct) score += 10;
  score = Math.min(100, score);
  const pts = Math.round(score/10)*4; // map to points
  addPoints(pts);
  if(score >= 80) awardBadge('Writer');
  recordAttempt(score >= 60);
  document.getElementById('feedback').innerHTML = `<div style="padding:12px;border-radius:10px;background:var(--glass-bg)"><strong>Score: ${score}% — +${pts} pts</strong><p class="small">Suggestions: Check grammar, add topic sentences, and use linking words like "because", "therefore".</p></div>`;
};
