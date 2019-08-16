//Han Yu's Portfolio, Mainly animations, functions and RWD things.
//Grid System Imports, cols and gutters located at grid.scss
//Sytles Imports, any theming sytles located at sytles.scss

//------------------------------------------------//

//Button Underline Feedback Animation Start
$(".main-button").hover(
    function() { $(".button-text").toggleClass("btn-ani");},
    function() { $(".button-text").removeClass("btn-ani");} //Return animation when leave
);
//Button Underline Animation Ends

//Showcase Cover Background Feedback Animation Start
$(".showcase-cover-background").hover(
    function() {
        var worksClass = $(this).attr("class").split(" ")[2]; // Array to get works class for animation,"showcase-cover-background"
        $(".showcase-cover-background." + worksClass).toggleClass("btn-ani");
    },
    function() {
        var worksClass = $(this).attr("class").split(" ")[2];
        $(".showcase-cover-background." + worksClass).removeClass("btn-ani");
    },
); 
//Showcase Cover Background Feedback Animation Ends


//------------------------------------------------//

//Showcase Cover Filter Start
$(document).ready(function() {
    $("ul.showcase-list > li > a").click(function(event) {

        event.preventDefault(); //stop browser to take action for clicked anchor

        var activeShowcaseLink = $("ul.showcase-list > li.selected > a").attr('href');
        var selectedLi = $("ul.showcase-list > li.selected");
        var selectedA = $("ul.showcase-list > li.selected > a");

        //show filter animations
        selectedLi.removeClass("selected");
        selectedLi.addClass("unselected");
        selectedA.removeClass("selected");
        selectedA.addClass("unselected");

        //show filter animations
        $(this).parents("li").addClass("selected");
        $(this).parents("li").removeClass("unselected");
        $(this).addClass("selected");
        $(this).removeClass("unselected");

        //hide actived showcase covers
        $(activeShowcaseLink).removeClass("show-div");
        $(activeShowcaseLink).addClass("hide-div");
        $(activeShowcaseLink).removeClass("cover-ani");

        //show target showcase covers
        var targetShowcaseLink = $(this).attr("href");
        $(targetShowcaseLink).removeClass("hide-div");
        $(targetShowcaseLink).addClass("show-div");
        setTimeout(function() {
           $(targetShowcaseLink).addClass("cover-ani");
        }, 100); // delay for swiching animation

    });
  });
//Showcase Cover Filter Ends

//------------------------------------------------//

//RWD Grid Changing Start
/* 
$grid-breakpoints (in grid.scss)
xs: 0,
sm: 576px, 
md: 768px,lg: 992px, 
xl: 1200px
*/

//first loading page
// 3 rows to 2 rows
if ($(window).width() < 992) {
    $("article.main-part-article").removeClass("col-sm-1");
    $("article.main-part-article").addClass("col-sm-2");
    $("article.main-part-resume").removeClass("col-md-1");
    $("article.main-part-resume").addClass("col-sm-2");
}

//RWD resizing page
$(window).resize(function() {
    // 3 rows to 2 rows
    if ($(window).width() < 992) {
        $("article.main-part-article").addClass("col-sm-2");
        $("article.main-part-article").removeClass("col-sm-1");
        $("article.main-part-resume").removeClass("col-md-1");
        $("article.main-part-resume").addClass("col-sm-2");
    }
    // return to 3 rows
    if ($(window).width() >= 992) {
        $("article.main-part-article").addClass("col-sm-1");
        $("article.main-part-article").removeClass("col-sm-2");
        $("article.main-part-resume").addClass("col-md-1");
        $("article.main-part-resume").removeClass("col-sm-2");
    }
  });

//sns-icons-link RWD Grid Changing Ends

//------------------------------------------------//

//sns-icons RWD Changing Start
/* 
$grid-breakpoints (in grid.scss)
xs: 0,
sm: 576px, 
md: 768px,lg: 992px, í
xl: 1200px
*/

//first loading page
//footer Aligh to Right When Using md, sm Screen
if ($(window).width() < 768) {
    $("a.sns-icons-link").css(
        {
            "float":            "none",
            "margin-left":      "0",
            "margin-right":     "30px",
            "width":            "20px",
            "height":           "20px"
        }
    );
    $("footer").css(
        {
            "position":         "unset" //including to grid system when `unset`
        }
    );
    $("body").css(
        {
            "margin-left":      "1em",
            "margin-right":     "1em"
        }
    );
}

//RWD resizing page
$(window).resize(function() {
    // footer Aligh to Right When Using md, sm Screen
    if ($(window).width() < 768) {
        $("a.sns-icons-link").css(
            {
                "float":            "none",
                "margin-left":      "0",
                "margin-right":     "30px",
                "width":            "20px",
                "height":           "20px"
            }
        );
        $("footer").css(
            {
                "position":         "unset" //including to grid system when `unset`
            }
        );
        $("body").css(
            {
                "margin-left":      "1em",
                "margin-right":     "1em"
            }
        );
    }
    // footer Return Back When Using Wide Screen
    if ($(window).width() >= 768) {
        $("a.sns-icons-link").css(
            {
                "float":            "right",
                "margin-left":      "30px",
                "margin-right":     "0",
                "width":            "40px",
                "height":           "40px"
            }
        );
        $("footer").css(
            {
                "position":         "absolute",
            }
        );
        $("body").css(
            {
                "margin-left":      "auto",
                "margin-right":     "auto"
            }
        );
    }
  });
//sns-icons RWD Grid Changing Ends

//------------------------------------------------//

//------------------------------------------------//

//showcase title Changing Start
/* 
$grid-breakpoints (in grid.scss)
xs: 0,
sm: 576px, 
md: 768px,lg: 992px, í
xl: 1200px
*/

//showcase title page
if ($(window).width() < 576) {
    $("div.showcase").css(
        {
            "margin-top":      "60px",
            "margin-bottom":   "60px"
        }
    );
}

//RWD resizing page
$(window).resize(function() {
    if ($(window).width() < 576) {
        $("div.showcase").css(
            {
                "margin-top":      "60px",
                "margin-bottom":   "60px"
            }
        );
    }
    if ($(window).width() >= 576) {
        $("div.showcase").css(
            {
                "margin-top":       "",
                "margin-bottom":    ""
            }
        );
    }
  });
//showcase title Changing Ends

//------------------------------------------------//
