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
    //opponent last card bought and played
    renderCard(gameState.lastCardOpponentPlayed, "lastPlayedCard")
    renderCard(gameState.lastCardOpponentBought, "lastBoughtCard")


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

    //updates the list and quanitity of status makers
    const playerStatusesDisplay = document.getElementById("playerStatusesDisplay");
    for(const prevStatus of playerStatusesDisplay.children){
        prevStatus.remove();
    }


    //this list contain the information needed by one impliment of a for loop to put an arbitraty 
    //status with just an integer value and display it on the screen
    //Information used in render game to loop through the statuses and apply each visualy
    // name is the name of the status
    // value refers to the actual value of the status currently
    // color is the color of the status display, ment to be unique to each status
    // discription is the discription of the status that displays when clicked
    //defult is the defult value this status is at, most often 0. if the status is at defult, it will not display as it is "not doing anything" 
    //example of defult, the defult passive reputation is 0 sence having passive reputation of 0 does nothing.

const numberedStatusInformation = [
        {
            name: "passiveReputation",
            value: gameState.playerStatuses.passiveReputation,
            color: "#ce0e08",
            discription: `This is the amout of reputation you get for free at the end of your turn, you currently get ${gameState.playerStatuses.passiveReputation}`,
            default: 0,
        },
        {
            name: "passiveEnergy",
            value: gameState.playerStatuses.passiveEnergy,
            color: "#4f771f",
            discription: `This is the amout of energy you get for free at the end of your turn, you currently get ${gameState.playerStatuses.passiveEnergy}`,
            default: 0,
        },
        {
            name: "energyLossThisTurn",
            value: gameState.playerStatuses.energyLossThisTurn,
            color: "#749b09",
            discription: `This is the amount of energy you will lose after you take your turn, currently ${gameState.playerStatuses.energyLossThisTurn}`,
            default: 0,
        },
        {
            name: "energyLossNextTurn",
            value: gameState.playerStatuses.energyLossNextTurn,
            color: "#39490d",
            discription: `The amount of energy you will once you finish 2 turns,  currently, you will lose ${gameState.playerStatuses.energyLossNextTurn} energy`,
            default: 0,
        },
    ];
    for(let i=0; i<numberedStatusInformation.length; i++){
        if(numberedStatusInformation[i].value !== numberedStatusInformation[i].default){
            const currStatusDisplay = document.createElement("div");
            currStatusDisplay.classList.add("statusShower");
            currStatusDisplay.style.backgroundColor = numberedStatusInformation[i].color;
            currStatusDisplay.innerText = String(numberedStatusInformation[i].value);
            const displayFunction = () => {
                const statusInformation = document.createElement("span");
                statusInformation.classList.add("statusInformation");
                statusInformation.innerText = numberedStatusInformation[i].discription;
                const boundingRect = currStatusDisplay.getBoundingClientRect();
                const VewRec = document.body.getBoundingClientRect();
                statusInformation.style.left = String(boundingRect.right - VewRec.left) + "px";
                statusInformation.style.top = String(boundingRect.y - VewRec.top) + "px";
                currStatusDisplay.appendChild(statusInformation);
            };
            const clickFunction = () => {
                const unclickFunction = () => {
                    currStatusDisplay.lastChild.remove();
                    currStatusDisplay.removeEventListener("click", unclickFunction)
                    currStatusDisplay.addEventListener("click", clickFunction)
                };
                displayFunction();
                currStatusDisplay.removeEventListener("click", clickFunction);
                currStatusDisplay.addEventListener("click", unclickFunction);
            }
            currStatusDisplay.addEventListener("click", clickFunction)
            //currStatusDisplay.addEventListener("mouseover", displayFunction)
            playerStatusesDisplay.appendChild(currStatusDisplay)
        }
    }



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



