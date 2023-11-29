const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.querySelector('#caption-desc');

const apiKey = '2b07b24bac1ef914ea7cc3ba5b31acbc';
const latitude = 49.75;
const longitude = 6.64;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=2b07b24bac1ef914ea7cc3ba5b31acbc`;

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;

    // Create img element
    let imgElement = document.createElement('img');
    imgElement.id = 'weather-icon';
    imgElement.src = iconsrc;
    imgElement.alt = desc;

    // Append the img element to the weather div which solves our validaton problem
    let weatherDiv = document.querySelector('#weather');
    weatherDiv.appendChild(imgElement);

    // Append the figcaption after the img
    let figcaptionElement = document.createElement('figcaption');
    figcaptionElement.id = 'caption-desc';
    figcaptionElement.textContent = `${desc}`;
    weatherDiv.appendChild(figcaptionElement);
}

apiFetch(url);