const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(Date.prohpets);
    displayProphets(data.prophets);

}
getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthDate = document.createElement('p');
        let birthPlace = document.createElement('p');


        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);


        cards.appendChild(card);
    })
}




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

copyrightYear.innerHTML = `&copy; ${new Date().toLocaleDateString("en-US", option2)} Michael Holmes | Latter-Day Prophets`;

