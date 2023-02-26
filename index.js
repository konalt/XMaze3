const createEmptyMap = require("./lib/createEmptyMap");
const render = require("./lib/renderer");

var map = createEmptyMap();

var player = { x: 0, y: 0, sprite: "☻" };
function gameLoop() {
    render(map, player);
    setTimeout(gameLoop, 1000 / 60);
}

gameLoop();
