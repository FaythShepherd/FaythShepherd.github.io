// const colorButton = document.getElementById('color')
// colorButton.addEventListener('click', () => {
//     alert('pink')
// })

// const placeButton = document.querySelector('#place');
// placeButton.addEventListener('click', () => {
//     alert('canyon')
// })

// const ritualButton = document.querySelectorAll('#ritual')

// ritualButton[0].addEventListener('click', () => {
//     alert('washing my face')
// })

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const correct = document.querySelectorAll('.correctAnswer');
    console.log(correct);
    const allCorrect = Array(...correct).filter((element) => element.checked).length===1;
    console.log(allCorrect);
    const answerIndicator = document.createElement("div")
    answerIndicator.innerText = allCorrect? "you got the right the answer" : "Try again!"
    const lessonOneAnswers = document.querySelector(".checkTheAnswers")
    lessonOneAnswers.appendChild(answerIndicator)
    }
)

const getNames = () => {
    axios.post("http://localhost:5501/api/names", {.collectReward}).then( (response) => {
        console.log(response);
    }).catch(console.log) 
};
getNames()