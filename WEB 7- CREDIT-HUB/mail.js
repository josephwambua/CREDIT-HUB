document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        sendMail();
    });
});

function sendMail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        country_id: document.getElementById("country_id").value,             
        message: document.getElementById("message").value
    };

    emailjs.send("service_4ry8f4a", "template_ek4igvn", params).then(function(res) {
        alert("Success! " + res.status);

        // Clear the form after successful submission
        document.getElementById("myForm").reset();
    }).catch(function(err) {
        console.error("Failed to send email:", err);
    });
}
