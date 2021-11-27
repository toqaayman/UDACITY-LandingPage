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

function active(section){
    const rectDOM = section.getBoundingClientRect();
    const vertInView = (rectDOM.top <= (window.innerHeight || document.documentElement.clientHeight)) && ((rectDOM.top + rectDOM.height) >= 0);
    const horInView = (rectDOM.left <= (window.innerWidth || document.documentElement.clientWidth)) && ((rectDOM.left + rectDOM.width) >= 0);

    return (vertInView && horInView);
}

  // Add class 'active' to section when near top of viewport
  function decideifactive(){
    for (const section of sections){
      if (active(section)=== true){
        section.classList.add('your-active-class');
      } else {
        section.classList.remove('your-active-class');
      }
    }
}

window.addEventListener('scroll',decideifactive);

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