document.getElementById("confirm-order-btn").addEventListener("click", function() {
    // Simulate order placement
    let orderID = "TNF" + Math.floor(Math.random() * 1000000); // Random Order ID
    localStorage.setItem("orderID", orderID); // Store Order ID for tracking

    alert("Your order has been placed successfully! Order ID: " + orderID);
    window.location.href = "tracking.html"; // Redirect to tracking page
});

document.getElementById("confirm-order-btn").addEventListener("click", function() {
    let orderID = "TNF" + Math.floor(Math.random() * 1000000);
    localStorage.setItem("orderID", orderID);

    // Save order to history
    saveOrderToHistory(orderID);

    alert("Your order has been placed successfully! Order ID: " + orderID);
    window.location.href = "tracking.html";
});
