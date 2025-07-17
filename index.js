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
   if(window.innerWidth>1350){
    $("#coin").removeClass("coinTwo");
   }

   function handleOrientationChange() {
       if (window.matchMedia("(orientation: landscape)").matches&&window.innerWidth<1350) {
           // Landscape detected, apply adjustments
           
           $("#coin").addClass("coinTwo");  
          
       } else {
           // Portrait detected, remove adjustments
          
           $("#coin").removeClass("coinTwo");
           
       }
   }
   window.addEventListener("change", handleOrientationChange);
   handleOrientationChange();