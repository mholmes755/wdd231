const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');
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


navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
});

lastModified.innerHTML = `Last Modified: ${new Date().toLocaleDateString("en-US", option)}`;


copyrightYear.innerHTML = `&copy; ${new Date().toLocaleDateString("en-US", option2)} | All rights reserved.`;
