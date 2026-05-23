// -------- Current Weather Elements --------//

const weatherIcon = document.querySelector('#weatherIcon');
const currentTemperature = document.querySelector('#temperature');
const caption = document.querySelector('#caption');
const forecastOption = document.querySelector('#forecastOption');
const multiDayForecast = document.querySelector('#forecastContainer');

const mykey = "a5ec3c1a728334bf4f2bc7a0d0972919";
const long = -116.20;
const lat = 43.61;
const url = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${mykey}&lang=en&units=imperial`;
const forecastUrl = `//api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${mykey}&lang=en&units=imperial`;



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

function displayResults(data) {
    caption.innerHTML = data.weather[0].description;
    currentTemperature.innerHTML = `${data.main.temp}&degF`;
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    weatherIcon.setAttribute('alt', data.weather[0].description);
}




// -------- Forecast Elements --------//

const dayOneDate = document.querySelector('#dayOneDate');
const dayOneTemp = document.querySelector('#dayOneTemperature');
const dayOneIcon = document.querySelector('#dayOneIcon');
const dayOneCaption = document.querySelector('#dayOneCaption');

const dayTwoDate = document.querySelector('#dayTwoDate');
const dayTwoTemp = document.querySelector('#dayTwoTemperature');
const dayTwoIcon = document.querySelector('#dayTwoIcon');
const dayTwoCaption = document.querySelector('#dayTwoCaption');

const dayThreeDate = document.querySelector('#dayThreeDate');
const dayThreeTemp = document.querySelector('#dayThreeTemperature');
const dayThreeIcon = document.querySelector('#dayThreeIcon');
const dayThreeCaption = document.querySelector('#dayThreeCaption');


async function apiForecastFetch() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Testing the API response
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);

    }
}


function displayForecast(data) {
    const date1 = new Date(data.list[9].dt_txt);
    dayOneDate.textContent = date1.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });

    dayOneIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.list[9].weather[0].icon}.png`);
    dayOneIcon.setAttribute('alt', data.list[9].weather[0].description);
    dayOneTemp.innerHTML = `${data.list[9].main.temp}&degF`;
    dayOneCaption.innerHTML = data.list[9].weather[0].description;

    const date2 = new Date(data.list[17].dt_txt);
    dayTwoDate.textContent = date2.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });

    dayTwoIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.list[17].weather[0].icon}.png`);
    dayTwoIcon.setAttribute('alt', data.list[17].weather[0].description);
    dayTwoTemp.innerHTML = `${data.list[17].main.temp}&degF`;
    dayTwoCaption.innerHTML = data.list[17].weather[0].description;

    const date3 = new Date(data.list[25].dt_txt);
    dayThreeDate.textContent = date3.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });

    dayThreeIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.list[25].weather[0].icon}.png`);
    dayThreeIcon.setAttribute('alt', data.list[25].weather[0].description);
    dayThreeTemp.innerHTML = `${data.list[25].main.temp}&degF`;
    dayThreeCaption.innerHTML = data.list[25].weather[0].description;
}

apiFetch();
apiForecastFetch();






// -------- Forecast Button --------//

const forecastBtn = document.querySelector('#forecastBtn');
const forecast = document.querySelector('#forecastContainer');

forecastBtn.addEventListener('click', () => {
    forecast.classList.toggle('show');
});

