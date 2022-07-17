const items = document.querySelectorAll('.item');
const displayPlayer = document.querySelector('.display-player')
let playerStatus = document.querySelector('#player-status');
let currentPlayer = 'X'
let xCount = 0;
let oCount = 0;
let steps = 9;
let gameOver = false;
let board = ['', '', '', '', '', '', '', '', '',];
let isGameActive = true;

const winCases = [
    [0, 1, 2],
    [3, 4, 5],
    [5, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

items.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (isGameActive) {
            if (item.classList.contains('false')) {
                item.innerHTML = currentPlayer;
                changePlayer()
                item.classList.remove('false')
                item.classList.add('true')
                updateBoard(index)
                fnGameOver()
            }
        }
    })
})

function whoWin(player){
    switch(player){
        case 'X':
            alert('Игрок Х выиграл!')
            break;
        case 'O':
            alert('Игрок О выиграл!');
            break;
        default:
            alert('Ничья')
    }
}

function changePlayer() {
    displayPlayer.classList.remove(`player${currentPlayer}`)
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    displayPlayer.classList.add(`player${currentPlayer}`)
    displayPlayer.innerHTML = currentPlayer
}

function fnGameOver() {
    let playerWon = false;
    for (let i = 0; i <= 7; i++) {
        let winCase = winCases[i];
        let a = board[winCase[0]]
        let b = board[winCase[1]]
        let c = board[winCase[2]]
        if (a === '' || b === '' || c === '') {
            continue
        }
        if (a === b && b === c) {
            playerWon = true
            break
        }
    }

    if (playerWon) {
        whoWin(currentPlayer == 'X' ? 'X' : 'O')
        isGameActive = false
    }

    if(!board.includes('')){
        alert('Ничья')
        playerStatus.innerHTML = 'Ничья'
    }
}

function updateBoard(idx) {
    board[idx] = currentPlayer
}