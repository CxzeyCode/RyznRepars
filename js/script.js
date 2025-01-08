// Toggle Sidebar on Click
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}

// Automatically Open Sidebar on Hover
document.addEventListener('mousemove', function(e) {
    const sidebar = document.getElementById("sidebar");

    // Open sidebar if hovering near the left side
    if (e.clientX < 50) {
        sidebar.classList.add("open");
    } 
    // Close sidebar if the mouse moves away from the sidebar
    if (e.clientX > 250 && sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
    }
});

// Close Sidebar When Clicking a Link
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        const sidebar = document.getElementById("sidebar");
        sidebar.classList.remove("open");
    });
});

// Flip Card Functionality for Services Page
function flipCard(card) {
    card.classList.toggle("flipped");
}

// Add Flip Card Click Event (Only on Services Page)
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');

    if (serviceCards.length > 0) {
        console.log("Flip cards detected. Binding click events...");

        serviceCards.forEach(card => {
            card.addEventListener('click', function() {
                flipCard(card);
            });
        });
    } else {
        console.log("No flip cards found on this page.");
    }
});

// Sidebar Close on Link Click (Optional for Better UX)
document.querySelectorAll('.sidebar ul li a').forEach(link => {
    link.addEventListener('click', () => {
        const sidebar = document.getElementById("sidebar");
        sidebar.classList.remove("open");
    });
});

// Debugging Helper (Optional - Check if JS Loads Correctly)
console.log("JavaScript loaded successfully!");

let slideIndex = 0;

// Show slides automatically
function showSlides() {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");

    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    dots[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 8000); // Change slide every 4 seconds
}

document.addEventListener('DOMContentLoaded', showSlides);

// Manual control
function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}
