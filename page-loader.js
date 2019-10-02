/*********************************/
/* Set a local storage (html5) variable, for checking if is the first visit on the site or not.
If the variable is unset, show's the loader, if not, load directly the page */
/*********************************/

if("loader" in localStorage){ 
  $('.preloader-wrap').css('display','none');
  $('.wrap').fadeIn(300);
} else {
  window.localStorage.setItem('loader', 'yes');
  
  play_loader();
}
  function play_loader(){
    $('.preloader-wrap').addClass('active');
    var width = 100,
    perfData = window.performance.timing,
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    time = parseInt((EstimatedTime/1000)%60)*100;

$(".loadbar").animate({
  width: width + "%"
}, time);

$(".glow").animate({
  width: width + "%"
}, time);

var PercentageID = $("#precent"),
    start = 0,
    end = 100,
    durataion = time;
    animateValue(PercentageID, start, end, durataion);

function animateValue(id, start, end, duration) {

  var range = end - start,
      current = start,
      increment = end > start? 1 : -1,
      stepTime = Math.abs(Math.floor(duration / range)),
      obj = $(id);

  var timer = setInterval(function() {
    current += increment;
    $(obj).text(current + "%");
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

$(window).on('load', function () {
  $('.preloader-wrap').fadeOut(300);
  $('.wrap').fadeIn(300);
});
  }
