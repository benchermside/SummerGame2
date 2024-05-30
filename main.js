const card1 = {
    name:"dragon",
    image:"dragon.jpg",
    effectText: "Dragions breath fire",
    cost: 12
}





const gameState = {
    //store the gameState
    //contains, Playerhand ... PlayerHand is an object with slot1 through slot5. 
    //these are null when no card present in slot, otherwise they are a card object repersenting the card
    //Oppondnts hand is object with slot1-5 null when no card in slot, otherwise is the cardBack const
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
        gameState.playerhand.slot1 = newValue
    }
    else if (n===2){
        gameState.playerhand.slot1 = newValue
    }
    else if (n===3){
        gameState.playerhand.slot1 = newValue
    }
    else if (n===4){
        gameState.playerhand.slot1 = newValue
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
    console.log(locationID)
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
        alert("cardPlayed")
    })

    //this creates the players hand
    cardSlotList = []
    const handWraper = document.getElementById("handWraper")
    let currCardSlot = null
    for (let i=0; i<5; i++){
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
    //Temporary code to create a starting card to play around with
    gameState.playerhand.slot1 = card1
    //Temporary code to create a starting card to play around with
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


    updateGameState()
    //Temporary code to create a starting card to play around with
    const startCard = document.getElementsByClassName("cardDisplay")
    for(let card of startCard){
        card.setAttribute("draggable", "true")
        card.addEventListener("dragstart", (event) => {
            try{
                document.getElementById("cardPlayArea").style.borderStyle = "dashed"
            }
            catch(TypeError){}
        });
        card.addEventListener("dragend", (event) => {
            try{
                document.getElementById("cardPlayArea").style.borderStyle = "none"
            }
            catch{}

        });
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
        cardClassList[classNumber].setAttribute("draggable", "true")
        cardClassList[classNumber].addEventListener("dragstart", (event) => {
            try{
                document.getElementById("cardPlayArea").style.borderStyle = "dashed"
            }
            catch(TypeError){}
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

