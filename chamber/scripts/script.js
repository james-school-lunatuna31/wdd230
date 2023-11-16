// Dynamic footer
const cur_date = new Date()
const dynamic_footer_date_element = document.getElementById('DynamicDate');
const dyanmic_footer_last_modified_element = document.getElementById('DynamicLastModified');
dynamic_footer_date_element.innerHTML = `&copy; ${cur_date.getFullYear()}`;
dyanmic_footer_last_modified_element.innerHTML = `<span style="color:#fff";>Last modified</span> ${cur_date}`;

//page elements
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

// Hamburger menu
document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.nav-menu').classList.toggle('expanded');
});
