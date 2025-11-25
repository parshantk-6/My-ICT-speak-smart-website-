
const STORAGE_KEY = 'english_lab_app_v2';
const LB_KEY = 'english_lab_leaderboard_v2';

function defaultState(){
  return {
    user: null,          
    points: 0,
    level: 1,
    exercisesCompleted: 0,
    attempts: 0,
    accuracySum: 0,
    badges: [],
    lastPractice: null,
    streak: 0
  };
}

function loadState(){
  try{
    const s = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Object.assign(defaultState(), s || {});
  }catch(e){ return defaultState(); }
}
function saveState(state){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}


let appState = loadState();


function addPoints(n){
  n = Number(n) || 0;
  appState.points += n;
  appState.exercisesCompleted++;
  
  const newLevel = Math.floor(appState.points / 100) + 1;
  if(newLevel > appState.level){
    appState.level = newLevel;
   
    try{ alert(`Level up! You are now Level ${newLevel} 🎉`); }catch(e){}
  }
  saveState(appState);
  updateLocalUI();
}
function recordAttempt(correct){
  appState.attempts++;
  if(correct) appState.accuracySum++;
  appState.lastPractice = new Date().toISOString();
  saveState(appState);
  updateLocalUI();
}
function awardBadge(b){
  if(!appState.badges.includes(b)){
    appState.badges.push(b);
    addPoints(10);
    saveState(appState);
    // small floating badge
    const el = document.createElement('div');
    el.textContent = `🏅 ${b}`; el.className='badge pulse';
    el.style.position='fixed'; el.style.right='18px'; el.style.bottom='120px'; el.style.zIndex=9999;
    document.body.appendChild(el);
    setTimeout(()=> el.remove(), 2600);
  }
}


function login(username){
  if(!username || username.trim().length < 1) return false;
  appState.user = { username: username.trim(), createdAt: new Date().toISOString() };
  saveState(appState);
  addToLeaderboard(appState.user.username, appState.points);
  return true;
}
function logout(){
  appState.user = null;
  saveState(appState);
}


function getLeaderboard(){
  try{
    return JSON.parse(localStorage.getItem(LB_KEY)) || [];
  }catch(e){return [];}
}
function saveLeaderboard(lb){ localStorage.setItem(LB_KEY, JSON.stringify(lb)); }
function addToLeaderboard(username, points){
  const lb = getLeaderboard();
  const now = new Date().toISOString();
  const found = lb.find(x=> x.username === username);
  if(found){
    found.points = Math.max(found.points, points);
    found.updatedAt = now;
  } else {
    lb.push({ username, points, createdAt: now, updatedAt: now });
  }
  
  lb.sort((a,b)=> b.points - a.points);
  saveLeaderboard(lb.slice(0,50));
}


function isDark(){
  return document.documentElement.classList.contains('dark');
}
function toggleDark(){
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('english_lab_dark', isDark() ? '1' : '0');
}
function initDark(){
  const d = localStorage.getItem('english_lab_dark');
  if(d === '1'){ document.documentElement.classList.add('dark'); }
}


function updateLocalUI(){
  try{
    const pts = document.getElementById('ptsDisplay');
    if(pts) pts.textContent = `${appState.points} pts`;
    const level = document.getElementById('levelDisplay');
    if(level) level.textContent = `Level ${appState.level}`;
    const badges = document.getElementById('badgeDisplay');
    if(badges) badges.textContent = appState.badges.length ? appState.badges.join(', ') : 'None yet';
    const fill = document.getElementById('progressFill');
    if(fill) fill.style.width = Math.min(100, (appState.points % 100)) + '%';
  }catch(e){}
}


document.addEventListener('click', (e)=>{
  const a = e.target.closest('[data-nav]');
  if(a){
    const dest = a.getAttribute('data-nav');
    if(dest) window.location.href = dest;
  }
});


initDark();
updateLocalUI();

