
const json = 'data/members.json';
const spotlight = document.querySelector('#spotlight');

async function getCompanyData() {
    const response = await fetch(json);
    const data = await response.json();
    displaySpotlight(data.companies);

}
getCompanyData();


// -------- Displaying Spotlight Companies --------//
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
const option2 = { year: "numeric" };

lastModified.innerHTML = `Last Modified: ${new Date().toLocaleDateString("en-US", option)}`;

copyrightYear.innerHTML = `&copy; ${new Date().toLocaleDateString("en-US", option2)} Michael Holmes`;





// -------- Funciontal Hamburger Menu --------
const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');


navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
});
