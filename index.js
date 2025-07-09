$("button").click(function(){
    var num=Math.floor(Math.random()*2);
    console.log(num);
    $("#coin").fadeOut(500);
    
    $("#coin").fadeIn(500);
    
    $("#shadow").animate({opacity:0}, 500);
    $("#shadow").animate({opacity: 1}, 500);
    
    
    
    if(num===0){
        
        $("#coin").attr("src","./resources/heads.svg");
        $("#result").html("Heads");
    }
    else{

        $("#coin").attr("src","./resources/tails.svg");
        $("#result").html("Tails");


    }

});
$("#coin").click(function(){
    var num=Math.floor(Math.random()*2);
    console.log(num);
    $("#coin").fadeOut(500);
    $("#coin").fadeIn(500);
   
    $("#shadow").animate({opacity:0}, 500);
    $("#shadow").animate({opacity:1}, 500);;
    
   
   
    if(num===0){
        
        $("#coin").attr("src","./resources/heads.svg");
        $("#result").html("Heads");

    }
    else{

        $("#coin").attr("src","./resources/tails.svg");
        $("#result").html("Tails");

    }
});
   function handleOrientationChange() {
       if (window.matchMedia("(orientation: landscape)").matches) {
           // Landscape detected, apply adjustments
           $("h1").addClass("headingTwo");
           $("p").addClass("pTwo");
           $("#coin").addClass("coinTwo");
           $("#shadow").addClass("shadowTwo");
           $("#result").addClass("resultTwo");
           $("button").addClass("buttonTwo");
       } else {
           // Portrait detected, remove adjustments
            $("h1").removeClass("headingTwo");
           $("p").removeClass("pTwo");
           $("#coin").removeClass("coinTwo");
           $("#shadow").removeClass("shadowTwo");
           $("#result").removeClass("resultTwo");
           $("button").removeClass("buttonTwo");
       }
   }

   window.addEventListener("change", handleOrientationChange);
   handleOrientationChange(); // Initial check