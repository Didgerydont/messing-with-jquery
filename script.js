$(document).ready(function() {
    
    $(".stream-nav").on("click", function() {
        // A selector to match all cards in all streams
        var allStreamsCardsSelector = ".card";
        // A selector to match just this stream's cards
        // for this, we use the class with the name of the stream,
        // which is the same as this nav link's id and then the "-card" suffix.
        var thisStreamCardsSelector = "." + this.id + "-card";

        // First remove the highlight from all of the cards
        $(allStreamsCardsSelector).removeClass("card-highlight");
        // Then apply the highlight to just this stream's cards
        $(thisStreamCardsSelector).addClass("card-highlight");
    });
    
    
    $(".bottom_button").mouseenter(function() {
        $(".bottom_button").fadeTo(400, 0.5, );
    });
    $(".bottom_button").mouseleave(function() {
        $(".bottom_button").fadeTo(400, 1.0);
    });
    $(".bottom_button").click(function() {
        $('#para1').slideToggle('500');
        $('#para2').slideToggle('500');
        $('#para3').slideToggle('500');
        $('#para4').slideToggle('500');
        $('#para5').slideToggle('500');
        $('#para6').slideToggle('500');
    });



    
    
    
    $("h2").on("click", function() {
        $("h2").css("background-color", "lightblue");
    });
    $("#hr_html").hover(function() {
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_html").addClass("h2_font_size");
    });

    $("#hr_mysql").hover(function() {
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_mysql").addClass("h2_font_size");
    });

    $("#hr_python").hover(function() {
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_python").addClass("h2_font_size");
    });

    $("#hr_jquery").hover(function() {
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_jquery").addClass("h2_font_size");
    });

    $("#hr_django").hover(function() {
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_django").addClass("h2_font_size");
    });

    $("#hr_css").hover(function() {
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_css").addClass("h2_font_size");
    });
    $(".bottom_button").mouseenter(function() {
        $("body").css("background-color", "black");
    });
    $(".bottom_button").mouseleave(function() {
        $("body").css("background-color", "#eee");
    });
});
