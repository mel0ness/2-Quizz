const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];
const comment = ["Bravo", "Presque", "Moyen", "Oula ce n'est pas bon", "Catastrophique"];

const Form = document.getElementById('form');
let Responses = [];
let Note = null;

Form.addEventListener('submit', (e) => {
    e.preventDefault();
    Responses = []
    Note = null
    const Q1 = document.getElementsByName('q1')
    const Q2 = document.getElementsByName('q2')
    const Q3 = document.getElementsByName('q3')
    const Q4 = document.getElementsByName('q4')
    const Q5 = document.getElementsByName('q5')

    getChecked(Q1);
    getChecked(Q2);
    getChecked(Q3);
    getChecked(Q4);
    getChecked(Q5);

    note(Responses, responses);

    showResults(Note);
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

const showResults = (e) => {
    const consignes = document.getElementById('consignes');
    let noteIndex = 5 - e;
consignes.textContent = comment[noteIndex] +  ' ' + ' ' + emojis[noteIndex]
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