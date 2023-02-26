const process = require("process");

function render(map, player) {
    console.clear();
    process.stdout.write(map.border.repeat(map.geo[0].length + 4));
    process.stdout.write("\n");
    process.stdout.write(map.border.repeat(2));
    for (const [y, line] of map.geo.entries()) {
        for (const [x, block] of line.entries()) {
            if (player.x == x && player.y == y) {
                process.stdout.write(player.sprite);
            } else {
                process.stdout.write(block.sprite);
            }
        }
        process.stdout.write(
            map.border.repeat(2) + "\n" + map.border.repeat(2)
        );
    }
    process.stdout.write(map.border.repeat(map.geo[0].length + 2));
    process.stdout.write("\n");
}

module.exports = render;
