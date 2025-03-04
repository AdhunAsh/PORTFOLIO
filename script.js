document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("contactModal");
    const openBtn = document.getElementById("contact-btn");
    const closeBtn = document.getElementById("close-btn");

    // document.getElementById("contactModal").style = "display : none;";
    // Open modal
    openBtn.addEventListener("click", function () {
        modal.style.display = "block";
    });

    // Close modal when clicking the cancel button
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Handle form submission with mailto
    document.getElementById("send-btn").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent page refresh

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const company = document.getElementById("company").value;
        const projectDetails = document.getElementById("project-details").value;

        // Construct mailto URL
        const subject = `New Project Inquiry from ${name}`;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0ACompany: ${company}%0D%0AProject Details: ${projectDetails}`;

        // Open user's email client
        window.location.href = `mailto:adhunash@gmail.com?subject=${subject}&body=${body}`;
    });
});
