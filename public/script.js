const toggleButton = document.getElementById("toggle-mobile-nav");
toggleButton.addEventListener("click", toggleMobileNav);

function toggleMobileNav() {
    const mobileNav = document.getElementById("mobile-nav");
    const icon = toggleButton.childNodes[1];
    mobileNav.classList.toggle("show");

    if (mobileNav.classList.contains("show")) {
        icon.setAttribute("src", "images/icon-close.svg"); 
        icon.setAttribute("alt", "image for a button to close a mobile navigation"); 
        toggleButton.setAttribute("aria-label", "Close mobile navigation");
    } else {
        icon.setAttribute("src", "images/icon-hamburger.svg"); 
        icon.setAttribute("alt", "image for a button to open a mobile navigation"); 
        toggleButton.setAttribute("aria-label", "Open mobile navigation");
    }
}