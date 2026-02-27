const board = document.getElementById('board');
const rows = 20;
const cols = 20;
let direction = 'RIGHT';
let cells = [];
let boost = false;
let gameInterval = null;
let indexFood;

let snake = [{
        x: 10,
        y: 7
    },
    {
        x: 10,
        y: 8
    },
    {
        x: 10,
        y: 9
    }, {
        x: 10,
        y: 10
    },
];

function createBoard() {
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < rows; x++) {
            const cell = document.createElement('div');
            cell.classList.add("cell");

            board.appendChild(cell);

            cells.push(cell);
        }
    }
}

function getIndex(x, y) {
    // rumus 2D -> 1D
    // dimana 2D yang berkonsep grid x, y dikonversi index 0,1,2,3
    return y * cols + x;
}

function getIndexFood() {
    return Math.floor(Math.random() * (cols * rows)) - 1;
}

function drawSnake() {
    snake.forEach((segment, key) => {
        const index = getIndex(segment.x, segment.y);
        if (key == 0) {
            cells[index].style.background = "red";
            if (index == indexFood) {
                drawFood();
                snake.push(snake.length + 1);
            }
        } else {
            cells[index].style.background = "blue";
        }
    });
}

function drawFood() {
    let index;
    do {
        index = getIndexFood();
    } while (snake.includes(index));
    
    indexFood = index;
    cells[indexFood].style.background = "#129c00";
}

function clearBoard() {
    cells.forEach((cell, key) => {
        if (key != indexFood) cell.style.background = '#b8b8b8';
    });
}

function moveSnake() {
    // Immutable Head Concept
    const head = {
        ...snake[0]
    };

    if (direction === "RIGHT") head.x++;
    if (direction === "LEFT") head.x--;
    if (direction === "UP") head.y--;
    if (direction === "DOWN") head.y++;

    //menambahkan value diindex 0 / pertama
    snake.unshift(head);
    //menghilangkan value index terakhir / data terakhir
    snake.pop();
}

function changeDirection(event) {
    const key = event.key;

    if ((key === 'ArrowUp' || key === 'w') && direction != 'DOWN') {
        direction = 'UP';
    } else if ((key === 'ArrowDown' || key === 's') && direction != 'UP') {
        direction = 'DOWN'
    } else if ((key === 'ArrowRight' || key === 'd') && direction != 'LEFT') {
        direction = 'RIGHT'
    } else if ((key === 'ArrowLeft' || key === 'a') && direction != 'RIGHT') {
        direction = 'LEFT'
    } else if (key === 'Shift') {
        boost = !boost;
    }

    if (boost) {
        gameSpeed(70);
    } else {
        gameSpeed(200);
    }
}

function gameSpeed(timer) {
    if (gameInterval !== null) {
        clearInterval(gameInterval);
    }

    gameInterval = setInterval(() => {
        gameRun();
    }, timer);
}

function gameRun() {
    clearBoard();
    moveSnake();
    drawSnake();
}

createBoard();
drawSnake();
drawFood();
gameSpeed(200);

document.addEventListener("keydown", changeDirection);