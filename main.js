const card1 = {
    name:"dragon",
    image:"dragon.jpg",
    effectText: "Dragions breath fire",
    cost: 12,
    effectID: "card1"
}

const recurtor = {
    name: "recrutor",
    image: "superRecrutor.jpg",
    effectText: "Gain 1 reputation",
    cost: 1,
    effectID: "recurtor"

}


const ninga = {
    name:"ninga",
    image:"dragon.jpg",
    effectText: "3 energy, loose 3 energy at the end of next turn",//not implimented yet
    cost: 2,
    effectID: "ninga"
}
const thief = {
    name:"thief",
    image:"dragon.jpg",
    effectText: "steal 2 energy from your opponent",
    cost: 3,
    effectID: "thief"
}
// const card1 = {
//     name:"dragon",
//     image:"dragon.jpg",
//     effectText: "Dragions breath fire",
//     cost: 12,
//     effectID: "card1"
// }
// const card1 = {
//     name:"dragon",
//     image:"dragon.jpg",
//     effectText: "Dragions breath fire",
//     cost: 12,
//     effectID: "card1"
// }
// const card1 = {
//     name:"dragon",
//     image:"dragon.jpg",
//     effectText: "Dragions breath fire",
//     cost: 12,
//     effectID: "card1"
// }
// const card1 = {
//     name:"dragon",
//     image:"dragon.jpg",
//     effectText: "Dragions breath fire",
//     cost: 12,
//     effectID: "card1"
// }
// const card1 = {
//     name:"dragon",
//     image:"dragon.jpg",
//     effectText: "Dragions breath fire",
//     cost: 12,
//     effectID: "card1"
// }
// const card1 = {
//     name:"dragon",
//     image:"dragon.jpg",
//     effectText: "Dragions breath fire",
//     cost: 12,
//     effectID: "card1"
// }
// const card1 = {
//     name:"dragon",
//     image:"dragon.jpg",
//     effectText: "Dragions breath fire",
//     cost: 12,
//     effectID: "card1"
// }





/**
 * This is a table of the function that creates the effect of playing every card. 
 * The indexes here are the same as the effectID feld in the card objects
 * The function take in a player who played the card, "player" for the player who's running the program, "opponent" for the opponent
 */
const cardEffects = new Map()

cardEffects.set('recurtor', (playingPlayer) => {
    if(playingPlayer === "player"){
        gameState.playerReputation++
    }
    else if(playingPlayer === "opponent"){
        gameState.opponentReputation++
    }
    else{
        console.log("Error, playingPlayer invalid")
    }
    console.log("Player Reputation is ", gameState.playerReputation) //Deleate This
})

cardEffects.set("card1", (playingPlayer) => {
    console.log("card1Played")
    },
)
cardEffects.set("ninga", (playingPlayer) => {
    if(playingPlayer === "player"){
        gameState.playerEnergy = gameState.playerEnergy + 3
    }
    else if(playingPlayer === "opponent"){
        gameState.opponenetEnergy = gameState.opponenetEnergy + 3
    }
    else{
        console.log("ninga input invalid")
    }
})
cardEffects.set("thief", (playingPlayer) => {
    if(playingPlayer === "player"){
        if (gameState.opponenetEnergy >= 2){
            gameState.playerEnergy = gameState.playerEnergy + 2
            gameState.opponenetEnergy = gameState.opponenetEnergy - 2    
        }
        else if(gameState.opponenetEnergy === 1){
            gameState.playerEnergy = gameState.playerEnergy + 1
            gameState.opponenetEnergy = 0
        }
    }
    else if(playingPlayer === "opponent"){
        if (gameState.playerEnergy >= 2){
            gameState.opponenetEnergy = gameState.opponenetEnergy + 2
            gameState.playerEnergy = gameState.playerEnergy - 2    
        }
        else if(gameState.playerEnergy === 1){
            gameState.opponenetEnergy = gameState.opponenetEnergy + 1
            gameState.playerEnergy = 0
        }
    }
    else{
        console.log("ninga input invalid")
    }
})




let draggingCard = null


