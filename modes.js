//in this section are the mode transitions
/**
 * Enters the game
 */

function enterGame(){
    console.log("entered game")
    const header = document.getElementById("top")
    header.style.display = 'none'
    const soloButton = document.getElementById("soloButton")
    soloButton.style.display = "none"
    const multButton = document.getElementById("multButton")
    multButton.style.display = "none"
    const sampleCard= document.getElementById("sampleCard")
    sampleCard.style.display = "none"

    const cardPlayArea = document.createElement("div")
    cardPlayArea.id = "cardPlayArea"
    cardPlayArea.classList.add("cardPlayArea")
    cardPlayArea.addEventListener("dragover", function(e){
        e.preventDefault()
        cardPlayArea.style.borderStyle = "solid"
    });
    cardPlayArea.addEventListener("dragleave", function(e){
        cardPlayArea.style.borderStyle = "dashed"
    });
    



    //this creates the players deck
    for (let i=0; i<10; i++){
        gameState.playerDeck.push(structuredClone(recurtor))
    }
    for (let i=0; i<5; i++){
        gameState.playerDeck.push(structuredClone(card1))
    }
    shufflePlayerDeck()








    //this creates the players hand
    cardSlotList = []
    const handWraper = document.getElementById("handWraper")
    let currCardSlot = null
    for (let i=0; i<5; i++){
        const cardIndex = i
        cardSlotList.push(document.createElement("div"))
        currCardSlot = cardSlotList[i]
        currCardSlot.classList.add("handSlot")
        currCardSlot.id = "handSlotCard" + String(i)


        // currCardSlot.addEventListener("dragover", function(e){
        //     e.preventDefault()
        // });
        // cardSlotList[i].addEventListener("drop", (event) => {
        //     cardSlotList[i].style.border = "none"
        //     renderCard(card1, cardSlotList[i].getAttribute("id"))
        //     cardSlotList[i].lastChild.setAttribute("draggable", "true")
        //     cardSlotList[i].addEventListener("dragstart", (event) => {
        //         try{
        //             document.getElementById("cardPlayArea").style.borderStyle = "dashed"
        //         }
        //         catch(TypeError){}    
                
        //         draggingCard = getNthHandSlot(cardIndex)

        //     })
        //     cardSlotList[i].addEventListener("dragend", (event) => {
        //         try{
        //             document.getElementById("cardPlayArea").style.borderStyle = "none"
        //         }
        //         catch(TypeError){}   

        //     })
        // })



        handWraper.appendChild(currCardSlot)
    }
    


    //Give the players hand it's starting cards

    for (let slotNum = 0; slotNum<5;slotNum++){
        let nextCard = gameState.playerDeck.pop()
        updateNthHandSlot(slotNum, nextCard)
    }



    //This creates the player reputation tracker
    const playerReputationTracker = document.createElement("div")
    playerReputationTracker.classList.add("reputationTracker")
    playerReputationTracker.innerText = "reputation " + String(gameState.playerReputation)
    playerReputationTracker.id = "playerReputationTracker"
    handWraper.appendChild(playerReputationTracker)


    document.body.insertBefore(cardPlayArea, handWraper)


    //This creates the opponents hand
    opponentCardList = []
    opponetHandWrapper = document.createElement("div")
    opponetHandWrapper.classList.add("playerHand")
    for (let i=0; i<5; i++){
        opponentCardList.push(document.createElement("div"))
        currCardSlot = opponentCardList[i]
        currCardSlot.classList.add("handSlot")
        currCardSlot.id = "OpponentHandSlotCard" + String(i)
        updateOpponentsNthHandSlot(i, "cardBack")
        opponetHandWrapper.appendChild(currCardSlot)
    }
    const firstElement = document.body.firstChild
    document.body.insertBefore(opponetHandWrapper, firstElement)
    //This creates the opponents reputation tracker
    const opponentReputationTracker = document.createElement("div")
    opponentReputationTracker.classList.add("reputationTracker")
    opponentReputationTracker.innerText = "reputation " + String(gameState.playerReputation)
    opponentReputationTracker.id = "opponentReputationTracker"
    opponetHandWrapper.appendChild(opponentReputationTracker)
    

    
    //Handles purches area
    const purchesArea = document.createElement("div")
    const purchesAreaSlotList = []
    purchesArea.classList.add("purchesArea")
    purchesArea.id = "purchesArea"
    for (let i=0; i<5; i++){
        purchesAreaSlotList.push(document.createElement("div"))
        purchesAreaSlotList[i].classList.add("cardSlot")
        purchesAreaSlotList[i].id = `purchesAreaSlot${i}`
        purchesArea.appendChild(purchesAreaSlotList[i])
    }
    cardPlayArea.appendChild(purchesArea)

   //creates the deck of cards for the purches area
    let wildCardIndex = gameState.wildCards.length
    while(wildCardIndex != 0){
       let RandomwildCardIndex = Math.floor(Math.random()*wildCardIndex)
       wildCardIndex = wildCardIndex - 1;
       [gameState.wildCards[wildCardIndex], gameState.wildCards[RandomwildCardIndex]] = [gameState.wildCards[RandomwildCardIndex], gameState.wildCards[wildCardIndex]]
    }
    for (let i=0; i<5; i++){
        updatePurchesAreaNthSlot(i, gameState.wildCards.pop())
    }



    //This creates the skipPhase button
    const skipPhaseButton = document.createElement("button")
    skipPhaseButton.classList.add("SkipPhase")
    skipPhaseButton.innerText = "Skip Phase"
    skipPhaseButton.id = "skipPhaseButton"
    // skipPhaseButton.addEventListener('click', () => {
    //     endPhaseButton()
    // })
    const cardPlayPlace = document.getElementById("cardPlayArea")
    cardPlayPlace.appendChild(skipPhaseButton)
    







    //Call update gameState
    renderGameState()
    turnOnCardPlay()
    // for(let count=0; count<5; count++){
    //     const index = count
    //     const card = document.getElementById(`handSlotCard${count}`).firstChild
    //     card.setAttribute("draggable", "true")
    //     card.addEventListener("dragstart", (event) => {
    //         try{
    //             document.getElementById("cardPlayArea").style.borderStyle = "dashed"
    //         }
    //         catch(TypeError){}
    //         draggingCard = getNthHandSlot(index)
    //     });
    //     card.addEventListener("dragend", (event) => {
    //         console.log("draggend called")

    //         try{
    //             document.getElementById("cardPlayArea").style.borderStyle = "none"
    //         }
    //         catch{}

    //     });
    // }
    //Temporary code to create a starting card to play around with


    //calls enter mode
    //creates the ondrop for playing a card
    enterMode(playingCard)


}

