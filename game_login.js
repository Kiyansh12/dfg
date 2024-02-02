
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

    //Set "player1_name" using localStorage.setItem() function
	  //Set "player2_name" using localStorage.setItem() function

    

    window.location = "game_page.html";
}

function back() {
  window.location = "activity_1.html";
}

function getScore() 
{
  score = localStorage.getItem("score");
  document.getElementById("update").innerHTML = "<h1>Score: " + score +"</h1>";
}

