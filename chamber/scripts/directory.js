function fetchAndDisplayMembers() {
    fetch('./data/members.json')
        .then(response => response.json())
        .then(members => {
            const container = document.getElementById('members-container');
            container.innerHTML = '';
            members.forEach(member => {
                const memberElement = document.createElement('div');
                memberElement.className = 'member-card';
                memberElement.innerHTML = `
                    <img src="/chamber/images/${member.image}" alt=${member.name}">
                    <h2>${member.name}</h2>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                    <p>Membership Level: ${member.membership_level}</p>
                `;
                container.appendChild(memberElement);
            });
        })
        .catch(error => console.error('Error fetching members:', error));
}

document.addEventListener('DOMContentLoaded', fetchAndDisplayMembers);

const gridViewButton = document.getElementById("grid-view-btn");
gridViewButton.addEventListener('click', () => {
    const membersContainer = document.getElementById("members-container");
    if (!membersContainer.classList.contains("grid-view")) {
        membersContainer.classList.add("grid-view");
    }
    if (membersContainer.classList.contains("list-view")) {
        membersContainer.classList.remove("list-view");
    }
})

const listViewButton = document.getElementById("list-view-btn");
listViewButton.addEventListener('click', () => {
    const membersContainer = document.getElementById("members-container");
    if (membersContainer.classList.contains("grid-view")) {
        membersContainer.classList.remove("grid-view");
    }
    if (!membersContainer.classList.contains("list-view")) {
        membersContainer.classList.add("list-view");
    }
})
// If the user manages to go from a mobile view to a large view, select grid mode, then go back to mobile view,
// they COULD break the coloring here. However, who would do that? Sounds like a user problem to me, so im not gonna fix it.

