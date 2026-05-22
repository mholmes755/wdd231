const weatherIcon = document.querySelector("#weatherIcon");
const currentTemperature = document.querySelector('#temperature');
const caption = document.querySelector('#caption');
const town = document.querySelector('#town');

const mykey = "a5ec3c1a728334bf4f2bc7a0d0972919"
const long = 6.63;
const lat = 49.75;
const url = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${mykey}&lang=en&units=imperial`;





async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Testing the API response
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Display JSON data

function displayResults(data) {
    town.innerHTML = data.name;
    caption.innerHTML = data.weather[0].description;
    currentTemperature.innerHTML = `${data.main.temp}&degF`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('SRC', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
}



apiFetch();
