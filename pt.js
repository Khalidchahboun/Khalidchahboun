< script >
    // This function will display an alert message when the page is loaded
    window.onload = function() {
        alert("Welcome to my personal website!");
    } <
    /script> <
    script >
    // Get a reference to the header element
    var header = document.getElementById("header");

// Add an event listener to the header element that listens for clicks
header.addEventListener("click", function() {
    // When the header is clicked, change the color to red
    header.style.color = "red";
}); <
/script>