let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);  // Change slide every 5 seconds
}
function flipCard(card) {
    card.classList.toggle("flipped");
}

function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("open");
}
