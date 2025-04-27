const translations = {
    "en": {
        "home": "Home",
        "menu": "Menu",
        "cart": "Cart",
        "tracking": "Order Tracking",
        "reviews": "Reviews",
        "switch_lang": "தமிழ் / English",
        "write_review": "Write a Review",
        "your_name": "Your Name:",
        "rating": "Rating:",
        "review": "Review:",
        "submit": "Submit Review",
        "customer_reviews": "Customer Reviews",
        "no_reviews": "No reviews yet. Be the first to review!",
        "order_status": "Current Order Status",
        "order_history": "Order History"
    },
    "ta": {
        "home": "முகப்பு",
        "menu": "பட்டியல்",
        "cart": "வங்கி",
        "tracking": "ஆர்டர் கண்காணிப்பு",
        "reviews": "விமர்சனங்கள்",
        "switch_lang": "English / தமிழ்",
        "write_review": "விமர்சனம் எழுதுங்கள்",
        "your_name": "உங்கள் பெயர்:",
        "rating": "மதிப்பீடு:",
        "review": "விமர்சனம்:",
        "submit": "சமர்ப்பிக்கவும்",
        "customer_reviews": "வாடிக்கையாளர் விமர்சனங்கள்",
        "no_reviews": "இன்னும் விமர்சனங்கள் இல்லை. முதலில் விமர்சனம் செய்யுங்கள்!",
        "order_status": "தற்போதைய ஆர்டர் நிலை",
        "order_history": "ஆர்டர் வரலாறு"
    }
};

// Function to switch language
function switchLanguage(lang) {
    localStorage.setItem("language", lang);
    document.querySelector("#lang-switch").textContent = translations[lang]["switch_lang"];

    document.querySelectorAll("[data-lang]").forEach(element => {
        let key = element.getAttribute("data-lang");
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Load saved language or default to English
document.addEventListener("DOMContentLoaded", function() {
    let savedLang = localStorage.getItem("language") || "en";
    switchLanguage(savedLang);

    document.querySelector("#lang-switch").addEventListener("click", function() {
        let newLang = localStorage.getItem("language") === "en" ? "ta" : "en";
        switchLanguage(newLang);
    });
});

<script defer src="lang.js"></script>
