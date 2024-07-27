//in this section are the mode transitions
//find and replace semicolon regx [^\n|{|;]\n
/**
 * Enters the game
 */

function enterGame(){
    const header = document.getElementById("top");
    header.style.display = 'none';
    const soloButton = document.getElementById("soloButton");
    soloButton.style.display = "none";
    const multButton = document.getElementById("multButton");
    multButton.style.display = "none";
    const sampleCard= document.getElementById("sampleCard");
    sampleCard.style.display = "none";


    const cardPlayArea = document.createElement("div");
    cardPlayArea.id = "cardPlayArea";
    cardPlayArea.classList.add("cardPlayArea");
    cardPlayArea.addEventListener("dragover", function(e){
        e.preventDefault();
        cardPlayArea.style.borderStyle = "solid";
    });
    cardPlayArea.addEventListener("dragleave", function(e){
        cardPlayArea.style.borderStyle = "dashed";
    });




    //this creates the players deck
    for (let i=0; i<5; i++){
        gameState.playerDeck.push(structuredClone(recruiter));
    }
    for (let i=0; i<2; i++){
        gameState.playerDeck.push(structuredClone(dragon));
    }
    shufflePlayerDeck();

    //get the handWraper
    const handWraper = document.getElementById("handWraper");

    //This creates the playerStatusesDisplay
    const playerStatusesDisplay = document.createElement("div");
    playerStatusesDisplay.classList.add("playerStatusesDisplay");
    playerStatusesDisplay.id = "playerStatusesDisplay";
    handWraper.appendChild(playerStatusesDisplay);


    //this creates the players hand
    cardSlotList = [];
    let currCardSlot = null;
    for (let i=0; i<5; i++){
        const cardIndex = i;
        cardSlotList.push(document.createElement("div"));
        currCardSlot = cardSlotList[i];
        currCardSlot.classList.add("handSlot");
        currCardSlot.id = "playerHandSlotCard" + String(i);
        handWraper.appendChild(currCardSlot);
    }
    


    //Give the players hand it's starting cards

    for (let slotNum = 0; slotNum<5;slotNum++){
        let nextCard = gameState.playerDeck.pop();
        updateNthHandSlot(slotNum, nextCard);
    }




    document.body.insertBefore(cardPlayArea, handWraper);


    //This creates the opponents hand
    opponentCardList = [];

    // FIXME: Moved elsewhere Later?
    //This creates the player reputation tracker
    const playerResourceDisplay = document.createElement("div");
    playerResourceDisplay.classList.add("reputationTracker");
    playerResourceDisplay.innerText = "reputation " + String(gameState.playerReputation);
    playerResourceDisplay.id = "playerResourceDisplay";
    handWraper.appendChild(playerResourceDisplay);

    //and this will make the opponents startDeck and draw the startHand


    //This makes the opponent's deck with it's starting cards
    for (let i=0; i<5; i++){
        gameState.opponentDeck.push(structuredClone(recruiter));
    }
    for (let i=0; i<2; i++){
        gameState.opponentDeck.push(structuredClone(dragon));
    }
    shuffleOpponentDeck();

    //This will draw the opponents hand from there deck
    RefreshOpponentsHand();

    
    //Handles purchase area
    const purchaseArea = document.createElement("div");
    const purchaseAreaSlotList = [];
    purchaseArea.classList.add("purchaseArea");
    purchaseArea.id = "purchaseArea";
    for (let i=0; i<5; i++){
        purchaseAreaSlotList.push(document.createElement("div"));
        purchaseAreaSlotList[i].classList.add("cardSlot");
        purchaseAreaSlotList[i].id = `purchaseAreaSlot${i}`;
        purchaseArea.appendChild(purchaseAreaSlotList[i]);
    }
    cardPlayArea.appendChild(purchaseArea);

   //creates the deck of cards for the purchase area
    let wildCardIndex = gameState.wildCards.length;
    while(wildCardIndex != 0){
       let RandomwildCardIndex = Math.floor(Math.random()*wildCardIndex);
       wildCardIndex = wildCardIndex - 1;
       [gameState.wildCards[wildCardIndex], gameState.wildCards[RandomwildCardIndex]] = [gameState.wildCards[RandomwildCardIndex], gameState.wildCards[wildCardIndex]];
    }
    for (let i=0; i<5; i++){
        updatePurchaseAreaNthSlot(i, gameState.wildCards.pop());
    }


    //This creates the skipPhase button and refresh hand button
    const buttons = document.createElement("div");
    buttons.id = "buttonHolder";
    buttons.classList.add("buttonHolder");
    const skipPhaseButton = document.createElement("button");
    skipPhaseButton.classList.add("SkipPhase");
    skipPhaseButton.innerText = "Skip Phase";
    skipPhaseButton.id = "skipPhaseButton";
    const refreshButton = document.createElement("button");
    refreshButton.classList.add("refreshButton");
    refreshButton.innerText = "Refresh Hand";
    refreshButton.id = "refreshButton";
    buttons.appendChild(skipPhaseButton);
    buttons.appendChild(refreshButton);
    const cardPlayPlace = document.getElementById("cardPlayArea");
    cardPlayPlace.appendChild(buttons);

    //sets the time till purchase area is refreshed
    gameState.resetIn = gameState.resetFrequency;
    const timeTillRefresh = document.createElement("div");
    timeTillRefresh.id = "refreshCountdown";
    document.getElementById("buttonHolder").appendChild(timeTillRefresh);

    // Create the player and opponent play area:
    const allPlayAreasElement = document.getElementById("allPlayAreas");
    allPlayAreasElement.appendChild(makePlayerArea("opponent"));


    //This selects how the opponent will decides on their moves
    gameState.opponentMovesDecider = "randomIfPossible"; //in the future, this may depend on the gameMode your playing and the AI level


    //Call update gameState
    renderGameState();
    turnOnCardPlay();


    //calls enter mode
    //creates the ondrop for playing a card
    enterMode(playingCard);

    //for testing
    displayToast(document.getElementById("playerHandSlotCard0"), "this is a toast that is displayed");
    displayToast(document.getElementById("playerHandSlotCard4"), "this is also toast, pretty cool");

}

