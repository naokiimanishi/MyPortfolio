/*グローバルナビをマウスオーバーした際にテキストを書き換え*/
const listLanguageChange = (() => {

    let list = document.getElementsByClassName("header-navi__list");
    const jalist = ["私について", "能力", "制作実績", "お問い合わせ"];
    const enlist = ["ABOUT", "SKILL", "WORK", "CONTACT"];

    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener("mouseover", () => {
            list[i].innerText = jalist[i];

        }, false);
        list[i].addEventListener("mouseleave", () => {
            list[i].innerText = enlist[i];

        }, false);
    }
})();

/*ハンバーガーメニューのアニメーション */
const navi = (() => {
    let menuicon = document.getElementsByClassName("menuicon");
    let mask = document.getElementsByClassName("mask");
    let list = document.getElementsByClassName("header-navi__list");
    let headerNavi = document.getElementsByClassName("header-navi");

    const nav = [];
    nav[0] = menuicon;
    nav[1] = mask;
    nav[2] = list;
    nav[3] = headerNavi;

    console.log(nav[3][0]);

    nav[0][0].addEventListener("click", () => {
        nav[3][0].classList.toggle("navi-onoff");
        nav[1][0].classList.toggle("navi-onoff");

    });
    nav[1][0].addEventListener("click", () => {
        nav[3][0].classList.toggle("navi-onoff");
        nav[1][0].classList.toggle("navi-onoff");
    });

    for (let i = 0; i < nav[2].length; i++) {
        nav[2][i].addEventListener("click", () => {
            nav[3][0].classList.toggle("navi-onoff");
            nav[1][0].classList.toggle("navi-onoff");
        }, false);
    }


})();

/*スムーススクロール*/
$('a[href^="#"]').click(function() {
    // スクロールの速度
    let speed = 400; // ミリ秒で記述
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $('body,html').animate({
        scrollTop: position
    }, speed, 'swing');
    return false;
});

$(function() {
    $(window).scroll(function() {
        var scroll = $(this).scrollTop();

        if (400 <= scroll) {
            $(".page-top").addClass("page-topIn");
        } else {
            $(".page-top").removeClass("page-topIn");
        }
    });
});

$(document).ready(function() {

    $('#form').submit(function(event) {
        var formData = $('#form').serialize();
        $.ajax({
            url: "https://docs.google.com/forms/d/e/1FAIpQLSfyqJEH0XGhf8HrICzJs5WMONY60u40Ux83NTF9eRcPL9YjMA/formResponse",
            data: formData,
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function() {
                    $(".end-message").slideDown();
                    $(".mask").slideDown();
                    $(".submit-btn").fadeOut();
                    $(".end-message").delay(3000).fadeOut();
                    //window.location.href = "thanks.html";
                },
                200: function() {
                    $(".false-message").slideDown();
                }
            }
        });
        event.preventDefault();
    });

});