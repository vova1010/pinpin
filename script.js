$(document).ready(function(){
    $('.header__burger').click(function(){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function(){
    $(".header__link").click(function(){
        if ($(window).width() < 767){
        $('.header__menu').hide();
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').removeClass('lock');
    }
    }); 
    $(".header__logo").click(function(){
        if ($(window).width() < 767){
        $('.header__menu').hide();
        $('.header__burger, .header__menu').removeClass('active');
        $('body').removeClass('lock');
    }
    });
    $(".header__burger, .header__link, .header__logo").click(function(){
        $('.header__menu').show(); 
    });
}); 


$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");
        }
    });
});

// slider

function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider");
    let link = document.getElementsByClassName("catalog__link");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < link.length; i++) {
        link[i].className = link[i].className.replace(" active__link", "");
      }
    slides[slideIndex-1].style.display = "grid";
    link[slideIndex-1].className += " active__link";
  }

  // popup

function openForm() {
    document.getElementById("popup1").style.display = "flex";
}
function closeForm() {
    document.getElementById("popup1").style.display = "none";
}
function openForm2() {
    document.getElementById("popup2").style.display = "flex";
}
function closeForm2() {
    document.getElementById("popup2").style.display = "none";
}

// lock body on scroll when popup is active

$(document).ready(function(){
    $('.add, .quote').click(function(){
        $('body').toggleClass('lock');
    });
});

$(document).ready(function(){
    $('.btn__cancel, .btn2').click(function(){
        $('body').removeClass('lock');
    });
});