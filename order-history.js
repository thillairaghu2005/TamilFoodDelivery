document.addEventListener("DOMContentLoaded", function () {
    let orders = JSON.parse(localStorage.getItem("orderHistory")) || [];
    let orderList = document.getElementById("order-list");

    if (orders.length === 0) {
        orderList.innerHTML = "<p>No past orders found.</p>";
    } else {
        orders.forEach(order => {
            let li = document.createElement("li");
            li.textContent = `Order ID: ${order.id} | Status: ${order.status} | Date: ${order.date}`;
            orderList.appendChild(li);
        });
    }
});

// Function to Save Order to History (Call this when an order is placed)
function saveOrderToHistory(orderID) {
    let orders = JSON.parse(localStorage.getItem("orderHistory")) || [];
    
    let newOrder = {
        id: orderID,
        status: "Delivered",
        date: new Date().toLocaleString()
    };

    orders.push(newOrder);
    localStorage.setItem("orderHistory", JSON.stringify(orders));
}
