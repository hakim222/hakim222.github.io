const navbar = document.getElementById("navbar");
const navbarLinks = document.querySelectorAll('nav a');

// Event listener to make navbar have dropshadow when scrolling down
updateActive(navbarLinks);
window.addEventListener("scroll", (event) => {
    var scroll = this.scrollY;
    if (scroll > 0) {
        navbar.style.boxShadow = "0 1px 10px 1px black";
    } else {
        navbar.style.boxShadow = "none";
    }
    updateActive(navbarLinks);
});

// Loop through all navbar links
navbarLinks.forEach(function (link) {
    // Get the target section for the current navbar link
    link.addEventListener('click', function (event) {
        var targetSection = document.querySelector(link.getAttribute('href'));
        var bounding = targetSection.getBoundingClientRect();
        var targetPosition = window.scrollY+bounding.top-67;
        event.preventDefault();

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

function updateActive(Links) {
    Links.forEach((link)=>{
        var targetSection = document.querySelector(link.getAttribute('href'));
        var bounding = targetSection.getBoundingClientRect();
        if (bounding.bottom >= 100 && bounding.bottom <= window.innerHeight) {
            // Add the active class to the navbar link
            link.classList.add('active');
        } else {
            // Remove the active class from the navbar link
            link.classList.remove('active');
        }
    });
}
