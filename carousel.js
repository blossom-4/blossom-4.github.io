const track = document.querySelector(".carousel-track");
const slides = Array.from(document.querySelectorAll(".project-slide"));
const dots = Array.from(document.querySelectorAll(".carousel-dots button"));

let currentIndex = 0;

function updateCarousel(index) {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * index}px)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");

    currentIndex = index;
}

dots.forEach(dot => {
    dot.addEventListener("click", () => {
        const index = Number(dot.dataset.index);
        updateCarousel(index);
    });
});

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        updateCarousel((currentIndex + 1) % slides.length);
    }
    if (e.key === "ArrowLeft") {
        updateCarousel((currentIndex - 1 + slides.length) % slides.length);
    }
});