/**
 * sets the starting player and enters the corrosponding mode
 * for now, alwese sets to player, in future, will set or player or opponent random
 */
function setStartingPlayer(){
    return "player"
}


/**
 * Plays a card
 */
function playCard(card, player){
    cardEffects.get(card.effectID)(player)
    gameState.currentPhase = "purchasing"
}

/**
 * activates whenever a card is bought, puts the card into the players discard pile, subtracts the reputation
 */
function buyCard(card, player){

}

function tryBuyCard(cardNumber){
    console.log("tryBuyCard Called")
    const boughtCard = getPurchesAreaNthSlot(cardNumber)
    if(gameState.playerReputation >= boughtCard.cost){
        gameState.playerReputation = gameState.playerReputation - boughtCard.cost
        gameState.playerDiscard.push(boughtCard)
        updatePurchesAreaNthSlot(cardNumber, null)
        renderGameState()
        turnOnCardPlay()
        enterMode(playingCard)
    }
}

/**
 * calls tryBuyCard(0)
 */
function tryBuyCard0(){
    tryBuyCard(0)
}

/**
 * calls tryBuyCard(1)
 */
function tryBuyCard1(){
    tryBuyCard(1)
}

/**
 * calls tryBuyCard(2)
 */
function tryBuyCard2(){
    tryBuyCard(2)
}

/**
 * calls tryBuyCard(3)
 */
function tryBuyCard3(){
    tryBuyCard(3)
}

/**
 * calls tryBuyCard(4)
 */
function tryBuyCard4(){
    tryBuyCard(4)
}


/**
 * this function activeates the mode switch that happens when a card is played by player
 * and calls the play card function
 */
function playerPlaysCard(){
   
    playCard(draggingCard, "player")
    turnOffCardPlay()
    renderGameState()
    enterMode(buyingCard)
}

/**
 * this function turns off the draggability of cards in player's hand
 */
