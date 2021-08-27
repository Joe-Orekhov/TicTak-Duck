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

    // const duckNumber = parseInt(ducksHomes.length)
    // console.log(duckNumber)
      duckIMG1.addEventListener('click',()=>{ 
        const duckPicker = Math.floor(Math.random() * (ducksHomes.length)) + 0   
        duckIMG1.src = ducksHomes[parseInt(duckPicker)].image
      })
      duckIMG2.addEventListener('click',()=>{
        const duckPicker = Math.floor(Math.random() * (ducksHomes.length)) + 0
        const imgSrc = ducksHomes[parseInt(duckPicker)].image
        duckIMG2.src = imgSrc
      })

  }  

const boardGame = document.getElementsByClassName('BattleFieid')
const boardArray = Array.from(boardGame)

  function gamePlay(){
  boardArray.forEach((square)=>{
    square.addEventListener('click', (e) =>{
      let beforePlay = e.target.innerText

      if(currentPlayer === 'PlayerOne'){

        if(beforePlay == ""){
          e.target.style.color = "red"
          // e.target.style.backgroundColor = "rgba(255, 188, 188, 0.849)"
          e.target.innerText = "X"
          currentPlayer = "PlayerTwo"
          playerWins()
        }else{
          alert('SORRY CANT PLAY THERE')
        };
      }else if(currentPlayer === 'PlayerTwo'){

        if(beforePlay == ""){
          e.target.style.color = "blue"
          // e.target.style.backgroundColor = "rgb(131, 160, 255)"
          e.target.innerText = "O"
          currentPlayer = "PlayerOne"
          playerWins()
        }else{
          alert('SORRY CANT PLAY THERE')
        };
      };
    })
  })
  }

  function messages(){
  const msgDiv = document.querySelector('#messages')
  const msgContent = document.querySelector('#messages-content')
  msgDiv.style.display = "none"
  }


const newDuckImgForm = document.querySelector('#newDuckIMGS')
const duckURLimg = newDuckImgForm.url
const duckSubmit = newDuckImgForm.submit 

  function NewDuckSubmit(){
    duckSubmit.addEventListener('click', (e)=>{
      e.preventDefault();
    
      const newUrl = {
        "image" : `${duckURLimg.value}`,
      }
    
      fetch('http://localhost:3000/avatar', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUrl),
      })
      .then(resp => resp.json())
    
    })
  }

const BattleFieid = document.querySelectorAll(".BattleFieid")

  function newGameButton(){
    const board = document.getElementById('board')
    const newGameDiv = document.createElement('div') 
    const resetButton = document.createElement('button')
    resetButton.innerText = 'New Game'
    resetButton.id = 'newGame'
    newGameDiv.append(resetButton)
    board.append(newGameDiv)

      resetButton.addEventListener("click", () => {
        BattleFieid.forEach(square =>{
          square.innerText = " "
          
      })
    })
  }


const A1 = boardArray[0]
const A2 = boardArray[1]
const A3 = boardArray[2]

const B1 = boardArray[3]
const B2 = boardArray[4]
const B3 = boardArray[5]

const C1 = boardArray[6]
const C2 = boardArray[7]
const C3 = boardArray[8]

  function playerWins(){
    if(A1.innerText == "X" && A2.innerText == "X" && A3.innerText == "X" ||
       B1.innerText == "X" && B2.innerText == "X" && B3.innerText == "X" ||
       B1.innerText == "X" && B2.innerText == "X" && B3.innerText == "X" ||
       C1.innerText == "X" && C2.innerText == "X" && C3.innerText == "X" ||
       A1.innerText == "X" && B1.innerText == "X" && C1.innerText == "X" ||
       A2.innerText == "X" && B2.innerText == "X" && C2.innerText == "X" ||
       A3.innerText == "X" && B3.innerText == "X" && C3.innerText == "X" ||
       A1.innerText == "X" && B2.innerText == "X" && C3.innerText == "X" ||
       A3.innerText == "X" && B2.innerText == "X" && C1.innerText == "X"){
        alert('PLAYER X WINS')
        BattleFieid.forEach(square =>{square.innerText = " "})
    }else if(A1.innerText == "O" && A2.innerText == "O" && A3.innerText == "O" ||
      B1.innerText == "O" && B2.innerText == "O" && B3.innerText == "O" ||
      B1.innerText == "O" && B2.innerText == "O" && B3.innerText == "O" ||
      C1.innerText == "O" && C2.innerText == "O" && C3.innerText == "O" ||
      A1.innerText == "O" && B1.innerText == "O" && C1.innerText == "O" ||
      A2.innerText == "O" && B2.innerText == "O" && C2.innerText == "O" ||
      A3.innerText == "O" && B3.innerText == "O" && C3.innerText == "O" ||
      A1.innerText == "O" && B2.innerText == "O" && C3.innerText == "O" ||
      A3.innerText == "O" && B2.innerText == "O" && C1.innerText == "O"){
        alert('PLAYER O WINS')
        BattleFieid.forEach(square =>{square.innerText = " "})
    }else if(A1.innerText == "O" || A1.innerText == "X"  && A2.innerText == "O" || A2.innerText == "X" && A3.innerText == "O" || A3.innerText == "X" &&
             B1.innerText == "O" || B1.innerText == "X"  && B2.innerText == "O" || B2.innerText == "X" && B3.innerText == "O" || B3.innerText == "X" &&
             C1.innerText == "O" || C1.innerText == "X"  && C2.innerText == "O" || C2.innerText == "X" && C3.innerText == "O" || C3.innerText == "X" ){
              // alert('Its a Tie')
     }else
     return 0       
  }

  function makeEverythingWork(){
    background()
    newGameButton()
    userNames()
    avatarSelector()
    gamePlay()
    NewDuckSubmit()
  }
  
  makeEverythingWork()


//////////////////Code I  might use in the future//////////////////////////
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