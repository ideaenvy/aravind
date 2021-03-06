jQuery(document).ready(function(e) {
    function t() {
        "desktop" == p ? window.requestAnimationFrame ? window.requestAnimationFrame(n) : n() : e(".tour-section").find(".full-container").removeAttr("style").find(".half-container").removeAttr("style"), scroll()
    }

    function n() {
        var t = e(window).scrollTop(),
            n = e(window).height(),
            r = e(window).width();
        e(".tour-section").each(function() {
            var a, s, c = e(this),
                d = t - c.offset().top,
                p = 1,
                v = r / 2 + "px";
            d >= -n && 0 >= d ? (p = 1, a = 1, v = (.5 * r * (-d / n)).toFixed(0) + "px") : d > 0 && n >= d ? (v = "0px", p = (1 - d * l / n).toFixed(5), a = (1 - d / n).toFixed(5)) : -n > d ? (p = 1, v = r / 2 + "px", a = 1) : a = 0, s = parseInt(v.replace("px", "")) * f / 20, i(c.find(".full-container"), p, a);
            var u = c.is(":nth-of-type(even)") ? "-" : "+",
                w = c.is(":nth-of-type(even)") ? "+" : "-";
            c.find(".half-container") && (o(c.find(".half-container").eq(0), u + v, s), o(c.find(".half-container").eq(1), w + v, s)), d >= 0 && n > d ? c.addClass("is-visible") : c.removeClass("is-visible")
        })
    }

    function o(t, n, o) {
        var i = Math.ceil(Math.abs(n.replace("px", "")));
        i >= e(window).width() / 2 ? o = 0 : i > 20 && (o = f), t.css({
            "-moz-transform": "translateX(" + n + ")",
            "-webkit-transform": "translateX(" + n + ")",
            "-ms-transform": "translateX(" + n + ")",
            "-o-transform": "translateX(" + n + ")",
            transform: "translateX(" + n + ")",
            "box-shadow": "0px 0px 40px rgba(0,0,0," + o + ")"
        })
    }

    function i(e, t, n) {
        e.css({
            "-moz-transform": "scale(" + t + ")",
            "-webkit-transform": "scale(" + t + ")",
            "-ms-transform": "scale(" + t + ")",
            "-o-transform": "scale(" + t + ")",
            transform: "scale(" + t + ")",
            opacity: n
        })
    }

    function r() {
        d || e(".tour-section.is-visible").next().length > 0 && c(e(".tour-section.is-visible").next())
    }

    function a() {
        if (!d) {
            var t = e(".tour-section.is-visible");
            t.length > 0 && e(window).scrollTop() != t.offset().top ? c(t) : t.prev().length > 0 && e(window).scrollTop() == t.offset().top && c(t.prev(".tour-section"))
        }
    }

    function scroll() {
        if(e(window).scrollTop() < e(window).height() / 2){
            e(".vertical-nav .prev").addClass("inactive");
        }else{
            e(".vertical-nav .prev").removeClass("inactive");
        }
        if(e(window).scrollTop() > e(document).height() - 3 * e(window).height() / 2){
            e(".vertical-nav .next").addClass("inactive");
        }else{
            e(".vertical-nav .next").removeClass("inactive");
        }
    }

    function c(t) {
        d = !0, e("body,html").animate({
            scrollTop: t.offset().top
        }, 500, function() {
            d = !1
        })
    }
    var l = .3, f = .7, d = !1,
        p = window.getComputedStyle(document.querySelector("body"), "::before").getPropertyValue("content").replace(/"/g, "").replace(/'/g, "");
    e(window).on("resize", function() {
        p = window.getComputedStyle(document.querySelector("body"), "::before").getPropertyValue("content").replace(/"/g, "").replace(/'/g, "")
    }), t(), e(window).on("scroll", function() {
        t()
    }), e(".vertical-nav .prev").on("click", function() {
        a()
    }), e(".vertical-nav .next").on("click", function() {
        r()
    }), e(document).keydown(function(e) {
        "38" == e.which ? (a(), e.preventDefault()) : "40" == e.which && (r(), e.preventDefault())
    })
});