//This file holds all the functions for rendering stuff on the screen


/**
 * Draws the card in the element whose ID is given
 * @param card a card object to display
 * @param locationID the element the card is to be drawn on 
 */
function renderCard(card, locationID){
    const location = document.getElementById(locationID);
    const cardDisplayDiv = document.createElement("div");
    if (card != null){
        cardDisplayDiv.classList.add("cardDisplay");
        const cardTitleDiv = document.createElement("div");
        cardTitleDiv.classList.add("cardTitle");
        const cardNameDiv = document.createElement("div");
        const cardCostDiv = document.createElement("div");
        cardNameDiv.classList.add("cardName");
        cardCostDiv.classList.add("cardCost");
        const cardImageDiv = document.createElement("img");
        const cardEffectDiv = document.createElement("div");
        cardEffectDiv.classList.add("cardEffect");
        const cardEffectTextDiv = document.createElement("div");
        cardEffectTextDiv.classList.add("cardEffectText");
        cardDisplayDiv.appendChild(cardTitleDiv);
        cardDisplayDiv.appendChild(cardImageDiv);
        cardDisplayDiv.appendChild(cardEffectDiv);
        cardTitleDiv.appendChild(cardNameDiv);
        cardTitleDiv.appendChild(cardCostDiv);
        cardEffectDiv.appendChild(cardEffectTextDiv);
        const cardNameText = document.createTextNode(card.name);
        cardNameDiv.appendChild(cardNameText);
        const cardCost = document.createTextNode(card.cost);
        cardCostDiv.appendChild(cardCost);
        const effectText = document.createTextNode(card.effectText);
        cardEffectTextDiv.appendChild(effectText);
        cardImageDiv.setAttribute("src", `img/${card.image}`);
        cardImageDiv.setAttribute("draggable", "false");
    }
    for (const child of location.children){

        child.remove();
    }


    location.appendChild(cardDisplayDiv);
}




/**
 * Updates screen based on current gamestate
 */
function renderGameState(){
    //Handles your hand
    let cardSlot = null;
    let Slot;
    for (i=0; i<5; i++){
        Slot = getNthHandSlot(i);
        cardSlot = document.getElementById(`handSlotCard${i}`);
        cardSlotID = `handSlotCard${i}`;
        if (Slot != null){
            renderCard(Slot, cardSlotID);
        }
        else{
            for (const child of cardSlot.children){
                child.remove();
            }
        }
    }


    //Handles Opponent Hand
    let opponentsCardSlot = null;
    let gameStateCardVal = null;
    for (let i=0; i<5; i++){
        gameStateCardVal = getOpponentsNthHandSlot(i);
        opponentsCardSlot = document.getElementById("OpponentHandSlotCard" + String(i));
        let imageSource = null;
        if (gameStateCardVal === null){
            imageSource = "img/blank.jpg";
        }
        else{
            imageSource = "img/cardBack.jpg";
        }
        for (const child of opponentsCardSlot.children){
            child.remove();
        }
        const newCardBack = document.createElement("img");
        newCardBack.setAttribute("src", imageSource);
        newCardBack.setAttribute("draggable", "false");
        opponentsCardSlot.appendChild(newCardBack);
    
    }


    //Handles purchase area
    let currPurchaseCard;
    let currPurchaseCardLocation;
    for(let i=0; i<5; i++){
        currPurchaseCard = getPurchaseAreaNthSlot(i);
        renderCard(currPurchaseCard, `purchaseAreaSlot${i}`);
    }
    //updates time till card purchases area resets
    const timeTillRefresh = document.getElementById("refreshCountdown");
    timeTillRefresh.innerText = "refresh in " + String(gameState.resetIn);


    //Update playerReputationTracker and enerty
    const playerReputationTracker = document.getElementById("playerReputationTracker");
    playerReputationTracker.innerText = "reputation " + String(gameState.playerReputation) + "\n energy " + String(gameState.playerEnergy);
    document.getElementById("opponentReputationTracker").innerText = "reputation " + String(gameState.opponentReputation) + "\n energy " + String(gameState.opponentEnergy);



}


function animateCardPlayed(card, cardSlotNum){
    renderCard(card, `OpponentHandSlotCard${cardSlotNum}`);
    const animatingCard = document.getElementById(`OpponentHandSlotCard${cardSlotNum}`).firstChild;
    animatingCard.classList.add(`movingCard${cardSlotNum}`);
}

/**
 * 
 * @param {the card purchased} card 
 * @param {the number (0 to 4) of the card slot of the purchased card} cardSlotNumber
 * @param {an async function to run when the animation is done} animationConclusionFunction 
 */
async function animateCardBuy(card, cardSlotNumber, animationConclusionFunction){
    renderCard(card, `purchaseAreaSlot${cardSlotNumber}`);
    const animatingCard = document.getElementById(`purchaseAreaSlot${cardSlotNumber}`).firstChild;
    //animatingCard.classList.add("opponentBuyCard")
    const animation = animatingCard.animate(
        {transform: 'translateY(-200px)'},
        {duration: 5000, fill: "forwards"},
    );
    await animation.finished;
    animation.commitStyles();
    animation.cancel();
    await animationConclusionFunction();

}

/**
 * @pram domElement element to move
 * @pram containerID string id of a card container 
 * @pram travelTime milliseconds
 * @pram afterAction async function
 * Moves domElement to container with ID containerID 
 * also, animates this movement for travelTime. 
 * Once done animating, calls afterAction function
 * Dom element will replace whatever is in containerID, destroying it
 * this will not update the gamestate
 */
async function animateMovingCard(cardElem, containerID, travelTime, afterAction){
    //fixMe finish this
    const containerElem = document.getElementById(containerID);
    const startRect = cardElem.getBoundingClientRect();
    const endRect = containerElem.getBoundingClientRect();
    const deltaX = endRect.x - startRect.x;
    const deltaY = endRect.y - startRect.y;
    const animation = cardElem.animate(
        {transform: `translate(${deltaX}px, ${deltaY}px)`},
        {duration: travelTime, fill: "forwards"},
    );

    await animation.finished;
    //animation.commitStyles();
    
    for (const child of containerElem.children){
        child.remove();
    }
    containerElem.appendChild(cardElem);

    animation.cancel();
    await afterAction();
}