const gameState = {
    //store the gameState
    //contains, Playerhand ... PlayerHand is an object with slot1 through slot5. 
    //these are null when no card present in slot, otherwise they are a card object repersenting the card
    //Oppondnts hand is object with slot1-5 null when no card in slot, otherwise is the cardBack const
    //playerDeck is a list of all cards in the player deck in order. the Last element is the top of the deck
    //opponentDeck is a list of all cards in the opponentDeck in order. the Last element is the top of the deck
    //playerDiscard is a list of all cards in the Playes dicard pile
    //Opponent Discard is a list of all cards in the opponents dicard pile
    //playerTurn is Player when it's the players turn to play and opponent when it's the opponents turn to play
    //current phase is the current phase your in, It can be playing or purchesing
    //cardsPlayed indicates the number of cards played by the player going first, 0 through 5. 
    //goingFirts indicaes who is going first this round. Either Player or opponent

    playerhand: {
        slot1: null,
        slot2: null,
        slot3: null,
        slot4: null,
        slot5: null,
    },
    opponentHand: {
        slot1: null,
        slot2: null,
        slot3: null,
        slot4: null,
        slot5: null,
    },
    purchesArea: {
        slot1: null,
        slot2: null,
        slot3: null,
        slot4: null,
        slot5: null,
    },
    playerDeck: [],
    opponentDeck: [],
    playerDiscard: [],
    opponentDiscard: [],
    playerReputation: 0,
    opponentReputation: 0,
    playerEnergy: 0,
    opponenetEnergy: 0,
    playerTurn : "player",
    currentPhase: "playing",
    CardsPlayed: 0,
    goingFirst: "player"


}

/**
 * 
 * @param {the id of the handSlot as an int} n 
 * @returns the corrisponding data in the n+1 th handSlot if valid, otherwise prints error to consal
 */
function getNthHandSlot(n){
    if (n===0){
        return gameState.playerhand.slot1
    }
    else if (n===1){
        return gameState.playerhand.slot2
    }
    else if (n===2){
        return gameState.playerhand.slot3
    }
    else if (n===3){
        return gameState.playerhand.slot4
    }
    else if (n===4){
        return gameState.playerhand.slot5
    }
    else{
        console.log("getNthHandSlot input invalid")
    }

}

/**
 * this function puts newVlaue in the n-1th cardSlot, Note, this function is nothing but a side effect. 
 * @param {the value of the cardSlot you wish to update, from 0 to 4} n 
 * @param {the new value to add to the cardSlot} newValue 
 */
function updateNthHandSlot(n, newValue){
    if (n===0){
        gameState.playerhand.slot1 = newValue
    }
    else if (n===1){
        gameState.playerhand.slot2 = newValue
    }
    else if (n===2){
        gameState.playerhand.slot3 = newValue
    }
    else if (n===3){
        gameState.playerhand.slot4 = newValue
    }
    else if (n===4){
        gameState.playerhand.slot5 = newValue
    }
    else{
        console.log("updateNthHandSlot n invalid")
    }

}

/**
 * retunrs the Nth hand Slot data from gamestate in your opponents hand
 * @param {the index of the handSlot you want, 0 to 4} n 
 */
function getOpponentsNthHandSlot(n){
    if (n===0){
        return gameState.opponentHand.slot1
    }
    else if (n===1){
        return gameState.opponentHand.slot2
    }
    else if (n===2){
        return gameState.opponentHand.slot3
    }
    else if (n===3){
        return gameState.opponentHand.slot4
    }
    else if (n===4){
        return gameState.opponentHand.slot5
    }
    else{
        console.log("getOpponentsNthHandSlot input invalid")
    }

    
}

/**
 * this function puts newVlaue in the n-1th cardSlot of your opponent, Note, this function is nothing but a side effect. 
 * @param {the value of the cardSlot you wish to update, from 0 to 4} n 
 * @param {the new value to add to the cardSlot} newValue 
 */
function updateOpponentsNthHandSlot(n, newValue){
    if (n===0){
        gameState.opponentHand.slot1 = newValue
    }
    else if (n===1){
        gameState.opponentHand.slot2 = newValue
    }
    else if (n===2){
        gameState.opponentHand.slot3 = newValue
    }
    else if (n===3){
        gameState.opponentHand.slot4 = newValue
    }
    else if (n===4){
        gameState.opponentHand.slot5 = newValue
    }
    else{
        console.log("updateNthHandSlot n invalid")
    }

}



/**
 * retunrs the Nth hand Slot data from gamestate in the purches area
 * @param {the index of the handSlot you want, 0 to 4} n 
 */
function getPurchesAreaNthSlot(n){
    if (n===0){
        return gameState.purchesArea.slot1
    }
    else if (n===1){
        return gameState.purchesArea.slot2
    }
    else if (n===2){
        return gameState.purchesArea.slot3
    }
    else if (n===3){
        return gameState.purchesArea.slot4
    }
    else if (n===4){
        return gameState.purchesArea.slot5
    }
    else{
        console.log("getPurchesAreaNthSlot input invalid")
    }

    
}


