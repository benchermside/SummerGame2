





function shufflePlayerDeck() {
    const PlayerDeck = gameState.playerDeck
    let index = PlayerDeck.length
    while(index != 0){
        let RandomIndex = Math.floor(Math.random()*index)
        index = index - 1;
        [PlayerDeck[index], PlayerDeck[RandomIndex]] = [PlayerDeck[RandomIndex], PlayerDeck[index]]
    }
}




function DrawNewHand(){
    for (let i=0; i<5; i++){
        if (gameState.playerDeck.length === 0){
            gameState.playerDeck = gameState.playerDiscard
            gameState.playerDiscard = []
            shufflePlayerDeck()
        }
        if (!(gameState.playerDeck.length === 0)){
            gameState.playerhand.updateNthHandSlot(i, gameState.playerDeck.pop())
        }
    }
}









function main(){




    const soloButton = document.createElement('button')
    soloButton.innerText = 'Solo'
    soloButton.id = 'soloButton'
    // soloButton.addEventListener('click', () => {
    //     enterGame()
    // })
    document.body.appendChild(soloButton)
    const multButton = document.createElement('button')
    multButton.innerText = 'Mult'
    multButton.id = 'multButton'
    // multButton.addEventListener('click', () => {
    //     enterGame()
    // })
    document.body.appendChild(multButton)
    enterMode(startMode)




    const cardClassList = document.getElementsByClassName("cardDisplay")
    for (let classNumber = 0; classNumber<cardClassList.length; classNumber++){
        const calssIndex = classNumber
        cardClassList[classNumber].setAttribute("draggable", "true")
        cardClassList[classNumber].addEventListener("dragstart", (event) => {
            try{
                document.getElementById("cardPlayArea").style.borderStyle = "dashed"
            }
            catch(TypeError){}
            draggingCard.card = getNthHandSlot(calssIndex)
            draggingCard.cardNumber = calssIndex

        });
        cardClassList[classNumber].addEventListener("dragend", (event) => {
            try{
                document.getElementById("cardPlayArea").style.borderStyle = "none"
            }
            catch{}

        });
    
    }
    const cardSlots = document.getElementsByClassName("cardSlot")
    let cardSlot
    for(let cardSlotNumber=0; cardSlotNumber<cardSlots.length; cardSlotNumber++){
        cardSlot = cardSlots[cardSlotNumber]
        cardSlot.addEventListener("dragover", function(e){
            e.preventDefault()
        });
        cardSlot.addEventListener("drop", (event) => {
            updateNthHandSlot(cardSlotNumber, card1)
            renderGameState()

        })
    }
    //sets the current Mode to the inital mode
}

