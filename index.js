window.onload = function() {
    
    if (!sessionStorage.getItem('splashShown')) {
        setTimeout(function() {
            document.getElementById("splash-screen").style.display = "none"; 
            document.body.style.overflow = "auto"; 
            const nav = document.querySelector('nav');
            if (nav) nav.style.display = "flex";
        }, 3000);

      
        sessionStorage.setItem('splashShown', 'true');
    } else {
        
        document.getElementById("splash-screen").style.display = "none";
        document.body.style.overflow = "auto";
        const nav = document.querySelector('nav');
        if (nav) nav.style.display = "flex";
    }
};


// Scroll

const clientImgContainer = document.querySelector('.clientimg');
const leftButton = document.querySelector('.scroll-btn.left');
const rightButton = document.querySelector('.scroll-btn.right');

let scrollPosition = 0; 
const scrollAmount = 200; 
const animationDuration = 60 * 1000; 
let autoScrollTimeout;
let isAutoScrolling = true;


clientImgContainer.innerHTML += clientImgContainer.innerHTML;


function autoScroll() {
    isAutoScrolling = true;
    clientImgContainer.style.animation = `autoScroll ${animationDuration / 1000}s linear infinite`;
}


function stopAutoScroll() {
    isAutoScrolling = false;
    clientImgContainer.style.animation = 'none'; 
    clearTimeout(autoScrollTimeout);
}


function updateScrollPosition() {
    clientImgContainer.style.transform = `translateX(${scrollPosition}px)`;
}


leftButton.addEventListener('click', () => {
    stopAutoScroll();
    scrollPosition += scrollAmount;
    if (scrollPosition > 0) {
        scrollPosition = -clientImgContainer.scrollWidth / 2;
    }
    updateScrollPosition();
    autoScrollTimeout = setTimeout(autoScroll, 2000);
});


rightButton.addEventListener('click', () => {
    stopAutoScroll();
    scrollPosition -= scrollAmount;
    if (scrollPosition < -clientImgContainer.scrollWidth / 2) {
        scrollPosition = 0;
    }
    updateScrollPosition();
    autoScrollTimeout = setTimeout(autoScroll, 2000);
});


autoScroll();


// NEXT

const nextButton = document.getElementById('nextButton');
const info6Section = document.querySelector('.info6');
const checkboxesSection = document.querySelector('.checkboxes');
const backButton = document.getElementById('backButton');
const nextButton2 = document.getElementById('nextButton2');
const detailsSection = document.querySelector('.details');
const backButton1 = document.getElementById('backButton1');
const nextButton3 = document.getElementById('nextButton3');
const udSection = document.querySelector('.ud');
const backButton2 = document.getElementById('backButton2');

nextButton.addEventListener('click', () => {
    info6Section.style.display = 'none';
    checkboxesSection.style.display = 'block';
});

backButton.addEventListener('click', () => {
    info6Section.style.display = 'flex';
    checkboxesSection.style.display = 'none';
});

nextButton2.addEventListener('click', () => {
    checkboxesSection.style.display = 'none';
    detailsSection.style.display = 'flex';
});

backButton1.addEventListener('click', () => {
    detailsSection.style.display = 'none';
    checkboxesSection.style.display = 'block';
});


nextButton3.addEventListener('click', () => {
    detailsSection.style.display = 'none';
    udSection.style.display = 'flex';
});

backButton2.addEventListener('click', () => {
    udSection.style.display = 'none';
    detailsSection.style.display = 'flex';
});

// Animaations
  
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");

            if (
                element.classList.contains("polyimg") || 
                element.classList.contains("commit") || 
                element.classList.contains("icons") || 
                element.classList.contains("almat")
            ) {
                element.classList.add("fade-left");
            } else if (
                element.tagName === "IMG" || 
                element.classList.contains("pmatter") || 
                element.classList.contains("add")
            ) {
                element.classList.add("fade-right");
            } else if (
                element.classList.contains("matter") || 
                element.classList.contains("links") || 
                element.classList.contains("legal") || element.classList.contains("pimg")
            ) {
                element.classList.add("fade-up");
            }
        } else {
    
            element.classList.remove("active", "fade-left", "fade-right", "fade-up");
        }
    });
}

window.addEventListener("scroll", reveal, { passive: true });

