document.addEventListener("DOMContentLoaded", function () {
    const products = [
        //jewelry
        { id: 75, name: "Watch Set", price: "$35.00", image: "silverwatch.png", description: "Elegant silver watch with matching chain.", shipping: "Shipping Country Wide" },
        { id: 1, name: "Silver Sets", price: "$45.00", image: "silver1.png", description: "Nice Elegant Silver Chain", shipping: "Shipping Country Wide" },
        { id: 2, name: "Silver Sets", price: "$45.00", image: "silver2.png", description: "Nice Elegant Silver Chain", shipping: "Shipping Country Wide" },
        { id: 3, name: "Cross Gold Earring", price: "$70.00", image: "goldj.png", description: "Cross Golden Earring of 10kT Gold",shipping: "Shipping Country Wide" },
        { id: 4, name: "Stone Gold Earring", price: "$85.00", image: "gold2j.png", description: "Stone Golden Earring of 10KT Gold", shipping: "Shipping Country Wide" },
        { id: 5, name: "Star Gold Earrings", price: "$30.00", image: "gold3j.png", description: "Star Golden Earrings of 10KT Gold", shipping: "Shipping Country Wide" },
        //makeup     
        { id: 6, name: "Contour", price: "$6.00", image: "make1.png", description: "Define your features with this smooth blend contour.", shipping: "Shipping Country Wide" },
        { id: 7, name: "Butterfly Lipstick", price: "$12.00", image: "make2.png", description: "Long-lasting lipstick with a rich, matte finish.", shipping: "Shipping Country Wide" },
        { id: 8, name: "Butterfly Lipstick", price: "$12.00", image: "make3.png", description: "Bold color and soft texture for all-day wear.", shipping: "Shipping Country Wide" },
        { id: 9, name: "Triangle Sponge", price: "$3.00", image: "make4.png", description: "Perfect sponge for smooth and flawless blending.", shipping: "Shipping Country Wide" },
        { id: 10, name: "Blush Powder", price: "$5.00", image: "make6.png", description: "Adds a soft, natural glow to your cheeks.", shipping: "Shipping Country Wide" },
        { id: 11, name: "Blush Powder", price: "$5.00", image: "make7.png", description: "Light and buildable formula for all skin tones.", shipping: "Shipping Country Wide" },
        { id: 12, name: "Blush Powder", price: "$5.00", image: "make8.png", description: "Silky blush powder for a radiant look.", shipping: "Shipping Country Wide" },
        { id: 13, name: "Hello Kitty Perfume", price: "$8.00", image: "make10.png", description: "Sweet and playful fragrance in a cute bottle.", shipping: "Shipping Country Wide" },
        { id: 14, name: "Maestro Touch", price: "$10.00", image: "make11.png", description: "Luxurious powder with a soft touch finish.", shipping: "Shipping Country Wide" },
        { id: 15, name: "Ultramo", price: "$10.00", image: "ultramo.png", description: "Vibrant eyeshadow palette with bold colors.", shipping: "Shipping Country Wide" },
        { id: 16, name: "Ultramo Elegant Colors", price: "$14.00", image: "ultramo1.png", description: "Elegant mix of matte and shimmer shadows.", shipping: "Shipping Country Wide" },
        { id: 17, name: "Retinol", price: "$10.00", image: "retinol.png", description: "Brightens skin and reduces fine lines.", shipping: "Shipping Country Wide" },
        { id: 18, name: "Blossom Makeup", price: "$14.00", image: "blossom.png", description: "Soft tones inspired by springtime blossoms.", shipping: "Shipping Country Wide" },
        { id: 19, name: "Express Love", price: "$14.00", image: "express.png", description: "Romantic shades for a soft glam look.", shipping: "Shipping Country Wide" },
        { id: 20, name: "Karol G MakeUp", price: "$14.00", image: "karolm.png", description: "Bold colors inspired by Karol G’s iconic style.", shipping: "Shipping Country Wide" },     
        //sandals
        { id: 21, name: "Black Slipper", price: "$25.00", image: "blacks.png", description: "Comfy black slippers for everyday use.", shipping: "Shipping Country Wide" },
        { id: 22, name: "Gold Slipper", price: "$25.00", image: "gold.png", description: "Shiny gold slippers that stand out.", shipping: "Shipping Country Wide" },
        { id: 23, name: "Pink Slipper", price: "$25.00", image: "pinks.png", description: "Soft pink slippers with a cute finish.", shipping: "Shipping Country Wide" },
        { id: 24, name: "Pink Slipper", price: "$25.00", image: "pinks2.png", description: "Trendy pink slippers for casual wear.", shipping: "Shipping Country Wide" },
        { id: 25, name: "Pink Sandal", price: "$28.00", image: "sandal1.png", description: "Stylish pink sandals with comfy straps.", shipping: "Shipping Country Wide" },
        { id: 26, name: "Brown Sandal", price: "$28.00", image: "sandal2.png", description: "Classic brown sandals for any outfit.", shipping: "Shipping Country Wide" },
        { id: 27, name: "Black Sandal", price: "$28.00", image: "sandal3.png", description: "Everyday black sandals with support.", shipping: "Shipping Country Wide" },
        { id: 28, name: "Brown Sandal", price: "$28.00", image: "sandal4.png", description: "Simple brown sandals for daily use.", shipping: "Shipping Country Wide" },
        { id: 29, name: "Black Sandal", price: "$28.00", image: "sandal5.png", description: "Durable black sandals with grip sole.", shipping: "Shipping Country Wide" },
        { id: 30, name: "Red Sandal", price: "$28.00", image: "sandal6.png", description: "Bold red sandals that pop with style.", shipping: "Shipping Country Wide" },
        { id: 31, name: "Brown Sandal", price: "$28.00", image: "sandal7.png", description: "Neutral-tone sandals for everyday wear.", shipping: "Shipping Country Wide" },
        { id: 32, name: "White Sandal", price: "$28.00", image: "sandal8.png", description: "Clean white sandals, great for summer.", shipping: "Shipping Country Wide" },
        { id: 33, name: "Black Sandal", price: "$28.00", image: "sandal9.png", description: "Minimal black sandals for all-day comfort.", shipping: "Shipping Country Wide" },
        { id: 34, name: "Black Sandal", price: "$28.00", image: "sandal10.png", description: "Sleek black sandals with a modern look.", shipping: "Shipping Country Wide" },
        { id: 35, name: "Khaki Sandal", price: "$28.00", image: "sandal11.png", description: "Chic khaki sandals that match anything.", shipping: "Shipping Country Wide" },
        { id: 36, name: "Red Sandal", price: "$28.00", image: "sandal12.png", description: "Vibrant red sandals to brighten your step.", shipping: "Shipping Country Wide" },
        { id: 37, name: "Brown Sandal", price: "$28.00", image: "sandal13.png", description: "Comfortable brown sandals for daily use.", shipping: "Shipping Country Wide" },
        { id: 38, name: "Black Sandal", price: "$28.00", image: "sandal14.png", description: "Go-to black sandals with a classic fit.", shipping: "Shipping Country Wide" },
        { id: 39, name: "Brown Sandal", price: "$28.00", image: "sandal15.png", description: "Durable brown sandals with a comfy feel.", shipping: "Shipping Country Wide" },
        { id: 40, name: "Black Sandal", price: "$28.00", image: "sandal16.png", description: "Classic black sandals for versatile wear.", shipping: "Shipping Country Wide" },
        { id: 41, name: "Maya Blue Sandal", price: "$28.00", image: "sandal17.png", description: "Cool blue sandals with a fun touch.", shipping: "Shipping Country Wide" },
        { id: 42, name: "Brown Sandal", price: "$28.00", image: "sandal18.png", description: "Everyday brown sandals for comfort.", shipping: "Shipping Country Wide" },
        { id: 43, name: "Black Sandal", price: "$28.00", image: "sandal19.png", description: "Elegant black sandals with subtle style.", shipping: "Shipping Country Wide" },
        { id: 44, name: "Black Sandal", price: "$28.00", image: "sandal20.png", description: "Lightweight black sandals for casual use.", shipping: "Shipping Country Wide" },
        { id: 45, name: "Brown Sandal", price: "$28.00", image: "sandal21.png", description: "Earth-tone sandals for relaxed days.", shipping: "Shipping Country Wide" },
        { id: 46, name: "White Sandal", price: "$28.00", image: "sandal22.png", description: "Sleek white sandals for a fresh look.", shipping: "Shipping Country Wide" },
        { id: 47, name: "Khaki Sandal", price: "$28.00", image: "sandal23.png", description: "Neutral khaki sandals for any outing.", shipping: "Shipping Country Wide" },
        { id: 48, name: "White Sandal", price: "$28.00", image: "sandal24.png", description: "Stylish white sandals for light outfits.", shipping: "Shipping Country Wide" },
        { id: 49, name: "Yellow Sandal", price: "$28.00", image: "sandal25.png", description: "Bright yellow sandals full of personality.", shipping: "Shipping Country Wide" },
        { id: 50, name: "Khaki Sandal", price: "$28.00", image: "sandal26.png", description: "Comfy khaki sandals with soft straps.", shipping: "Shipping Country Wide" },
        { id: 51, name: "Leopardo Sandal", price: "$28.00", image: "sandal27.png", description: "Bold leopard print sandals with flair.", shipping: "Shipping Country Wide" },
        { id: 52, name: "Blue Sandal", price: "$28.00", image: "sandal28.png", description: "Fun blue sandals with a cool vibe.", shipping: "Shipping Country Wide" },
        { id: 53, name: "Brown Sandal", price: "$28.00", image: "sandal29.png", description: "Reliable brown sandals for daily wear.", shipping: "Shipping Country Wide" },
        { id: 54, name: "Transparent Sandal", price: "$28.00", image: "sandal30.png", description: "Trendy clear sandals that match anything.", shipping: "Shipping Country Wide" },            
        //bags
        { id: 55, name: "Pink HandBag", price: "$18.00", image: "bag1.png", description: "Stylish pink handbag perfect for daily use.", shipping: "Shipping Country Wide" },
        { id: 56, name: "Black Cross Bag", price: "$18.00", image: "blackb.png", description: "Sleek and compact black crossbody bag.", shipping: "Shipping Country Wide" },
        { id: 57, name: "Blue Crossbody Bags", price: "$16.00", image: "blueb.png", description: "Trendy blue bag with adjustable strap.", shipping: "Shipping Country Wide" },
        { id: 58, name: "Brown Bag", price: "$24.00", image: "brownb.png", description: "Chic brown handbag for casual outings.", shipping: "Shipping Country Wide" },
        { id: 59, name: "Brown HandBag", price: "$24.00", image: "brownb1.png", description: "Elegant brown bag with roomy interior.", shipping: "Shipping Country Wide" },
        { id: 60, name: "Pink Crossbody Bag", price: "$16.00", image: "pinkb.png", description: "Cute and compact pink crossbody bag.", shipping: "Shipping Country Wide" },
        { id: 61, name: "Blue Crossbody Bag", price: "$18.00", image: "blue2.png", description: "Versatile blue bag with a modern look.", shipping: "Shipping Country Wide" },
        { id: 62, name: "Light Pink Bag", price: "$24.00", image: "purpleb.png", description: "Soft-toned bag with a stylish finish.", shipping: "Shipping Country Wide" },
        
        //clothing
        { id: 63, name: "Flower Sun Dress", price: "$38.00", image: "dress1.png", description: "Shiny flower sun dress perfect for parties or events.", shipping: "Shipping Country Wide" },
        { id: 64, name: "Striped Dress", price: "$38.00", image: "whitedress.png", description: "Elegant striped dress for any special occasion.", shipping: "Shipping Country Wide" },
        { id: 65, name: "Minnie Towel", price: "$20.00", image: "minne.png", description: "Soft towel featuring adorable Minnie design.", shipping: "Shipping Country Wide" },
        { id: 66, name: "Chivas Towel", price: "$20.00", image: "chivas.png", description: "Bold towel for true Chivas football fans.", shipping: "Shipping Country Wide" },
        { id: 67, name: "Kuromi Towel", price: "$20.00", image: "kuromi.png", description: "Cute and comfy towel with Kuromi print.", shipping: "Shipping Country Wide" },
        { id: 68, name: "My Little Pony Towel", price: "$20.00", image: "pony.png", description: "Colorful towel with My Little Pony design.", shipping: "Shipping Country Wide" },
        { id: 69, name: "Hello Kitty Towel", price: "$20.00", image: "kitty.png", description: "Soft towel with the classic Hello Kitty charm.", shipping: "Shipping Country Wide" },
        { id: 70, name: "América Pillow", price: "$15.00", image: "america.png", description: "Cozy pillow for Club América supporters.", shipping: "Shipping Country Wide" },
        { id: 71, name: "Stitch Pillow", price: "$15.00", image: "sticky.png", description: "Comfy pillow featuring the lovable Stitch.", shipping: "Shipping Country Wide" },
        { id: 72, name: "Disney Princess Pillow", price: "$15.00", image: "princess.png", description: "Charming pillow with Disney princess designs.", shipping: "Shipping Country Wide" },
        { id: 73, name: "Bluey Pillow", price: "$35.00", image: "bluey.png", description: "Fun and fluffy pillow with Bluey print.", shipping: "Shipping Country Wide" },
        { id: 74, name: "Cruz Azul Pillow", price: "$35.00", image: "cruzazul.png", description: "Support Cruz Azul with this comfy pillow.", shipping: "Shipping Country Wide" },
        
    ];

    function openProductModal(productId) {
        const product = products.find(p => p.id == productId);
        if (product) {
            document.getElementById("modalTitle").textContent = product.name;
            document.getElementById("modalImage").src = product.image;
            document.getElementById("modalImage").alt = product.name;
            document.getElementById("modalDescription").textContent = product.description;
            document.getElementById("modalPrice").textContent = product.price;

            const modalShipping = document.getElementById("modalShipping");
            if (product.shipping) {
                modalShipping.textContent = product.shipping;
                modalShipping.style.display = "block";
            } else {
                modalShipping.style.display = "none";
            }

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
