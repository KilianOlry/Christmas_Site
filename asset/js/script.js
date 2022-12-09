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

    const navLink = document.querySelectorAll('.nav__link'),
          linkAction = () =>{
        const navMenu = document.getElementById('ID-nav-menu')
        //When we click on each nav--link, we remove the show-menu
        navMenu.classList.remove('show-menu')
    }

    