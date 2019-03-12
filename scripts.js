

///// WEBSITE NAME + NAVBAR /////
const screenWidth = window.innerWidth || document.documentElement.clientWidth
|| document.body.clientWidth;
const backToTop = document.querySelector(".back-to-top");
let timeOut;

//javascript reloads when window is resized without refreshing the entire page
window.onresize = function() { 
    location.reload(); 
}

// header decreases in size when user scrolls
if (screenWidth > 1050) {
    window.onscroll = function scrollFunction() {
        const navbarBrand = document.querySelector(".navbar-brand");
        const navbarItems = document.querySelectorAll(".nav-link");

        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            navbarBrand.style.fontSize = "32px";
            for(let i = 0; i < navbarItems.length; i++) {
                navbarItems[i].style.fontSize = "28px";
            };
            backToTop.classList.remove("hidden");
            backToTop.classList.add("animation");
        } else {
            navbarBrand.style.fontSize = "50px";
            for(let i = 0; i < navbarItems.length; i++) {
                navbarItems[i].style.fontSize = "38px";
            };
            backToTop.classList.add("hidden");
            backToTop.classList.remove("animation");
        }
    }
}

//scroll page back to top when 'back to top' button is clicked
backToTop.onclick = function() {
    window.scroll({
        top: -94, 
        left: 0, 
        behavior: 'smooth',
    })
}


///// HEADER /////

//random quote generator
const randomQuote = [
    '“The books that the world calls immoral are books that show the world its own shame.” <br/> ― Oscar Wilde, The Picture of Dorian Gray', 
    '“At sunrise everything is luminous but not clear.” <br/> ― Norman Maclean, A River Runs Through it and Other Stories',
    '“Oft hope is born when all is forlorn.” <br/> ― J.R.R. Tolkien, The Return of the King',
    '“I wanted you to have a place where you felt safe enough to cry if I could not be with you.” <br/> ― Erin Morgenstern, The Night Circus',
    '“All the beauty in the world was made within the oppressive limitations of time and death and impermanence." <br/> ― Joseph Fink, The Great Glowing Coils of the Universe',
    '"Death is only the end if you assume the story is about you." <br/> ― Cecil Palmer, Welcome to Night Vale',
    '“In an otherwise mediocre existence, we chose to feel passion.” <br/> ― Alice Oseman, I Was Born for This',
    '“I just wanted to tell you that I\'m going to carry on. As I am.” <br/> ― Rainbow Rowell, Carry On',
    '“Whether it’s chocolate or socks, the rule is the same: the darker the better.” <br/> ― Pseudonymous Bosch, This Isn\'t What It Looks Like'
]

window.onload = function() {
    const headerTitle = document.querySelector(".header-title");
    const defaultQuote = document.querySelector(".header-quote");
    const randomQuoteIndex = Math.floor(Math.random() * randomQuote.length);

    defaultQuote.innerHTML = randomQuote[randomQuoteIndex];

    headerTitle.classList.remove("hidden");
    headerTitle.classList.add("opening-transition");
    defaultQuote.classList.remove("hidden");
    defaultQuote.classList.add("opening-transition");
}



///// LIGHTBOX /////
const lightBox = document.querySelector(".lightbox");
const galleryItems = document.querySelectorAll(".img-thumbnail");
const lightBoxDefaultImage = document.querySelector(".lightbox-content")
const closeButton = document.querySelector(".lightbox-button-close");
const nextButton = document.querySelector(".lightbox-button-next");
const lightboxContent = document.querySelector(".lightbox-content");

//make thumbnail + lightbox image+caption respond to each other correctly
for (let i = 0; i < galleryItems.length; i++) {
    let thumbnailImage = galleryItems[i];

    thumbnailImage.onclick = function(event) {
        //show lightbox when a thumbnail is clicked
        lightBox.classList.remove("hidden");

        //replace lightbox default image+caption to image+caption that was clicked
        const elementClicked = event.target;
        const galleryItemParent = elementClicked.parentElement;

        lightBoxDefaultImage.innerHTML = galleryItemParent.innerHTML;

        lightBox.onclick = function(event) {
                event.preventDefault();
                lightBox.classList.add("hidden");
        }
    }
}

///// CONTACT ME /////

//stop page from refreshing when 'send off!' button is clicked
const sendOff = document.querySelector("#contact button");

sendOff.onclick = function(event) {
    const formInput = document.querySelectorAll(".contact-me-form .form-control");

    event.preventDefault();

    for (i = 0; i < formInput.length; i++) {
        formInput[i].value = "";
    }

    alert("Thanks you for your thoughts! :D");
}
