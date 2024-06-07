const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

console.log(ctx);

const canvasProp = {
	width: window.innerWidth,
	height: window.innerHeight,
};

canvas.width = canvasProp.width;
canvas.height = canvasProp.height;

const getCurrentProp = () => {
	canvasProp.width = window.innerWidth;
	canvasProp.height = window.innerHeight;

	canvas.width = canvasProp.width;
	canvas.height = canvasProp.height;

	console.log(canvas.width, canvas.height);
};

let isDrawing = false;

const startDrawing = e => {
	isDrawing = true;
	console.log(isDrawing);
	ctx.beginPath();
	draw(e);
};

const draw = e => {
	if (isDrawing) {
		const x = e.x;
		const y = e.y;

		ctx.lineCap = 'square';
		ctx.lineWidth = 100;
		ctx.strokeStyle = '#f00';
		ctx.stroke();
		ctx.moveTo(x, y);
		ctx.lineTo(x, y);
	}
};

const endDrawing = () => {
	isDrawing = false;
	console.log(isDrawing);
};

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', endDrawing);
canvas.addEventListener('mousemove', draw);

window.addEventListener('resize', getCurrentProp);
