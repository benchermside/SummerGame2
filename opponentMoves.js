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
    const opponentMovesDesider = gameState.opponentMovesDesider
    if (opponentMovesDesider === "random"){
        return randomCardPlayer()
    }
    else{
        console.log("opponent move decider not on list for play")
    }
}

/**
 * 
 * @returns for more information look at documantation for opponentPlayCard
 */
function randomCardPlayer(){
    const legalActions = [{type: "refresh"}]
    for(let i=0; i<5; i++){
        if(getOpponentsNthHandSlot(i) != null){
            legalActions.push({type: "cardPlay", slotNumber: i})
        }
    }
    const selectedAction = Math.floor(Math.random() * legalActions.length)
    return legalActions[selectedAction]


}


/**
 * @returns the card the opponent will buy
 */
function opponentBuyCard(){
    const opponentMovesDesider = gameState.opponentMovesDesider
    if (opponentMovesDesider === "random"){
        return randomCardBuyer()
    }
    else{
        console.log("opponent move decider not on list for buy")
    }
}

function randomCardBuyer(){
    const legalActions = [{type: "skip"}]
    for (let i=0; i< Object.keys(gameState.purchesArea).length; i++){
        if(getPurchesAreaNthSlot(i) != null && getPurchesAreaNthSlot(i).cost <= gameState.opponentReputation){
            legalActions.push({type: "purchase", slotNumber: i})
        }
    }
    return legalActions[Math.floor(Math.random() * legalActions.length)]
}