
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const quit_btn = document.querySelector(".buttons .quit")
const quiz_btn = document.querySelector(".buttons .quiz")
const quiz_box = document.querySelector(".quiz_box");
const next_btn = document.querySelector(".next_btn");
const q_counter = document.querySelector(".total_q>span>p:first-child");
const result_box = document.querySelector(".result_box");
const restart_btn = document.querySelector(".buttons .restart");
const exit_btn = document.querySelector(".buttons .exit");
const scoreText = document.querySelector(".result_box .score_text");

start_btn.onclick = function() {
    /* if (document.body.style.backgroundColor == "red") {
        document.body.style.backgroundColor = "rgb(22, 22, 53)";
    } else document.body.style.backgroundColor = "red"; */
    start_btn.style.display = "none";
    info_box.style.display = "inline";
}

restart_btn.onclick = function() {
    start_btn.style.display = "none";
    result_box.style.opacity = "0";
    info_box.style.display = "inline";
    q_count = 0;
    userScore = 0;
}

quit_btn.onclick = function() {
    info_box.style.display = "none";
    start_btn.style.display = "inline";
}

exit_btn.onclick = function() {
    result_box.style.opacity = "0";
    start_btn.style.display = "inline";
    q_count = 0;
    userScore = 0;
}

quiz_btn.onclick = function() {
    info_box.style.display = "none";
    quiz_box.style.display = "inline";
    showQuestions(q_count);
}

let q_count = 0;
let userScore = 0;

next_btn.onclick = function() {
    if (q_count < questions.length - 1) {
        q_count++;
        showQuestions(q_count);
        next_btn.style.display = "none";
    } else {
        console.log("Questions completed");
        next_btn.style.display = "none";
        quiz_box.style.display = "none";
        result_box.style.opacity = "1";
        if (userScore > 3) {
            scoreText.innerHTML = `<span>and congratulations! You got <p>${userScore}</p> out of <p>5!</p></span>`;
        } else if (userScore == 3) {
            scoreText.innerHTML = `<span>and nice, you got <p>${userScore}</p> out of <p>5!</p></span>`;
        } else if (1 <= userScore <= 2) {
            scoreText.innerHTML = `<span>and sorry, you got only <p>${userScore}</p> out of <p>5</p></span>`;
        } else {
            scoreText.innerHTML = `<span>and sorry, you got <p>${userScore}</p> out of <p>5...</p></span>`;
        }
    }
}

const option_list = document.querySelector(".option_list");

function showQuestions(index){
    const q_text = document.querySelector(".q_text");
    
    q_text.innerHTML = questions[index].num +". "+questions[index].question;
    option_list.innerHTML =`
    <div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
    <div class="option"><span>${questions[index].options[2]}</span></div>
    <div class="option"><span>${questions[index].options[3]}</span></div>`;
    q_counter.innerHTML = q_count + 1;

    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

function optionSelected(answer){
    let userAnswer = answer.textContent;
    console.log(userAnswer);
    let correctAnswer = questions[q_count].answer;
    console.log(correctAnswer);
    let allOptions = option_list.children.length;
    let tickIcon = `<div class="icon tick"><i class="fas fa-check"></i></div>`
    let crossIcon = `<div class="icon cross"><i class="fas fa-times"></i></div>`

    // correct answer selected
    if (userAnswer == correctAnswer) {
        answer.classList.add("correct-option");
        answer.insertAdjacentHTML("beforeend", tickIcon);
        userScore += 1;
    //incorrect answer selected
    } else {
        answer.classList.add("incorrect-option");
        answer.insertAdjacentHTML("beforeend", crossIcon)
        //show correct answer
        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correctAnswer) {
                option_list.children[i].setAttribute("class", "option correct-option");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }

    for (let i = 0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled");
    }
    next_btn.style.display = "block";
}



/* // For the multilingual function
console.log(navigator.language);
console.log(window.navigator.language);
console.log(navigator.languages);
console.log(window.navigator.languages); */