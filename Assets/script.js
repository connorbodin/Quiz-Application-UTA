let startButton = document.getElementById("start-btn");
let quizContainer = document.getElementById("hide");

console.log(startButton);



console.log(quizContainer);


startButton.addEventListener('click', function(){
    showOrHideDiv();
});

function showOrHideDiv() {
    var v = document.getElementById("start-container");
    if (v.style.display === "none") {
       v.style.display = "block";
    } else {
       v.style.display = "none";
       quizContainer.style.display = "flex";
    }
};






