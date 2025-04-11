const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Tank {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = 50;
        this.height = 30;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

const playerTank = new Tank(canvas.width / 2, canvas.height - 50, "green");

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    playerTank.draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();
