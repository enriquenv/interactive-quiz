
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const quit_btn = document.querySelector(".buttons .quit")
const quiz_btn = document.querySelector(".buttons .quiz")
const quiz_box = document.querySelector(".quiz_box");

start_btn.onclick = function() {
    /* if (document.body.style.backgroundColor == "red") {
        document.body.style.backgroundColor = "rgb(22, 22, 53)";
    } else document.body.style.backgroundColor = "red"; */
    start_btn.style.display = "none";
    info_box.style.display = "inline";
}

quit_btn.onclick = function() {
    info_box.style.display = "none";
    start_btn.style.display = "inline";
}

quiz_btn.onclick = function() {
    info_box.style.display = "none";
    quiz_box.style.display = "inline";
    showQuestions(3);
}

let q_count = 0;

function showQuestions(index){
    const q_text = document.querySelector(".q_text");
    const option_list = document.querySelector(".option_list");
    q_text.innerHTML = questions[index].question;
    option_list.innerHTML =`
    <div class="option"><span>${questions[index].options[0]}</span><div class="icon tick"><i class="fas fa-check"></i></div></div>
    <div class="option"><span>${questions[index].options[1]}</span><div class="icon tick"><i class="fas fa-check"></i></div></div>
    <div class="option"><span>${questions[index].options[2]}</span><div class="icon tick"><i class="fas fa-check"></i></div></div>
    <div class="option"><span>${questions[index].options[3]}</span><div class="icon tick"><i class="fas fa-check"></i></div></div>`;
    
}

/* // For the multilingual function
console.log(navigator.language);
console.log(window.navigator.language);
console.log(navigator.languages);
console.log(window.navigator.languages); */