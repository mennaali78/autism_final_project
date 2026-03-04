
// STAR TOGGLE
document.querySelectorAll(".star").forEach(star => {
    star.addEventListener("click", function () {
        this.classList.toggle("fa-solid");
        this.classList.toggle("fa-regular");
        this.style.color = this.classList.contains("fa-solid") ? "gold" : "";
    });
});

// PLUS CLICK
document.querySelectorAll(".plus").forEach(btn => {
    btn.addEventListener("click", function () {
        alert("Added to Progress ✅");
    });
});

// MINUS CLICK
document.querySelectorAll(".minus").forEach(btn => {
    btn.addEventListener("click", function () {
        alert("Removed ❌");
    });
});