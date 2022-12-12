var navbar = document.getElementById("navbar");
window.addEventListener("scroll", (event)=>{
    var scroll = this.scrollY;
    console.log(scroll);
    if (scroll>0){
        navbar.style.boxShadow = "0 1px 10px 1px black";
    }
    else {
        navbar.style.boxShadow = "none";
    }
})