/**
 * Render all the pieces of a play area (the hand, draw pile, etc.).
 *
 * @param whosePlayArea either "opponent" or "player".
 * @returns {HTMLDivElement} the element to be shown (it still needs to be added into the page)
 */
function makePlayerArea(whosePlayArea) {
    const playAreaWrapper = document.createElement("div");
    playAreaWrapper.classList.add("playArea");
    playAreaWrapper.appendChild(makeLastPlayedCardDisplay(whosePlayArea));
    playAreaWrapper.appendChild(makeLastBoughtCardDisplay(whosePlayArea));
    playAreaWrapper.appendChild(makeDrawPileDisplay(whosePlayArea));
    playAreaWrapper.appendChild(makeHandDisplay(whosePlayArea));
    playAreaWrapper.appendChild(makeStatusesDisplay(whosePlayArea));
    playAreaWrapper.appendChild(makeResourceDisplay(whosePlayArea));
    return playAreaWrapper;
}

/**
 * Render the elements that show the stack of cards that have been played.
 *
 * @param whosePlayArea either "opponent" or "player".
 * @returns {HTMLDivElement} the element to be shown (it still needs to be added into the page)
 */
function makeLastPlayedCardDisplay(whosePlayArea) {
    const lastPlayedDisplay = document.createElement("div");
    lastPlayedDisplay.classList.add("lastPlayedDisplayWrapper");
    const lastPlayDisplayText = document.createElement("div");
    lastPlayDisplayText.classList.add("textExplainer");
    lastPlayDisplayText.innerText = "Cards Played";
    const lastPlayCard = document.createElement("div");
    lastPlayCard.classList.add("cardSlot");
    lastPlayCard.id = `${whosePlayArea}PlayedCards`;
    lastPlayedDisplay.appendChild(lastPlayDisplayText);
    lastPlayedDisplay.appendChild(lastPlayCard);
    return lastPlayedDisplay;
}

