// Lazy load
document.querySelectorAll('.fade-in').forEach(img => {
    if (img.complete) {
        img.classList.add('loaded'); //we have to see if the image is already loaded otherwise the script will skip it if the image loads before the script runs
    } else {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
    }
});