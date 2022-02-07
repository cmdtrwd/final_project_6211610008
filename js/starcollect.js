function W() {
            document.body.style.backgroundColor = "#DBBE90";
    document.querySelector(".active").style.color = "#DBBE90";

        }

function D() {
            document.body.style.backgroundColor = "black";

        }

$(document).ready(function () {

    var lastPos = 0;


    $(window).scroll(function () {


        var currentPos = $(this).scrollTop();

        var rotateFactor = currentPos * 1;
        var moveHorizontal = currentPos * 1 - 1000;


console.log("current scrolling position" + currentPos);

        $(".Text2-move").css("transform", "translateX(" + moveHorizontal + "px");

        $(".Text1-move").css("transform", "translateX(" + (-moveHorizontal - 50) + "px");



        if (currentPos > 1) {
            $("#top-nav").addClass("active");
        } else {
            $("#top-nav").removeClass("active");
        }


        if (currentPos > lastPos) {
            $("#top-nav").addClass("down");
            $("#top-nav").removeClass("up");
        } else {
            $("#top-nav").addClass("up");
            $("#top-nav").removeClass("down");
        }

        lastPos = currentPos;
    })









});
