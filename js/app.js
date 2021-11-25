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

function ActiveTheSection(section) {
	const current = document.querySelector('.active');
	if (current !== null) {
		current.classList.remove('active'); //remove active from this section
	}
	section.classList.add('active');//add active to another section
}

const scrolling = document.querySelectorAll('.menu__link');

function Activate(sections) {
	for (let section of sections) {
		section.addEventListener('click', function() {
			ActiveTheSection(section); //loop each section to add an event
		});
	}
}
Activate(scrolling);

function ScrollingActive(sections, scrolling) {
	const offset = {
        root: document.querySelector('#scroll'),
        rootMargin: '0px',
		threshold: 0.4,
	};
	
	for (let i = 0; i < sections.length; i++) {
	const element = new IntersectionObserver(
        function(conditions) {
            for(let condition of conditions) {
                if(condition.isIntersecting) {
                    scrolling[i].classList.add('active');
                    sections[i].classList.add('your-active-class');
                } else {
                    scrolling[i].classList.remove('active');
                    sections[i].className = ' ';
                }
            }
	}, offset);
    //Add class 'active' to the section near the top and remove the old 'active' class section
	element.observe(sections[i]);
	}
}
ScrollingActive(sections, scrolling);