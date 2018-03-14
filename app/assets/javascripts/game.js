var playerStats = 0;
var comStats= 0;

var picks = ["paper", "scissor", "rock"];

var oneClick = false;

function paper() {
  if (oneClick == false){
    oneClick = true;
    $("#paper").css("background-color", "white");
    $("#paper-svg").css("fill", "#1DA1F2");
    var comPicks = picks[randomNumber()];
    if (comPicks == "paper") {
      setTimeout(function() {
        $("#paper-com").css("fill", "#1DA1F2");
        $("#paper-div-com").css("background-color", "white");
        setTimeout(function(){
          console.log("nobody won!");
        }, 1000);
      }, 1000);
    } else if (comPicks == "scissor") {
      setTimeout(function() {
        $("#scissor-com").css("fill", "#1DA1F2");
        $("#scissor-div-com").css("background-color", "white");
        setTimeout(function(){
          console.log("You lose!");
          comStats += 1;
        }, 1000);
      }, 1000);
    } else {
      setTimeout(function() {
        $("#rock-com").css("fill", "#1DA1F2");
        $("#rock-div-com").css("background-color", "white");
        setTimeout(function(){
          console.log("You won!");
          playerStats +=1;
        }, 1000);
      }, 1000);
    }
  }
}

function scissor() {
  if (oneClick == false){
    oneClick = true;
    $("#scissor").css("background-color", "white");
    $("#scissor-svg").css("fill", "#1DA1F2");
    var comPicks = picks[randomNumber()];
    if (comPicks == "paper") {
      setTimeout(function() {
        $("#paper-com").css("fill", "#1DA1F2");
        $("#paper-div-com").css("background-color", "white");
        setTimeout(function(){
          console.log("You won!");
          playerStats +=1;
        }, 1000);
      }, 1000);
    } else if (comPicks == "scissor") {
      setTimeout(function() {
        $("#scissor-com").css("fill", "#1DA1F2");
        $("#scissor-div-com").css("background-color", "white");
        setTimeout(function(){
          console.log("nobody won!");
        }, 1000);
      }, 1000);
    } else {
      setTimeout(function() {
        $("#rock-com").css("fill", "#1DA1F2");
        $("#rock-div-com").css("background-color", "white");
        setTimeout(function(){
          console.log("You lose!");
          comStats += 1;
        }, 1000);
      }, 1000);
    }
  }
}

function rock() {
  if (oneClick == false){
    oneClick = true;
    $("#rock").css("background-color", "white");
    $("#rock-svg").css("fill", "#1DA1F2");
    var comPicks = picks[randomNumber()];
    if (comPicks == "paper") {
      setTimeout(function() {
        $("#paper-com").css("fill", "#1DA1F2");
        $("#paper-div-com").css("background-color", "white");
        setTimeout(function(){
          console.log("You lose!");
          comStats += 1;
        }, 1000);
      }, 1000);
    } else if (comPicks == "scissor") {
      setTimeout(function() {
        $("#scissor-com").css("fill", "#1DA1F2");
        $("#scissor-div-com").css("background-color", "white");
        setTimeout(function(){
          console.log("you won!");
          playerStats +=1;
        }, 1000);
      }, 1000);
    } else {
      setTimeout(function() {
        $("#rock-com").css("fill", "#1DA1F2");
        $("#rock-div-com").css("background-color", "white");
        setTimeout(function(){
          console.log("nobody won!");
        }, 1000);
      }, 1000);
    }
  }
}

function randomNumber() {
  var min = 0;
  var max = 2;
  var x = Math.round(Math.random() * (max - min)) + min;
  return x;
}

function newRound() {
  oneClick = false;
  console.log("functioniert")
}
