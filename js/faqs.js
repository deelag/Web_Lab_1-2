const questions = document.querySelectorAll('.question');

window.addEventListener('DOMContentLoaded', function () {
    if (getOpenQuestion()) {
        let index = parseInt(getOpenQuestion());
        questions[index].classList.add("show-text");
    }
})

questions.forEach(function (question, questionIndex) {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', function () {
        // close the other questions
        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        })
        question.classList.toggle("show-text");

        if (question.classList.contains("show-text")){
            saveOpenQuestion(questionIndex);
        } else {
            removeOpenQuestion();
        }
    })
})

function saveOpenQuestion(questionIndex) {
    sessionStorage.setItem('openQuestion', questionIndex);
}

function getOpenQuestion() {
    return sessionStorage.getItem('openQuestion');
}

function removeOpenQuestion(){
    sessionStorage.removeItem('openQuestion')
}
