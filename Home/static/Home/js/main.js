$(window).load(function() {
    $("#preloader").fadeOut("slow");
});

$(document).ready(function(){


     new WOW().init();


     $('#top-nav').onePageNav({
        currentClass: 'current',
        changeHash: true,
        scrollSpeed: 1200
    });


    //animated header class
    $(window).scroll(function() {
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll > 200) {
        //console.log('a');
        $(".navigation").addClass("animated");
    } else {
        //console.log('a');
        $(".navigation").removeClass("animated");
    }});



    /*$('input, textarea').data('holder', $('input, textarea').attr('placeholder'));

    $('input, textarea').focusin(function () {
        $(this).attr('placeholder', '');
    });
    $('input, textarea').focusout(function () {
        $(this).attr('placeholder', $(this).data('holder'));
    });*/


    //contact form validation
    $("#contact-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            message: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Please enter Your Name",
                minlength: "Your name must consist of at least 2 characters"
            },
            message: {
                required: "Please Write Something",
                minlength: "Your message must consist of at least 2 characters"
            },
            email: "Please enter a valid email address"
        },

    });

});

/*for typewriter effect*/
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('We don\'t just build Websites ,' )
    .pauseFor(500)
    .deleteChars(10)
    .typeString('Apps ,')
    .pauseFor(500)
    .deleteChars(6)
    .typeString('Softwares ,')
    .pauseFor(500)
    .deleteChars(11)
    .typeString('Stuff , We build your Business !')
    .pauseFor(2500)
    .deleteChars(10)
    .typeString('Dreams !')
    .pauseFor(2500)
    .deleteAll()
    .start();







