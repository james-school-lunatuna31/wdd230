const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let birthDate = document.createElement('p');
        let birthPlace = document.createElement('p');
        let deathDate = document.createElement('p');
        let lengthOfService = document.createElement('p');
        let orderOfPresidency = document.createElement('p');
        let numberOfChildren = document.createElement('p');
        let portrait = document.createElement('img');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Birthplace: ${prophet.birthplace}`;
        deathDate.textContent = `Date of Death: ${prophet.death}`;
        lengthOfService.textContent = `Length of Service: ${prophet.length} years`;
        orderOfPresidency.textContent = `Order of Presidency: ${prophet.order}`;
        numberOfChildren.textContent = `Number of Children: ${prophet.numofchildren}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height', '250');

        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(deathDate);
        card.appendChild(lengthOfService);
        card.appendChild(orderOfPresidency);
        card.appendChild(numberOfChildren);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

getProphetData(url);
