
/**
 * 
 * @param {low}  the minimum number the you can get, this feild is optional and can be left out with defult 0
 * @param {high} the max number you can get + 1
 * 
 */
function generateRandomInt(low, high){
    if (high === undefined){
        high = low;
        low = 0;
    }
    const rangeSize = high - low;
    const RandomNum = Math.floor(getRand()*rangeSize);
    return RandomNum + low;
}



/**
 * 
 * This came from https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
 * should be used to genorate a random number function
 */
function sfc32(a, b, c, d) {
    return function() {
      a |= 0; b |= 0; c |= 0; d |= 0;
      let t = (a + b | 0) + d | 0;
      d = d + 1 | 0;
      a = b ^ b >>> 9;
      b = c + (c << 3) | 0;
      c = (c << 21 | c >>> 11);
      c = c + t | 0;
      return (t >>> 0) / 4294967296;
    }
}
  
const repeatable = false;
const seedgen = () => (Math.random()*2**32)>>>0;
const getRand =  repeatable ? sfc32(9836890, 98057909, 29598, 9867895) : sfc32(seedgen(), seedgen(), seedgen(), seedgen());






/**
 * shuffles the gamestate.playerDeck
 */
function shufflePlayerDeck() {
    shuffleList(gameState.playerDeck)
}

/**
 * @param list a list you want shuffled
 * randomizes the order of the list 
 */
function shuffleList(list){
    let index = list.length;
    while(index != 0){
        let RandomIndex = generateRandomInt(index);
        index = index - 1;
        [list[index], list[RandomIndex]] = [list[RandomIndex], list[index]];
    }
}

/**
 * shuffles the gamestate.opponentDeck
 */

function shuffleOpponentDeck(){
    shuffleList(gameState.opponentDeck);
}

/**
 * I suspect this is not used anywhere in the code, will likly deleat soon
 */
function DrawNewHand(){
    for (let i=0; i<5; i++){
        if (gameState.playerDeck.length === 0){
            gameState.playerDeck = gameState.playerDiscard;
            gameState.playerDiscard = [];
            shufflePlayerDeck();
        }
        if (!(gameState.playerDeck.length === 0)){
            gameState.playerHand.updateNthHandSlot(i, gameState.playerDeck.pop());
        }
    }
}









function main(){
    const soloButton = document.createElement('button');
    soloButton.innerText = 'Solo';
    soloButton.id = 'soloButton';
    // soloButton.addEventListener('click', () => {
    //     enterGame()
    // })
    document.body.appendChild(soloButton);
    const multButton = document.createElement('button');
    multButton.innerText = 'Mult';
    multButton.id = 'multButton';
    // multButton.addEventListener('click', () => {
    //     enterGame()
    // })
    document.body.appendChild(multButton);
    enterMode(startMode);




    const cardClassList = document.getElementsByClassName("cardDisplay");
    for (let classNumber = 0; classNumber<cardClassList.length; classNumber++){
        const classIndex = classNumber;
        cardClassList[classNumber].setAttribute("draggable", "true");
        cardClassList[classNumber].addEventListener("dragstart", (event) => {
            try{
                document.getElementById("betweenPlayersArea").style.borderStyle = "dashed";
            }
            catch(TypeError){};
            draggingCard.card = getNthHandSlot(classIndex);
            draggingCard.cardNumber = classIndex;

        });
        cardClassList[classNumber].addEventListener("dragend", (event) => {
            try{
                document.getElementById("betweenPlayersArea").style.borderStyle = "none";
            }
            catch{}

        });
    
    }
    const cardSlots = document.getElementsByClassName("cardSlot");
    let cardSlot;
    for(let cardSlotNumber=0; cardSlotNumber<cardSlots.length; cardSlotNumber++){
        cardSlot = cardSlots[cardSlotNumber];
        cardSlot.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        cardSlot.addEventListener("drop", (event) => {
            updateNthHandSlot(cardSlotNumber, card1);
            renderGameState();

        })
    }
    //sets the current Mode to the inital mode
}

