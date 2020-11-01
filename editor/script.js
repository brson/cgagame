let width = 16*4;
let height = 9*4;

let grid = document.getElementById("grid");

let x = 0
while (x < width * height) {
    let cell = document.createElement("span");
    grid.appendChild(cell);
    
    x += 1;
}

let palette = document.getElementById("palette");

for (span of palette.querySelectorAll("span")) {
    span.classList.add("palette-item");
}

let paletteItems = document.querySelectorAll(".palette-item");

for (item of paletteItems) {
    item.addEventListener("click", event => {
        for (item of paletteItems) {
            item.classList.remove("selected");
        }
        event.target.classList.add("selected");
    });
}
