var animatePoints = function() {
<<<<<<< HEAD
  var revealPoint = function() {
        // #7
        $(this).css({
            opacity: 1,
            transform: 'scaleX(1) translateY(0)'
        });
    };
    $.each($('.point'), revealPoint);

  };
    $(window).load(function() {
      if ($(window).height() > 950) {
         animatePoints();
}
var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;

$(window).scroll(function(event) {
  if ($(window).scrollTop() >= scrollDistance) {
             animatePoints();
        }
      });
    });
=======

    var points = document.getElementsByClassName('point');

    var revealFirstPoint = function() {
        points[0].style.opacity = 1;
        points[0].style.transform = "scaleX(1) translateY(0)";
        points[0].style.msTransform = "scaleX(1) translateY(0)";
        points[0].style.WebkitTransform = "scaleX(1) translateY(0)";
    };

    var revealSecondPoint = function() {
        points[1].style.opacity = 1;
        points[1].style.transform = "scaleX(1) translateY(0)";
        points[1].style.msTransform = "scaleX(1) translateY(0)";
        points[1].style.WebkitTransform = "scaleX(1) translateY(0)";
    };

    var revealThirdPoint = function() {
        points[2].style.opacity = 1;
        points[2].style.transform = "scaleX(1) translateY(0)";
        points[2].style.msTransform = "scaleX(1) translateY(0)";
        points[2].style.WebkitTransform = "scaleX(1) translateY(0)";
    };

    revealFirstPoint();
    revealSecondPoint();
    revealThirdPoint();
  };
>>>>>>> checkpoint-8-dom-scripting-animation
