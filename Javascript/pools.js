document.addEventListener('DOMContentLoaded', () => {
    const detailButtons = document.querySelectorAll('.project-detail');

    detailButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const detailContent = button.closest('.card-footer2').querySelector('.project-detail-content');

            const isOpen = detailContent.classList.contains('open');

            // Close all open dropdowns
            document.querySelectorAll('.project-detail-content.open').forEach((openContent) => {
                openContent.style.maxHeight = '0';
                openContent.style.opacity = '0';
                openContent.classList.remove('open');
            });

            // If not already open, open the clicked one
            if (!isOpen) {
                detailContent.style.maxHeight = `${detailContent.scrollHeight}px`;
                detailContent.style.opacity = '1';
                detailContent.classList.add('open');
            }
        });
    });
});
