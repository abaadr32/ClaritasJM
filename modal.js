document.addEventListener("DOMContentLoaded", function () {
    const products = [
        //clothing
        { id: 1, name: "Elegant Necklace", price: "$50.00", image: "logo.jpg", description: "A beautiful necklace to add elegance to your style.", sizes: ["S", "M", "L"], availability: "In Stock" },
        { id: 2, name: "Gold Earrings", price: "$30.00", image: "logo.jpg", description: "Stylish gold earrings that complement any outfit.", sizes: ["S", "M"], availability: "In Stock" },
        { id: 3, name: "Diamond Ring", price: "$120.00", image: "logo.jpg", description: "A stunning diamond ring that sparkles with elegance.", sizes: ["M", "L"], availability: "In Stock" },
        // bags
        { id: 4, name: "Elegant Necklace", price: "$50.00", image: "logo.jpg", description: "A beautiful necklace to add elegance to your style." },
        { id: 5, name: "Gold Earrings", price: "$30.00", image: "logo.jpg", description: "Stylish gold earrings that complement any outfit." },
        { id: 6, name: "Diamond Ring", price: "$120.00", image: "logo.jpg", description: "A stunning diamond ring that sparkles with elegance." },
        //sandals
        { id: 7, name: "Elegant Necklace", price: "$50.00", image: "logo.jpg", description: "A beautiful necklace to add elegance to your style." },
        { id: 8, name: "Gold Earrings", price: "$30.00", image: "logo.jpg", description: "Stylish gold earrings that complement any outfit." },
        { id: 9, name: "Diamond Ring", price: "$120.00", image: "logo.jpg", description: "A stunning diamond ring that sparkles with elegance." },
        //makeup
        { id: 10, name: "Elegant Necklace", price: "$50.00", image: "logo.jpg", description: "A beautiful necklace to add elegance to your style." },
        { id: 11, name: "Gold Earrings", price: "$30.00", image: "logo.jpg", description: "Stylish gold earrings that complement any outfit." },
        { id: 12, name: "Diamond Ring", price: "$120.00", image: "logo.jpg", description: "A stunning diamond ring that sparkles with elegance." },
        //jewelery
        { id: 13, name: "Elegant Necklace", price: "$50.00", image: "logo.jpg", description: "A beautiful necklace to add elegance to your style." },
        { id: 14, name: "Gold Earrings", price: "$30.00", image: "logo.jpg", description: "Stylish gold earrings that complement any outfit." },
        { id: 15, name: "Diamond Ring", price: "$120.00", image: "logo.jpg", description: "A stunning diamond ring that sparkles with elegance." },
    ];

    // Select all "View Details" buttons
    const viewButtons = document.querySelectorAll(".view-details");

    viewButtons.forEach(button => {
        button.addEventListener("click", function () {
            const productId = this.getAttribute("data-id");
            const product = products.find(p => p.id == productId);

            if (product) {
                document.getElementById("modalTitle").textContent = product.name;
                document.getElementById("modalImage").src = product.image;
                document.getElementById("modalImage").alt = product.name;
                document.getElementById("modalDescription").textContent = product.description;
                document.getElementById("modalPrice").textContent = product.price;

                // Add sizes to the modal if available
                const modalSizes = document.getElementById("modalSizes");
                if (product.sizes) {
                    modalSizes.textContent = `Available Sizes: ${product.sizes.join(", ")}`;
                    modalSizes.style.display = "block";
                } else {
                    modalSizes.style.display = "none";
                }

                // Show modal using Bootstrap
                const productModal = new bootstrap.Modal(document.getElementById("productModal"));
                productModal.show();
            }
        });
    });
});