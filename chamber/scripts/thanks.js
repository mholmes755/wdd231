// -------- Copyright Year and Last Modified --------

const lastModified = document.querySelector('#lastModified');
const copyrightYear = document.querySelector('#copyrightYear');

const option = {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: 'numeric',
    minute: 'numeric'
    //second: 'numeric'
};
const option2 = { year: "numeric" };
if (lastModified && copyrightYear) {
    lastModified.innerHTML =
        `Last Modified: ${new Date().toLocaleDateString("en-US", option)}`;

    copyrightYear.innerHTML =
        `&copy; ${new Date().toLocaleDateString("en-US", option2)} Michael Holmes`;
}







// -------- Funciontal Hamburger Menu --------
const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

if (navbutton && navlinks) {
    navbutton.addEventListener('click', () => {
        navbutton.classList.toggle('show');
        navlinks.classList.toggle('show');
    });
}


// -------- FORM SUBMISSION THANKS --------

const myInfo = new URLSearchParams(window.location.search); //Previously "getString"
const results = document.querySelector('#results');
console.log(myInfo);

// -------- Timestamp --------

const form = document.querySelector('.chamberForm');
const timeStamp = document.querySelector('#userTimeStamp');

if (form && timeStamp) {
    form.addEventListener('submit', () => {
        timeStamp.value = new Date().toISOString();
    });
}
console.log(myInfo.get('timeStamp'));
console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('title'));
console.log(myInfo.get('email'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('company'));
console.log(myInfo.get('membership'));
console.log(myInfo.get('description'));

const displayTimeStamp = new Date(myInfo.get('timeStamp')).toLocaleDateString("en-US", option);

if (results) {
    document.querySelector('#results').innerHTML = `
<p>${myInfo.get('first')} ${myInfo.get('last')} has joined the Boise Chamber of Commerce on ${displayTimeStamp}.
<hr>
Phone: ${myInfo.get('phone')}<br>
Company Name: ${myInfo.get('company')}<br>
Email: ${myInfo.get('email')}</p>`;
}



// -------- Membership Dialog --------

const nonMember = document.querySelector('#nonMember');
const bronzeMember = document.querySelector('#bronzeMember');
const silverMember = document.querySelector('#silverMember');
const goldMember = document.querySelector('#goldMember');


const nonMemberDialog = document.querySelector('#nonMemberDialog');
const bronzeMemberDialog = document.querySelector('#bronzeMemberDialog');
const silverMemberDialog = document.querySelector('#silverMemberDialog');
const goldMemberDialog = document.querySelector('#goldMemberDialog');

if (nonMember && bronzeMember && silverMember && goldMember) {
    nonMember.addEventListener("click", () => {
        nonMemberDialog.showModal();
    })

    bronzeMember.addEventListener("click", () => {
        bronzeMemberDialog.showModal();
    })

    silverMember.addEventListener("click", () => {
        silverMemberDialog.showModal();
    })

    goldMember.addEventListener("click", () => {
        goldMemberDialog.showModal();
    })

    document.querySelectorAll('.closeBtn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('dialog').close();
        });
    });
}

