const draw = (ctx, radius, x, y, color) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, degToRad(0), degToRad(360), false);
    ctx.fill();
};

function degToRad(degrees) {
    return degrees * Math.PI / 180;
}

export { draw };