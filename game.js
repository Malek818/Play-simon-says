buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];
var started = false;
var level = 0;
$(document).keypress(function()  {
if (!started) {
  $("#level-title").text("Level " + level);

  nextSequence();
      started = true;
}
});


$(".btn").click(function() {
  var userChosenColour = $(this).attr('id');

  userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
checkAnswer(userClickedPattern.length-1);

});

function startOver() {
  var level = 0;
var gamePattern = [];
var started = false;
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

  console.log("success");

    if (userClickedPattern.length === gamePattern.length){

      setTimeout(function () {
        nextSequence();
      }, 1000);

    }

  } else {
  console.log("wrong");
    var audio2 = new Audio("wrong.mp3");
    audio2.play();

    $("body").addClass("game-over")
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
  $("#level-title").text("Game Over, Press Any Key to Restart.");
startOver();
  }


}



 function nextSequence() {

  userClickedPattern = [];

   level++;

  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour =  buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);

}

function playSound(name) {

  var audio1 = new Audio( name + ".mp3");
  audio1.play();

}


function animatePress(currentColour) {

$("#" + currentColour).addClass("pressed");
setTimeout(function(){
$("#" + currentColour).removeClass("pressed");
}, 100);

}
