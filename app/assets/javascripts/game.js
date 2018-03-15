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
          $("#result").html("Nobody won!");
        }, 1000);
      }, 1000);
    } else if (comPicks == "scissor") {
      setTimeout(function() {
        $("#scissor-com").css("fill", "#1DA1F2");
        $("#scissor-div-com").css("background-color", "white");
        setTimeout(function(){
          $("#result").html("You lose!");
          comStats += 1;
          $("#your-state").html(playerStats);
          $("#computer-state").html(comStats);
        }, 1000);
      }, 1000);
    } else {
      setTimeout(function() {
        $("#rock-com").css("fill", "#1DA1F2");
        $("#rock-div-com").css("background-color", "white");
        setTimeout(function(){
          $("#result").html("You won!");
          playerStats +=1;
          $("#your-state").html(playerStats);
          $("#computer-state").html(comStats);
        }, 1000);
      }, 1000);
    }
    setTimeout(function() {
      $("#result-div").css("display","inline-block");
    }, 2300);
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
          $("#result").html("You won!");
          playerStats +=1;
          $("#your-state").html(playerStats);
          $("#computer-state").html(comStats);
        }, 1000);
      }, 1000);
    } else if (comPicks == "scissor") {
      setTimeout(function() {
        $("#scissor-com").css("fill", "#1DA1F2");
        $("#scissor-div-com").css("background-color", "white");
        setTimeout(function(){
          $("#result").html("Nobody won!");
          $("#your-state").html(playerStats);
          $("#computer-state").html(comStats);
        }, 1000);
      }, 1000);
    } else {
      setTimeout(function() {
        $("#rock-com").css("fill", "#1DA1F2");
        $("#rock-div-com").css("background-color", "white");
        setTimeout(function(){
          $("#result").html("You lose!");
          comStats += 1;
          $("#your-state").html(playerStats);
          $("#computer-state").html(comStats);
        }, 1000);
      }, 1000);
    }
    setTimeout(function() {
      $("#result-div").css("display","inline-block");
    }, 2300);
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
          $("#result").html("You lose!");
          comStats += 1;
          $("#your-state").html(playerStats);
          $("#computer-state").html(comStats);
        }, 1000);
      }, 1000);
    } else if (comPicks == "scissor") {
      setTimeout(function() {
        $("#scissor-com").css("fill", "#1DA1F2");
        $("#scissor-div-com").css("background-color", "white");
        setTimeout(function(){
          $("#result").html("You won!");
          playerStats +=1;
          $("#your-state").html(playerStats);
          $("#computer-state").html(comStats);
        }, 1000);
      }, 1000);
    } else {
      setTimeout(function() {
        $("#rock-com").css("fill", "#1DA1F2");
        $("#rock-div-com").css("background-color", "white");
        setTimeout(function(){
          $("#result").html("Nobody won!");
        }, 1000);
      }, 1000);
    }
    setTimeout(function() {
      $("#result-div").css("display","inline-block");
    }, 2300);
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
  $("#result-div").css("display", "none");
  $(".item-path").css("fill", "white");
  $(".item").css("background-color","#1DA1F2");
}

function newSession() {
  oneClick = false;
  $("#result-div").css("display", "none");
  $(".item-path").css("fill", "white");
  $(".item").css("background-color","#1DA1F2");
  playerStats = 0;
  comStats = 0;
  $("#your-state").html(playerStats);
  $("#computer-state").html(comStats);
}
