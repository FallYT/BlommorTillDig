// Create flowers on the screen
function createFlowers() {
    const numFlowers = 10;
    for (let i = 0; i < numFlowers; i++) {
        const flower = document.createElement("div");
        flower.classList.add("flower");

        // Position the flower randomly on the screen
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        flower.style.left = `${x}px`;
        flower.style.top = `${y}px`;

        // Random color for the flower
        flower.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 80%)`;

        // Add the flower to the container
        document.getElementById("flower-container").appendChild(flower);

        // Fade in the flower
        setTimeout(() => flower.style.opacity = 1, i * 500);
    }
}

// Create fireworks on mouse click
function createFirework(x, y) {
    const firework = document.createElement("div");
    firework.classList.add("firework");

    // Set the position to the click location
    firework.style.left = `${x - 5}px`;
    firework.style.top = `${y - 5}px`;

    // Add the firework to the fireworks container
    document.getElementById("fireworks").appendChild(firework);

    // Animate the firework
    setTimeout(() => {
        firework.remove();
    }, 1500);
}

// Create flowers on page load
createFlowers();

// Add event listener for mouse click to create fireworks
document.body.addEventListener("click", function(event) {
    createFirework(event.pageX, event.pageY);
});
