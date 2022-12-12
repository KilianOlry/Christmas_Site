//SHOW MENU

    const navMenu = document.getElementById('ID-nav-menu'),
          navToggle = document.getElementById('ID-nav-toggle'),
          navClose = document.getElementById('ID-Nav-close');

//MENU SHOW

    if (navToggle) {
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
        
    }

//MENU HIDDEN

    if (navClose) {
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
        
    }


//REMOVE MENU MOBILE

    const navLink = document.querySelectorAll('.nav__link')
    const linkAction = () =>{
        const navMenu = document.getElementById('ID-nav-menu')
        //When we click on each nav--link, we remove the show-menu
        navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))


//CHANGE BACKGROUND HEADER

    const scrollHeader = () =>{
        const header = document.getElementById('ID-Header');
        this.scrollY >= 50 ? header.classList.add('bg-header')
                            :header.classList.remove('bg-header');
}

window.addEventListener('scroll', scrollHeader);

//SHOW SCROLL UP

    const scrollUp = () =>{
        const scrollUp = document.getElementById('ID-Scrollup')
        this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                            : scrollUp.classList.remove('show-scroll')
    }

window.addEventListener('scroll', scrollUp);

//SCROLL SECTIONS ACTIVE LINK

    const sections = document.querySelectorAll('section[id]')

    function scrollActive () {
        const scrollY = window.pageYOffset;

        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 200;
            const sectionId = current.getAttribute('id');
            const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');


                    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                            sectionsClass.classList.add('active-link')
                    } else {
                        sectionsClass.classList.remove('active-link')
                    }

        })
    }
    window.addEventListener('scroll', scrollActive);

//PARALLAX

        let parallax = new Rellax('.parallax');

//GSAP

        gsap.from('.home__village', 1.2, {opacity: 0, y: 100, delay: .1});
        gsap.from('.home__pine', 1.2, {opacity: 0, y: 150, delay: .3});
        gsap.from('.home__mountain-2', 1.2, {opacity: 0, x: 150, delay: .5});
        gsap.from('.home__mountain-3', 1.2, {opacity: 0, x: -150, delay: .6});
        gsap.from('.home__mountain-1', 1.2, {opacity: 0, y: 250, delay: .7});
        gsap.from('.home__moon', 1.2, {opacity: 0, y: 200, delay: .8});
        gsap.from('.home__trineo', 1.2, {opacity: 0, x: -200, delay: .8});
        gsap.from('.home__title', 1.2, {opacity: 0, y: -60, delay: 1});

//SCROLL REVEAL

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: '400'
})

sr.reveal(`.about__data, .celebrate__img`, {origin: 'right'})
sr.reveal(`.about__img, .celebrate__data`, {origin: 'left'})
sr.reveal(`.send__card`, {interval: 100})
sr.reveal(`.footer`)