/**
 * Render the elements that show the stack of cards that have been bought.
 *
 * @param whosePlayArea either "opponent" or "player".
 * @returns {HTMLDivElement} the element to be shown (it still needs to be added into the page)
 */
function makeLastBoughtCardDisplay(whosePlayArea) {
    const lastBoughtDisplay = document.createElement("div");
    lastBoughtDisplay.classList.add("lastBoughtDisplayWrapper");
    const lastBoughtDisplayText = document.createElement("div");
    lastBoughtDisplayText.classList.add("textExplainer");
    lastBoughtDisplayText.innerText = "Cards Bought";
    const lastBoughtCard = document.createElement("div");
    lastBoughtCard.classList.add("cardSlot");
    lastBoughtCard.id = `${whosePlayArea}BoughtCards`;
    lastBoughtDisplay.appendChild(lastBoughtDisplayText);
    lastBoughtDisplay.appendChild(lastBoughtCard);
    return lastBoughtDisplay;
}

/**
 * Render the elements that show the draw pile.
 *
 * @param whosePlayArea either "opponent" or "player".
 * @returns {HTMLDivElement} the element to be shown (it still needs to be added into the page)
 */
function makeDrawPileDisplay(whosePlayArea) {
    const drawPileDisplay = document.createElement("div");
    drawPileDisplay.classList.add("drawPileDisplayWrapper");
    const drawPileDisplayText = document.createElement("div");
    drawPileDisplayText.classList.add("textExplainer");
    drawPileDisplayText.innerText = "Draw Pile";
    const drawPileCard = document.createElement("div");
    drawPileCard.classList.add("cardSlot");
    drawPileCard.id = `${whosePlayArea}DrawPile`;
    drawPileDisplay.appendChild(drawPileDisplayText);
    drawPileDisplay.appendChild(drawPileCard);
    return drawPileDisplay;
}

/**
 * Render the elements that show the resource display.
 *
 * @param whosePlayArea either "opponent" or "player".
 * @returns {HTMLDivElement} the element to be shown (it still needs to be added into the page)
 */
function makeResourceDisplay(whosePlayArea) {
    const resourceDisplay = document.createElement("div");
    resourceDisplay.classList.add("reputationTracker");
    resourceDisplay.innerText = "reputation " + String(gameState.playerReputation);
    resourceDisplay.id = `${whosePlayArea}ResourceDisplay`;
    return resourceDisplay;
}


/**
 * Render the elements that show the hand in play.
 *
 * @param whosePlayArea either "opponent" or "player".
 * @returns {HTMLDivElement} the element to be shown (it still needs to be added into the page)
 */
function makeHandDisplay(whosePlayArea) {
    const handDisplay = document.createElement("div");
    handDisplay.classList.add("handDisplayWrapper");
    const handDisplayText = document.createElement("div");
    handDisplayText.classList.add("textExplainer");
    handDisplayText.innerText = "Hand";
    handDisplay.appendChild(handDisplayText);
    const hand = document.createElement("div");
    hand.classList.add("hand");
    for (let i=0; i<5; i++){
        opponentCardList.push(document.createElement("div"));
        const currCardSlot = opponentCardList[i];
        currCardSlot.classList.add("handSlot");
        currCardSlot.id = `${whosePlayArea}HandSlotCard` + String(i);
        hand.appendChild(currCardSlot);
    }
    handDisplay.appendChild(hand);
    return handDisplay;
}

/**
 * Render the elements that show the statuses display.
 *
 * @param whosePlayArea either "opponent" or "player".
 * @returns {HTMLDivElement} the element to be shown (it still needs to be added into the page)
 */
function makeStatusesDisplay(whosePlayArea) {
    const statusesDisplay = document.createElement("div");
    statusesDisplay.classList.add("statusesDisplay");
    statusesDisplay.id = `${whosePlayArea}StatusesDisplay`;
    return statusesDisplay;
}


/**
 * sets the starting player and enters the corrosponding mode
 * for now, alwese sets to player, in future, will set or player or opponent random
 */
function setStartingPlayer(){
    return "player";
}


/**
 * Plays a card
 */
function playCard(card, player){
    cardEffects.get(card.effectID)(player);
}

