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
        a.style.color = 'red';
        a.style.textDecoration = 'underline';
        a.setAttribute('title', 'under construction');
    } else {
        a.style.color = 'blue';
    }
});