/**
 * this function puts newVlaue in the n-1th cardSlot of the purches area, Note, this function is nothing but a side effect. 
 * @param {the value of the cardSlot you wish to update, from 0 to 4} n 
 * @param {the new value to add to the cardSlot} newValue 
 */
function updatePurchesAreaNthSlot(n, newValue){
    if (n===0){
        gameState.purchesArea.slot1 = newValue
    }
    else if (n===1){
        gameState.purchesArea.slot2 = newValue
    }
    else if (n===2){
        gameState.purchesArea.slot3 = newValue
    }
    else if (n===3){
        gameState.purchesArea.slot4 = newValue
    }
    else if (n===4){
        gameState.purchesArea.slot5 = newValue
    }
    else{
        console.log("updatePurchesAreaNthSlot n invalid")
    }

}









/**
 * Draws the card in the element who's ID is given
 * @param card a card object to display
 * @param locationID the element the card is to be drawn on 
 */
function renderCard(card, locationID){
    const location = document.getElementById(locationID)
    const cardDisplyDiv = document.createElement("div");
    if (card != null){
        cardDisplyDiv.classList.add("cardDisplay")
        const cardTitleDiv = document.createElement("div");
        cardTitleDiv.classList.add("cardTitle")
        const cardNameDiv = document.createElement("div");
        const cardCostDiv = document.createElement("div");
        cardNameDiv.classList.add("cardName")
        cardCostDiv.classList.add("cardCost")
        const cardImageDiv = document.createElement("img");
        
        const cardEffectDiv = document.createElement("div");
        cardEffectDiv.classList.add("cardEffect")
        const cardEffectTextDiv = document.createElement("div");
        cardEffectTextDiv.classList.add("cardEffectText")
        cardDisplyDiv.appendChild(cardTitleDiv)
        cardDisplyDiv.appendChild(cardImageDiv)
        cardDisplyDiv.appendChild(cardEffectDiv)
        cardTitleDiv.appendChild(cardNameDiv)
        cardTitleDiv.appendChild(cardCostDiv)
        cardEffectDiv.appendChild(cardEffectTextDiv)

        const cardNameText = document.createTextNode(card.name);
        cardNameDiv.appendChild(cardNameText)
        const cardCost = document.createTextNode(card.cost);
        cardCostDiv.appendChild(cardCost)
        const effectText = document.createTextNode(card.effectText)
        cardEffectTextDiv.appendChild(effectText)
        cardImageDiv.setAttribute("src", `img/${card.image}`)
        cardImageDiv.setAttribute("draggable", "false")
    }
    for (const child of location.children){

        child.remove()
    }


    location.appendChild(cardDisplyDiv);
}

/**
 * Plays a card
 */
function playCard(card, player){
    cardEffects.get(card.effectID)(player)
    gameState.currentPhase = "purchasing"


}


function endPhaseButton(){
    console.log("button pressed")
    if (gameState.playerTurn === "player"){// in The future, this should chck that the player has had there turn for some minimum time, possibly 5 seconds
        if (gameState.currentPhase === "playing"){
            gameState.currentPhase = "purchasing"
            gameState.CardsPlayed = gameState.CardsPlayed + 1
            return
        }
        else if(gameState.currentPhase === "purchasing"){
            gameState.playerTurn = "opponent"
            gameState.currentPhase = "playing"

        }
    }
}







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







