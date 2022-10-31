
import { create } from './module/canvas.js';
import { draw, drawSquare as square } from './module/draw.js';
// import { draw as circle } from './module/circle.js';

let ctx = create('myCanvas', document.body, 600, 400);



draw(ctx.ctx, 250, 330, 200, 50);
square(ctx.ctx, 400, 80, 200);

// circle(ctx.ctx, 20, 50, 130, 'blue');

import('./module/circle.js').then((Module) => {
    Module.draw(ctx.ctx, 20, 50, 130, 'blue');
}); 