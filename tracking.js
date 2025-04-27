document.addEventListener("DOMContentLoaded", function () {
    let orderID = localStorage.getItem("orderID");
    
    if (orderID) {
        document.getElementById("order-status").innerHTML = `
            <p><strong>Order ID:</strong> ${orderID}</p>
            <p><strong>Status:</strong> Preparing your food 🍲</p>
            <p>Estimated delivery time: 30-45 minutes.</p>
        `;
    } else {
        document.getElementById("order-status").innerHTML = "<p>No active orders found.</p>";
    }
});

let map;

function initMap() {
    const deliveryLocation = { lat: 13.0827, lng: 80.2707 }; // Chennai default location

    map = new google.maps.Map(document.getElementById("map"), {
        center: deliveryLocation,
        zoom: 12,
    });

    new google.maps.Marker({
        position: deliveryLocation,
        map: map,
        title: "Your Order is Here!",
    });
}

document.addEventListener("DOMContentLoaded", function () {
    let orderID = localStorage.getItem("orderID");

    if (orderID) {
        document.getElementById("order-status").innerHTML = `
            <p><strong>Order ID:</strong> ${orderID}</p>
            <p><strong>Status:</strong> Your food is on the way 🚴💨</p>
            <p>Estimated delivery time: 30-45 minutes.</p>
        `;
    } else {
        document.getElementById("order-status").innerHTML = "<p>No active orders found.</p>";
    }
});

const progress = document.getElementById("progress");
const statusText = document.getElementById("status-text");

const statuses = [
    "Order Received", "Cooking", "Packed", "Out for Delivery"
];

let index = 0;
function updateOrderStatus() {
    if (index < statuses.length) {
        statusText.textContent = statuses[index];
        progress.style.width = `${(index + 1) * 25}%`;
        index++;
        setTimeout(updateOrderStatus, 3000);
    }
}

window.onload = updateOrderStatus;
