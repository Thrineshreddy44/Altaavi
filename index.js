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


// NEXT

// Get elements 
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

// Event listener for "Next" button in .info6 section
nextButton.addEventListener('click', () => {
    info6Section.style.display = 'none';
    checkboxesSection.style.display = 'block';
});

// Event listener for "Back" button in checkboxes section
backButton.addEventListener('click', () => {
    info6Section.style.display = 'flex';
    checkboxesSection.style.display = 'none';
});

// Event listener for "Next" button in checkboxes section
nextButton2.addEventListener('click', () => {
    checkboxesSection.style.display = 'none';
    detailsSection.style.display = 'flex';
});

// Event listener for "Back" button in details section
backButton1.addEventListener('click', () => {
    detailsSection.style.display = 'none';
    checkboxesSection.style.display = 'block';
});

// Event listener for "Next" button in details section
nextButton3.addEventListener('click', () => {
    detailsSection.style.display = 'none';
    udSection.style.display = 'flex';
});

// Event listener for "Back" button in ud section
backButton2.addEventListener('click', () => {
    udSection.style.display = 'none';
    detailsSection.style.display = 'flex';
});
