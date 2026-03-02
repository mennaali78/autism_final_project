const dotContainers = document.querySelectorAll(".dots");

dotContainers.forEach(container => {
    const score = container.getAttribute("data-score");

    for (let i = 0; i < 5; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");

        if (i < score) {
            dot.classList.add("active");
        }

        container.appendChild(dot);
    }
});