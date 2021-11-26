const navigationbar  = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

// Build the nav

function navbarcreatelist() {
    for (section of sections){
        const Listitem = document.createElement('li'); //new <li> element
        Listitem.innerHTML = `<a href="#${section.getAttribute('id')}" class="menu__link"> ${section.getAttribute('data-nav')}</a>`;
        //defining 'section' as an input and using the .getAttribute() I got its 'id' and 'data-nav'
        navigationbar.appendChild(Listitem);
    }
}
navbarcreatelist();

// Scroll to section on link click
// Set sections as active

const addActive = (conditional, section) => { // add active class
    return section.classList.add('your-active-class');
};

const removeActive = (section) => { //remove active class
return section.classList.remove('your-active-class');
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

document.addEventListener('scroll' ,sectionActivation);

Links =document.querySelectorAll("#navbar__list li");

function scroll(event){ 
    // takes navigation li (event) as input
    let sectionId= event.getAttribute("href");
    let section= document.getElementById(sectionId.substring(1,sectionId.length)); 
    section.scrollIntoView(
        {
            block: "start",
            behavior: "smooth",
            inline: "start"
        });
    console.log(section);
    console.log(sectionId);
}

for(const Link of Links){
    Link.addEventListener('click',function(e){
        e.preventDefault();
        scroll(Link.firstChild);
    });
}