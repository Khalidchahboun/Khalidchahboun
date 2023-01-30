document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent the form from submitting

    // get the form data
    var formData = new FormData(this);

    // send the form data to the server
    fetch("send-email.php", {
            method: "POST",
            email: "chahbounkhalid084@gmail.com",
            body: formData
        })
        .then(function(response) {
            // handle the response from the server
        });
});