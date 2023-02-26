module.exports = function createEmptyMap(size = 13) {
    return {
        geo: new Array(size).fill(new Array(size * 2).fill({ sprite: " " })),
        border: "█",
    };
};
