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
 * Draws the card (or null) in the element whose ID is given, but face down. So REALLY,
 * all it does is to draw "blank" if card is null, and draw a card back if card is not
 * null.
 *
 * @param card a card object to display the back of, OR null
 * @param locationID the element the card is to be drawn on
 */
function renderFaceDownCard(card, locationID) {
    const cardSlot = document.getElementById(locationID);
    let imageSource = null;
    if (card === null){
        imageSource = "img/blank.jpg";
    }
    else{
        imageSource = "img/cardBack.jpg";
    }
    for (const child of cardSlot.children){
        child.remove();
    }
    const newCardBack = document.createElement("img");
    newCardBack.setAttribute("src", imageSource);
    newCardBack.setAttribute("draggable", "false");
    newCardBack.classList.add("cardBack");
    cardSlot.appendChild(newCardBack);
}

/**
 * Draws a stack of cards (in face-down format) within the element whose ID is given.
 * NOTE: For now, this just leaves it empty or shows a card back, depending on whether
 * there are 0 items in the stack or > 0 items. BUT in the future it might also show some
 * indicator of how many cards are in the stack.
 *
 * @param listOfCards a list of card objects to be displayed (is allowed to be an empty list)
 * @param locationID the element the cards are to be drawn on
 */
function renderFaceDownStack(listOfCards, locationID) {
    const firstCard = listOfCards.length === 0 ? null : listOfCards[0];
    renderFaceDownCard(firstCard, locationID);
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
        const cardSlotID = `playerHandSlotCard${i}`;
        cardSlot = document.getElementById(cardSlotID);
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
    for (let i=0; i<5; i++){
        const gameStateCardVal = getOpponentsNthHandSlot(i);
        const opponentsCardSlotID = "opponentHandSlotCard" + String(i);
        renderFaceDownCard(gameStateCardVal, opponentsCardSlotID);
    }
    //opponent last card bought and played
    renderCard(gameState.lastCardOpponentPlayed, "opponentPlayedCards");
    renderCard(gameState.lastCardOpponentBought, "opponentBoughtCards");
    renderFaceDownStack(gameState.opponentDeck, "opponentDrawPile");


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


    //Update playerResourceDisplay and enerty
    const playerResourceDisplay = document.getElementById("playerResourceDisplay");
    playerResourceDisplay.innerText = "reputation " + String(gameState.playerReputation) + "\n energy " + String(gameState.playerEnergy);
    document.getElementById("opponentResourceDisplay").innerText = "reputation " + String(gameState.opponentReputation) + "\n energy " + String(gameState.opponentEnergy);

    //updates the list and quanitity of status makers
    
    //remove old statuses
    const playerStatusesDisplay = document.getElementById("playerStatusesDisplay");
    const stasusList = playerStatusesDisplay.children;
    for(let i=stasusList.length-1; i>-1; i = i-1){
        stasusList[i].remove();
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
    //This loop add all the statuses to the display except ones where the status is defult value
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
    renderCard(card, `opponentHandSlotCard${cardSlotNum}`);
    const animatingCard = document.getElementById(`opponentHandSlotCard${cardSlotNum}`).firstChild;
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


/**
 * displays a popup box that goes away when clicked on containing some text. box will be near to some critical element
 * @param {some nearbyElement to the tost to display near} nearbyElement 
 * @param {a string repersenting the text for the tost to display} text 
 */
function displayToast(nearbyElement, text){
    console.log("startDisplayToast");
    const elemBoundingRect = nearbyElement.getBoundingClientRect();
    const displayBouningRect = document.body.getBoundingClientRect();
    const focalPoint = [763, 320];
    const elemCenter = [(elemBoundingRect.right - elemBoundingRect.left)/2 + elemBoundingRect.left, (elemBoundingRect.bottom - elemBoundingRect.top)/2 + elemBoundingRect.top];
    const elemCenterAbslute = [elemCenter[0] - displayBouningRect.left, elemCenter[1] - displayBouningRect.top];
    const leftRightDistance = elemCenterAbslute[0] - focalPoint[0];
    const upDownDistance = elemCenterAbslute[1] - focalPoint[1];
    let displayDirection = null;
    if(Math.abs(leftRightDistance) > Math.abs(upDownDistance)){
        if(leftRightDistance > 0){
            displayDirection = "left";
        }
        else{
            displayDirection = "right";
        }
    }
    else{
        if(upDownDistance > 0){
            displayDirection = "up";
        }
        else{
            displayDirection = "down";
        }
    }
    console.log(displayDirection);
    const toastElem = document.createElement("div");
    toastElem.classList.add("toast");
    toastElem.innerText = text;
    const toastLength = 160;//Temporary
    const toastHeight = 80;//Temp
    toastElem.style.width = String(toastLength) + "px";
    toastElem.style.height = String(toastHeight) + "px";
    toastElem.style.top = String(elemBoundingRect.top - displayBouningRect.top + (displayDirection === "down")*(elemBoundingRect.bottom - elemBoundingRect.top) - (displayDirection === "up")*(toastHeight)) + "px";
    toastElem.style.left = String(elemBoundingRect.left - displayBouningRect.left + (displayDirection === "right")*(elemBoundingRect.right - elemBoundingRect.left) - (displayDirection === "left")*(toastLength)) + "px";
    console.log(toastElem.style.top);
    console.log(toastElem.style.left);
    document.getElementById("toastContainer").appendChild(toastElem);
}

