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

const form = document.querySelector('#lastForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const correct = document.querySelectorAll('.correctAnswer');
    console.log(correct);
    const allCorrect = Array(...correct).filter((element) => element.checked).length===3;
    console.log(allCorrect);
    const answerIndicator = document.createElement("div")
    answerIndicator.innerText = allCorrect? "You got the right answers!" : "Try again!"
    const lessonOneAnswers = document.querySelector(".checkTheAnswers")
    lessonOneAnswers.appendChild(answerIndicator)
    }
)

console.log("end of script");