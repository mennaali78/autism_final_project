const selects = document.querySelectorAll("select");

selects.forEach(select => {
    select.addEventListener("change", function() {
        if (this.value === "Mastered") {
            this.style.backgroundColor = "#d4edda";
        } else {
            this.style.backgroundColor = "#f8d7da";
        }
    });
});