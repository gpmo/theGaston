var clicked = false;
var visible = false;

var clicked_second = false;
var visible_second = false;

function start() {
    $(".intro").typed({
        strings: ["Welcome to <span style='font-weight: 500;position:inline-block'>Gaston</span>.^1000", "My name is Patricio and I'm his personal assistant.", "Today I will be guiding you around. Click below to start..."],
        typeSpeed: 50,
        backSpeed: 0,
        loop: false,
        startDelay: 500,
        contentType: 'html',
        callback: function () {
            $(".primaryButton").show("drop", {
                direction: 'down',
                easing: 'easeOutExpo'
            }, 500);
            visible = true;
            $(".alert").fadeIn("slow");
        }
    });
}

function special() {
    clicked = true;
    console.log("just clicked");
    $(".intro").remove();
    $(".typed-cursor").eq(0).remove();
    first();
}

$(document).keydown(function (e) {
    if (e.keyCode == 38 && visible) {
        console.log('pressed');
        $(".intro").remove();
        $(".typed-cursor").eq(0).remove();
        clicked = true;
        first();
    }
});


//function first() {
//    start = null;
//    if (clicked) {
//        visible = false;
//        $(".primaryButton").hide("drop", {
//            direction: 'up',
//            easing: 'easeOutExpo'
//        }, 700);
//        $(".intro2").typed({
//            strings: ["He believes that <strong>creativity</strong> is the key to success,^1000 but he is also in love with <strong>technology</strong>."],
//            typeSpeed: 50,
//            startDelay: 500,
//            backSpeed: 0,
//            loop: false,
//            startDelay: 500,
//            contentType: 'html',
//            callback: function () {
//                $(".button_2_right_entry").show("drop", {
//                    direction: 'right',
//                    easing: 'easeOutExpo'
//                }, 500);
//                $(".button_2_left_entry").show("drop", {
//                    direction: 'left',
//                    easing: 'easeOutExpo'
//                }, 500);
//                visible_second = true;
//            }
//        });
//    }
//}

function first() {
    start = null;
    if (clicked) {
        visible = false;
        $(".primaryButton").hide("drop", {
            direction: 'up',
            easing: 'easeOutExpo'
        }, function () {
            $(".primaryButton").remove();
        }, 700);

        setTimeout(function () {
            $("#townInfo1").fadeIn("slow");
        }, 1000);
        setTimeout(function () {
            $("#townInfo2").fadeIn("slow");
        }, 3000);
        setTimeout(function () {
            $("#townInfo3").fadeIn("slow");
        }, 6000);
        setTimeout(function () {
            $("#townInfo4").fadeIn("slow");
        }, 8000);
        setTimeout(function () {
            $(".yearButton").fadeIn("slow");
        }, 9000);
    }
}

function map() {
    $("#townInfo1").fadeOut("slow", function () {
        $("#townInfo1").remove();
    });
    $("#townInfo3").fadeOut("slow", function () {
        $("#townInfo3").remove();
    });
    $("#townInfo4").fadeOut("slow", function () {
        $("#townInfo4").remove();
    });
    $("#townInfo2").fadeOut("slow", function () {
        $("#townInfo2").remove();

    });
    $(".yearButton").hide("drop", {
        direction: 'down',
        easing: 'easeOutExpo'
    }, function () {
        $(".yearButton").remove();
    });

    setTimeout(function () {
        $("#map").fadeIn(1500);
    }, 1000);
    setTimeout(function () {
        $("#sanSebastian1").fadeIn("slow");
    }, 1500);
    setTimeout(function () {
        $("#sanSebastian2").fadeIn("slow");
    }, 4500);
    setTimeout(function () {
        $("#sanSebastian3").fadeIn("slow");
    }, 6500);
    setTimeout(function () {
        $("#sanSebastian4").fadeIn("slow");
    }, 9000);

    setTimeout(function () {
        $(".ssButton").fadeIn("slow");
    }, 10000);

}

function sanSebastianf() {
    $(".ssButton").hide("drop", {
        direction: 'down',
        easing: 'easeOutExpo'
    }, function () {
        $(".ssButton").remove();
    });
    setTimeout(function () {
        $("#sanSebastian").fadeOut("slow", function () {
            $("#sanSebastian").remove();
            setTimeout(function () {
                $("#tree").fadeIn(1500, function () {
                    $("#ama1").fadeIn(1500);
                    setTimeout(function () {
                        $("#papa1").fadeIn(1500)
                    }, 1500);
                    setTimeout(function () {
                        $("#corazon").show("drop", {
                            direction: 'up'
                        })
                        setTimeout(function () {
                            $("#gastonHead").fadeIn("slow");
                        }, 3000);
                    }, 3000);
                });
            }, 2000);
        });
    }, 1000);
}

