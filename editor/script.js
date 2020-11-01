let width = 16*4;
let height = 9*4;

let grid = document.getElementById("grid");

let x = 0
while (x < width * height) {
    let cell = document.createElement("span");
    grid.appendChild(cell);
    
    x += 1;
}