/**
 * activates whenever a card is bought, puts the card into the players discard pile, subtracts the reputation
 */
function buyCard(card, player){

}

async function tryBuyCard(cardNumber){
    const boughtCard = getPurchaseAreaNthSlot(cardNumber);
    if(boughtCard != null && gameState.playerReputation >= boughtCard.cost){
        gameState.playerReputation = gameState.playerReputation - boughtCard.cost;
        gameState.playerDiscard.push(boughtCard);
        updatePurchaseAreaNthSlot(cardNumber, null);
        endTurn("player");
        renderGameState();

        //temp for testing
        await startedOpponentsTurn();
        //turnOnCardPlay()
        //enterMode(playingCard)

    }
}

/**
 * calls tryBuyCard(0)
 */
async function tryBuyCard0(){
    await tryBuyCard(0);
}

/**
 * calls tryBuyCard(1)
 */
async function tryBuyCard1(){
    await tryBuyCard(1);
}

/**
 * calls tryBuyCard(2)
 */
async function tryBuyCard2(){
    await tryBuyCard(2);
}

/**
 * calls tryBuyCard(3)
 */
async function tryBuyCard3(){
    await tryBuyCard(3);
}

/**
 * calls tryBuyCard(4)
 */
async function tryBuyCard4(){
    await tryBuyCard(4);
}


/**
 * this function activeates the mode switch that happens when a card is played by player
 * and calls the play card function
 */
function playerPlaysCard(){
   
    playCard(draggingCard.card, "player");
    DrawCard(draggingCard.cardNumber);
    turnOffCardPlay();
    renderGameState();
    enterMode(buyingCard);
}

/**
 * this function turns off the draggability of cards in player's hand
 */
function turnOffCardPlay(){
    for (let i=0; i<5; i++){
        const currHandSlot = document.getElementById(`playerHandSlotCard${i}`).firstChild;
        currHandSlot.setAttribute("draggable", "false");
    }
}

/**
 * this function turns on the draggability of cards in player's hand
 */
