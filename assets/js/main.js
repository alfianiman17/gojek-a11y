// HEADER FIXED
$(window).on('scroll',function() {    
    var scroll = $(window).scrollTop();
    if (scroll < 45) {
        $("header").removeClass("fixed");
    }else{
        $("header").addClass("fixed");
    }
    console.log(scroll);
});