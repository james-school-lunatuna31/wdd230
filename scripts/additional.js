//Make the nav buttons behave like links.
document.querySelectorAll('nav ul li').forEach(function (li) {
    li.addEventListener('click', function () {
        this.querySelector('a').click();
    });
});
document.querySelectorAll('.learning-info-item a').forEach(function (a) {
    a.addEventListener('mouseout', function () {
        this.style.textDecoration = '';
    });
    a.addEventListener('mouseover', function () { // Auto color unfinished links red so we know to do them laters.
        this.style.textDecoration = 'underline';

    });
    if (a.getAttribute('href') === '#') {
        a.style.color = '#a32e2e';
        a.style.textDecoration = 'underline';
        a.setAttribute('title', 'under construction');
    } else {
        a.style.color = 'blue';
    }
});
const active = document.querySelector('.active');

active.removeAttribute('href'); // kill the users ability to re-load the page by clicking "Home"
active.style.pointerEvents = 'none'; // Remove the highlighting on the active tab when the user mouses over.



