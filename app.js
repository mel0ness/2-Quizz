const responses = ["c", "a", "b", "a", "c", "a", "c", "b" , "a"];
const emojis = ["👎", "😭" , "👀", "✨", "✔️" ];
const comment = ["Catastrophique!", "Oula ce n'est pas bon", "Moyen", "Presque!", "Vous êtes excellent!"];

const Form = document.getElementById('form');
let Responses = [];
let Note = null;

Form.addEventListener('submit', (e) => {
    e.preventDefault();
    Responses = []
    Note = null
    const QTotal = document.querySelectorAll("input[type='radio']")
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