jQuery(document).ready(function($) {
    
    new WOW().init();

    // anchor scroll
    
    $(".header-nav-bottom-menu a, .button-href").click(function (e) {
        e.preventDefault();
        var a = $("[data-anchor='" + $(this).attr("href").replace("#", "") + "']");
        $("html, body").animate({
            scrollTop: (a.offset().top - 72) + 'px'
        });
    });
    
    // svg images to svg object
    
    $(function(){
        jQuery('img.svg').each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Check if the viewport is set, else we gonna set it if we can.
                if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
                }

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

        });
    });
    
    // owl slider
    
    $('.owl-carousel').owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:52,
        nav:true,
        responsive:{
            300:{
                items:1
            },
            1300: {
                items:3
            },
            1650: {
                items:4
            }
        }
    });
    
    // tabs
    
    (function($){				
        jQuery.fn.lightTabs = function(options){

            var createTabs = function(){
                tabs = this;
                i = 0;

                showPage = function(i){
                    $(tabs).children("div").children("div").hide();
                    $(tabs).children("div").children("div").eq(i).show();
                    $(tabs).children("ul").children("li").removeClass("active");
                    $(tabs).children("ul").children("li").eq(i).addClass("active");
                }

                showPage(0);				

                $(tabs).children("ul").children("li").each(function(index, element){
                    $(element).attr("data-page", i);
                    i++;                        
                });

                $(tabs).children("ul").children("li").click(function(){
                    showPage(parseInt($(this).attr("data-page")));
                });				
            };		
            return this.each(createTabs);
        };	
    })(jQuery);
    
    $(".tabs").lightTabs();
    
});