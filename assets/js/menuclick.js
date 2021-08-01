
$(document).ready(function(){
    $("#promo").click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(".section-promo").offset().top},
            'slow');
    }); 

    $("#karir").click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(".section-karir").offset().top},
            'slow');
    });
});