  const A1 = document.querySelector('td#A1.BattleFieid')
  const A2 = document.querySelector('td#A2.BattleFieid')
  const A3 = document.querySelector('td#A3.BattleFieid')
  
  const B1 = document.querySelector('td#B1.BattleFieid')
  const B2 = document.querySelector('td#B2.BattleFieid')
  const B3 = document.querySelector('td#B3.BattleFieid')
  
  const C1 = document.querySelector('td#C1.BattleFieid')
  const C2 = document.querySelector('td#C2.BattleFieid')
  const C3 = document.querySelector('td#C3.BattleFieid')

  const boardGame = document.getElementsByClassName('BattleFieid')
  
  const boardArray = Array.from(boardGame)

  let currentPlayer = 'PlayerOne';

  boardArray.forEach((square)=>{
    square.addEventListener('click', (e) =>{
      if(currentPlayer === 'PlayerOne'){
        e.target.innerText = "X"
        currentPlayer = "PlayerTwo"
        playerWins(e, square)
      }else if(currentPlayer === 'PlayerTwo'){
        e.target.innerText = "O"
        currentPlayer = "PlayerOne"
        playerWins(e, square)
        
      }
    })
  })

  function playerWins(e, square){
    if(A1.innerText == "X" && A2.innerText == "X" && A3.innerText == "X" ||
       B1.innerText == "X" && B2.innerText == "X" && B3.innerText == "X" ||
       B1.innerText == "X" && B2.innerText == "X" && B3.innerText == "X" ||
       C1.innerText == "X" && C2.innerText == "X" && C3.innerText == "X" ||
       A1.innerText == "X" && B1.innerText == "X" && C1.innerText == "X" ||
       A2.innerText == "X" && B2.innerText == "X" && C2.innerText == "X" ||
       A3.innerText == "X" && B3.innerText == "X" && C3.innerText == "X" ||
       A1.innerText == "X" && B2.innerText == "X" && C3.innerText == "X" ||
       A3.innerText == "X" && B2.innerText == "X" && C1.innerText == "X"){
        return 1
    }else if(A1.innerText == "X" && A2.innerText == "X" && A3.innerText == "X" ||
      B1.innerText == "O" && B2.innerText == "O" && B3.innerText == "O" ||
      B1.innerText == "O" && B2.innerText == "O" && B3.innerText == "O" ||
      C1.innerText == "O" && C2.innerText == "O" && C3.innerText == "O" ||
      A1.innerText == "O" && B1.innerText == "O" && C1.innerText == "O" ||
      A2.innerText == "O" && B2.innerText == "O" && C2.innerText == "O" ||
      A3.innerText == "O" && B3.innerText == "O" && C3.innerText == "O" ||
      A1.innerText == "O" && B2.innerText == "O" && C3.innerText == "O" ||
      A3.innerText == "O" && B2.innerText == "O" && C1.innerText == "O"){
        return 0
    }
}



let player1 = document.write(prompt("Player 1 enter your name", "Harry Potter"));
let player2 = prompt("Player 2 enter your name", "Indiana Jones");

let text;
if (person == null || person == "") {
  text = "User cancelled the prompt.";
} else {
  text = "Hello " + person + "! How are you today?";
}

