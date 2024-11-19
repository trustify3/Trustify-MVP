// Newsletter Form Submission
// Newsletter Form Submission
const newsletterForm = document.getElementById('newsletter-form');
const newsletterMessage = document.getElementById('message');
const loadingNewsletter = document.getElementById('loading-newsletter'); // Updated ID for loading indicator

newsletterForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('newsletter-email').value;

    // Show loading indicator
    loadingNewsletter.style.display = 'inline';

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbyUF76k_36WjwFgIyF7XK2KYpK_PSpOb6ebxM-XW_aSnfMxvOS2rPOEZCJMQvzZ7bFunw/exec', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ email }),
        });

        const result = await response.json();
        newsletterMessage.textContent = result.message || 'Subscription successful!';
        newsletterForm.reset();
    } catch (error) {
        console.error(error);
        newsletterMessage.textContent = 'Subscription failed. Please try again.';
    } finally {
        // Hide loading indicator
        loadingNewsletter.style.display = 'none';
    }
});


// Contact Form Submission
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('response');
const loadingContact = document.getElementById('loading');

contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('contact-name').value; // Updated ID
    const email = document.getElementById('contact-email').value; // Updated ID
    const message = document.getElementById('contact-message').value; // Updated ID

    // Show loading indicator
    loadingContact.style.display = 'inline';

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbxVZxN6ZPyOGOrdhaG316hCbnz8_GUsegH2TWbAf2tXqewvefE5qPqR2El51T_asgpd/exec', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ name, email, message }),
        });

        const result = await response.json();
        contactMessage.textContent = result.message || 'Your message has been sent successfully!';
        contactForm.reset();
    } catch (error) {
        console.error(error);
        contactMessage.textContent = 'Message sending failed. Please try again.';
    } finally {
        // Hide loading indicator
        loadingContact.style.display = 'none';
    }
});
