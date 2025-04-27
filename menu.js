document.addEventListener("DOMContentLoaded", function() {
    const vegMenu = document.getElementById("veg-menu");
    const nonVegMenu = document.getElementById("nonveg-menu");

    // List of food items
    const vegItems = [
        { name: "Idli with Sambar", price: 40, img: "idli.jpg" },
        { name: "Masala Dosa", price: 60, img: "dosa.jpg" },
        { name: "Vada with Chutney", price: 30, img: "vada.jpg" },
        { name: "Pongal", price: 50, img: "pongal.jpg" },
        { name: "Sambar Rice", price: 80, img: "sambar-rice.jpg" },
        { name: "Curd Rice", price: 70, img: "curd-rice.jpg" }
    ];

    const nonVegItems = [
        { name: "Chettinad Chicken Curry", price: 150, img: "chettinad-chicken.jpg" },
        { name: "Mutton Chukka", price: 180, img: "mutton-chukka.jpg" },
        { name: "Fish Fry", price: 120, img: "fish-fry.jpg" },
        { name: "Prawn Masala", price: 200, img: "prawn-masala.jpg" },
        { name: "Chicken 65", price: 140, img: "chicken65.jpg" },
        { name: "Biryani (Mutton)", price: 220, img: "mutton-biryani.jpg" }
    ];

    // Function to generate menu items
    function generateMenu(items, container) {
        items.forEach(item => {
            const menuItem = document.createElement("div");
            menuItem.classList.add("menu-item");

            menuItem.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>
                <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
            `;

            container.appendChild(menuItem);
        });
    }

    generateMenu(vegItems, vegMenu);
    generateMenu(nonVegItems, nonVegMenu);
});

// Function to add items to cart (stores in local storage)
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} added to cart!`);
}
