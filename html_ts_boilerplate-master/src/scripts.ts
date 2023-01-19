let colors = ['red', 'green', 'blue', 'red', 'green', 'blue']
const startButton = document.querySelector<HTMLButtonElement>('.js-start-btn')
const cards = document.querySelectorAll<HTMLDivElement>('.js-card')
const winMessage = document.querySelector('.js-win-msg') as HTMLSpanElement

const shuffleArray = (array: string[]) => {
    var i = 0
      , j = 0
      , temp = null
  
    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
}




let blackArr = []
let emptyArr: string[] = []
// let first: any;
// let second: any;

// const handleCardClik = () => {
//     for (let i = 0; i < cards.length; i++) {
//         cards[i]?.addEventListener('click', () => {
//             cards[i].style.backgroundColor = colors[i]
//             emptyArr.push(colors[i])
//             console.log(emptyArr)
//             if (!first && !second) {
//                 first = cards[i];
//             } else if (first && !second) {
//                 second = cards[i];
               


//                 if (emptyArr.length === 2) {
//                     if (emptyArr[0] === emptyArr[1]) {
//                         first.style.backgroundColor = emptyArr[0]
//                         second.style.backgroundColor = emptyArr[1]
//                         first = null
//                         second = null
//                         emptyArr = []

//                     } else if (emptyArr[0] !== emptyArr[1]) {
//                         first.style.backgroundColor = emptyArr[0]
//                         second.style.backgroundColor = emptyArr[1]
//                         emptyArr = []
//                         setTimeout(() => {
//                         first.style.backgroundColor = 'black'
//                         second.style.backgroundColor = 'black'
                                           
//                         }, 1000)                      
//                     }
//                 }
//             }     
//         })
              
//     }
// }



// cards?.forEach(function(card: any) {
//     cards?.addEventListener('click', function() {
//         if (!first && !second) {
//             first = card;
//             card.style.backgroundColor = 'black'
//         } else if (first && !second) {
//             second = card;
//             card.style.backgroundColor = 'black'
//             if (first.style.backgroundColor === second.style.backgroundColor) {
//                 first.style.pointerEvents = 'none';
//                 second.style.pointerEvents = 'none';
//                 first = null;
//                 second = null;
//                 matchCounter++;
//                 if (matchCounter >= 6) setTimeout(() => alert('Game done! Refresh page to replay.'), 2000 );
//             } else {
//                 first.classList.add('hide');
//                 second.classList.add('hide');
//                 setTimeout(() => {
//                     first.classList.remove('show');
//                     second.classList.remove('show');
//                     first.classList.remove('hide');
//                     second.classList.remove('hide');
//                     first = null;
//                     second = null;
//                 }, 2000);
//             }
//         }

//     })
// });

const initializeGame = () => {
    shuffleArray(colors)

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = 'black'
        cards[i].style.visibility = 'visible'
    }

}

startButton?.addEventListener('click', () => {
  initializeGame()
  handleCardClik()  
})

let moves = 6
const handleCardClik = () => {
  // Variable to store first click card
  let firstCard: any
  for (let i = 0; i < cards.length; i++) {
    cards[i]?.addEventListener('click', () => {
      cards[i].style.backgroundColor = colors[i]
      //push colors into an empty array and start comparing them when there are two colors
      emptyArr.push(colors[i])
      moves -= 1
      if (moves === 0) {
        winMessage.textContent = 'YOU LOST!'
      }  

      if (emptyArr.length === 2) {
        // if colors are same apply them to the cards, clear the array and the storing variable    
        if (emptyArr[0] === emptyArr[1]) {
          cards[i].style.backgroundColor = emptyArr[1]
          firstCard = ''
          emptyArr = []
          moves += 1

          // if colors differ keep them for 1 second, then change back to black       
        } else if (emptyArr[0] !== emptyArr[1]) {
          cards[i].style.backgroundColor = emptyArr[1]
          
          emptyArr = []
          let cachedFirstCard = firstCard
          blackArr.push(cards[i].style.backgroundColor)
          setTimeout(() => {
            cachedFirstCard.style.backgroundColor = 'black'
            cards[i].style.backgroundColor = 'black'
            if (!firstCard) {
              moves -= 1
            }
            firstCard = ''
          }, 1000)


        }
      }
      firstCard = cards[i]
    })
    
    
  }
 
 
}



