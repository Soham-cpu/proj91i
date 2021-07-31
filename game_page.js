player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

function sendQuestion(){
    no1=document.getElementById("number1_input").value;
    no2=document.getElementById("number2_input").value;

    actualAnswer = parseInt(no1) * parseInt(no2);


    questionLine = "<h4> Q." + no1 + "x" + no2; "</h4>"
    answerLine = "<br><br>Answer : <input type='text' id='answerInput'></input>";
    button = "<br><br><button id='answerCheckButton' onclick='checkAns()' class='btn btn-info'>Check</button>"

    row = questionLine + answerLine +button;
    document.getElementById("output").innerHTML = row;

    document.getElementById("number1_input").value = "";
    document.getElementById("number2_input").value = "";
}

function checkAns(){
    ansByPlayer = document.getElementById("answerInput").value;
    if(actualAnswer == ansByPlayer){
        
    }
}