function turnOnCardPlay(){
    for (let i=0; i<5; i++){
        const currHandSlot = document.getElementById(`playerHandSlotCard${i}`).firstChild;
        currHandSlot.setAttribute("draggable", "true");
        currHandSlot.addEventListener("dragstart", (event) => {
            try{
                document.getElementById("cardPlayArea").style.borderStyle = "dashed";
            }
            catch(TypeError){}
            draggingCard.card = getNthHandSlot(i);
            draggingCard.cardNumber = i;
        });
        currHandSlot.addEventListener("dragend", (event) => {
            //console.log("draggend called")

            try{
                document.getElementById("cardPlayArea").style.borderStyle = "none";
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
    console.log("endPhaseButtonPlaying called");
    enterMode(buyingCard);
    turnOffCardPlay();
}


/**
 * occures when end phase button pressed while the player is buying a card
 * the current code is a placeholder for when the opponent exists
 */
function endPhaseButtonBuying(){
    endTurn("player");
    renderGameState();
    startedOpponentsTurn();
    //turnOnCardPlay()
}

/**
 * occures when player clicks refresh hand button durring the playing phase
 */
function RefreshHand(){
    console.log("refresh button pressed");
    for (slotNumber=0; slotNumber<5; slotNumber++){
        dicardCard(slotNumber);
    }
    for (slotNumber=0; slotNumber<5; slotNumber++){
        DrawCard(slotNumber);
    }
    renderGameState();
    enterMode(buyingCard);
}

/**
 * Draws a new hand for the opponent. discards current hand if it exists. all cards discarded before new cards drawn
 */
function RefreshOpponentsHand(){
    for (slotNumber=0; slotNumber<5; slotNumber++){
        if(getOpponentsNthHandSlot(slotNumber) != null){
            gameState.opponentDiscard.push(getOpponentsNthHandSlot(slotNumber));
            updateOpponentsNthHandSlot(slotNumber, null);
        }
    }
    for (slotNumber=0; slotNumber<5; slotNumber++){
        opponentDrawCard(slotNumber);
    }
}



/**
 * discards the card from the cardSlot if one exists in the cardSlot
 * Does not call RenderGameState
 */

function dicardCard(slotNum){
    if(getNthHandSlot(slotNum) != null){
        gameState.playerDiscard.push(getNthHandSlot(slotNum));
        updateNthHandSlot(slotNum, null);
    }
}

/**
 * Draws a new card for slot, 
 * If a card alredy exists in slot, card will be discarded before drawing a new card
 * This does not call renderGamestate
 */
function DrawCard(slotNumber){
    //Update the gameState
    if(getNthHandSlot(slotNumber) != null){
        dicardCard(slotNumber);
    }
    if(gameState.playerDeck.length === 0){
        gameState.playerDeck = gameState.playerDiscard;
        gameState.playerDiscard = [];
        shufflePlayerDeck();
    }
    updateNthHandSlot(slotNumber, gameState.playerDeck.pop());
}


/**
 * Draws a new card for the opponent
 */
function opponentDrawCard(slotNumber){
    if(getOpponentsNthHandSlot(slotNumber) != null){
        gameState.opponentDiscard.push(getOpponentsNthHandSlot(slotNumber));
        updateOpponentsNthHandSlot(slotNumber, null);
    }
    if(gameState.opponentDeck.length === 0){
        console.log("refreshing opponent discard");
        console.log("current opponent deck is ", gameState.opponentDeck.length);
        console.log("current opponent discard is", gameState.opponentDiscard.length);
        gameState.opponentDeck = gameState.opponentDiscard;
        console.log("opponent deck is 1", gameState.opponentDeck.length);
        gameState.opponentDiscard = [];
        console.log("opponent deck is 2, ", gameState.opponentDeck.length);
        shuffleOpponentDeck();
    }
    if(gameState.opponentDeck.length !== 0){
        updateOpponentsNthHandSlot(slotNumber, gameState.opponentDeck.pop());
    }
    else{
        console.log("opponent had no cards in deck or discard pile");//possibly temporary, this should be a fine but rare case
    }

}

/**
 * triggers when transitioning the the opponenets turn, has them buy play a card, buy a card, 
 * than transitions back to the players turn when done
 */
async function startedOpponentsTurn() {
    //do the opponent playing mode
    enterMode(OpponentPlayingCard);
    let opponentMove = null;
    while (opponentMove === null){
        opponentMove = opponentPlayCard();
    }
    if (opponentMove.type === "refresh"){
        RefreshOpponentsHand();
        await opponentsBuyPhase();
    }
    else if(opponentMove.type === "cardPlay"){
        const cardPlayed = getOpponentsNthHandSlot(opponentMove.slotNumber);
        playCard(cardPlayed, "opponent");
        gameState.opponentDiscard.push(cardPlayed);
        gameState.lastCardOpponentPlayed = cardPlayed;
        opponentDrawCard(opponentMove.slotNumber);
        renderCard(cardPlayed, `opponentHandSlotCard${opponentMove.slotNumber}`);
        const playedCardElem = document.getElementById(`opponentHandSlotCard${opponentMove.slotNumber}`).firstChild;
        //create the animation of the bought card
        animateMovingCard(playedCardElem, "opponentPlayedCards", 5000, opponentsBuyPhase);
    }
    else{
        console.log("opponent failed to do something");
        await opponentsBuyPhase();
    }
}

async function opponentsBuyPhase(){
    enterMode(OpponentBuyingCard);
    let opponentBuy = null;
    let renderImeditly = false;
    while(opponentBuy === null){
        opponentBuy = opponentBuyCard();
    }
    if (opponentBuy.type === "skip"){
        renderImeditly = true;
    }
    else if(opponentBuy.type === "purchase"){
        const boughtCard = getPurchaseAreaNthSlot(opponentBuy.slotNumber);
        if(boughtCard != null && gameState.opponentReputation >= boughtCard.cost){
            gameState.opponentReputation = gameState.opponentReputation - boughtCard.cost;
            gameState.opponentDiscard.push(boughtCard);
            gameState.lastCardOpponentBought = boughtCard;
            updatePurchaseAreaNthSlot(opponentBuy.slotNumber, null);
            const boughtCardDomElem = document.getElementById(`purchaseAreaSlot${opponentBuy.slotNumber}`).firstChild;
            await animateMovingCard(boughtCardDomElem, "opponentBoughtCards", 5000, async () => {
                endTurn("opponent");
                renderGameState();
                enterMode(playingCard);
                turnOnCardPlay();
            })
            // await animateCardBuy(boughtCard, opponentBuy.slotNumber, async () => {
            //     endTurn("opponent")
            //     renderGameState()
            //     enterMode(playingCard)
            //     turnOnCardPlay()
            // })
        }
        else{
            console.log("error, opponent tryed to buy card that cannot be bought or does not exist");
            renderImeditly = true;
        }
    }
    else{
        console.log("opponent failed to buy something error");
        renderImeditly = true;
    }
    if (renderImeditly){
        endTurn("opponent");
        renderGameState();
        enterMode(playingCard);
        turnOnCardPlay();
    }
    console.log(gameState);

}



/**
 * This function is intended to be called when you end your turn
 * It does things that happen whenever a turn ends
 * should be called before renderGame
 */
function endTurn(endingPlayer){
    //applies some statuses
    const losingEnergy = gameState[`${endingPlayer}Statuses`].energyLossThisTurn;
    if (losingEnergy <= gameState[`${endingPlayer}Energy`]){
        gameState[`${endingPlayer}Energy`] = gameState[`${endingPlayer}Energy`] - losingEnergy;
    }
    else{
        gameState[`${endingPlayer}Energy`] = 0;
    }
    gameState[`${endingPlayer}Statuses`].energyLossThisTurn = gameState[`${endingPlayer}Statuses`].energyLossNextTurn;
    gameState[`${endingPlayer}Statuses`].energyLossNextTurn = 0;    
    gameState[`${endingPlayer}Energy`] = gameState[`${endingPlayer}Energy`] + gameState[`${endingPlayer}Statuses`].passiveEnergy;
    gameState[`${endingPlayer}Reputation`] = gameState[`${endingPlayer}Reputation`] + gameState[`${endingPlayer}Statuses`].passiveReputation;


    gameState.resetIn = gameState.resetIn - 1;
    if (gameState.resetIn === 0){
        for(let i=0; i<5; i++){
            //at some future point, I may create a purchases graveyard,
            if (wildCards.length > 0){
                updatePurchaseAreaNthSlot(i, wildCards.pop());
            }
            else{
                updatePurchaseAreaNthSlot(i, null);
            }
        }
        gameState.resetIn = gameState.resetFrequency;
    }
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
        const prevMode = currentMode;
        const prevModeTransitionList = Object.values(prevMode.transitions);
        for (let i=0; i<prevModeTransitionList.length; i++){
            const currTransition = prevModeTransitionList[i];
            const removedElement = document.getElementById(currTransition.elementID);
            removedElement.removeEventListener(currTransition.eventType, currTransition.funct);
        }
    }
    let oldMode = currentMode
    currentMode = mode
    if (true){
        const transitionList = Object.values(mode.transitions);
        for (let i=0; i< transitionList.length; i++){
            const currTransition = transitionList[i];
            const EffectedElement = document.getElementById(currTransition.elementID);
            EffectedElement.addEventListener(currTransition.eventType, currTransition.funct);
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
        refreshHandButton: {
            funct: RefreshHand,
            elementID: "refreshButton",
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
            elementID: "purchaseAreaSlot0",
            eventType: "click",

        },
        buyCard1: {
            funct: tryBuyCard1,
            elementID: "purchaseAreaSlot1",
            eventType: "click",

        },
        buyCard2: {
            funct: tryBuyCard2,
            elementID: "purchaseAreaSlot2",
            eventType: "click",

        },
        buyCard3: {
            funct: tryBuyCard3,
            elementID: "purchaseAreaSlot3",
            eventType: "click",

        },
        buyCard4: {
            funct: tryBuyCard4,
            elementID: "purchaseAreaSlot4",
            eventType: "click",

        },
    },
}

const OpponentPlayingCard = {
    transitions: {},

}

const OpponentBuyingCard = {
    transitions: {},
}






