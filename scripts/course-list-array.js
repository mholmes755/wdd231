const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]




const dialogCourses = document.querySelector('#courses')
const dialogBox = document.querySelector('#courseDialog');
const closeButton = document.querySelector('#courseDialog button');

const dialogtitle = document.querySelector('#courseDialog h2');
const dialogDescription = document.querySelector('#courseDialog p');

closeButton.addEventListener("click", () => dialogBox.close())



// -----Create Course Card-----

function createCard(course, index) {
    return `
    <div class="card ${course.completed ? 'completed' : 'not-completed'}" data-index="${index}">
      <h3>${course.subject} ${course.number}</h3>
      <p>${course.title}</p>
      <p>${course.completed ? "✔ Completed" : "✖ Not Yet Completed"}</p>
    </div>
  `;
}



// -----Display All Course Cards-----

displayAllCourses(courses);
displayAllCredits(courses);

function displayAllCourses(data) {
    const container = document.querySelector('#container');
    container.innerHTML = data.map((course, index) => createCard(course, index)).join("");
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const index = card.dataset.index;
            const course = data[index];

            dialogtitle.textContent = `${course.subject} ${course.number}`
            dialogDescription.innerHTML =
                `<strong>${course.title}</strong> <br><br> ${course.description}<br><br>
                <strong>Credits:</strong> ${course.credits}<br>
                <strong>Certificate:</strong> ${course.certificate}<br>
                <strong>Technology:</strong> ${course.technology.join(',')}`;
            dialogBox.showModal();
        });
    });
}
function getAllCredits(course) {
    return course.reduce((total, course) => total + course.credits, 0);
}
function displayAllCredits(course) {
    const allCredits = document.querySelector('#credits');
    allCredits.innerHTML = `Total credits for courses listed above is ${getAllCredits(course)}`;
}
const all = document.querySelector('#all');
all.addEventListener('click', () => {
    displayAllCourses(courses);
    displayAllCredits(courses);
});






// -----Display WDD Course Cards-----

function displayWDDCourses(course) {
    const container = document.querySelector('#container');
    const wddCourses = course.filter(course => course.subject === 'WDD');
    container.innerHTML = wddCourses.map((course, index) => createCard(course, index)).join("");
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const index = card.dataset.index;
            const course = wddCourses[index];

            dialogtitle.textContent = `${course.subject} ${course.number}`
            dialogDescription.innerHTML =
                `<strong>${course.title}</strong> <br><br> ${course.description}<br><br>
                <strong>Credits:</strong> ${course.credits}<br>
                <strong>Certificate:</strong> ${course.certificate}<br>
                <strong>Technology:</strong> ${course.technology.join(',')}`;
            dialogBox.showModal();
        });
    });
}

function getWDDCredits(course) {
    return course.filter(course => course.subject === 'WDD')
        .reduce((total, course) => total + course.credits, 0);
}

const wdd = document.querySelector('#wdd');
const wddCredits = document.querySelector('#credits');
wdd.addEventListener('click', () => {
    displayWDDCourses(courses);
    wddCredits.innerHTML = `Total credits for courses listed above is ${getWDDCredits(courses)}`;
});







// -----Display CSE Course Cards-----

function displayCSECourses(course) {
    const container = document.querySelector('#container');
    const cseCourses = course.filter(course => course.subject === 'CSE');
    container.innerHTML = cseCourses.map((course, index) => createCard(course, index)).join("");
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const index = card.dataset.index;
            const course = cseCourses[index];

            dialogtitle.textContent = `${course.subject} ${course.number}`
            dialogDescription.innerHTML =
                `<strong>${course.title}</strong> <br><br> ${course.description}<br><br>
                <strong>Credits:</strong> ${course.credits}<br>
                <strong>Certificate:</strong> ${course.certificate}<br>
                <strong>Technology:</strong> ${course.technology.join(',')}`;
            dialogBox.showModal();
        });
    });
}
function getCSECredits(course) {
    return course.filter(course => course.subject === 'CSE')
        .reduce((total, course) => total + course.credits, 0);
}

const cse = document.querySelector('#cse');
const cseCredits = document.querySelector('#credits');
cse.addEventListener('click', () => {
    displayCSECourses(courses);
    cseCredits.innerHTML = `Total credits for courses listed above is ${getCSECredits(courses)}`;
});

