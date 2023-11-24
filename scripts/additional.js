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
    }
});
const active = document.querySelector('.active');

active.removeAttribute('href'); // kill the users ability to re-load the page by clicking "Home"
active.style.pointerEvents = 'none'; // Remove the highlighting on the active tab when the user mouses over.

document.querySelector('.hamburger').addEventListener('click', function () {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('open');
    if (navMenu.classList.contains('open')) {
        this.textContent = 'X';
    } else {
        this.textContent = '☰';
    }
});

const d_mode = document.getElementById('dark-moder');
const body = document.body;
d_mode.addEventListener('click', () => {
    body.classList.toggle('darkmode');
    if (body.classList.contains('darkmode')) {
        d_mode.textContent = "Light Mode";
    } else {
        d_mode.textContent = "Dark Mode";
    }
});

//local storage for page visits
let page_visits = getCount() || 1;
const count = document.getElementById("visits");
count.textContent = page_visits.toString();
incrementCounter();

function incrementCounter() {
    page_visits += 1;
    setCount(page_visits);
}

function getCount() {
    return JSON.parse(localStorage.getItem("visit-count"));
}

function setCount(amount) {
    localStorage.setItem("visit-count", JSON.stringify(amount));
}

