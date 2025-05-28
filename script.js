document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the target tab ID from data-tab attribute
            const targetTabId = button.dataset.tab;

            // Deactivate all tab buttons and hide all tab contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Activate the clicked button
            button.classList.add('active');

            // Show the corresponding tab content
            const targetContent = document.getElementById(targetTabId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Set current year in footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Optional: Handle contact form submission (basic example)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Here you would typically send this data to a backend or a service like Formspree/Netlify Forms
            console.log('Form Submitted:', { name, email, message });
            alert('Thank you for your message, ' + name + '! (This is a demo)');
            contactForm.reset(); // Clear the form
        });
    }
});