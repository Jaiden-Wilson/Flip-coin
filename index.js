$("button").click(function(){
    var num=Math.floor(Math.random()*2);
    console.log(num);
    $("#coin").fadeOut(500);
    
    $("#coin").fadeIn(500);
    $("#shadow").animate({width:'-20%'}, 500);
    $("#shadow").animate({width:'10%'}, 500);

    if(num===0){
        
        $("#coin").attr("src","./resources/heads.svg");

    }
    else{

        $("#coin").attr("src","./resources/tails.svg");
    }

});
$("#coin").click(function(){
    var num=Math.floor(Math.random()*2);
    console.log(num);
    $("#coin").fadeOut(500);
    $("#coin").fadeIn(500);
    $("#shadow").animate({width:'-20%'}, 500);
    $("#shadow").animate({width:'10%'}, 500);
    if(num===0){
        
        $("#coin").attr("src","./resources/heads.svg");

    }
    else{

        $("#coin").attr("src","./resources/tails.svg");
    }
});