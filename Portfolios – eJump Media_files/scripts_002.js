function load_sent_ok() {
    AdobeEdge.loadComposition(resources_location + "js/site/contact_sent_animation", "EDGE-889336818", {
        scaleToFit: "none",
        centerStage: "none",
        minW: "0px",
        maxW: "undefined",
        width: "470px",
        height: "400px"
    }, {
        dom: []
    }, {
        dom: []
    }), setTimeout(start_form_typing, 3e3)
}

function cf7_file_errors_check() {
    $(".custom-error").remove();
    var a = $(".file").find('[role="alert"]').text();
    if (a.length > 0) {
        var a = "<span class='custom-error wpcf7-form-control-wrap your-file'><span role='alert'>" + a + "</span></span>";
        $(".the-file").after(a)
    }
}

function start_form_typing() {
    if (location.href.indexOf("/contact/") >= 0) var a = "Dear Earthling, ^200 your message has reached us. ^500<br />Our customer-friendly creatures ^200 will soon decrypt it, answer it ^200 and reach you back as soon as possible. ^500<br /><br />Stay aware, ^1000<br /> The eJump Team";
    if (location.href.indexOf("/job/") >= 0) var a = "Dear Earthling, ^200 your message has reached us. ^500<br />Our HR-friendly creatures ^200 will soon decrypt it, answer it ^200 and reach you back as soon as possible. ^500<br /><br />Stay aware, ^1000<br /> The eJump Team";
    $("#sent_message p").attr("style", "display: inline"), $("#sent_message p").typed({
        strings: [a.substr(15, 18), a],
        typeSpeed: 10,
        showCursor: !0,
        cursorChar: "|",
        contentType: "html"
    })
}
jQuery(document).foundation({
    equalizer: {
        equalize_on_stack: !0
    }
}), window.getMargin = function() {
    return $("#page").position().top
}, $(document).ready(function() {
    // console.log(11);
    $.each($("article a"), function(k, v) {
        if ($(this).attr('href')) {
            if ($(this).attr('href').indexOf('wp-content/uploads') > -1) {
                $(this).parent().addClass('gallery-item')
                $(this).attr("data-lightbox", 'gallery1')
            }
        }
    })
}), $(window).load(function(a) {
    function b() {
        0 != $(window).scrollTop() ? ($(".tbnav").addClass("fixed"), $("body").addClass("f-topbar-fixed")) : ($(".tbnav").removeClass("fixed"), $("body").removeClass("f-topbar-fixed"))
    }
    $(".gallery-item a").attr("data-lightbox", "gallery"), lightbox.option({
        resizeDuration: 200,
        wrapAround: !0,
        disableScrolling: !0
    }), $(".acc_title_link").click(function() {
        $('.accordion-navigation').each(function() {
            if (!$(this).data('top')) {
                $(this).attr('data-top', $(this).find('h3').offset().top - 100);
            }
        });
        $("html, body").animate({
            scrollTop: $(this).parent('.accordion-navigation').data('top')
        }, 600);
    }), "true" == $("#intern").val() && (location.href.indexOf("about-us") < 0 || location.href.indexOf("about-us") >= 0 && 0 == location.hash.length) && location.href.indexOf("statistics") < 0 && $("html, body").animate({
        scrollTop: $("#content").offset().top - 100
    }, 1e3), $(document).ready(function() {
        b()
    }), $(window).scroll(function() {
        b()
    })
}), + function(a) {
    a(document).on("click", ".tab-title_careers a", function(a) {
        a.preventDefault()
    })
}(jQuery), + function(a) {
    function b(a, b) {
        for (var c in b)
            if (b[c] == a) return !0;
        return !1
    }
    a(document).ready(function() {
        a(".testimonial_bg").removeClass("day"), a(".testimonial_bg").removeClass("night");
        var c = (new Date).getHours(),
            d = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
            e = [20, 21, 22, 23, 0, 1, 2, 3, 4, 5, 6];
        b(c, d) && a(".testimonial_bg").addClass("day"), b(c, e) && a(".testimonial_bg").addClass("night")
    })
}(jQuery), + function() {
    $(".orbit-container").on("before-slide-change.fndtn.orbit", function(a) {
        $(".orbit-container").attr("style", "pointer-events: none")
    }), $(".orbit-container").on("after-slide-change.fndtn.orbit", function(a, b) {
        setTimeout(function() {
            $(".orbit-container").attr("style", !1)
        }, 500)
    })
}(jQuery), + function(a) {
    a(document).on("click", ".top-bar", function(b) {
        a(window).width() <= 640 && (a(this).hasClass("expanded") ? (a(".tbnav").removeClass("active"), a(this).removeClass("expanded").removeClass("fixed")) : (a(".tbnav").addClass("active"), a(this).addClass("expanded").addClass("fixed")))
    })
}(jQuery), + function(a) {
    a(document).ready(function() {
        if (a(".form-job-name").length > 0) {
            var b = a(".form-job-name").data("job-name");
            a(".wpcf7-form").append('<input name="job-name" type="hidden" value="' + b + '">')
        }
    })
}(jQuery), + function(a) {
    a(function() {
        a("#job_form").length > 0 && a.each(job_blog_links, function(b, c) {
            a('#job_form form input[name="blog-link' + b + '-name"]').val(c.name), a('#job_form form input[name="blog-link' + b + '-url"]').val(c.url)
        })
    })
}(jQuery);