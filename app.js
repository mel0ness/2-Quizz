let responses = [];
const emojis = ["👎", "😭" , "👀", "✨", "✔️" ];
const comment = ["Catastrophique!", "Oula ce n'est pas bon", "Moyen", "Presque!", "Vous êtes excellent!"];
const questionsPlace = document.getElementById("questionsPlace");

async function GetResults() {
    try {
const response = await fetch("https://mel0ness.github.io/2-Quizz/Question.json");
const Results = await response.json();
console.log(Results);
CreateArray(Results);
CreateQuestions(Results);
    }
    catch (error) {
const Results = error;
console.log(Results);
    }
    }

GetResults();    

const CreateQuestions = (e) => {
    for(let i=0; i < e.length; i++) {
        CreateElement(e[i])

    }
}

const CreateElement = (e) => {
    const Question = document.createElement("div");
    Question.innerHTML = `<div class="question" id="q${e.id}">
    <h2>${e.title}</h2>
    <div class="input"><input type="radio" id=${e.lab1} name="q${e.id}" value="a" checked>
      <label for=${e.lab1}>${e.rep1}</label>
    </div>
    <div class="input"><input type="radio" id=${e.lab2} name="q${e.id}" value="b"> <label for=${e.lab2}>${e.rep2}</label></div>
    <div class="input"><input type="radio" id=${e.lab3} name="q${e.id}" value="c"><label for=${e.lab3}>${e.rep3}</label></div>
  </div>`;
  questionsPlace.appendChild(Question);
}

const CreateArray = (e) => {

for(let i=0; i < e.length; i++) {
responses.push(e[i].correct);
Responses.push("a");
}
}

const Form = document.getElementById('form');
let Responses = [];
let Note = null;

Form.addEventListener('submit', (e) => {
    e.preventDefault();
    Responses = []
    Note = null
    const QTotal = document.querySelectorAll("input[type='radio']")
    resetColor(QTotal);
getChecked(QTotal);
    note(Responses, responses);

    showResults(Note, Responses);
    error(Responses);

})

const getChecked = (e) => {
for (let i = 0; i < e.length; i++) {
    if(e[i].checked === true) {
        Responses.push(e[i].value)
    }
    
}   
}

const note = (e, f) => {
    for (let i = 0; i < e.length; i++) {
if(e[i] === f[i]) {
    Note++
}
    }
}

const showResults = (e, f) => {
    const consignes = document.getElementById('consignes');
    let noteForIndex = (e/f.length*5);
    let noteIndex = null;
switch(true) {
    case(noteForIndex <= 1):
noteIndex = 0;
break;
case (noteForIndex <= 2):
    noteIndex = 1;
    break;
case (noteForIndex <= 4):
    noteIndex = 2;
    break;
case (noteForIndex < 5):
    noteIndex = 3;
    break;
case (noteForIndex === 5):
    noteIndex = 4;
    break;
}
consignes.textContent =  (e) + '/' + f.length + ' ' + comment[noteIndex] +  ' ' + ' ' + emojis[noteIndex]
}

const error = (e) => {
for (let i = 0; i< e.length; i++) {
    if(e[i] !== responses[i]) {
        let wrongAnswerNumber = i+1
        let wrongAnswer = document.getElementById(`q${wrongAnswerNumber}`);
wrongAnswer.style.backgroundColor = 'rgba(150, 0, 0, 0.3)'
    }
    else {
        let goodAnswerNumber = i+1
        let goodAnswer = document.getElementById(`q${goodAnswerNumber}`);
        goodAnswer.style.backgroundColor = 'rgba(0, 150, 0, 0.3)'
    }
}
}

const resetColor = (e) => {
    e.forEach((radiobutton) => {
        radiobutton.addEventListener("click", () => {
            let Ref = radiobutton.name;
            let QuestionToReset = document.getElementById(Ref);

            QuestionToReset.style.backgroundColor = "#f1f1f1"
        })
    })
}