document.addEventListener("DOMContentLoaded", function() {
    displayCartItems();
});

// Function to display cart items
function displayCartItems() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartTable = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartTable.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>₹${item.price}</td>
            <td><button onclick="removeItem(${index})">Remove</button></td>
        `;
        cartTable.appendChild(row);
        total += item.price;
    });

    cartTotal.textContent = total;
}

// Function to remove an item from cart
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
}

// Function to clear cart
function clearCart() {
    localStorage.removeItem("cart");
    displayCartItems();
}

// Function to proceed to payment
function proceedToPayment() {
    if (JSON.parse(localStorage.getItem("cart")).length === 0) {
        alert("Your cart is empty!");
    } else {
        window.location.href = "payment.html";
    }
}
