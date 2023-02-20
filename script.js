const navbar = document.getElementById("navbar");
const navbarLinks = document.querySelectorAll('nav a');

const navHeight = window.innerHeight / 100 * 9;


// Event listener to make navbar have dropshadow when scrolling down
updateActive(navbarLinks);
window.addEventListener("scroll", (event) => {
    var scroll = this.scrollY;
    if (scroll > navHeight) {
        navbar.style.boxShadow = "0 1px 10px 1px black";
        navbar.style.backdropFilter = "blur(20px)";
        navbar.style.background = "rgba(31, 40, 51, 0.92)";

    } else {
        navbar.style.boxShadow = "none";
        navbar.style.background = "#1f2833";
        navbar.style.backdropFilter = "none";
    }
    // navbarLinks.forEach((link)=>{
    //     console.log(link.getAttribute('href')+" "+document.querySelector(link.getAttribute('href')).getBoundingClientRect().bottom);
    // })
    updateActive(navbarLinks);
});

// Loop through all navbar links
navbarLinks.forEach(function (link) {
    // Get the target section for the current navbar link
    // console.log(parseInt(link.getAttribute('href')+" "+document.querySelector(link.getAttribute('href')).getBoundingClientRect().top)-67);   

    link.addEventListener('click', function (event) {
        var targetSection = document.querySelector(link.getAttribute('href'));
        var bounding = targetSection.getBoundingClientRect();
        var targetPosition = window.scrollY + bounding.top - navHeight;
        // console.log(bounding.top);
        // console.log(window.innerHeight);
        event.preventDefault();

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        // console.log(targetPosition);

    });
});

function updateActive(Links) {
    Links.forEach((link) => {
        var targetSection = document.querySelector(link.getAttribute('href'));
        var bounding = targetSection.getBoundingClientRect();
        // console.log(bounding.top, bounding.bottom);
        if (bounding.bottom > (window.innerHeight / 2) && bounding.top < (window.innerHeight / 2)) {
            // Add the active class to the navbar link
            link.classList.add('active');
        } else {
            // Remove the active class from the navbar link
            link.classList.remove('active');
        }
    });
}