const cell = document.querySelectorAll(".cell")
const reset = document.querySelector(".reset")

let stat = true
let tictak
cell.forEach((ele, key) => {
    ele.addEventListener('click', () => {
        console.log(key);
        console.log('click');
        if (ele.textContent == '') {
            if (stat) {
                tictak = 'X'
                stat = false
                console.log('stat true');
            } else {
                tictak = 'O'
                stat = true
                console.log('stat false');
            }
            ele.textContent = tictak
            winingmove();
        }
    })
})

function winingmove() {
    console.log('winingmove' + cell[0].innerHTML);
    if (cell[0].innerHTML == 'X' && cell[1].innerHTML == 'X' && cell[2].innerHTML == 'X') {
        resetGame()
        console.log("player x is win");
    } else if (cell[3].innerHTML == 'X' && cell[4].innerHTML == 'X' && cell[5].innerHTML == 'X') {
        resetGame()
        console.log("player x is win");
    } else if (cell[6].innerHTML == 'X' && cell[7].innerHTML == 'X' && cell[8].innerHTML == 'X') {
        resetGame()
        console.log("player x is win");
    } else if (cell[0].innerHTML == 'X' && cell[3].innerHTML == 'X' && cell[6].innerHTML == 'X') {
        resetGame()
        console.log("player x is win");
    } else if (cell[1].innerHTML == 'X' && cell[4].innerHTML == 'X' && cell[7].innerHTML == 'X') {
        resetGame()
        console.log("player x is win");
    } else if (cell[2].innerHTML == 'X' && cell[5].innerHTML == 'X' && cell[8].innerHTML == 'X') {
        resetGame()
        console.log("player x is win");
    } else if (cell[0].innerHTML == 'X' && cell[5].innerHTML == 'X' && cell[8].innerHTML == 'X') {
        resetGame()
        console.log("player x is win");
    } else if (cell[2].innerHTML == 'X' && cell[5].innerHTML == 'X' && cell[6].innerHTML == 'X') {
        resetGame()
        console.log("player x is win");
    }

    if (cell[0].innerHTML == 'O' && cell[1].innerHTML == 'O' && cell[2].innerHTML == 'O') {
        resetGame()
        console.log("player o is win");
    } else if (cell[3].innerHTML == 'O' && cell[4].innerHTML == 'O' && cell[5].innerHTML == 'O') {
        resetGame()
        console.log("player o is win");
    } else if (cell[6].innerHTML == 'O' && cell[7].innerHTML == 'O' && cell[8].innerHTML == 'O') {
        resetGame()
        console.log("player o is win");
    } else if (cell[0].innerHTML == 'O' && cell[3].innerHTML == 'O' && cell[6].innerHTML == 'O') {
        resetGame()
        console.log("player o is win");
    } else if (cell[1].innerHTML == 'O' && cell[4].innerHTML == 'O' && cell[7].innerHTML == 'O') {
        resetGame()
        console.log("player o is win");
    } else if (cell[2].innerHTML == 'O' && cell[5].innerHTML == 'O' && cell[8].innerHTML == 'O') {
        resetGame()
        console.log("player o is win");
    } else if (cell[0].innerHTML == 'O' && cell[5].innerHTML == 'O' && cell[8].innerHTML == 'O') {
        resetGame()
        console.log("player o is win");
    } else if (cell[2].innerHTML == 'O' && cell[5].innerHTML == 'O' && cell[6].innerHTML == 'O') {
        resetGame()
        console.log("player o is win");
    }
}

function resetGame() {
    cell.forEach((ele) => {
        ele.textContent = ''
        console.log('reset');
    })
}

reset.addEventListener('click', () => {
    resetGame()
})