document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("login-btn");
    const logoutButton = document.getElementById("logout-btn");

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            loginButton.style.display = "none";
            logoutButton.style.display = "block";
        } else {
            loginButton.style.display = "block";
            logoutButton.style.display = "none";
        }
    });

    window.logout = function () {
        firebase.auth().signOut().then(() => {
            alert("Logged out successfully!");
            window.location.href = "index.html";
        }).catch((error) => {
            alert(error.message);
        });
    };
});
