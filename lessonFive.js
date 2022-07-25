const form = document.querySelector('#lastForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const correct = document.querySelectorAll('.correctAnswer');
    console.log(correct);
    const allCorrect = Array(...correct).filter((element) => element.checked).length===5;
    console.log(allCorrect);
    const answerIndicator = document.createElement("div")
    answerIndicator.innerText = allCorrect? "You got the right the answers!" : "Try again!"
    const lessonTwoAnswers = document.querySelector(".checkTheAnswers")
    lessonTwoAnswers.appendChild(answerIndicator)
    }
)

console.log("end of script");