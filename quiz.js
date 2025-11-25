
const questions = [
    {
        question: "Which sentence is correct?",
        options: ["She don't like tea.", "She doesn't like tea.", "She not like tea.", "She no like tea."],
        answer: 1
    },
    {
        question: "Choose the synonym of 'Brave':",
        options: ["Coward", "Courageous", "Afraid", "Weak"],
        answer: 1
    },
    {
        question: "Fill in the blank: I ____ to the gym every morning.",
        options: ["go", "goes", "going", "gone"],
        answer: 0
    },
    {
        question: "What is the opposite of 'Quiet'?",
        options: ["Noisy", "Calm", "Silent", "Soft"],
        answer: 0
    },
    {
        question: "Which word is a noun?",
        options: ["Run", "Happiness", "Quickly", "Jumping"],
        answer: 1
    },
    {
        question: "Choose the correct question:",
        options: ["Where you are going?", "Where going you?", "Where are you going?", "You going where?"],
        answer: 2
    },
    {
        question: "Which is a verb?",
        options: ["Running", "Runner", "Run", "Ran"],
        answer: 2
    },
    {
        question: "Which sentence is in past tense?",
        options: ["I eat dinner.", "I am eating dinner.", "I ate dinner.", "I eats dinner."],
        answer: 2
    },
    {
        question: "Choose the synonym of 'Angry':",
        options: ["Furious", "Joyous", "Friendly", "Relaxed"],
        answer: 0
    },
    {
        question: "Fill in the blank: The cat is ____ the table.",
        options: ["on", "in", "at", "into"],
        answer: 0
    },
    {
        question: "Choose the correct sentence:",
        options: ["They was playing.", "They were playing.", "They is playing.", "They are play."],
        answer: 1
    },
    {
        question: "Plural of 'Child'?",
        options: ["Childs", "Children", "Childes", "Childen"],
        answer: 1
    },
    {
        question: "Which word means 'very big'?",
        options: ["Tiny", "Huge", "Little", "Small"],
        answer: 1
    },
    {
        question: "She ____ a beautiful song.",
        options: ["sing", "sang", "singing", "sings"],
        answer: 1
    },
    {
        question: "Which is an adjective?",
        options: ["Beautiful", "Beauty", "Beautify", "Beautician"],
        answer: 0
    },
    {
        question: "Choose the correct sentence:",
        options: ["He have a car.", "He has a car.", "He having a car.", "He haves a car."],
        answer: 1
    },
    {
        question: "Which word is a preposition?",
        options: ["Under", "Fast", "Jump", "Laugh"],
        answer: 0
    },
    {
        question: "They ____ TV right now.",
        options: ["watch", "are watching", "watches", "watched"],
        answer: 1
    },
    {
        question: "Synonym of 'Smart':",
        options: ["Intelligent", "Lazy", "Weak", "Slow"],
        answer: 0
    },
    {
        question: "Correct spelling:",
        options: ["Beutiful", "Beautiful", "Beautifull", "Beautifel"],
        answer: 1
    },
    {
        question: "Choose the correct sentence:",
        options: ["I has a book.", "I have a book.", "I haves a book.", "I had a book."],
        answer: 1
    },
    {
        question: "Opposite of 'Fast':",
        options: ["Quick", "Rapid", "Slow", "Swift"],
        answer: 2
    },
    {
        question: "Meaning of 'Ancient':",
        options: ["Very old", "Very new", "Very large", "Very small"],
        answer: 0
    },
    {
        question: "Which sentence is future tense?",
        options: ["I walk.", "I walked.", "I will walk.", "I am walking."],
        answer: 2
    },
    {
        question: "Choose the correct option:",
        options: ["There is much people.", "There are many people.", "There is many people.", "There are much people."],
        answer: 1
    },
    {
        question: "Fill in the blank: My father ____ a doctor.",
        options: ["is", "are", "am", "be"],
        answer: 0
    },
    {
        question: "Synonym of 'Tiny':",
        options: ["Huge", "Small", "Giant", "Wide"],
        answer: 1
    },
    {
        question: "Select the adjective:",
        options: ["Run", "Blue", "Jump", "Happily"],
        answer: 1
    },
    {
        question: "Choose the correct sentence:",
        options: ["She are happy.", "She is happy.", "She am happy.", "She be happy."],
        answer: 1
    },
    {
        question: "Opposite of 'Rich':",
        options: ["Poor", "Wealthy", "Happy", "Tall"],
        answer: 0
    },
    {
        question: "What is the plural of 'Story'?",
        options: ["Storys", "Stories", "Storyes", "Storrys"],
        answer: 1
    },
    {
        question: "Pick the verb:",
        options: ["Table", "Walk", "Happy", "Blue"],
        answer: 1
    },
    {
        question: "Fill in the blank: They ____ dinner yesterday.",
        options: ["eat", "ate", "eaten", "eating"],
        answer: 1
    },
    {
        question: "Synonym of 'Begin':",
        options: ["Start", "Stop", "End", "Close"],
        answer: 0
    },
    {
        question: "Correct form: She ____ to school.",
        options: ["go", "goes", "going", "gone"],
        answer: 1
    },
    {
        question: "Opposite of 'Hot':",
        options: ["Warm", "Cold", "Boiling", "Heat"],
        answer: 1
    },
    {
        question: "Choose the correct sentence:",
        options: ["We was late.", "We were late.", "We is late.", "We am late."],
        answer: 1
    },
    {
        question: "Pick the noun:",
        options: ["Swim", "Table", "Quick", "Slowly"],
        answer: 1
    },
    {
        question: "Choose the synonym of 'Quick':",
        options: ["Fast", "Slow", "Late", "Weak"],
        answer: 0
    },
    {
        question: "Fill in the blank: She ____ English well.",
        options: ["speak", "speaks", "speaked", "speaking"],
        answer: 1
    },
    {
        question: "What is the opposite of 'Early'?",
        options: ["Late", "Fast", "Soon", "Quick"],
        answer: 0
    },
    {
        question: "Select the adverb:",
        options: ["Slowly", "Slow", "Slowness", "Slowest"],
        answer: 0
    },
    {
        question: "Choose the correct question:",
        options: ["Do he like tea?", "Does he like tea?", "He likes tea?", "He do like tea?"],
        answer: 1
    },
    {
        question: "Correct spelling:",
        options: ["Tomorow", "Tommorow", "Tomorrow", "Tomoorow"],
        answer: 2
    },
    {
        question: "Fill in the blank: I ____ my homework now.",
        options: ["do", "did", "am doing", "doing"],
        answer: 2
    },
    {
        question: "Meaning of 'Polite':",
        options: ["Rude", "Well-mannered", "Angry", "Lazy"],
        answer: 1
    },
    {
        question: "Select the conjunction:",
        options: ["Because", "Walk", "Table", "Quickly"],
        answer: 0
    },
    {
        question: "Choose the correct sentence:",
        options: ["She didn't went.", "She didn't go.", "She don't went.", "She doesn't went."],
        answer: 1
    },
];

let current = 0;
let score = 0;
let selectedOption = null;

const qText = document.getElementById("questionText");
const optionBtns = document.querySelectorAll(".option");
const nextBtn = document.getElementById("nextBtn");
const scoreBox = document.getElementById("scoreBox");

function loadQuestion() {
    selectedOption = null;
    let q = questions[current];

    qText.textContent = q.question;

    optionBtns.forEach((btn, i) => {
        btn.textContent = q.options[i];
        btn.classList.remove("selected");
        btn.style.display = "block";

        btn.onclick = () => {
            selectedOption = i;
            optionBtns.forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
        };
    });
}

loadQuestion();

nextBtn.onclick = () => {
    if (selectedOption === null) {
        alert("Please select an answer!");
        return;
    }

    if (selectedOption === questions[current].answer) score++;

    current++;

    if (current >= questions.length) {
        qText.textContent = "Quiz Completed!";
        optionBtns.forEach(btn => btn.style.display = "none");
        nextBtn.style.display = "none";
        scoreBox.textContent = `Your Score: ${score} / ${questions.length}`;
        return;
    }

    loadQuestion();
};
