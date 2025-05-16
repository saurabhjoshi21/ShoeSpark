document.addEventListener("DOMContentLoaded", function () {
    // Popup functions
    function showPopup() {
        const popup = document.getElementById("cart-popup");
        popup.classList.add("visible");
    }

    function closePopup() {
        const popup = document.getElementById("cart-popup");
        popup.classList.remove("visible");
    }

    // Add event listener to all "Add to Cart" buttons inside trending and products
    document.querySelectorAll(".trending-card button, .product-card button").forEach((button) => {
        button.addEventListener("click", showPopup);
    });

    // Close popup button
    const popupCloseBtn = document.querySelector("#cart-popup .popup-content button");
    if (popupCloseBtn) {
        popupCloseBtn.addEventListener("click", closePopup);
    }

    // Close popup by clicking outside
    document.querySelector(".popup-overlay").addEventListener("click", (e) => {
        if (e.target.classList.contains("popup-overlay")) {
            closePopup();
        }
    });
});
