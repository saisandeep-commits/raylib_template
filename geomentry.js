function square(x) {
    return x * x;
}

function sqrt(x) {
    return x ** 0.5
}

function calcOffSet(windowlength, rectLength) {
    return (windowlength - rectLength) / 2;
}

function distance(x1, y1, x2, y2) {
    return sqrt(square(x2 - x1) + square(y2 - y1));
}

module.exports = {
    calcOffSet,
    distance,
    square,
    sqrt,
}
