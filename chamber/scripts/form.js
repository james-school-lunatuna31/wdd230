document.querySelector('form').addEventListener('submit', function (event) {
    const firstName = document.getElementById('fname');
    const lastName = document.getElementById('lname');
    const title = document.getElementById('title');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const organization = document.getElementById('organization');

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
    }
});
