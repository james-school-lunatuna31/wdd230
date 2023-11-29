const repo = "https://james-school-lunatuna31.github.io/wdd230/";
const links = "https://james-school-lunatuna31.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(links);
    const data = await response.json();
    console.log(data);
    displayLinks(data);
}
getLinks();

function displayLinks(data) {
    const container = document.getElementById('learning-activities');
    let html = '';
    data.forEach(link => {
        html += `<li class="learning-info-item">${link.week} | <a href="${link.url}">${link.title}</a></li>`;
    });
    container.innerHTML = html;
}
