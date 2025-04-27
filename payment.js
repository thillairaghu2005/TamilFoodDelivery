document.addEventListener("DOMContentLoaded", function() {
    let total = JSON.parse(localStorage.getItem("cart")).reduce((acc, item) => acc + item.price, 0);
    document.getElementById("payment-total").textContent = total;

    document.getElementById("payment-form").addEventListener("submit", function(event) {
        event.preventDefault();
        saveOrder();
        alert("Order placed successfully! You can track your order.");
        window.location.href = "tracking.html";
    });
});
