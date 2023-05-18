const cols = document.querySelectorAll(".col");

const scrollOffset = 100;

const elementInView = (el, offset = 100) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );
}

const handleScrollAnimation = () => {
    cols.forEach((col) => {
        if (elementInView(col)) {
            col.classList.add("scrolled-show");
        }
    })
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
})