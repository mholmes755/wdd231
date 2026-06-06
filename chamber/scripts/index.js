const json = 'data/members.json';
const spotlight = document.querySelector('#spotlight');

async function getCompanyData() {
    const response = await fetch(json);
    const data = await response.json();
    displaySpotlight(data.companies);

}
getCompanyData();


// -------- Displaying Spotlight Companies --------//
if (spotlight) {
    function shuffle(array) {
        return [...array].sort(() => Math.random() - 0.5);
    }

    const displaySpotlight = (companies) => {
        const premium = companies.filter(
            c => c.memberLevel === "Gold" || c.memberLevel === "Silver"
        );

        const selected = shuffle(premium).slice(0, 2);

        selected.forEach((company) => {
            let spotlightCard = document.createElement('section');
            let spotlightCompanyName = document.createElement('h2');
            let spotlightImg = document.createElement('img');
            let spotlightDetails = document.createElement('p');

            spotlightCompanyName.textContent = company.name;

            spotlightImg.setAttribute("src", company.img);
            spotlightImg.setAttribute("alt", `Picture of ${company.name}`);
            spotlightImg.setAttribute("loading", "lazy");

            spotlightDetails.innerHTML =
                `<a href="${company.url}" class="spotlightLink" target="_blank">Details</a>`;

            spotlightCard.appendChild(spotlightCompanyName);
            spotlightCard.appendChild(spotlightImg);
            spotlightCard.appendChild(spotlightDetails);

            spotlight.appendChild(spotlightCard);
        });
    }
}




// -------- Copyright Year and Last Modified --------
const lastModified = document.querySelector('#lastModified');
const copyrightYear = document.querySelector('#copyrightYear');

const option = {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};
const option2 = {
    year: "numeric"
};

lastModified.innerHTML = `Last Modified: ${new Date().toLocaleDateString("en-US", option)}`;

copyrightYear.innerHTML = `&copy; ${new Date().toLocaleDateString("en-US", option2)} Michael Holmes`;





// -------- Funciontal Hamburger Menu --------
const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');


navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
});

import { places } from '../data/discover.mjs';

const discoverSection = document.querySelector('#discoverSection');
places.forEach((place) => {
    let div = document.createElement('div');
    div.setAttribute("class", "placeCard");
    let heading = document.createElement('h2');
    let figure = document.createElement('figure');
    let img = document.createElement('img');
    img.setAttribute("src", place.image);
    img.setAttribute("alt", `Picture of ${place.name}`);
    img.setAttribute("loading", "lazy");
    let address = document.createElement('address');
    let description = document.createElement('p');
    let discoverLink = document.createElement('button');
    discoverLink.setAttribute("class", "discoverDetails");
    discoverLink.setAttribute("aria-label", `Details about ${place.name}`);
    discoverLink.addEventListener("click", () => {
        window.open(place.url, "_blank");
    });


    heading.textContent = place.name;
    address.textContent = place.address;
    description.textContent = place.description;
    discoverLink.textContent = "Learn More";

    div.appendChild(heading);
    figure.appendChild(img);
    div.appendChild(figure);
    div.appendChild(address);
    div.appendChild(description);
    div.appendChild(discoverLink);

    discoverSection.appendChild(div);
})







// -------- Local Storage --------

const msToDays = 86400000;
const today = new Date();
const message = document.querySelector('#discoverDescription');

const lastVisit = localStorage.getItem('lastVisit');

if (!lastVisit) {
    message.textContent = "Welcome to the Boise Chamber of Commerce! This is your first visit.";
    localStorage.setItem('lastVisit', today);
} else if (today - new Date(lastVisit) < msToDays) {
    const daysSinceLastVisit = Math.round((today - new Date(lastVisit)) / msToDays);
    message.textContent = `Back so sooon? Awesome!`;
} else {
    const daysSinceLastVisit = Math.round((today - new Date(lastVisit)) / msToDays);
    message.textContent = `Welcome back! It's been ${daysSinceLastVisit} days since your last visit.`;
    localStorage.setItem('lastVisit', today);
}
