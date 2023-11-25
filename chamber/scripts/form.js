if (window.location.pathname.endsWith('join.html')) {

    document.querySelector('form').addEventListener('submit', function (event) {
        const firstName = document.getElementById('fname');
        const lastName = document.getElementById('lname');
        const title = document.getElementById('title');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const organization = document.getElementById('organization');
        const membershipLevel = document.getElementById('membership-level');
        const description = document.getElementById('description');
        const timestamp = document.getElementById('timestamp');

        const titlePattern = title.pattern;

        [firstName, lastName, title, email, phone, organization].forEach(field => {
            field.classList.remove('recheck');
            field.addEventListener('input', function () {
                if (this.checkValidity()) {
                    this.classList.remove('recheck');
                }
            });
        });

        firstName.classList.remove('recheck');
        lastName.classList.remove('recheck');
        title.classList.remove('recheck');
        email.classList.remove('recheck');
        phone.classList.remove('recheck');
        organization.classList.remove('recheck');

        if (!firstName.value || !lastName.value || !title.value || !email.value || !phone.value || !organization.value) {
            event.preventDefault();
            alert('All fields are required.');
            !firstName.value && firstName.classList.add('recheck');
            !lastName.value && lastName.classList.add('recheck');
            !title.value && title.classList.add('recheck');
            !email.value && email.classList.add('recheck');
            !phone.value && phone.classList.add('recheck');
            !organization.value && organization.classList.add('recheck');
        }
        else if (!new RegExp(titlePattern).test(title.value)) {
            event.preventDefault();
            alert('Invalid title format. Title must be seven alhpabetical characters and not end in white space');
            title.classList.add('recheck');
        } else {
            localStorage.setItem('firstName', firstName.value);
            localStorage.setItem('lastName', lastName.value);
            localStorage.setItem('title', title.value);
            localStorage.setItem('email', email.value);
            localStorage.setItem('phone', phone.value);
            localStorage.setItem('organization', organization.value);
            localStorage.setItem('membershipLevel', membershipLevel.value);
            localStorage.setItem('description', description.value);
            timestamp.value = new Date();
            localStorage.setItem('timestamp', timestamp.value);
        }
    });
} else if (window.location.pathname.endsWith('thankyou.html')) {
    window.onload = loadFormData();
}
function loadFormData() {
    let fname = localStorage.getItem('firstName');
    let lname = localStorage.getItem('lastName');
    let title = localStorage.getItem('title');
    let email = localStorage.getItem('email');
    let phone = localStorage.getItem('phone');
    let organization = localStorage.getItem('organization');
    let membershipLevel = localStorage.getItem('membershipLevel');
    let description = localStorage.getItem('description');
    membershipLevel = membershipLevel ? membershipLevel : "None Provided";
    description = description ? description : "None Provided";
    let responsesDiv = document.querySelector('.responses');
    let timestampt = localStorage.getItem('timestamp');
    responsesDiv.innerHTML = '<span class="cta">First Name:</span> ' + fname + '<br>' +
        '<span class="cta">Last Name:</span> ' + lname + '<br>' +
        '<span class="cta">Title:</span> ' + title + '<br>' +
        '<span class="cta">Email:</span> ' + email + '<br>' +
        '<span class="cta">Phone:</span> ' + phone + '<br>' +
        '<span class="cta">Organization:</span> ' + organization + '<br>' +
        '<span class="cta">Membership Level:</span> ' + membershipLevel + '<br>' +
        '<span class="cta">Description:</span> ' + description + '<br>' +
        '<span class="cta">Timestamp:</span> ' + timestampt + '<br>';

}