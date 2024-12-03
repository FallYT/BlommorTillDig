document.addEventListener("DOMContentLoaded", () => {
  const plantButton = document.getElementById("plantButton");
  const waterButton = document.getElementById("waterButton");
  const seed = document.getElementById("seed");
  const flower = document.getElementById("flower");

  plantButton.addEventListener("click", () => {
    seed.classList.remove("hidden");
    waterButton.classList.remove("hidden");
    plantButton.classList.add("hidden");
  });

  waterButton.addEventListener("click", () => {
    seed.classList.add("hidden");
    flower.classList.remove("hidden");
    waterButton.classList.add("hidden");
  });
});
