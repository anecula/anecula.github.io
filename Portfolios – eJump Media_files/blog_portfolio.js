"use strict";
$(window).load(function() {
    $(".gallery-item a").attr("data-lightbox", "gallery"), lightbox.option({
        resizeDuration: 200,
        wrapAround: !0,
        disableScrolling: !0
    }), location.hash.length > 0 && location.href.indexOf("blog") >= 0 && $("html, body").animate({
        scrollTop: $("#content").offset().top
    }, 1e3);
    var a = $("#isotope");
    // if (location.hash.length > 0 && location.href.indexOf("blog") >= 0) {
    // a.isotope({
    //     itemSelector: '.post',
    //     layoutMode: 'fitRows',
    //     animationOptions: {
    //         duration: 750,
    //         easing: 'linear',
    //         queue: false
    //     }
    // })
    // }
    if ($(document).on("click", "#filters a", function(a) {
            if (location.href.indexOf("blog") < 0 && location.href.indexOf("portfolio") < 0) throw new Error("alba ca zapada :P");
            location.hash = $(this).attr("href").split("#")[1]
        }), $(document).on("click", ".filters a, #filters a", function(b) {
            b.preventDefault(), location.hash = $(this).attr("href").split("#")[1], $(".filters a").removeClass("current"), $(this).addClass("current");
            var c = $(this).attr("data-filter");
            return console.log($(this).attr("data-filter")), $(".cat-description").hide(), $(".cat-description" + $(this).attr("data-filter")).show(), a.isotope({
                filter: c,
                layoutMode: 'fitRows',

            }), !1
        }), window.location.href.indexOf("blog") > -1) {
        var b = document.location.hash.split("#")[1],
            c = ".category-";
        b ? $('.filters a[data-filter="' + c + b + '"]').click() : $(".filters li:first-child a").click()
    }
    if (window.location.href.indexOf("portfolio") > -1) {
        var b = document.location.hash.split("#")[1],
            c = ".portfolio_cat-";
        b ? $('.filters a[data-filter="' + c + b + '"]').click() : $(".filters li:first-child a").click()
        // if ($('#portfolio_video').length > 0) {
        //     $('#portfolio_video')[0].play();
        // }
    }
    $(document).on("click", "#filters a", function(a) {
        "undefined" != typeof is_portfolio_single && (location.href = $(this).attr("href"))
    })
});