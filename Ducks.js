  // const A1 = document.querySelector('td#A1.BattleFieid')
  // const A2 = document.querySelector('td#A2.BattleFieid')
  // const A3 = document.querySelector('td#A3.BattleFieid')
  
  // const B1 = document.querySelector('td#B1.BattleFieid')
  // const B2 = document.querySelector('td#B2.BattleFieid')
  // const B3 = document.querySelector('td#B3.BattleFieid')
  
  // const C1 = document.querySelector('td#C1.BattleFieid')
  // const C2 = document.querySelector('td#C2.BattleFieid')
  // const C3 = document.querySelector('td#C3.BattleFieid')

  const boardGame = document.getElementsByClassName('BattleFieid')
  
  const boardArray = Array.from(boardGame)

  boardArray.forEach((square)=>{
    square.addEventListener('click', ()=>{
      square.innerHTML ="X"
    })
  })