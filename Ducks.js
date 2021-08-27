fetch('http://localhost:3000/avatar')
.then(resp=> resp.json())
.then(ducksHomes=> {
  avatarSelector(ducksHomes)
})



const player1Name = document.getElementById('Player1')
const player2Name = document.getElementById('Player2')
  function userNames(){
    let player1 = prompt("Player 1 enter your name", "Kyle");
    let player2 = prompt("Player 2 enter your name", "Kate");

  player1Name.innerText = player1
  player2Name.innerText = player2
  }

const boardGame = document.getElementsByClassName('BattleFieid')
const boardArray = Array.from(boardGame)

let currentPlayer = 'PlayerOne';

const duckIMG1 = document.querySelector('#playerOneIMG')
const duckIMG2 = document.querySelector('#playerTwoIMG')

function background(currentPlayer){
  const border = document.querySelector('#board')
   if(currentPlayer == 'PlayerOne'){
      border.style.property = 'border: 10px solid rgb(218, 9, 9);'
   }else(currentPlayer == 'PlayerOne')
    border.style.property = 'border: 10px solid rgb(9, 93, 218);'

}
  function avatarSelector(ducksHomes){

      duckIMG1.addEventListener('click',()=>{ 
        const duckPicker = Math.floor(Math.random() * 6) + 0   
        duckIMG1.src = ducksHomes[parseInt(duckPicker)].image
      })
      duckIMG2.addEventListener('click',()=>{
        const duckPicker = Math.floor(Math.random() * 6) + 0
        duckIMG2.src = ducksHomes[parseInt(duckPicker)].image
      })

  }


  function gamePlay(){
  boardArray.forEach((square)=>{
    square.addEventListener('click', (e) =>{
      let beforePlay = e.target.innerText

      if(currentPlayer === 'PlayerOne'){

        if(beforePlay == ""){
          e.target.innerText = "X"
          currentPlayer = "PlayerTwo"
        }else{
          alert('SORRY CANT PLAY THERE')
        };
      }else if(currentPlayer === 'PlayerTwo'){

        if(beforePlay == ""){
          e.target.innerText = "O"
          currentPlayer = "PlayerOne"
        }else{
          alert('SORRY CANT PLAY THERE')
        };
      };
    })
  })
  }

  function newGameButton(){
      const board = document.getElementById('board')
      const newGameDiv = document.createElement('div') 
      const resetButton = document.createElement('button')
      resetButton.innerText = 'New Game'
      resetButton.id = 'newGame'
      newGameDiv.append(resetButton)
      board.append(newGameDiv)

      const BattleFieid = document.querySelectorAll(".BattleFieid")
      resetButton.addEventListener("click", () => {
        BattleFieid.forEach(square =>{
          // console.log(square)
          square.innerText = " "
      })
      

    })

  }


  



background()
newGameButton()
userNames()
avatarSelector()
gamePlay()
// const winnigPlays =[
//    [0, 1, 2], 
//    [3, 4, 5], 
//    [6, 7, 8], 
//    [0, 3, 6],
//    [1, 4, 7], 
//    [2, 5, 8], 
//    [2, 4, 6], 
//    [0, 4, 8], 
// ]
// const ran = [0, 4, 8]

// function findWinner(winnigPlays){
//   winnigPlays.forEach(win =>{
//     console.log(win)
//   })
//   for(let i = 0; i <= 7; ++i){
//  winnigPlays[i]
// }}
// findWinner()

// const xSelections =['', '', '', '','' ,'', '',]
// const oSelections =['', '', '', '','' ,'', '',]

// function findWinner(Place){
//   if(Place.innerText == "X"){
//     xCell = Place.id
//     xSelections.shift()
//     xSelections.push(xCell)
//     xSelections.sort
//     console.log(xSelections)

//   }else if(Place.innerText == "O"){
//     oCell = Place.id
//     oSelections.shift()
//     oSelections.push(oCell)
//     oSelections.sort
//     console.log(oSelections)
    
//   }else
//   return
// }



//   function playerWins(e, square){
//     if(A1.innerText == "X" && A2.innerText == "X" && A3.innerText == "X" ||
//        B1.innerText == "X" && B2.innerText == "X" && B3.innerText == "X" ||
//        B1.innerText == "X" && B2.innerText == "X" && B3.innerText == "X" ||
//        C1.innerText == "X" && C2.innerText == "X" && C3.innerText == "X" ||
//        A1.innerText == "X" && B1.innerText == "X" && C1.innerText == "X" ||
//        A2.innerText == "X" && B2.innerText == "X" && C2.innerText == "X" ||
//        A3.innerText == "X" && B3.innerText == "X" && C3.innerText == "X" ||
//        A1.innerText == "X" && B2.innerText == "X" && C3.innerText == "X" ||
//        A3.innerText == "X" && B2.innerText == "X" && C1.innerText == "X"){
//         alert('PLAYER X WINS')
//     }else if(A1.innerText == "O" && A2.innerText == "O" && A3.innerText == "O" ||
//       B1.innerText == "O" && B2.innerText == "O" && B3.innerText == "O" ||
//       B1.innerText == "O" && B2.innerText == "O" && B3.innerText == "O" ||
//       C1.innerText == "O" && C2.innerText == "O" && C3.innerText == "O" ||
//       A1.innerText == "O" && B1.innerText == "O" && C1.innerText == "O" ||
//       A2.innerText == "O" && B2.innerText == "O" && C2.innerText == "O" ||
//       A3.innerText == "O" && B3.innerText == "O" && C3.innerText == "O" ||
//       A1.innerText == "O" && B2.innerText == "O" && C3.innerText == "O" ||
//       A3.innerText == "O" && B2.innerText == "O" && C1.innerText == "O"){
//         alert('PLAYER O WINS')
//     }else if(A1.innerText == "O" || A1.innerText == "X"  && A2.innerText == "O" || A2.innerText == "X" && A3.innerText == "O" || A3.innerText == "X" &&
//              B1.innerText == "O" || B1.innerText == "X"  && B2.innerText == "O" || B2.innerText == "X" && B3.innerText == "O" || B3.innerText == "X" &&
//              C1.innerText == "O" || C1.innerText == "X"  && C2.innerText == "O" || C2.innerText == "X" && C3.innerText == "O" || C3.innerText == "X" ){
//               alert('Its a Tie')
//      }else
//      return 0       
// }