const createEmptyMap = require("./lib/createEmptyMap");
const render = require("./lib/renderer");
const keypress = require("keypress");

keypress(process.stdin);

var map = createEmptyMap();

var player = { x: 0, y: 0, sprite: "☻" };

process.stdin.on("keypress", (ch, key) => {
    if (key) {
        switch (key.name) {
            case "w":
                player.y--;
                break;
            case "a":
                player.x--;
                break;
            case "s":
                player.y++;
                break;
            case "d":
                player.x++;
                break;
        }
    }
    if (key && key.ctrl && key.name == "c") {
        process.stdin.pause();
    }
});

function gameLoop() {
    render(map, player);
    setTimeout(gameLoop, 1000 / 60);
}

gameLoop();
