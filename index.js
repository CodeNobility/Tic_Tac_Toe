console.log("Welcome tp tic tac toe");
let Music = new Audio("music.mp3");
let audioTurn = new Audio("turn.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;

// function to change the turn 
function changeTurn() {
    return turn === "X" ? "0" : "X";
}

// function to check win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            gameover.play();
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " WON"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "20vw"
        }
    })
}

// game logic
Music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        audioTurn.play();
        if(boxtext.innerText === ''){
            audioTurn.play();
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// adding onclick listner to reset button
reset.addEventListener('click', ()=>{
    audioTurn.play();
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText = ""
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = ""
        audioTurn.play();
    });
    turn = "X";
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

})