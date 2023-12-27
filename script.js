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
  
    $("#nav-menu .navlist li a").click(function () {
      // applying again smooth scroll on menu items click
      $("html").css("scrollBehavior", "smooth");
    });
  
    // toggle menu/nav-menu script
    $(".menu-btn").click(function () {
      $("#nav-menu .navlist").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
 
   
  });
  
  
