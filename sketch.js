const r = require("raylib");
const geomentry = require("./geomentry");

const screenWidth = 800;
const screenHeight = 500;

const detectorHeight = screenHeight;
const detectorWidth = screenWidth / 16;
const detectorY = 0;

let detectorX = 0;

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
    status = geomentry.determineDirection(detectorX, screenWidth, detectorWidth, status)
    detectorX = detectorX + status;
}

function draw() {

    const particleRange1_X = 200;
    const particleRange1_width = 80;

    const particleRange2_X = 700;
    const particleRange2_width = 25

    const color = (geomentry.isOverlapping(detectorX, detectorWidth, particleRange1_X, particleRange1_width) ||
        (geomentry.isOverlapping(detectorX, detectorWidth, particleRange2_X, particleRange2_width))) ? r.RED : r.WHITE;

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    drawParticleRange(particleRange1_X, particleRange1_width);
    drawParticleRange(particleRange2_X, particleRange2_width);

    r.DrawRectangle(detectorX, detectorY, detectorWidth, detectorHeight, color)

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

function drawParticleRange(particleRangeX, particleRangeWidth) {
    const particleRangeHeight = screenHeight;
    const particleRangeY = 0;

    r.DrawRectangle(particleRangeX, particleRangeY, particleRangeWidth, particleRangeHeight, r.BLUE);
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};