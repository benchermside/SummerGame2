//Contains funntions that decide how the opponent might move on there turn

/**
 * 
 * @returns the opponents move based on the type of moveDecider in gamestate 
 * A move is an object with a type and possibly more feilds. 
 * type might be refresh indicating pressing the refresh button, 
 * cardPlay, indicating playing the card in the slotNumber feld included in card play move objects, 
 * or something that will be created in the future
 */
function opponentPlayCard(){
    const opponentMovesDesider = Gamestate.opponentMovesDesider
    if (opponentMovesDesider === "random"){
        return randomCardPlayer()
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
            legalActions.append({type: "cardPlay", slotNumber: i})
        }
    }
    const selectedAction = Math.floor(Math.random() * legalActions.length)
    return legalActions[selectedAction]


}