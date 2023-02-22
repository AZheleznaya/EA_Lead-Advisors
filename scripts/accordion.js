$(document).ready(function () {
    $(".footer__event-button").on("click", function () {
        $(this).siblings("img").toggleClass("rotate")
    })

    $(".accordion__item").on("click", function () {
        $(".accordion__item").removeClass("active")
        $(this).addClass("active")
        $(this).addClass("visited")
    })
})