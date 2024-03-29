$(document).ready(function () {
  $(window).scroll(function () {
    // sticky nav-menu on scroll script
    if (this.scrollY > 20) {
      $(".nav-menu").addClass("sticky");
    } else {
      $(".nav-menu").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });


  // toggle menu/nav-menu script
  $(".menu-btn").click(function () {
    $("#nav-menu .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // Add event listener to menu items
  $("#nav-menu .menu li a").click(function () {
   
    $("#nav-menu .menu").removeClass("active");
    $(".menu-btn i").removeClass("active");
        // Applying smooth scroll on menu items click

     $("html").css("scrollBehavior", "smooth");
  });


  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Back-End Developer","Front-End Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Back-End Developer", "Front-End Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

 
});

