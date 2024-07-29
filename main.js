





function shufflePlayerDeck() {
    const PlayerDeck = gameState.playerDeck;
    let index = PlayerDeck.length;
    while(index != 0){
        let RandomIndex = Math.floor(Math.random()*index);
        index = index - 1;
        [PlayerDeck[index], PlayerDeck[RandomIndex]] = [PlayerDeck[RandomIndex], PlayerDeck[index]];
    }
}

function shuffleOpponentDeck(){
    const opponentDeck = gameState.opponentDeck;
    let index = opponentDeck.length;
    while(index != 0){
        let RandomIndex = Math.floor(Math.random()*index);
        index = index - 1;
        [opponentDeck[index], opponentDeck[RandomIndex]] = [opponentDeck[RandomIndex], opponentDeck[index]];
    }
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
            gameState.playerhand.updateNthHandSlot(i, gameState.playerDeck.pop());
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

