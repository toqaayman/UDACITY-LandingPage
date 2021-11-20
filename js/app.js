const navigationbar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');


// Building the navbar
function navbarcreatelist() {
    for (sec of sections) {
        listitem = document.createElement('li');
        listitem.innerHTML = `<a href="#${sec.id}" data-nav="${sec.id}" class="menu__link">${sec.dataset.nav}</a>`
        navigationbar.appendChild(listitem);
    }
}
navbarcreatelist();

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
    sections.forEach(section => {
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
            for(i = 0 ; i<sections ; i++){
                sections[i].addEventListener("click",sectionScroll(link));
            }
        });
    });

};

scrolling();
