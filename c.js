let cart = [];
let cartCount = 0;

function addToCart(productName, price) {
    cart.push({ productName, price });
    cartCount++;
    document.getElementById("cart").innerText = `Cart (${cartCount})`;
    alert(`${productName} added to cart!`);
}

// Login Modal Logic
const loginBtn = document.getElementById("login");
const loginModal = document.getElementById("loginModal");
const closeModal = document.querySelector(".close");

// Show the login modal when login button is clicked
loginBtn.onclick = function () {
    loginModal.style.display = "flex";
};

// Hide the login modal when the close button is clicked
closeModal.onclick = function () {
    loginModal.style.display = "none";
};

// Hide the login modal when user clicks outside of the modal
window.onclick = function (event) {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
};

// Simple login function
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "password") {
        localStorage.setItem("isLoggedIn", "true");
        alert("Login successful!");
        loginModal.style.display = "none";
        document.getElementById("login").innerText = "Logout";
        document.getElementById("login").onclick = logout;
    } else {
        alert("Invalid credentials. Try again.");
    }
}

// Simple logout function
function logout() {
    localStorage.removeItem("isLoggedIn");
    alert("Logged out successfully!");
    document.getElementById("login").innerText = "Login";
    document.getElementById("login").onclick = function () {
        loginModal.style.display = "flex";
    };
}

// Check if user is logged in on page load
window.onload = function () {
    if (localStorage.getItem("isLoggedIn") === "true") {
        document.getElementById("login").innerText = "Logout";
        document.getElementById("login").onclick = logout;
    }
};