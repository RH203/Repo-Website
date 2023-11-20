function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);

    if(targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const aboutLink = document.querySelector('a[href="#About"]');
    if(aboutLink){
        aboutLink.addEventListener('click', function (event) {
            event.preventDefault();
            smoothScroll('About');
        });
    }

    const contactLink = document.querySelector('a[href="#Contact"]');
    if(contactLink){
        contactLink.addEventListener('click', function (event) {
            event.preventDefault();
            smoothScroll('Contact');
        });
    }

    const coffeeLink = document.querySelector('a[href="#Coffee"]');
    if(coffeeLink){
        coffeeLink.addEventListener('click', function (event) {
            event.preventDefault();
            smoothScroll('Coffee');
        });
    } 
});
