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
        const cardTypeDiv = document.createElement("div");
        cardTypeDiv.classList.add("cardType");
        cardTypeDiv.innerText = card.type;
        cardTypeDiv.style.color = (() => {
            if (card.type === "team"){return "#1330ef";}
            else if (card.type === "hero"){return "#fc0800";}
            else {return "#050505";}
        })()
        cardDisplayDiv.appendChild(cardTitleDiv);
        cardDisplayDiv.appendChild(cardImageDiv);
        cardDisplayDiv.appendChild(cardTypeDiv);
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

    //adds last played card to its display
    if(gameState.playerDiscard.length !== 0){
        renderCard(gameState.playerDiscard[gameState.playerDiscard.length - 1], "playerPlayedCards");
    }
    else{
        renderCard(null, "playerPlayedCards");
    }
    document.getElementById(`playerLastPlayDisplayText`).innerText = `Cards Played ${gameState.playerDiscard.length}`;
    
    //adds last bought card to it's display
    if(gameState.playerBoughtCards.length !== 0){
        renderCard(gameState.playerBoughtCards[gameState.playerBoughtCards.length - 1], "playerBoughtCards");
    }
    else{
        renderCard(null, "playerBoughtCards");
    }
    document.getElementById("playerLastBoughtDisplayText").innerText = `Cards Bought ${gameState.playerBoughtCards.length}`;

    //updates Player deck
    const playerDeckSize = gameState.playerDeck.length;
    if(playerDeckSize>0){
        renderFaceDownCard(gameState.playerDeck[playerDeckSize-1], "playerDrawPile");
    }
    else{
        renderFaceDownCard(null, "playerDrawPile");
    }
    // document.getElementById("playerDrawPileDisplayText").innerText = `Draw Pile ${gameState.playerDeck.length}`;
    

    //Handles Opponent Hand
    for (let i=0; i<5; i++){
        const gameStateCardVal = getOpponentsNthHandSlot(i);
        const opponentsCardSlotID = "opponentHandSlotCard" + String(i);
        renderFaceDownCard(gameStateCardVal, opponentsCardSlotID);
    }
    //opponent last card bought and played
    if(gameState.opponentDiscard.length !== 0){
        renderCard(gameState.opponentDiscard[gameState.opponentDiscard.length - 1], "opponentPlayedCards");
    }
    else{
        renderCard(null, "opponentPlayedCards");
    }
    if(gameState.opponentBaughtCards.length !== 0){
        renderCard(gameState.opponentBaughtCards[gameState.opponentBaughtCards.length - 1], "opponentBoughtCards");
    }
    else{
        renderCard(null, "opponentBoughtCards");
    }
    renderFaceDownStack(gameState.opponentDeck, "opponentDrawPile");
    document.getElementById("opponentLastBoughtDisplayText").innerText = `Cards Bought ${gameState.opponentBaughtCards.length}`;
    document.getElementById("opponentLastPlayDisplayText").innerText = `Cards Played ${gameState.opponentDiscard.length}`;
    console.log("cards played are", gameState.opponentDiscard);

    //gives both drawPileSizes
    document.getElementById(`playerDrawPileDisplayText`).innerText = `Draw Pile ${gameState.playerDeck.length}`;
    document.getElementById(`opponentDrawPileDisplayText`).innerText = `Draw Pile ${gameState.opponentDeck.length}`;
    

    //update Hero teams
    const playerShorthands = ["opponent", "player"];
    for(let i=0; i<2; i++){
        const currPlayerShorthand = playerShorthands[i];
        const HeroTeamElement = document.getElementById(`${currPlayerShorthand}HeroTeam`);
        for(const child of HeroTeamElement.children){
            child.remove();
        }
        for (let i=0; i<gameState[`${currPlayerShorthand}HeroTeam`].length; i++){
            const HeroTeamCard = document.createElement("div");
            HeroTeamCard.id = `${currPlayerShorthand}HeroTeamCard${i}`;
            HeroTeamElement.appendChild(HeroTeamCard);
            renderCard(gameState[`${currPlayerShorthand}HeroTeam`][i], `${currPlayerShorthand}HeroTeamCard${i}`);
        }
    }
    //updates villian area
    document.getElementById("opponentProgressDisplay").innerText = "investigate: " + String(gameState.opponentInvestigate) + "/" + gameState.currVillain.investigate + "\nfight: " + String(gameState.opponentFight) + "/" + gameState.currVillain.fight;
    document.getElementById("villainNameDisplay").innerText = gameState.currVillain.name;
    document.getElementById("villainImageDisplay").setAttribute("src", `img/${gameState.currVillain.image}`);
    document.getElementById("playerProgressDisplay").innerText = "investigate: " + String(gameState.playerInvestigate) + "/" + gameState.currVillain.investigate + "\nfight: " + String(gameState.playerFight) + "/" + gameState.currVillain.fight;


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


    //Update playerResourceDisplay and energy
    const playerResourceDisplay = document.getElementById("playerResourceDisplay");
    playerResourceDisplay.innerText = "reputation " + String(gameState.playerReputation) + "\n energy " + String(gameState.playerEnergy) + "\n honor " + String(gameState.playerHonor);
    document.getElementById("opponentResourceDisplay").innerText = "reputation " + String(gameState.opponentReputation) + "\n energy " + String(gameState.opponentEnergy) + "\n honor " + String(gameState.opponentHonor);

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
            discription: `This is the amount of reputation you get for free at the end of your turn, you currently get ${gameState.playerStatuses.passiveReputation}`,
            default: 0,
        },
        {
            name: "passiveEnergy",
            value: gameState.playerStatuses.passiveEnergy,
            color: "#4f771f",
            discription: `This is the amount of energy you get for free at the end of your turn, you currently get ${gameState.playerStatuses.passiveEnergy}`,
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
            discription: `The amount of energy you will once you finish 2 turns, currently, you will lose ${gameState.playerStatuses.energyLossNextTurn} energy`,
            default: 0,
        },
    ];

    //This loop add all the statuses to the display except ones where the status is default value
    for(let i=0; i<numberedStatusInformation.length; i++){
        if(numberedStatusInformation[i].value !== numberedStatusInformation[i].default){
            const currStatusDisplay = document.createElement("div");
            currStatusDisplay.classList.add("statusShower");
            currStatusDisplay.style.backgroundColor = numberedStatusInformation[i].color;
            currStatusDisplay.innerText = String(numberedStatusInformation[i].value);

            currStatusDisplay.addEventListener("click", () => {
                displayToast(currStatusDisplay, numberedStatusInformation[i].discription)
            });
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
    const toastLenght = 300;//Temporary
    const toastHight = 200;//Temp
    toastElem.style.width = String(toastLenght) + "px";
    toastElem.style.height = String(toastHight) + "px";
    toastElem.style.top = String(elemBoundingRect.top - displayBouningRect.top + (displayDirection === "down")*(elemBoundingRect.bottom - elemBoundingRect.top) - (displayDirection === "up")*(toastHight)) + "px";
    toastElem.style.left = String(elemBoundingRect.left - displayBouningRect.left + (displayDirection === "right")*(elemBoundingRect.right - elemBoundingRect.left) - (displayDirection === "left")*(toastLenght)) + "px";
    const backroundDimmer = document.createElement("div");
    backroundDimmer.classList.add("backroundDim");
    backroundDimmer.style.width = String(displayBouningRect.right - displayBouningRect.left)  + "px";
    backroundDimmer.style.height = String(displayBouningRect.bottom - displayBouningRect.top + 30) + "px";
    backroundDimmer.style.top = "0px";
    backroundDimmer.style.left = "0px";
    const deleateFunct = () => {
        console.log("called");
        const toastParts = document.getElementById("toastContainer").children;
        for(i=toastParts.length-1; i>-1; i=i-1){
            toastParts[i].remove();
        }
    }
    backroundDimmer.addEventListener("click", deleateFunct);
    toastElem.addEventListener("click", deleateFunct);
    document.getElementById("toastContainer").appendChild(backroundDimmer);
    document.getElementById("toastContainer").appendChild(toastElem);
}

