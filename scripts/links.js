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
    data.weeks.forEach((weekObj) => {
        html += `<li> ${weekObj.week}`;
        weekObj.links.forEach(link => {
            let week_url = link.url;
            let week_title = link.title;
            html += ` | <a href=${repo}/${week_url}>${week_title}</a>`;
        })
        html += `</li>`;
    });
    container.innerHTML = html;
}
