


document.getElementById('passage').textContent = "Reading improves vocabulary, grammar, and comprehension. Practice with short passages and review new words using flashcards.";


const flashcards = [
  {front:'abandon', back:'to leave behind or give up'},
  {front:'ability', back:'power or skill to do something'},
  {front:'absorb', back:'take in or soak up'},
  {front:'abundant', back:'plentiful; more than enough'},
  {front:'accurate', back:'correct and exact'},
  {front:'achieve', back:'to accomplish a goal'},
  {front:'adapt', back:'to adjust to new conditions'},
  {front:'adequate', back:'satisfactory or sufficient'},
  {front:'admire', back:'to respect or regard highly'},
  {front:'admit', back:'to agree someone is true'},
  {front:'advance', back:'to move forward or improve'},
  {front:'advice', back:'suggestion about what to do'},
  {front:'affect', back:'to influence something'},
  {front:'afford', back:'to have enough money or time for'},
  {front:'agency', back:'a business or organization'},
  {front:'agenda', back:'a list of things to discuss'},
  {front:'allege', back:'to claim without proof'},
  {front:'allow', back:'to permit or let happen'},
  {front:'alter', back:'to change something'},
  {front:'amaze', back:'to surprise greatly'},
  {front:'ancient', back:'very old; from long ago'},
  {front:'annual', back:'happening once a year'},
  {front:'anxious', back:'worried or nervous'},
  {front:'apparent', back:'clearly seen or obvious'},
  {front:'appeal', back:'to attract or request'},
  {front:'apply', back:'to put into practice or request'},
  {front:'appoint', back:'to choose someone for a job'},
  {front:'approach', back:'to come near'},
  {front:'appropriate', back:'suitable or proper'},
  {front:'approximate', back:'almost correct; near'},
  {front:'argue', back:'to discuss with differing opinions'},
  {front:'arrange', back:'to organize or set up'},
  {front:'arrival', back:'the act of coming to a place'},
  {front:'article', back:'a piece of writing in a magazine/newspaper'},
  {front:'assist', back:'to help someone'},
  {front:'assume', back:'to suppose something is true'},
  {front:'attach', back:'to join or fasten things together'},
  {front:'attempt', back:'to try to do something'},
  {front:'attend', back:'to be present at an event'},
  {front:'attract', back:'to draw interest or attention'},
  {front:'author', back:'a writer of a book or article'},
  {front:'average', back:'typical or normal amount'},
  {front:'avoid', back:'to stay away from something'},
  {front:'aware', back:'having knowledge of something'},
  {front:'balance', back:'a state of stability'},
  {front:'barrier', back:'an obstacle or difficulty'},
  {front:'basic', back:'simple or fundamental'},
  {front:'benefit', back:'an advantage or positive effect'},
  {front:'blend', back:'to mix together smoothly'},
  {front:'bother', back:'to annoy or disturb'},
  {front:'calculate', back:'to find a number using math'},
  {front:'capable', back:'able to do something'},
  {front:'career', back:'a job or profession'},
  {front:'carry', back:'to hold and move something'},
  {front:'catch', back:'to capture or reach something'},
  {front:'celebrate', back:'to do something special for an event'},
  {front:'challenge', back:'a difficult task or test'},
  {front:'change', back:'to make different'},
  {front:'charge', back:'to ask for payment or rush forward'},
  {front:'chart', back:'a visual display of information'},
  {front:'choose', back:'to pick one option'},
  {front:'cite', back:'to mention a source or example'},
  {front:'clarify', back:'to make something clear'},
  {front:'classic', back:'an excellent, enduring example'},
  {front:'climate', back:'the usual weather in a place'},
  {front:'collect', back:'to gather things together'},
  {front:'combine', back:'to join two or more things'},
  {front:'comfort', back:'a state of ease and calm'},
  {front:'command', back:'to give an order or control'},
  {front:'comment', back:'a spoken or written remark'},
  {front:'commit', back:'to promise or dedicate to'},
  {front:'common', back:'happening often; shared'},
  {front:'compare', back:'to examine similarities and differences'},
  {front:'compete', back:'to try to win against others'},
  {front:'complex', back:'made of many parts; not simple'},
  {front:'compose', back:'to create by combining parts'},
  {front:'concern', back:'worry or interest about something'},
  {front:'conclude', back:'to finish or decide after thinking'},
  {front:'confirm', back:'to make certain or verify'},
  {front:'connect', back:'to join or link together'},
  {front:'consider', back:'to think carefully about'},
  {front:'constant', back:'continuous or unchanging'},
  {front:'construct', back:'to build or put together'},
  {front:'contact', back:'to communicate with someone'}
];


let idx = 0;
const flashcardEl = document.getElementById('flashcard');
const inner = document.getElementById('flashInner');
const front = document.getElementById('frontSide');
const back = document.getElementById('backSide');

function showCard(i){
  const c = flashcards[i];
  front.textContent = c.front;
  back.textContent = c.back;
  flashcardEl.classList.remove('flipped');
}
showCard(0);

flashcardEl.onclick = ()=>{
  flashcardEl.classList.toggle('flipped');
};

document.getElementById('nextCard').onclick = ()=>{
  idx = (idx + 1) % flashcards.length;
  showCard(idx);
  addPoints(2);
};
document.getElementById('prevCard').onclick = ()=>{
  idx = (idx - 1 + flashcards.length) % flashcards.length;
  showCard(idx);
};


document.getElementById('knownBtn').onclick = ()=>{
  addPoints(8);
  awardBadge('Word Master');

};

