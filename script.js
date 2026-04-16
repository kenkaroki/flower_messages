const garden = document.getElementById("garden");
const card = document.getElementById("card");

// 🌸 CONTROL FLOWER COUNT
const FLOWER_COUNT = 120;

// Grid calculation
const COLS = Math.ceil(Math.sqrt(FLOWER_COUNT * 1.5));
const ROWS = Math.ceil(FLOWER_COUNT / COLS);

const cellWidth = 100 / COLS;
const cellHeight = 100 / ROWS;

let created = 0;

for (let row = 0; row < ROWS; row++) {
  for (let col = 0; col < COLS; col++) {
    if (created >= FLOWER_COUNT) break;

    const flower = document.createElement("div");
    flower.classList.add("flower");

    // Size
    const size = Math.random() * 25 + 20;
    flower.style.width = size + "px";
    flower.style.height = size + "px";

    // Position
    const x = col * cellWidth + Math.random() * cellWidth;
    const y = row * cellHeight + Math.random() * cellHeight;

    flower.style.left = x + "vw";
    flower.style.top = y + "vh";

    // 🌱 Stem
    const stem = document.createElement("span");
    stem.classList.add("stem");

    const stemHeight = Math.random() * 50 + 40;
    stem.style.setProperty("--stem-height", stemHeight + "px");

    flower.appendChild(stem);
    garden.appendChild(flower);

    created++;
  }
}

const flowers = document.querySelectorAll(".flower");

// Animation
window.onload = () => {
  setTimeout(() => {
    flowers.forEach((flower) => {
      const delay = Math.random() * 1000;

      setTimeout(() => {
        flower.classList.add("bloom");
      }, delay);
    });

    setTimeout(() => {
      card.classList.add("show");
    }, 4500);
  }, 1000);
};
