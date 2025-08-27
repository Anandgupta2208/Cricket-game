
let scoretr = localStorage.getItem('score');
let score;
resetScore(scoretr);

function resetScore(scoretr){
   

score =  scoretr ? JSON.parse(scoretr) : {
   win : 0,
   lost : 0,
   tie : 0,
  
};
score.displayScore = function(){
   
    return ` Score : Won :${score.win}, Lost : ${score.lost}, Tie : ${score.tie}`;

   }
   showResult();
  }


function generateComputerChoice(){
  let randomNumber = Math.random() * 3;
    let computerChoice;
    if(randomNumber > 0 && randomNumber <= 1){
        computerChoice = 'Bat';
    }else  if(randomNumber > 1 && randomNumber <= 2){
             computerChoice = 'Ball';
    }else{
         computerChoice = 'Stump';
    }
   
   let computerChoiceMsg = `Computer choice is ${computerChoice}.`;
     return computerChoice;
}

function getResult(userMove, computerMove){
      let resultMsg ;
    if( computerMove === userMove){
      score.tie++;
        resultMsg = `it's a tie`;
        return resultMsg;
    }else if( userMove=== 'Ball'){
             if( computerMove === 'Bat'){
                  score.lost++;
                  resultMsg = `computer has won`;}
              else if(computerMove === 'Stump'){
                  score.win++;
                resultMsg = 'user won';
              
              }
    }else if(userMove=== 'Bat'){
            if(computerMove === 'Stump'){
               score.lost++;
               resultMsg = 'computer has won';
            }else if(computerMove === 'Ball'){
               score.win++;
               resultMsg = 'user won';
            }
     }else if(userMove ==='Stump'){
             if(computerMove ==='Ball'){
               score.lost++;
               resultMsg ='computer has won';
              } else if(computerMove === 'Bat'){
                 score.win++;
                    resultMsg = 'User won';
               
             }   
      }
      return resultMsg;
    }


    function showResult(userMove, computerMove, resultMsg){
      localStorage.setItem('score', JSON.stringify(score));

      document.querySelector('#user-move').innerText = userMove !== undefined ?`You have choosen  : ${userMove}`:'';
      document.querySelector('#computer-move').innerText =
      computerMove !== undefined ? `computer choice is : ${computerMove}`: '';
      document.querySelector('#result').innerText = resultMsg !== undefined ?resultMsg : '';
      document.querySelector('#score').innerText =  score.displayScore();
        
    }
