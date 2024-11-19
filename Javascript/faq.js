document.querySelectorAll('.faq-question').forEach((item) => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        
        // Close all other open questions
        document.querySelectorAll('.faq-item.active').forEach((openItem) => {
            if (openItem !== parent) {
                openItem.classList.remove('active');
            }
        });

        // Toggle the current question's active state
        parent.classList.toggle('active');
    });
});
