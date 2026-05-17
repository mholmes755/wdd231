

// -------- Fetching and Displaying Company Data --------

const json = 'data/members.json';
const cards = document.querySelector('#directory');

async function getCompanyData() {
    const response = await fetch(json);
    const data = await response.json();
    displayCompanies(data.companies);

}
getCompanyData();

const displayCompanies = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement('section');
        let companyName = document.createElement('h2');
        let img = document.createElement('img');
        let details = document.createElement('p');


        companyName.textContent = `${company.name}`;
        img.setAttribute("src", company.img);
        img.setAttribute("alt", `Picture of ${company.name}`);
        img.setAttribute("loading", "lazy");
        details.innerHTML = `<a href="${company.url}" target="_blank">Details</a>`;

        card.appendChild(companyName);
        card.appendChild(img);
        card.appendChild(details);


        cards.appendChild(card);
    })
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




// -------- Toggle companies between grid and list view --------
const gridButton = document.querySelector('#gridBtn');
const listButton = document.querySelector('#listBtn');

gridButton.addEventListener('click', () => {
    cards.classList.add('gridView');
    cards.classList.remove('listView');
})

listButton.addEventListener('click', () => {
    cards.classList.add('listView');
    cards.classList.remove('gridView');
})