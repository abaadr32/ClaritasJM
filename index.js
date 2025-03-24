$(document).ready(function() {
    $("#menu-toggle").click(function() {
        $("#menu").toggleClass("active");
        $("#menu-overlay").toggleClass("active");
    });

    $("#menu-overlay").click(function() {
        $("#menu").removeClass("active");
        $("#menu-overlay").removeClass("active");
    });
});
