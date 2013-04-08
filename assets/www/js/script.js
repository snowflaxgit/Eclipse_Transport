// JavaScript Document

$(document).ready(function(e) {
	$(".qrcode").attr('maxlength','10');

    if(screen.width == 800)
        nexus();
   if(screen.width == 768)
        ipad();

    $('input[type="number"]').keyup(function () { 
    this.value = this.value.replace(/[^0-9\.]/,'');
});	
	
  });


    $(document).delegate('a.top', 'click', function () {

        $('html, body').stop().animate({ scrollTop : 0 }, 500);
    return false;
});

var previousOrientation = window.orientation;

function nexus() {

var checkOrientation = function(){
   
     if(window.orientation== 0 || window.orientation == 180)
        $('#table-scroll').css('width','65%');
        

    if(window.orientation == 90 || window.orientation == -90)
        $('#table-scroll').css('width','100%');

    if(window.orientation !== previousOrientation)
    {
        previousOrientation = window.orientation;
        if(previousOrientation== 0 || previousOrientation == 180)
        $('#table-scroll').css('width','65%');
        

    if(previousOrientation == 90 || previousOrientation == -90)
        $('#table-scroll').css('width','100%');
        
    }

   
}
    window.addEventListener("resize", checkOrientation, false);
    window.addEventListener("orientationchange", checkOrientation, false);


}

function ipad() {

var checkOrientation = function(){
    
     if(window.orientation== 0 || window.orientation == 180)
        $('#table-scroll').css('width','80%');
       

    if(window.orientation == 90 || window.orientation == -90)
        $('#table-scroll').css('width','100%');

    if(window.orientation !== previousOrientation)
    {
        previousOrientation = window.orientation;
        if(previousOrientation== 0 || previousOrientation == 180)
        $('#table-scroll').css('width','80%');
        

    if(previousOrientation == 90 || previousOrientation == -90)
        $('#table-scroll').css('width','100%');
        
    }
}

window.addEventListener("resize", checkOrientation, false);
window.addEventListener("orientationchange", checkOrientation, false);

}
