// window.onload = function() {
    
//     if (!sessionStorage.getItem('splashShown')) {
//         setTimeout(function() {
//             document.getElementById("splash-screen").style.display = "none"; 
//             document.body.style.overflow = "auto"; 
//             const nav = document.querySelector('nav');
//             if (nav) nav.style.display = "flex";
//         }, 3000);

      
//         sessionStorage.setItem('splashShown', 'true');
//     } else {
        
//         document.getElementById("splash-screen").style.display = "none";
//         document.body.style.overflow = "auto";
//         const nav = document.querySelector('nav');
//         if (nav) nav.style.display = "flex";
//     }
// };

window.onload = function () {
    if (!sessionStorage.getItem("splashShown")) {
        const textContainer = document.getElementById("animated-text");
        const logo = document.getElementById("logo");
        const centerLine = document.getElementById("center-line");
        const text = "ALTAAVI".split("");  // Split text into an array of letters
        let index = 0;

        function animateLetter() {
            if (index < text.length) {
                textContainer.textContent = text[index];  // Add one letter at a time
                textContainer.style.opacity = "1";  // Make the letter visible

                setTimeout(() => {
                    textContainer.style.opacity = "0";  // Make the letter disappear
                    setTimeout(() => {
                        index++;  // Move to the next letter
                        animateLetter();  // Start animation for the next letter
                    }, 400);  // Delay before hiding the letter
                }, 400);  // Time each letter stays visible
            } else {
                // After all letters are animated, make the full text visible
                setTimeout(() => {
                    textContainer.textContent = "ALTAAVI";  // Make the entire text visible
                    textContainer.style.opacity = "1";  // Ensure full text is visible
                    centerLine.style.opacity = "1";  // Show the line after text animation

                    // Begin the opening animation for logo and text
                    setTimeout(openAnimation, 500);  
                }, 500);  // Delay before showing the full text
            }
        }

        // Function for opening animation of logo and text
        function openAnimation() {
            logo.style.opacity = "1";  
            logo.style.transform = "translateY(-60%)";  // Move logo up from the center
            textContainer.style.opacity = "1";  // Ensure the full text is visible
            textContainer.style.transform = "translateY(60%)";  // Move text down from center

            setTimeout(() => {
                document.getElementById("splash-screen").style.display = "none";  // Hide splash screen
                document.body.style.overflow = "auto";  // Enable body scroll
                const nav = document.querySelector("nav");
                if (nav) nav.style.display = "flex";  // Show the navigation bar
            }, 1000);  // Wait for animations to finish
        }

        animateLetter();  // Start the letter animation

        sessionStorage.setItem("splashShown", "true");
    } else {
        document.getElementById("splash-screen").style.display = "none";
        document.body.style.overflow = "auto";
        const nav = document.querySelector("nav");
        if (nav) nav.style.display = "flex";
    }
};


// Header

document.addEventListener("scroll", function () {
    let header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.borderRadius = "10rem";
    } else {
        header.style.borderRadius = "0";
    }
});

// Header for all pages

fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));


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

