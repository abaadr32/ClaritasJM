document.addEventListener("DOMContentLoaded", function() {
    var menuToggle = document.getElementById("menu-toggle");
    var menu = document.getElementById("menu");
    var menuOverlay = document.getElementById("menu-overlay");

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("active");
        menuOverlay.classList.toggle("active");
    });

    menuOverlay.addEventListener("click", function() {
        menu.classList.remove("active");
        menuOverlay.classList.remove("active");
    });
});
