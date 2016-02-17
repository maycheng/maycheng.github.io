

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 510) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");
        }
    });
});