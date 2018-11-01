$(document).ready(function(){
  $(".reviews").each(function(){
    var This = $(this) ;
    var Nums = This.find(".box").size() ;
    This.find(".box:first").addClass("boxAct");
    This.append("<div class='cnt'></div>") ;
    This.find(".box").not(".boxAct")
      .css("left","100%")
    for ( i=0 ; i<Nums ; i++) {
      This.find(".cnt").append("<span></span>") ;
    }
    This.find(".cnt span:eq(0)").addClass("ContActive");

    This.find(".cnt span").click(Reviews);

    function Reviews(){
      var loc = $(this).index();
      var ActivLoc = This.find(".ContActive").index();

      $(this).addClass("ContActive")
        .siblings().removeAttr("class");

      if ( loc > ActivLoc ) {
        var Dire = '100%'
        var IDire = '-100%'
      }
      if ( loc < ActivLoc ) {
        var Dire = '-100%'
        var IDire = '100%'
      }

      This.find(".box").not(".boxAct")
      .css("left",Dire) ;
      This.find(".box:eq("+loc+")")
      .animate({'left':'0'},speed)
      .addClass("boxAct")
      .siblings(".boxAct")
      .removeClass("boxAct")
      .animate({'left':IDire},speed);
    }
  });
});



$("button").click(function() {
    $('html,body').animate({
        scrollTop: $("html").offset().top},
        2000);
});

$("#down").click(function() {
    $('html, body').animate({
        scrollTop: $("#ttl").offset().top
    }, 1000);
});
