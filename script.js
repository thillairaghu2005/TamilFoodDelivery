document.addEventListener("DOMContentLoaded", function() {
    // Button Hover Animation
    const orderButton = document.querySelector(".order-now");
    orderButton.addEventListener("mouseover", function() {
        this.style.boxShadow = "0px 0px 15px gold";
    });

    orderButton.addEventListener("mouseout", function() {
        this.style.boxShadow = "none";
    });

    // Language Switcher (Placeholder for now)
    document.getElementById("lang-switch").addEventListener("click", function() {
        alert("Tamil language support coming soon!");
    });
});
