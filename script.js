let link = $('ul li a');
let button = $('.btn');

link.on('click', function() {
    let selector = $(this).attr("href");
    let position = $(selector).offset().top;
    $('html, body').animate({scrollTop: position-60}, 500);
});

button.on('click', function() {
    $('html, body').animate({scrollTop: 0}, 500);
})

$(window).scroll(function() {
    let myposition = $(this).scrollTop();
    if (myposition >= 800){
        button.fadeIn();
    }else{
        button.fadeOut();
    }
})