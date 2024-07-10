const cell = document.querySelectorAll(".cell")
const reset = document.querySelector(".reset")
const popup = document.querySelector(".popup")
const innerReset = document.querySelector('.restart')
const winner = popup.querySelector('.winner')
let your = document.querySelector('.your-score')
let opponent = document.querySelector('.opponent-score')
const player = document.querySelectorAll('.player')
const select = document.querySelector('.select')
let x = 0;
let o = 0;

let stat = true
let tictak

function chooseMode(){
    player.forEach((ele) => {
        ele.addEventListener('click', () => {
            select.classList.remove('active')
            console.log(ele.textContent);
            if(ele.textContent == 'X'){
                stat = true
            }else if(ele.textContent == 'O'){
                stat = false
            }
        })
    })
}

cell.forEach((ele, key) => {
    chooseMode()
    ele.addEventListener('click', () => {
        console.log(key);
        console.log('click');
        if (ele.textContent == '') {
            if (stat) {
                tictak = 'X'
                stat = false
                ele.style.color= 'orange'
                console.log('stat true');
            } else {
                tictak = 'O'
                stat = true
                console.log('stat false');
                ele.style.color= 'blue'
            }
            ele.textContent = tictak
            winingmove();
        }

    })
})


function winnerwinner(player){
    popup.classList.add('active');
    winner.textContent = player 
    if(player == 'Player X'){
        x++;
        your.textContent = x
    }else if(player == 'Player O'){
        o++;
        opponent.textContent = o
    }
}

innerReset.addEventListener('click', () => {
    popup.classList.remove('active')
})


reset.addEventListener('click', () => {
    resetGame()
})

function resetGame() {
    cell.forEach((ele) => {
        ele.textContent = ''
        console.log('reset');
    })
}



function winingmove() {
    console.log('winingmove' + cell[0].innerHTML);

    if (cell[0].innerHTML == 'X' && cell[1].innerHTML == 'X' && cell[2].innerHTML == 'X') {
        winnerwinner("Player X")
        resetGame()
        console.log("player x is win");
    } else if (cell[3].innerHTML == 'X' && cell[4].innerHTML == 'X' && cell[5].innerHTML == 'X') {
        winnerwinner("Player X")
        resetGame()
        console.log("player x is win");
    } else if (cell[6].innerHTML == 'X' && cell[7].innerHTML == 'X' && cell[8].innerHTML == 'X') {
        winnerwinner("Player X")
        resetGame()
        console.log("player x is win");
    } else if (cell[0].innerHTML == 'X' && cell[3].innerHTML == 'X' && cell[6].innerHTML == 'X') {
        winnerwinner("Player X")
        resetGame()
        console.log("player x is win");
    } else if (cell[1].innerHTML == 'X' && cell[4].innerHTML == 'X' && cell[7].innerHTML == 'X') {
        winnerwinner("Player X")
        resetGame()
        console.log("player x is win");
    } else if (cell[2].innerHTML == 'X' && cell[5].innerHTML == 'X' && cell[8].innerHTML == 'X') {
        winnerwinner("Player X")
        resetGame()
        console.log("player x is win");
    } else if (cell[0].innerHTML == 'X' && cell[4].innerHTML == 'X' && cell[8].innerHTML == 'X') {
        winnerwinner("Player X")
        resetGame()
        console.log("player x is win");
    } else if (cell[2].innerHTML == 'X' && cell[4].innerHTML == 'X' && cell[6].innerHTML == 'X') {
        winnerwinner("Player X")
        resetGame()
        console.log("player x is win");
    }

    if (cell[0].innerHTML == 'O' && cell[1].innerHTML == 'O' && cell[2].innerHTML == 'O') {
        winnerwinner("Player O")
        resetGame()
        console.log("player o is win");
    } else if (cell[3].innerHTML == 'O' && cell[4].innerHTML == 'O' && cell[5].innerHTML == 'O') {
        winnerwinner("Player O")
        resetGame()
        console.log("player o is win");
    } else if (cell[6].innerHTML == 'O' && cell[7].innerHTML == 'O' && cell[8].innerHTML == 'O') {
        winnerwinner("Player O")
        resetGame()
        console.log("player o is win");
    } else if (cell[0].innerHTML == 'O' && cell[3].innerHTML == 'O' && cell[6].innerHTML == 'O') {
        winnerwinner("Player O")
        resetGame()
        console.log("player o is win");
    } else if (cell[1].innerHTML == 'O' && cell[4].innerHTML == 'O' && cell[7].innerHTML == 'O') {
        winnerwinner("Player O")
        resetGame()
        console.log("player o is win");
    } else if (cell[2].innerHTML == 'O' && cell[5].innerHTML == 'O' && cell[8].innerHTML == 'O') {
        winnerwinner("Player O")
        resetGame()
        console.log("player o is win");
    } else if (cell[0].innerHTML == 'O' && cell[4].innerHTML == 'O' && cell[8].innerHTML == 'O') {
        winnerwinner("Player O")
        resetGame()
        console.log("player o is win");
    } else if (cell[2].innerHTML == 'O' && cell[4].innerHTML == 'O' && cell[6].innerHTML == 'O') {
        winnerwinner("Player O")
        resetGame()
        console.log("player o is win");
    }
}



