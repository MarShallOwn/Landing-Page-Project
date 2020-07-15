const navbar = document.getElementById('nav-bar');
const navbarButton = document.getElementById('navbar-button');
const mainContainer = document.getElementById('main-container');
const sections = document.getElementsByTagName('section');
const navbarAnchor = document.getElementById('navbar-anchor');
let previousActiveAnchor = 0;

const icons = ["<i class='fas fa-home'></i>", "<i class='fas fa-box-open'></i>", "<i class='fas fa-info-circle'></i>", "<i class='fas fa-phone-square-alt'></i>"];

const words = ["Home", "Products", "About us", "Contact us"];

/**
* @description Activates the current viewed section
* @param {number} index : the index of the section from the section htmlcollection
*/
const activateSection = index =>{
    
    if(previousActiveAnchor !== index){
        
        navbarAnchor.children[previousActiveAnchor].classList.remove('active-anchor');
        sections[previousActiveAnchor].classList.remove('active-section');

        navbarAnchor.children[index].classList.add('active-anchor');
        sections[index].classList.add('active-section');

        previousActiveAnchor = index;
        
    }
    
};

/**
* @description Function to close the navigation bar section and changes the navigation icon
*/
const closeNavbar = () => {
    
        navbar.style.width = "1.5em";
        mainContainer.style.marginLeft = "2.5%";
        
        for(let i=0; i < navbarAnchor.children.length; i++){
            navbarAnchor.children[i].innerHTML = icons[i];
        }
        
        navbarButton.innerHTML = "<i class='fas fa-bars'></i>";
        navbarButton.classList.remove('navbar-close');
        navbarButton.classList.add('navbar-open');
    
};


/**
* @description Onclick the navigation button it either closes or open the navigation bar
*/
navbarButton.addEventListener('click', () => {
    
    if(navbarButton.classList.contains('navbar-open')){
        
        navbar.style.width = "5em";

        setTimeout(() => {
            for(let i=0; i < navbarAnchor.children.length; i++){
                setTimeout(() => {
                    
                })
                navbarAnchor.children[i].innerHTML = words[i];
            }
        }, 600);
        
        mainContainer.style.marginLeft = "8%";
        navbarButton.innerHTML = "<i class='fas fa-times'></i>";
        navbarButton.classList.remove('navbar-open');
        navbarButton.classList.add('navbar-close');
        
    }
    else{
        
        closeNavbar();
        
    }
    
});


/**
* @description Onclick the any of the navigation button it will scroll to the specific section of the button
* @param event
*/
navbarAnchor.addEventListener('click', (e) =>{
    
    const index = [...navbarAnchor.children].indexOf(e.target);
    
    sections[index].scrollIntoView({ behavior: 'smooth' ,block: 'center'});
    
    activateSection(index);
    
    if(navbarButton.classList.contains('navbar-close')){
        closeNavbar();
    }
    
});


for(let i = 0; i< sections.length; i++){
    
    window.addEventListener('scroll', () => {
        
        if(sections[i].getBoundingClientRect().top + (window.innerHeight / 2) < window.innerHeight){
            activateSection(i);
        }
        
    });
    
}


