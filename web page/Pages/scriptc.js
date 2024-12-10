
    // Wait for the DOM to load
    document.addEventListener("DOMContentLoaded", () => {
        const form = document.querySelector("form");
        const contactFormSection = document.querySelector(".contactform");

        // Handle form submission
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent default form submission
            
            // Collect form data
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            // Create a new container for displaying the submitted data
            const displayContainer = document.createElement("div");
            displayContainer.classList.add("submitted-data");
            displayContainer.innerHTML = `
                <h3>Submitted Data</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `;

            // Append the new container below the form
            contactFormSection.appendChild(displayContainer);

            // Optionally clear the form fields
            form.reset();
        });
    });
