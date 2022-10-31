
function draw(ctx, x, y, w, h) {
    ctx.fillStyle = 'red';
    ctx.fillRect(x, y, w, h);
}

function drawSquare(ctx, x, y, length) {
    ctx.fillStyle = 'red';
    ctx.fillRect(x, y, length, length);
}

export { draw, drawSquare }