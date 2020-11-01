"use strict";

let width = 16*4;
let height = 9*4;

let grid = document.getElementById("grid");

let x = 0
while (x < width * height) {
    let cell = document.createElement("span");
    cell.classList.add("cell");
    grid.appendChild(cell);
    
    x += 1;
}

let palette = document.getElementById("palette");

for (let span of palette.querySelectorAll("span")) {
    span.classList.add("palette-item");
}

let paletteItems = document.querySelectorAll(".palette-item");

function selectPaletteItem(event) {
    for (let item of paletteItems) {
        item.classList.remove("selected");
    }
    let item = event.target;
    item.classList.add("selected");
}

for (let item of paletteItems) {
    item.addEventListener("click", selectPaletteItem);
}

function insertTileValue(event) {
    let selected = palette.querySelector(".selected");
    console.log(selected);

    if (selected == null) {
        return;
    }

    let cell = event.target;
    let value = selected.innerText;
    console.log(value);
    cell.innerText = value;
}

let cells = document.querySelectorAll(".cell");

for (let cell of cells) {
    cell.addEventListener("click", insertTileValue);
}

let toggles = document.querySelectorAll(".toggle");

let toggleOnChar = "●";
let toggleOffChar = "○";

function doToggle(event) {
    let span = event.target;
    if (span.classList.contains("on")) {
        span.classList.remove("on");
        span.classList.add("off");
        span.innerText = toggleOffChar;
    } else {
        span.classList.remove("off");
        span.classList.add("on");
        span.innerText = toggleOnChar;
    }
}

for (let toggle of toggles) {
    if (toggle.classList.contains("on")) {
        toggle.innerText = toggleOnChar;
    } else {
        toggle.innerText = toggleOffChar;
    }
    toggle.addEventListener("click", doToggle);
}

let gridToggle = document.getElementById("toggle-grid");
gridToggle.addEventListener("click", event => {
    if (gridToggle.classList.contains("on")) {
        grid.classList.remove("nogrid");
    } else {
        grid.classList.add("nogrid");
    }
});
