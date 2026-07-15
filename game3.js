const player = document.querySelector(".player");
const enemy = document.querySelector(".player1");
const scoreElement = document.querySelector(".score");

let playerY = 180;
let enemyX = 240;
let enemyY = 180;
let score = 0;

// Player Movement
document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowUp") {
        playerY -= 10;
    }

    if (e.key === "ArrowDown") {
        playerY += 10;
    }

    // Keep player inside the box
    if (playerY < 0) playerY = 0;
    if (playerY > 250) playerY = 250;

    player.style.top = playerY + "px";
});

// Game Loop
setInterval(() => {

    // Move enemy
    enemyX -= 10;
    enemy.style.left = enemyX + "px";

    // Collision Detection
    const p = player.getBoundingClientRect();
    const e = enemy.getBoundingClientRect();

    if (
        p.left < e.right &&
        p.right > e.left &&
        p.top < e.bottom &&
        p.bottom > e.top
    ) {
        alert("Game Over!\nFinal Score : " + score);
        restartGame();
        return;
    }

    // Enemy crossed player
    if (enemyX <= -50) {

        score++;
        scoreElement.textContent = score;

        enemyX = 240;

        enemyY = Math.floor(Math.random() * 5) * 60;

        enemy.style.left = enemyX + "px";
        enemy.style.top = enemyY + "px";
    }

}, 100);

// Restart Game
function restartGame() {

    score = 0;
    scoreElement.textContent = score;

    playerY = 180;
    enemyX = 240;
    enemyY = 180;

    player.style.top = playerY + "px";
    enemy.style.left = enemyX + "px";
    enemy.style.top = enemyY + "px";
}