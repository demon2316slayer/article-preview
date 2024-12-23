document.addEventListener('DOMContentLoaded', () => {
    const shareButton = document.getElementById('shareicon');
    const socialDiv = document.querySelector('.social');

    // Toggle the visibility of the social div
    shareButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevents event from propagating to document
        socialDiv.classList.toggle('visible');
    });

    // Hide social div if clicking anywhere else on the page
    document.addEventListener('click', (event) => {
        if (!socialDiv.contains(event.target) && event.target !== shareButton) {
            socialDiv.classList.remove('visible');
        }
    });
});
