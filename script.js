// Funktion för att skapa fyrverkerier i hjärtform
function createFirework(x, y) {
    const numParticles = 50; // Större antal partiklar för ett imponerande fyrverkeri
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
        firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 80%)`; // Färgglada fyrverkerier
        firework.style.borderRadius = "50%";
        firework.style.animation = "firework-animation 1.5s forwards";
        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;
        firework.style.animationDelay = `${i * 0.02}s`;

        // Skapa hjärtformade rörelser
        const angle = heartShape[i % heartShape.length];
        firework.style.transform = `translate(${angle.x * (Math.random() * 100)}px, ${angle.y * (Math.random() * 100)}px)`;

        document.getElementById("fireworks").appendChild(firework);

        // Ta bort fyrverkeriet efter animationen
        setTimeout(() => firework.remove(), 1500);
    }
}

// Funktion för att skapa blommor med magisk animation
function createFlowers() {
    const numFlowers = 5; // Fler blommor för en imponerande effekt
    for (let i = 0; i < numFlowers; i++) {
        const flower = document.createElement("div");
        flower.classList.add("flower");

        // Placera varje blomma på olika ställen
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        flower.style.left = `${x}px`;
        flower.style.top = `${y}px`;

        // Färga blommorna med slumpmässiga färger
        flower.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 80%)`;

        // Fördröj blomningen för varje blomma
        setTimeout(() => flower.style.opacity = 1, i * 1000);

        document.getElementById("flower-container").appendChild(flower);
    }
}

// Starta fyrverkerier och blommor
createFlowers();

// Skapa fyrverkerier när användaren klickar
document.body.addEventListener("click", function(event) {
    createFirework(event.pageX, event.pageY);
});
