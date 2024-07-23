//Contains funntions that decide how the opponent might move on there turn

/**
 * 
 * @returns the opponents move based on the type of moveDecider in gamestate 
 * A move is an object with a type and possibly more feilds. 
 * type might be refresh indicating pressing the refresh button, 
 * cardPlay, indicating playing the card in the slotNumber feld included in card play move objects, 
 * or something that will be created in the future
 * returns null if opponent has not moved yet
 */
function opponentPlayCard(){
    const opponentMovesDecider = gameState.opponentMovesDecider;
    if (opponentMovesDecider === "random"){
        return randomCardPlayer();
    }
    else if(opponentMovesDecider === "randomIfPossible"){
        return randomCardPlayer();
    }
    else{
        console.log("opponent move decider not on list for play", );
    }
}

/**
 * 
 * @returns for more information look at documentation for opponentPlayCard
 */
function randomCardPlayer(){
    const legalActions = [{type: "refresh"}];
    for(let i=0; i<5; i++){
        if(getOpponentsNthHandSlot(i) != null){
            legalActions.push({type: "cardPlay", slotNumber: i});
        }
    }
    const selectedAction = Math.floor(Math.random() * legalActions.length);
    return legalActions[selectedAction];


}


/**
 * @returns the card the opponent will buy
 */
function opponentBuyCard(){
    const opponentMovesDecider = gameState.opponentMovesDecider;
    if (opponentMovesDecider === "random"){
        return randomCardBuyer();
    }
    else if (opponentMovesDecider === "randomIfPossible"){
        return randomCardBuyerIfPossible();
    }
    else{
        console.log("opponent move decider not on list for buy");
    }
}

function randomCardBuyer(){
    const legalActions = [{type: "skip"}]
    for (let i=0; i< Object.keys(gameState.purchaseArea).length; i++){
        if(getPurchaseAreaNthSlot(i) != null && getPurchaseAreaNthSlot(i).cost <= gameState.opponentReputation){
            legalActions.push({type: "purchase", slotNumber: i});
        }
    }
    return legalActions[Math.floor(Math.random() * legalActions.length)];
}

/**
 * 
 * buys a random card if any cards can be bought
 */
function randomCardBuyerIfPossible(){
    console.log("entered");
    const legalActions = [];

    for (let i=0; i< Object.keys(gameState.purchaseArea).length; i++){
        if(getPurchaseAreaNthSlot(i) != null && getPurchaseAreaNthSlot(i).cost <= gameState.opponentReputation){
            legalActions.push({type: "purchase", slotNumber: i});
        }
    }
    if (legalActions.length === 0){
        return {type: "skip"};
    }
    else{
        return legalActions[Math.floor(Math.random() * legalActions.length)];
    }
    
}

