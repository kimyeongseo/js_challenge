window.addEventListener("resize", () => {
    let w = window.outerWidth;

    if (w <= 1000) {
        document.body.style.backgroundColor = "Black";
    } else if (w <= 1500) {
        document.body.style.backgroundColor = "Tomato";
    } else {
        document.body.style.backgroundColor = "Yellow";
    }
});