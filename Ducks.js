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
  console.log(parseInt("1"))

  
  const boardArray = Array.from(boardGame)


  let currentPlayer = 'PlayerOne';

  boardArray.forEach((square)=>{
    square.addEventListener('click', (e) =>{
      let beforePlay = e.target.innerText

      if(currentPlayer === 'PlayerOne'){

        if(beforePlay == ""){
          e.target.innerText = "X"
          currentPlayer = "PlayerTwo"
          findWinner(e.target)
        }else{
          alert('SORRY CANT PLAY THERE')
        };
        // playerWins(e, square)
      }else if(currentPlayer === 'PlayerTwo'){

        if(beforePlay == ""){
          e.target.innerText = "O"
          currentPlayer = "PlayerOne"
        }else{
          alert('SORRY CANT PLAY THERE')
        };
        // playerWins(e, square)
        findWinner(e.target)
      };
    })
  })


const winnigPlays =[
   [0, 1, 2], 
   [3, 4, 5], 
   [6, 7, 8], 
   [0, 3, 6],
   [1, 4, 7], 
   [2, 5, 8], 
   [2, 4, 6], 
   [0, 4, 8], 
]
const ran = [0, 4, 8]

function findWinner(winnigPlays){
  winnigPlays.forEach(win =>{
    console.log(win)
  })
  for(let i = 0; i <= 7; ++i){
 winnigPlays[i]
}}
findWinner()

const xSelections =['', '', '', '','' ,'', '',]
const oSelections =['', '', '', '','' ,'', '',]

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
