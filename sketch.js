const r = require("raylib");
const geomentry = require("./geomentry");

const screenWidth = 800;
const screenHeight = 500;

const rangeHeight = screenHeight;
const rangeWidth = screenWidth / 16;
const rangeY = 0;

let rangeX = 0;

let status = 1;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const FPS = 80;
    r.InitWindow(screenWidth, screenHeight, "particle detector");
    r.SetTargetFPS(FPS);
}

function update() {
    status = geomentry.determineDirection(rangeX, screenWidth, rangeWidth, status)
    rangeX = rangeX + status;
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK)

    r.DrawRectangle(rangeX, rangeY, rangeWidth, rangeHeight, r.WHITE)

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};