const weatherIcon = document.querySelector("#weather-icon");
const currentTemp = document.querySelector('#current-temp');
const caption = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&appid=a5ec3c1a728334bf4f2bc7a0d0972919&lang=en&units=imperial';





async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Testing the API response
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


apiFetch();
