import $ from 'jquery'; 


var $animation_elements = $('.bubble');
var $window = $(window);


let bubbleone = $('#bubble-one');
let bubbletwo = $('#bubble-two');
let bubblethree = $('#bubble-three');
let bubblefour = $('#bubble-four');
let bubblefive = $('#bubble-five');
let bubblesix = $('#bubble-six');
let bubbleseven = $('#bubble-seven');
let bubbleeight = $('#bubble-eight');
// let bubblenine = $('#bubble-nine');
// let bubbleten = $('#bubble-ten');
// let bubbleeleven = $('#bubble-eleven');
// let bubbletwelve = $('#bubble-twelve');
// let bubblethirteen = $('#bubble-thirteen');


function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
  
    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
            parallaxScroll($element, window_top_position)
      } else {
      }
    });
}


function parallaxScroll(element, scrolled){
    bubbleone.css('top',(400 + (-scrolled*.15))+'px'); // Big Top Left
    bubbletwo.css('top',( 1300 + (-scrolled*.15))+'px'); // Big Bottom Right
    bubblethree.css('top',( 1180 + (-scrolled*.35))+'px'); // Top Left Tiny Bubble
    bubblefour.css('top',( 1980 + (-scrolled*.35))+'px'); // Bottom Right Tiny Bubble
    bubblefive.css('top',( 980 + (-scrolled*.25))+'px'); // Middle Left Medium Bubble
    bubblesix.css('top',( 1400 + (-scrolled*.25))+'px'); // Middle Right Medium Bubble
    bubbleseven.css('top',( 1500 + (-scrolled*.35))+'px'); // Middle Right Tiny Bubble
    bubbleeight.css('top',( 1500 + (-scrolled*.35))+'px'); // Middle Right Tiny Bubble
}

$(window).bind('scroll',function(e){
    check_if_in_view();
});