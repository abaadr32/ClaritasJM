document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { id: 1, name: "Stylish T-Shirt", price: "$20.00", image: "logo.jpg", description: "A stylish t-shirt for casual wear.", sizes: ["S", "M", "L"], availability: "In Stock" },
        { id: 2, name: "Classic Jeans", price: "$40.00", image: "logo.jpg", description: "Comfortable jeans for everyday use.", sizes: ["M", "L"], availability: "In Stock" },
        { id: 3, name: "Leather Jacket", price: "$80.00", image: "logo.jpg", description: "A trendy leather jacket for a bold look.", sizes: ["S", "M"], availability: "In Stock" },
        { id: 21, name: "Elegant Necklace", price: "$50.00", image: "logo.jpg", description: "A beautiful necklace to add elegance to your style.", sizes: ["S", "M", "L"], availability: "In Stock" },
        { id: 14, name: "Gold Earrings", price: "$30.00", image: "logo.jpg", description: "Stylish gold earrings that complement any outfit.", sizes: ["S", "M"], availability: "In Stock" },
        { id: 15, name: "Diamond Ring", price: "$120.00", image: "logo.jpg", description: "A stunning diamond ring that sparkles with elegance.", sizes: ["M", "L"], availability: "In Stock" }
    ];

    function openProductModal(productId) {
        const product = products.find(p => p.id == productId);
        if (product) {
            document.getElementById("modalTitle").textContent = product.name;
            document.getElementById("modalImage").src = product.image;
            document.getElementById("modalImage").alt = product.name;
            document.getElementById("modalDescription").textContent = product.description;
            document.getElementById("modalPrice").textContent = product.price;

            const modalSizes = document.getElementById("modalSizes");
            if (product.sizes) {
                modalSizes.innerHTML = `Available Sizes: <span>${product.sizes.join(", ")}</span>`;
                modalSizes.style.display = "block";
            } else {
                modalSizes.style.display = "none";
            }

            const productModal = new bootstrap.Modal(document.getElementById("productModal"));
            productModal.show();
        }
    }

    // Attach event listener to entire card
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", function () {
            const productId = this.getAttribute("data-id");
            if (productId) {
                openProductModal(productId);
            }
        });
    });
});
