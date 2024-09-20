$(document).ready(function () {
    $(".accordion-content").css("display","none");
    // $(".accordion-title:first-of-type").addClass("open");
    $(".accordion-title").click(function(){
     $(".open").not(this).removeClass("open").next().slideUp(300);
     $(this).toggleClass("open").next().slideToggle(500);
    });
  });
