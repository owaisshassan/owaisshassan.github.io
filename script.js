// $(document).ready(function () {
//     $("#menu").click(function () {
//       $(this).toggleClass("fa-times");
//       $(".navbar").toggleClass("nav-toggle");
//     });
  
//     $(window).on("scroll load", function () {
//       $("#menu").removeClass("fa-times");
//       $(".navbar").removeClass("nav-toggle");
//     });
  
//     $(".portfolio .button-container .btn").click(function () {
//       let filter = $(this).attr("data-filter");
  
//       if (filter == "all") {
//         $(".portfolio .image-container .box").show("400");
//       } else {
//         $(".portfolio .image-container .box")
//           .not("." + filter)
//           .hide("200");
//         $(".portfolio .image-container .box")
//           .filter("." + filter)
//           .show("400");
//       }
//     });
  
//     $("#theme-toggler").click(function () {
//       $(this).toggleClass("fa-sun");
//       $("body").toggleClass("dark-theme");
//     });
  
//     // smooth scrolling
  
//     $('a[href*=""]').on("click", function (e) {
//       e.preventDefault();
  
//       $("html, body").animate(
//         {
//           scrollTop: $($(this).attr("href")).offset().top,
//         },
//         500,
//         "linear"
//       );
//     });
//   });




 /* new changes (15-jan-2023) */

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navItem = document.querySelectorAll(".nav__item"),
  header = document.getElementById("header");

// open and close menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu--open");
  changeIcon();
});

// close the menu when the user clicks the nav links
navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (navMenu.classList.contains("nav__menu--open")) {
      navMenu.classList.remove("nav__menu--open");
    }
    changeIcon();
  });
});

// Change nav toggle icon
function changeIcon() {
  if (navMenu.classList.contains("nav__menu--open")) {
    navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
  } else {
    navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
  }
}


  
  //email
 
  function sendmail() {
    let email = document.getElementById("sender_email");
    let name = document.getElementById("sender_name");
    let sub = document.getElementById("subject");
    let msg = document.getElementById("msg");
    let submit = document.getElementById("email_btn");
    submit.addEventListener("click", () => {
      if (email.value == "" || name.value=="" || sub.value=="" || msg.value=="" ) {
        error();
      } else {
        sendEmail();
        alert("Message sent successfully!")
        let form = document.getElementById("formm");
        form.reset();
      }
    });
  }
  sendmail();
  function error() {
    alert("Please fill all the details");
  }
  function sendEmail() {
    var templateParams = {
      from_name: document.getElementById("sender_name").value,
      sub: document.getElementById("subject").value,
      mesg: document.getElementById("msg").value,
      from_email: document.getElementById("sender_email").value,
    };
  
    emailjs.send("service_8nzk7sh", "template_1a37bnc", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  }
  