function gastonHead() {
    $("#animatron").fadeOut(1500, function () {
        $("#animatron").remove();
        $(".babyButton").hide("drop", {
            direction: 'down',
            easing: 'easeOutExpo'
        }, 700);
    });


    setTimeout(function () {
        $("#babyborn1").show("drop", {
            direction: 'left'
        }, 2000);
        setTimeout(function () {
            $("#babyborn2").show("drop", {
                direction: 'right'
            }, 2000);
        }, 2000);
    }, 1000);

    setTimeout(function () {

        $("#babyborn").fadeOut("slow");

        $("#left").css({
            "opacity": "0",
            "display": "block"
        });

        $("#right").css({
            "opacity": "0",
            "display": "block"
        });

        $("#strongLeft").css({
            "opacity": "0"
        });

        $("#strongRight").css({
            "opacity": "0"
        });

        $("svg").eq(0).animate({
            position: "fixed",
            right: "40%"
        }, 4000);

        $("svg").eq(1).animate({
            left: "38%"
        }, 4000, function () {
            $("#left").animate({
                opacity: 1
            }, 700);

            $("#right").animate({
                opacity: 1
            }, 700);

            setTimeout(function () {
                $("#strongLeft").animate({
                    opacity: 1
                }, 700);

                $("#strongRight").animate({
                    opacity: 1
                }, 700);
            }, 1500);
        });

        $("svg").eq(0).children().animate({
            svgStroke: "#05468C"
        }, 4000);

        $("svg path").eq(0).children().animate({
            svgStroke: "#05468C"
        }, 4000);

        $("svg").eq(1).children().animate({
            svgStroke: "#FFD900"
        }, 4000);

        $("svg path").eq(1).children().animate({
            svgStroke: "#FFD900"
        }, 4000);
    }, 5000);



}

function pen() {
    $("#pen").fadeOut(1000, function () {
        $("#pen").remove();
        $("#croppedLeftArm").show("puff");
    });
    setTimeout(function () {
        $("#wrench").css("display", "block");
        $("#wrench").animate({
            opacity: 0.7
        });
    }, 2000);
}

function wrench() {
    $("#wrench").fadeOut(1000, function () {
        $("#wrench").remove();
        $("#croppedRightArm").show("puff");
    });
    setTimeout(function () {
        $("#skateboard").css("display", "block");
        $("#skateboard").animate({
            opacity: 0.7
        });
    }, 2000);
}

function skateboard() {
    $("#skateboard").fadeOut(1000, function () {
        $("#skateboard").remove();
        $("#croppedRightLeg").show("puff");
        setTimeout(function () {
            $("#croppedLeftLeg").show("puff")
        }, 1000);
    });
    setTimeout(function () {
        $("#music").css("display", "block");
        $("#music").animate({
            opacity: 0.7
        });
    }, 2000);
}

function music() {
    $("#music").fadeOut(1000, function () {
        $("#music").remove();
        $("#croppedTorax").show("puff");
    });
    setTimeout(function () {
        $("#computer").css("display", "block");
        $("#computer").animate({
            opacity: 0.7
        });
    }, 2000);
}

function computer() {
    $("#computer").fadeOut(1000, function () {
        $("#computer").remove();
        $("#croppedHead").show("puff");
    });
}

function special_second() {
    clicked_second = true;
    console.log("just clicked");
    $(".intro2").remove();
    $(".typed-cursor").eq(0).remove();
    second(this);
}

$(document).keydown(function (e) {
    if (e.keyCode == 37 && visible_second) {
        console.log('pressed2');
        $(".intro2").remove();
        $(".typed-cursor").eq(0).remove();
        clicked_second = true;
        second($('.button_2_left'));
    } else if (e.keyCode == 39 && visible_second) {
        console.log('pressed2');
        $(".intro2").remove();
        $(".typed-cursor").eq(0).remove();
        clicked_second = true;
        second($('.button_2_right'));
    }
});

function second(button) {
    if (clicked_second) {
        visible_second = false;
        clicked_second = false;
        if ($(button).hasClass('button_2_left')) {
            console.log("left");
            $(button).parent().hide("drop", {
                direction: 'left',
                easing: 'easeOutExpo'
            }, 700);
            $('.button_2_right').hide("fade");
        } else {
            console.log("right");
            $(button).parent().hide("drop", {
                direction: 'right',
                easing: 'easeOutExpo'
            }, 700);
            $('.button_2_left').hide("fade");
        }
        $(".intro3").typed({
            strings: ["He believes that <strong>creativity</strong> is the key to success,^1000 but he is also in love with <strong>technology</strong>."],
            typeSpeed: 50,
            startDelay: 500,
            backSpeed: 0,
            loop: false,
            startDelay: 500,
            contentType: 'html',
            callback: function () {

            }
        });
    }
}