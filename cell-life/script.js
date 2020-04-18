const CVS = document.getElementById('cvs');
const cellX = document.getElementById('cellX');
const cellY = document.getElementById('cellY');
const cellPower = document.getElementById('cellPower');
const cellColor = document.getElementById('cellColor');
const cellColorDisplay = document.getElementById('cellColorDisplay');
const cellDna = document.getElementById('cellDna');

CVS.addEventListener('click', event => {
    selectedX = Math.floor(event.offsetX / MAP_CELL_LEN);
    selectedY = Math.floor(event.offsetY / MAP_CELL_LEN);
    refresh();
});

window.addEventListener('keypress', event => {
    if (event.code === 'Space') {
        stop();
    }
});

let selectedX = null;
let selectedY = null;

// 坐标系取普通的平面直角坐标系
// 即向右为X轴正方向，向上为Y轴正方向

const MAP_WIDTH = 180;
const MAP_HEIGHT = 120;
const MAP_CELL_LEN = 4;

let doesDrawGrid = true;

const WIDTH = MAP_CELL_LEN * MAP_WIDTH;
const HEIGHT = MAP_CELL_LEN * MAP_HEIGHT;

CVS.width = WIDTH;
CVS.height = HEIGHT;

const CTX = CVS.getContext('2d');

function clean(color = '#ffffff') {
    CTX.fillStyle = color;
    CTX.fillRect(0, 0, WIDTH, HEIGHT);
}

function drawCell(x, y, color = '#466380') {
    CTX.fillStyle = color;
    CTX.fillRect(x * MAP_CELL_LEN, y * MAP_CELL_LEN, MAP_CELL_LEN, MAP_CELL_LEN);
}

function drawPoint(x, y, radius = 0.2 * MAP_CELL_LEN, color = '#ffffff') {
    CTX.fillStyle = color;
    CTX.beginPath();
    CTX.arc((x + 0.5) * MAP_CELL_LEN, (y + 0.5) * MAP_CELL_LEN, radius, 0, 2 * Math.PI);
    CTX.fill();
}

function drawGrid(width = 2, color = '#ffffff') {
    CTX.strokeStyle = color;
    CTX.lineWidth = width;
    for (let x = 0; x <= MAP_WIDTH; x++) {
        CTX.beginPath();
        CTX.moveTo(x * MAP_CELL_LEN, 0);
        CTX.lineTo(x * MAP_CELL_LEN, HEIGHT);
        CTX.stroke();
    }
    for (let y = 0; y <= MAP_HEIGHT; y++) {
        CTX.beginPath();
        CTX.moveTo(0, y * MAP_CELL_LEN);
        CTX.lineTo(WIDTH, y * MAP_CELL_LEN);
        CTX.stroke();
    }
}


const GAME = new LifeGame({
    geneLimit: 0x0F,
    mutateRate: 0.1,
    crossoverRate: 0.1,
    mapWidth: MAP_WIDTH,
    mapHeight: MAP_HEIGHT,
});

function refresh() {
    clean();
    GAME.map.cells.forEach(cell => drawCell(cell.x, cell.y, cell.life.color + fillStr((Math.floor(cell.power / 50  * 0x7F) + 0x80).toString(16), 2, 0)));
    if (doesDrawGrid) {
        drawGrid(1);
    }
    if (selectedX !== null && selectedY !== null) {
        drawPoint(selectedX, selectedY);
        let selectedCell = GAME.map.get(selectedX, selectedY);
        cellX.innerText = selectedCell.x;
        cellY.innerText = selectedCell.y;
        cellPower.innerText = selectedCell.power;
        cellColor.innerText = selectedCell.life.color;
        cellColorDisplay.style.background = selectedCell.life.color;
        cellDna.innerHTML = selectedCell.life.dna.map(e => `<span>${e.toString(16)}</span>`).join('');
    }
}

function init() {
    Array(randInt(100, 60))
        .fill(0)
        .map(() => ({x: randInt(MAP_WIDTH), y: randInt(MAP_HEIGHT), life: new Life()}))
        .forEach(({x, y, life}) => GAME.map.set(x, y, life));
    refresh();
}

function stepMap() {
    GAME.step();
    refresh();
}

let pid = null;

function start() {
    if (pid === null) {
        pid = setInterval(stepMap, 200);
    }
}

function stop() {
    if (pid !== null) {
        clearInterval(pid);
        pid = null;
    }
}

function clearMap() {
    GAME.map.cells.forEach(cell => {cell.life = NIL_LIFE});
    refresh();
}

function toggleGrid() {
    doesDrawGrid = !doesDrawGrid;
    refresh();
}