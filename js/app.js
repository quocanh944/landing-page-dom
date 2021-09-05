/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
 const navbar__list = document.getElementById("navbar__list");
 const section__lists = document.getElementsByTagName("section");
 
 /**
  * End Global Variables
  * Start Helper Functions
  *
  */
 function scrollToTop() {
     window.scrollTo({top: 0, behavior: 'smooth'});    
 }
 function whatInView(section) {
     const sectionTop = section.offsetTop;
     const sectionHeight = section.offsetHeight;
     const position = document.documentElement.scrollTop;
     if (position >= (sectionTop - sectionHeight / 2.5)) {
         return section.getAttribute("id");
     }
     return "";
 }
 /**
  * End Helper Functions
  * Begin Main Functions
  *
  */
 
 // build the nav
 function buildNavigation() {
     for (const list of section__lists) {
         const data = list.getAttribute("data-nav");
         const li = document.createElement('li');
         li.setAttribute("class", "menu__link");
         li.setAttribute("onclick", "goToEle(this)");
         li.setAttribute("data-nav", list.getAttribute("id"));
         li.textContent = data;
         navbar__list.appendChild(li);
         console.log(data);
     }
 }
 // Add class 'active' to section when near top of viewport
 
 // Get the button to go top:
 mybutton = document.getElementById("myBtn");
 
 // When the user scrolls down section1 from the top of the document, show the button
 window.onscroll = function() {
     scrollFunction();
 };
 
 function scrollFunction() {
     const height = document.querySelector("#section2").offsetTop;
     if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
         mybutton.style.display = "block";
     } else {
         mybutton.style.display = "none";
     }
 }
 
 // Scroll to anchor ID using scrollTO event
 
 
 
 /**
  * End Main Functions
  * Begin Events
  *
  */
 
 // Build menu
 buildNavigation();
 
 // Scroll to section on link click
 function goToEle(element) {
     const destination__data = element.getAttribute("data-nav");
     const destination = document.getElementById(destination__data);
     destination.scrollIntoView({behavior: "smooth", block: "start"})
 }
 
 // Set sections as active
 window.addEventListener("scroll", () => {
     let current = "";
     for (let index = 0; index < section__lists.length; index++) {
         const temp = whatInView(section__lists[index])
         if (temp) {
             current = temp;
         };
     }
     let navLi = document.getElementsByClassName("menu__link");
     for (let index = 0; index < navLi.length; index++){
         const list = navLi[index];
         list.classList.remove("navbar__active");
         if (list.getAttribute("data-nav") == current) {
             list.classList.add("navbar__active");
         }
     }
 })