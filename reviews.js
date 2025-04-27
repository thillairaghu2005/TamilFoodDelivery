document.addEventListener("DOMContentLoaded", function() {
    displayReviews();

    document.getElementById("review-form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        let name = document.getElementById("name").value;
        let rating = document.getElementById("rating").value;
        let comment = document.getElementById("comment").value;

        let review = {
            name: name,
            rating: rating,
            comment: comment,
            date: new Date().toLocaleDateString()
        };

        let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        reviews.push(review);
        localStorage.setItem("reviews", JSON.stringify(reviews));

        document.getElementById("review-form").reset();
        displayReviews();
    });
});

// Function to display reviews
function displayReviews() {
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    const reviewsList = document.getElementById("reviews-list");
    
    reviewsList.innerHTML = "";

    if (reviews.length === 0) {
        reviewsList.innerHTML = "<p>No reviews yet. Be the first to review!</p>";
    } else {
        reviews.forEach(review => {
            let reviewDiv = document.createElement("div");
            reviewDiv.classList.add("review");
            reviewDiv.innerHTML = `
                <p><strong>${review.name}</strong> (${review.date})</p>
                <p>Rating: ${"⭐".repeat(review.rating)}</p>
                <p>${review.comment}</p>
            `;
            reviewsList.appendChild(reviewDiv);
        });
    }
}
