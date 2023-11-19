// Dynamic footer
const cur_date = new Date()
const dynamic_footer_date_element = document.getElementById('DynamicDate');
const dynamic_footer_last_modified_element = document.getElementById('DynamicLastModified');
dynamic_footer_date_element.innerHTML = `&copy; ${cur_date.getFullYear()}`;
dynamic_footer_last_modified_element.innerHTML = `<span style="color:#fff";>Last modified</span> ${cur_date}`;

//page elements
if (window.location.pathname === '/chamber/index.html') {
    const signup_response = "";
    const signup_response_element = document.getElementById("button-response");
    signup_response_element.textContent = signup_response;
    let sign_up_button = document.getElementById('signup').addEventListener('click', () => {
        let join_input = document.querySelector('#join-input textarea');
        if (join_input.value.trim() !== "") { //you could regex valid email addresses here if you wanted.
            signup_response_element.innerHTML = "Signed Up!";
        } else {
            signup_response_element.innerHTML = "Invalid entry";
        }
    });
}

// Hamburger menu
document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.nav-menu').classList.toggle('expanded');
});

// discovery
if (window.location.pathname === '/chamber/discover.html') {
    function addToLocalStorage(key, variable) {
        localStorage.setItem(key, JSON.stringify(variable));
    }

    function getFromLocalStorage(key, defaultvalue) {
        let item = localStorage.getItem(key);
        try {
            return JSON.parse(item) || defaultvalue;
        } catch (e) {
            return defaultvalue;
        }
    }

    function purgeLocalStorage() {
        localStorage.clear();
    }

    function getVisitMessage(lastVisited) {
        let currentDate = new Date();
        if (!lastVisited) {
            return "Welcome! Let us know if you have any questions.";
        } else {
            let lastVisitedDate = new Date(lastVisited);
            let diffInTime = currentDate.getTime() - lastVisitedDate.getTime();
            let diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
            if (diffInDays < 1) {
                return "Back so soon! Awesome!";
            } else {
                if (diffInDays > 1) {
                    return `You last visited ${diffInDays} days ago.`;
                } else {
                    return `You last visited ${diffInDays} day ago.`;
                }
            }
        }
    }

    let disc_visitmessage_element = document.getElementById("visitmessage");
    let disc_lastvisited_element = document.getElementById("lastvisited");
    let disc_totalvisits_element = document.getElementById("totalvisits");
    let disc_lastvisited = getFromLocalStorage("dateLastVisited_disc", new Date().toISOString());
    let disc_totalvisits = getFromLocalStorage("totalVisits_disc", 0);

    disc_totalvisits++;
    addToLocalStorage("totalVisits_disc", disc_totalvisits);

    let currentDate = new Date();
    addToLocalStorage("dateLastVisited_disc", currentDate.toISOString());

    let disc_visitmessage = getVisitMessage(disc_lastvisited);

    disc_visitmessage_element.textContent = disc_visitmessage;
    let formattedDate = new Date(disc_lastvisited).toLocaleString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });
    disc_lastvisited_element.textContent = `Last visited: ${formattedDate}`;
    disc_totalvisits_element.textContent = `Total visits: ${disc_totalvisits}`;
}
