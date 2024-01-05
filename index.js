
  
 /* audio to button

$(".btn").click(function() {
    var music= new Audio("crash.mp3");
    music.play();
});
*/


//creating a pattern

var buttonColours = ["red", "yellow", "blue", "green"];
var gamePattern=[];
var userPattern=[];
var level=0;
var started= false;

$(document).keypress(function(){
    if(!started){
    $("#level-title").text("level" + level);
    nextSequence();
    started=true;
}
})

$(".btn").click(function(){

    var colorChosen = $(this).attr("id");
    userPattern.push(colorChosen);
    play_song(colorChosen);
    animatePress(colorChosen);
    checkAnswer(userPattern.length-1);

})

function checkAnswer(currentLevel){

    if(gamePattern[currentLevel]===userPattern[currentLevel]){

        console.log("success");

        if(userPattern.length===gamePattern.length){

            setTimeout(function(){nextSequence();},1000);
        }

    }

    else{

        console.log("wrong");
        stop();

    }

}


function nextSequence(){

    userPattern = [];

level++;

$("#level-title").text("Level " + level);
    
var randomNumber= Math.floor(Math.random()*4);

var randomColour= buttonColours[randomNumber];

gamePattern.push(randomColour);

$("#"+randomColour).fadeIn(250).fadeOut(250).fadeIn(250);

play_song(randomColour);

}



function play_song(crash){
    var music= new Audio("crash.mp3");
    music.play();
}



function animatePress(currentColor){

    
    $("#" + currentColor).addClass("pressed");
   

    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed"); 
    },100);

}

function stop(){
    $("body").addClass("error");

    setTimeout(function(){
        $("body").removeClass("error");},200);

    $("#level-title").text("Press any key to Restart");

    startOver();
    
}

function startOver(){
    level=0;
   gamePattern=[];
 userPattern=[];
started= false;

}
