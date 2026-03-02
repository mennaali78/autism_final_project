document.querySelectorAll(".circle").forEach(circle => {
    let percent = circle.getAttribute("data-percent");
    circle.style.background =
        `conic-gradient(#6b46c1 ${percent}%, #e5e7eb 0)`;
});