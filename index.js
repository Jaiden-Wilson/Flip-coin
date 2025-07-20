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
  
 