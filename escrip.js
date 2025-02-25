document.addEventListener("keydown", function(event) {
    if (event.key === "m" || event.key === "M") {
        document.getElementById("B1").classList.toggle("hidden");
    }
});

document.getElementById("C2").addEventListener("mousedown", function() {
    this.style.backgroundColor = 'pink';
});
document.getElementById("C2").addEventListener("mouseup", function() {
    this.style.backgroundColor = 'white';
});

document.getElementById("C3").addEventListener("mouseover", function() {
    this.style.border = '5px solid purple';
});
document.getElementById("C3").addEventListener("mouseout", function() {
    this.style.border = 'none';
});