$("button").click(function(){
    var num=Math.floor(Math.random()*2);
    console.log(num);
    $("#coin").fadeOut(500);
    
    $("#coin").fadeIn(500);
    if(Window.innerwidth>=1024){
    $("#shadow").animate({width:'-20vw'}, 500);
    $("#shadow").animate({width:'7vw'}, 500);
    }
    else if (Window.innerWidth>=412 &&Window.innerWidth <=1023){
    $("#shadow").animate({width:'-20vw'}, 500);
    $("#shadow").animate({width:'20vw'}, 500);
    }
    
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
    if(Window.innerwidth>=1024){
    $("#shadow").animate({width:'-20vw'}, 500);
    $("#shadow").animate({width:'7vw'}, 500);
    }
    else if (Window.innerWidth>=412 &&Window.innerWidth <=1023){
    $("#shadow").animate({width:'-20vw'}, 500);
    $("#shadow").animate({width:'20vw'}, 500);
    }
    if(num===0){
        
        $("#coin").attr("src","./resources/heads.svg");
        $("#result").html("Heads");

    }
    else{

        $("#coin").attr("src","./resources/tails.svg");
        $("#result").html("Tails");

    }
});