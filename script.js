document.addEventListener("DOMContentLoaded", () => {
  const plantButton = document.getElementById("plantButton");
  const waterButton = document.getElementById("waterButton");
  const seed = document.getElementById("seed");
  const stem = document.getElementById("stem");
  const flower = document.getElementById("flower");
  const card = document.getElementById("card");

  plantButton.addEventListener("click", () => {
    seed.classList.remove("hidden");
    waterButton.classList.remove("hidden");
    plantButton.classList.add("hidden");
  });

  waterButton.addEventListener("click", () => {
    seed.classList.add("hidden");
    stem.classList.remove("hidden");

    setTimeout(() => {
      flower.classList.remove("hidden");

      setTimeout(() => {
        card.classList.remove("hidden");
      }, 2000);
    }, 2000);

    waterButton.classList.add("hidden");
  });
});