function turnOffCardPlay(){
    console.log("called turn off cardPlay")
    for (let i=0; i<5; i++){
        const currHandSlot = document.getElementById(`handSlotCard${i}`).firstChild
        currHandSlot.setAttribute("draggable", "false") 
    }
}

/**
 * this function turns on the draggability of cards in player's hand
 */
function turnOnCardPlay(){
    console.log("called turn on card play")
    for (let i=0; i<5; i++){
        const currHandSlot = document.getElementById(`handSlotCard${i}`).firstChild
        currHandSlot.setAttribute("draggable", "true")
        currHandSlot.addEventListener("dragstart", (event) => {
            try{
                document.getElementById("cardPlayArea").style.borderStyle = "dashed"
            }
            catch(TypeError){}
            draggingCard = getNthHandSlot(i)
        });
        currHandSlot.addEventListener("dragend", (event) => {
            console.log("draggend called")

            try{
                document.getElementById("cardPlayArea").style.borderStyle = "none"
            }
            catch{}

        });
        
    }


}


/**
 * occures when end phase button pressed while the player is playing a card
 * 
 */
function endPhaseButtonPlaying(){
    console.log("endPhaseButtonPlaying called")
    enterMode(buyingCard)
    turnOffCardPlay()
}


/**
 * occures when end phase button pressed while the player is buying a card
 * the current code is a placeholder for when the opponent exists
 */
function endPhaseButtonBuying(){
    enterMode(playingCard)
    turnOnCardPlay()
}
















//Below here are the modes and the enter mode function
//Below here are the modes and the enter mode function
//Below here are the modes and the enter mode function
//Below here are the modes and the enter mode function
//Below here are the modes and the enter mode function
//Below here are the modes and the enter mode function
//Below here are the modes and the enter mode function
//Below here are the modes and the enter mode function
//Below here are the modes and the enter mode function
//Below here are the modes and the enter mode function




/**
 * 
 * @param mode a mode object that explains what events will change modes when called and what function to opperate 
 * when they do, adds the event listner for all those functions
 */
function enterMode(mode){

    //This will create the new Transition event listners and deleate the old ones
    if (currentMode != null){
        const prevMode = currentMode
        const prevModeTransitionList = Object.values(prevMode.transitions)
        for (let i=0; i<prevModeTransitionList.length; i++){
            const currTransition = prevModeTransitionList[i]
            const removedElement = document.getElementById(currTransition.elementID)
            removedElement.removeEventListener(currTransition.eventType, currTransition.funct)
        }
    }
    let oldMode = currentMode
    currentMode = mode
    if (true){
        const transitionList = Object.values(mode.transitions)
        for (let i=0; i< transitionList.length; i++){
            const currTransition = transitionList[i]
            const EffectedElement = document.getElementById(currTransition.elementID)
            EffectedElement.addEventListener(currTransition.eventType, currTransition.funct)
        }
    }

    //This will 
}




//these are the possible modes

const startMode = {
    transitions: {
        soloButton: {
            funct: enterGame,
            elementID: "soloButton",
            eventType: "click",
        },
        multButton:{
            funct: enterGame,
            elementID: "multButton",
            eventType: "click",
        },
    },
}

const playingCard = {
    transitions: {
        cardPlayed: {
            funct: playerPlaysCard,
            elementID: "cardPlayArea",
            eventType: "drop",
        },
        skipPhaseButton: {
            funct: endPhaseButtonPlaying,
            elementID: "skipPhaseButton",
            eventType: "click",
        },

    },
}

const buyingCard = {
    transitions: {
        skipPhaseButton: {
            funct: endPhaseButtonBuying,
            elementID: "skipPhaseButton",
            eventType: "click",
        },
        buyCard0: {
            funct: tryBuyCard0,
            elementID: "purchesAreaSlot0",
            eventType: "click",

        },
        buyCard1: {
            funct: tryBuyCard1,
            elementID: "purchesAreaSlot1",
            eventType: "click",

        },
        buyCard2: {
            funct: tryBuyCard2,
            elementID: "purchesAreaSlot2",
            eventType: "click",

        },
        buyCard3: {
            funct: tryBuyCard3,
            elementID: "purchesAreaSlot3",
            eventType: "click",

        },
        buyCard4: {
            funct: tryBuyCard4,
            elementID: "purchesAreaSlot4",
            eventType: "click",

        },
    },
}







