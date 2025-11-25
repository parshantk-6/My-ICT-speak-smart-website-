
const listeningExercises = [
  {
    id: 'L1',
    audio: 'https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3',
    question: 'What is the main topic of the audio?',
    choices: ['A bird call','A dinosaur roar','A musical instrument'],
    answer: 1
  },
 
];


let currentL = 0;
function renderListening(i=0){
  const ex = listeningExercises[i];
  if(!ex){ document.getElementById('audioArea').innerHTML = '<div class="small">No listening exercises found. Add them in listening.js</div>'; return; }
  document.getElementById('audioArea').innerHTML = `<audio id="player" controls src="${ex.audio}"></audio>`;
  document.getElementById('listQuestion').textContent = ex.question;
  const ch = document.getElementById('listChoices'); ch.innerHTML = '';
  ex.choices.forEach((c,idx)=>{
    const b = document.createElement('button'); b.className='btn'; b.style.display='block'; b.style.margin='8px 0';
    b.textContent = c; b.onclick = ()=> {
      const correct = idx === ex.answer;
      if(correct){ addPoints(12); awardBadge('Listening Ace'); recordAttempt(true); alert('Correct! +12 pts'); }
      else { addPoints(2); recordAttempt(false); alert('Not quite — try next. +2 pts'); }
      // move next or finish
      if(i+1 < listeningExercises.length) renderListening(i+1);
      else alert('End of listening set');
    };
    ch.appendChild(b);
  });
}

renderListening(currentL);
