document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll("section");

    function revealOnScroll() {
        sections.forEach(section => {
            let sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run on page load

    // Add shimmer effect to buttons on hover
    let buttons = document.querySelectorAll(".btn, button");
    buttons.forEach(button => {
        button.addEventListener("mouseover", function() {
            button.classList.add("shimmer-effect");
        });

        button.addEventListener("mouseleave", function() {
            button.classList.remove("shimmer-effect");
        });
    });
});

// Preloader Script
window.addEventListener("load", function () {
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
    }, 3000); // Hide preloader after 2 seconds
});
