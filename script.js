$(function(){ 
    $("nav a").hover(function(){ 
        $(this).next("p").animate({ 
            opacity: "show",
            top: "90"
        }, "slow");
    }, function(){ 
        $(this).next("p").animate({ 
            opacity: "hide",
            top: "70"
        }, "fast");
    }); 

    //nav end

    $(".hero-image a").click(function() {
        var do_zdj = $(this).attr("href");
        $(".zdj_g").attr({
            src: do_zdj,
        });
        return false;
    });

    //hero img end

    $('main .bohaterowie').click(function() {
        $(this).next('.panel').slideToggle('slow').siblings('.panel:visible').slideUp('slow');
    });

    //bohaterowie end

    $(".main-rdr .text h2:odd").css("color", "#F3AC2C");
    $(".main-rdr .text h2:even").css("color", "#C30A12");

    $(".main-tlou .text h2:odd").css("color", "#768CA4");
    $(".main-tlou .text h2:even").css("color", "#C2BFCE");

    $(".main-lis .text h2:odd").css("color", "#C27C66");
    $(".main-lis .text h2:even").css("color", "#E4DBD8");

    $(".main-detroit .text h2:odd").css("color", "#639EB6");
    $(".main-detroit .text h2:even").css("color", "#C8CBC9");

    $(".main-stray .text h2:odd").css("color", "#80CA84");
    $(".main-stray .text h2:even").css("color", "#288497");

    //filtry selektorów end
});