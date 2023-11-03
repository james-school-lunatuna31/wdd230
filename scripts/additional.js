//Make the nav buttons behave like links.
document.querySelectorAll('nav ul li').forEach(function (li) {
    li.addEventListener('click', function () {
        this.querySelector('a').click();
    });
});