function enterGame(){
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
    cardPlayArea.addEventListener("drop", (event) => {

        playCard(draggingCard, "player")
    })


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


        currCardSlot.addEventListener("dragover", function(e){
            e.preventDefault()
        });
        cardSlotList[i].addEventListener("drop", (event) => {
            cardSlotList[i].style.border = "none"
            renderCard(card1, cardSlotList[i].getAttribute("id"))
            cardSlotList[i].lastChild.setAttribute("draggable", "true")
            cardSlotList[i].addEventListener("dragstart", (event) => {
                try{
                    document.getElementById("cardPlayArea").style.borderStyle = "dashed"
                }
                catch(TypeError){}    
                
                draggingCard = getNthHandSlot(cardIndex)

            })
            cardSlotList[i].addEventListener("dragend", (event) => {
                try{
                    document.getElementById("cardPlayArea").style.borderStyle = "none"
                }
                catch(TypeError){}   

            })
        })



        handWraper.appendChild(currCardSlot)
    }
    


    //Give the players hand it's starting cards

    for (let slotNum = 0; slotNum<5;slotNum++){
        let nextCard = gameState.playerDeck.pop()
        updateNthHandSlot(slotNum, nextCard)
    }



    
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

    
    //Handles purches area
    const purchesArea = document.createElement("div")
    const purchesAreaSlotList = []
    purchesArea.classList.add("purchesArea")
    purchesArea.id = "purchesArea"
    for (let i=0; i<5; i++){
        purchesAreaSlotList.push(document.createElement("div"))
        purchesAreaSlotList[i].classList.add("cardSlot")
        purchesAreaSlotList[i].id = `purchesAreaSlot${i}`
        updatePurchesAreaNthSlot(i, null)//Note, Line is redundent
        purchesArea.appendChild(purchesAreaSlotList[i])
    }
    cardPlayArea.appendChild(purchesArea)

    //This creates the skipPhase button
    const skipPhaseButton = document.createElement("button")
    skipPhaseButton.classList.add("SkipPhase")
    skipPhaseButton.innerText = "Skip Phase"
    skipPhaseButton.addEventListener('click', () => {
        endPhaseButton()
    })
    const cardPlayPlace = document.getElementById("cardPlayArea")
    cardPlayPlace.appendChild(skipPhaseButton)
    







    //Call update gameState
    updateGameState()
    //Temporary code to create a starting card to play around with
    const startCard = document.getElementsByClassName("cardDisplay")
    let count = 0
    for(let card of startCard){
        const index = count
        card.setAttribute("draggable", "true")
        card.addEventListener("dragstart", (event) => {
            try{
                document.getElementById("cardPlayArea").style.borderStyle = "dashed"
            }
            catch(TypeError){}
            draggingCard = getNthHandSlot(index)
        });
        card.addEventListener("dragend", (event) => {
            try{
                document.getElementById("cardPlayArea").style.borderStyle = "none"
            }
            catch{}

        });
        count++
    }
    //Temporary code to create a starting card to play around with


}

/**
 * Updates screen based on current gamestate
 */
function updateGameState(){
    //Handles your hand
    let cardSlot = null
    let Slot
    for (i=0; i<5; i++){
        Slot = getNthHandSlot(i)

        cardSlot = document.getElementById(`handSlotCard${i}`)
        cardSlotID = `handSlotCard${i}`
        if (Slot != null){
            renderCard(Slot, cardSlotID)
        }
        else{
            for (const child of cardSlot.children){
                child.remove()
            }
        }
    }


    //Handles Opponent Hand
    let opponentsCardSlot = null
    let gameStateCardVal = null
    for (let i=0; i<5; i++){
        gameStateCardVal = getOpponentsNthHandSlot(i)
        opponentsCardSlot = document.getElementById("OpponentHandSlotCard" + String(i))
        if (gameStateCardVal === null){

            for (const child of opponentsCardSlot.children){
                child.remove()
            }
        }
        else if(gameStateCardVal === "cardBack"){
            const newCardBack = document.createElement("img")
            newCardBack.setAttribute("src", "img/cardBack.jpg")
            newCardBack.setAttribute("draggable", "false")
            opponentsCardSlot.appendChild(newCardBack)
        }
    }


    //Handles purches area
    let currPurchesCard
    let currPurchesCardLocation
    for(let i=0; i<5; i++){
        currPurchesCard = getPurchesAreaNthSlot(i)
        renderCard(currPurchesCard, `purchesAreaSlot${i}`)
    }





}




function main(){

    const soloButton = document.createElement('button')
    soloButton.innerText = 'Solo'
    soloButton.id = 'soloButton'
    soloButton.addEventListener('click', () => {
        enterGame()
    })
    document.body.appendChild(soloButton)
    const multButton = document.createElement('button')
    multButton.innerText = 'Mult'
    multButton.id = 'multButton'
    multButton.addEventListener('click', () => {
        enterGame()
    })
    document.body.appendChild(multButton)


    const cardClassList = document.getElementsByClassName("cardDisplay")
    for (let classNumber = 0; classNumber<cardClassList.length; classNumber++){
        const calssIndex = classNumber
        cardClassList[classNumber].setAttribute("draggable", "true")
        cardClassList[classNumber].addEventListener("dragstart", (event) => {
            try{
                document.getElementById("cardPlayArea").style.borderStyle = "dashed"
            }
            catch(TypeError){}
            draggingCard = getNthHandSlot(calssIndex)

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
            updateGameState()

        })
    }
}

