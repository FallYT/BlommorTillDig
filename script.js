function createFirework(x, y) {
    const numParticles = 50; // Increased particle count for a better firework
    const heartShape = [
        { x: 0, y: -1 },
        { x: 1, y: -2 },
        { x: 2, y: -1 },
        { x: 3, y: 0 },
        { x: 2, y: 1 },
        { x: 1, y: 2 },
        { x: 0, y: 1 },
        { x: -1, y: 2 },
        { x: -2, y: 1 },
        { x: -3, y: 0 },
        { x: -2, y: -1 },
        { x: -1, y: -2 }
    ];

    for (let i = 0; i < numParticles; i++) {
        const firework = document.createElement("div");
        firework.style.position = "absolute";
        firework.style.width = "10px";
        firework.style.height = "10px";
        firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 80%)`; // Colorful fireworks
        firework.style.borderRadius = "50%";
        firework.style.animation = "firework-animation 1.5s forwards";
        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;
        firework.style.animationDelay = `${i * 0.02}s`;

        const angle = heartShape[i % heartShape.length];
        firework.style.transform = `translate(${angle.x * (Math.random() * 100)}px, ${angle.y * (Math.random() * 100)}px)`;

        document.getElementById("fireworks").appendChild(firework);

        setTimeout(() => firework.remove(), 1500);
    }
}

function createFlowers() {
    const numFlowers = 5; // Create more flowers for a fuller effect
    for (let i = 0; i < numFlowers; i++) {
        const flower = document.createElement("div");
        flower.classList.add("flower");

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        flower.style.left = `${x}px`;
        flower.style.top = `${y}px`;

        flower.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 80%)`;

        setTimeout(() => flower.style.opacity = 1, i * 1000);

        document.getElementById("flower-container").appendChild(flower);
    }
}

createFlowers();

document.body.addEventListener("click", function(event) {
    createFirework(event.pageX, event.pageY);
});
