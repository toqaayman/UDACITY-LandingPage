const navigatbar = document.getElementById('navbar__list');
const secs = document.querySelectorAll('section');

// Building the navbar

const navbarCreate = () => {
    let navbarr = ''; // Creating a variable for the container
    secs.forEach(section => {
        const sectionID = section.id; // section id for every section on the index page
        const sectionDataNav = section.dataset.nav; // get attribute for every section
        navbarr += `<li><a href="#${sectionID}" class="menu__link">${sectionDataNav}</a></li>`;
    });
    navigatbar.innerHTML = navbarr; // add sections to the navbar


};
navbarCreate();

// Add class 'active' to section when near top of viewport

const addActive = (conditional, section) => { // add active class
    if(conditional){
        section.classList.add('your-active-class');
    };
};

const removeActive = (section) => { //remove active class
    section.classList.remove('your-active-class');
};

const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

const sectionActivation = () => {
    secs.forEach(section => {
        const elementOffset = offset(section);

        inviewport = () => elementOffset < 500 && elementOffset >= -500;

        removeActive(section);
        addActive(inviewport(),section);
    });
};

window.addEventListener('scroll' ,sectionActivation);

// Scroll to anchor ID using scrollTO event

const scrolling = () => {

    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            for(i = 0 ; i<secs ; i++){
                secs[i].addEventListener("click",sectionScroll(link));
            }
        });
    });

};

scrolling();
