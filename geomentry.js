function callOffSet(windowlength, rectLength) {
    return (windowlength - rectLength) / 2;
}

function distance(x1, y1, x2, y2) {
    return ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5;
}

function determineDirection(rangeX, screenWidth, rangeWidth, status) {
    if (status == 1) {
        return (rangeX + rangeWidth) > screenWidth ? -1 : 1;
    }
    return (rangeX < 0) ? 1 : -1;

}

function isOverlapping(detectorX, detectorWidth, particleX, particleWidth) {
    return (detectorX + detectorWidth > particleX) && (detectorX < particleX + particleWidth)
}


module.exports = {
    callOffSet,
    distance,
    determineDirection,
    isOverlapping,
}
