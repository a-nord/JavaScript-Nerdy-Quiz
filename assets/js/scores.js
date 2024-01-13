
function highScores() {    
      // Retrieve existing high scores
      let savedHighScores = JSON.parse(localStorage.getItem("hiScore"));

      // Sort the scores in descending order (highest score first)     
      savedHighScores.sort((a, b) => b - a);      
      for(var i=0; i<savedHighScores.length; i++) {
        let scoreList = document.createElement("li")
        scoreList.textContent = scores[i].initials + " - " + scores[i].score;
        document.querySelector(".savedScore").appendChild(scoreList);
    }
  
      // Keep only the top 5 scores
      const maxScores = 5;
      savedHighScores = savedHighScores.slice(0, maxScores);
      }

    // clear high scores from the page
    function clearHighScores() {
        localStorage.removeItem("clearScores");
        window.location.reload();
    }    
    document.querySelector("#clear").addEventListener("click", clearHighScores);
    highScores();