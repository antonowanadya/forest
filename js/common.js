$(document).ready(function () {
    $('.js-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1186,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 908,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 583,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            ]
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".v-header__inner").css({paddingTop: 15});
        }
    })

    var heig = $(".b-header").height() + $(".b-menu").height();

    $(window).scroll(function () {
        if ($(this).scrollTop() > heig) {

            $(".b-header__nav").addClass("b-header__nav_dis");
        } else {

            $(".b-header__nav").removeClass("b-header__nav_dis");
        }
    });


    $(".v-header__nav").click(function () {
        if ($(".b-menu-adap").hasClass("b-menu__adap_show")) {
            $(".b-menu-adap").removeClass("b-menu__adap_show")
        }
        else {
            $(".b-menu-adap").addClass("b-menu__adap_show")
        }
        if ($(".v-header__nav").hasClass("v-header__nav_x")) {
            $(".v-header__nav").removeClass("v-header__nav_x")
        }
        else {
            $(".v-header__nav").addClass("v-header__nav_x")
        }
    })

    $("[data-tab-link]").click(function (e) {
        e.preventDefault();
        var target = $(this).attr("href");
        var $target = $(target);
        var $inner = $(".b-branches__inner");

        $("[data-tab-link]").removeClass("state-active");
        $(this).addClass("state-active");
        $("[data-tab-content]").hide();
        $target.show();

        $inner.removeClass("type-build type-furnit type-ship");

        if (target == "#ship") {
            $inner.addClass("type-ship");
        } else if(target == "#build"){
            $inner.addClass("type-build");
        } else if(target == "#furnit"){
            $inner.addClass("type-furnit");
        }
    })


});
