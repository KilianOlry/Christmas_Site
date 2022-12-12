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

window.addEventListener('scroll', scrollUp)

//SCROLL SECTIONS ACTIVE LINK

    const sections = document.querySelectorAll('section[id]')

    const scrollActive = () =>{
        const scrollY = window.pageYOffset

        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight,
                    sectionTop = current.offsetTop - 58,
                    sectionId = current.getAttribute('id'),
                    sectionsClass = document.querySelectorAll('.nav__menu a[href*=' + sectionId + ']')


                    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                            sectionsClass.classList.add('active-link')
                    } else {
                        sectionsClass.classList.remove('active-link')
                    }

        })
    }

window.addEventListener('scroll', scrollActive)