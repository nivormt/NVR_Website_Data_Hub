/**
     * index.js
     * Page-specific interactive logic for the NIVOR Hub Directory.
     */

document.addEventListener('DOMContentLoaded', () => {
    // Logo Click Reload
    const logoContainer = document.querySelector('.nvr-logo-container');
    if (logoContainer) {
        logoContainer.addEventListener('click', () => {
            window.location.reload();
        });
    }

    // Active Card Navigation
    const activeFormCard = document.querySelector('.forms-grid .form-card:not(.form-card--upcoming)');
    if (activeFormCard) {
        activeFormCard.addEventListener('click', () => {
            window.location.href = 'social-media-form.html';
        });
    }
});
