$(function () {

    let flag = true;

    toggleTool();

    function toggleTool() {
        let toolTop = $(".floor").offset().top;
        if ($(document).scrollTop() >= toolTop - 20) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
    }

    $(window).scroll(function () {
        toggleTool();

        if (flag) {
            $(".floor>div").each(function (i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    $(".fixedtool li").eq(i).addClass("current3").siblings().removeClass();
                }
            });
        }
    });

    $(".fixedtool li").click(function () {
        flag = false;
        let current = $(".floor>div").eq($(this).index()).offset().top;
        $("body, html").stop().animate({
            scrollTop: current
        }, function () {
            flag = true;
        });

        $(this).addClass("current3").siblings().removeClass(); // 此处只有一个类，移除可不写类名
    });

    // 返回顶部
    $(".backToTop").click(function () {
        flag = false;
        // 注意：不能是文档而是 html和body元素做动画
        $("body, html").stop().animate({
            scrollTop: 0
        }, function () {
            flag = true;
            $(".fixedtool li").removeClass("current3");
        });
    });
});