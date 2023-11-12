'use strict';

//element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

//sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

//sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

//contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

//event for input fields
for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {

        //check form validation
        if (form.checkValidity()) {
            formBtn.removeAttribute("disabled");
        } else {
            formBtn.setAttribute("disabled", "");
        }
    });
}

//navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]"); 

for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
        for (let i = 0; i < pages.length; i++) {
            if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
                pages[i].classList.add("active");
                navigationLinks[i].classList.add("active");
                window.scrollTo(0, 0);
            } else {
                pages[i].classList.remove("active");
                navigationLinks[i].classList.remove("active");
            }
        }
    })
}

// contact form responses
const scriptURL = 'https://script.google.com/macros/s/AKfycby0Tc4CW5cFVlcgr3XMTke6eBzavPHp7KO8p3fc-9WMMUW9_WH6b_TuRZhuGUX4TLbZ/exec'
const form1 = document.forms['submit-to-google-sheet']
const confirmMsg = document.getElementById("confirmMsg")

form1.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form1)})
    .then(response => {
        confirmMsg.innerHTML="Message Sent!"
        setTimeout(function () {
            confirmMsg.innerHTML=""
        }, 5000)
        form1.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
