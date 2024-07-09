//This file holds all the functions for rendering stuff on the screen


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
 * Updates screen based on current gamestate
 */
function renderGameState(){
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
        else{
            for (const child of opponentsCardSlot.children){
                child.remove()
            }
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

    //Update playerReputationTracker and enerty
    const playerReputationTracker = document.getElementById("playerReputationTracker")
    playerReputationTracker.innerText = "reputation " + String(gameState.playerReputation) + "\n energy " + String(gameState.playerEnergy)
    document.getElementById("opponentReputationTracker").innerText = "reputation " + String(gameState.opponentReputation) + "\n energy " + String(gameState.opponenetEnergy)



}
