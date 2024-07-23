
const gameState = {
    //store the gameState
    //contains, Playerhand ... PlayerHand is an object with slot1 through slot5. 
    //these are null when no card present in slot, otherwise they are a card object representing the card
    //opponentHand is object with slot1-5 null when no card in slot, otherwise is the cardBack const
    //playerDeck is a list of all cards in the player deck in order. the Last element is the top of the deck
    //opponentDeck is a list of all cards in the opponentDeck in order. the Last element is the top of the deck
    //playerDiscard is a list of all cards in the Player's discard pile
    //Opponent Discard is a list of all cards in the opponents discard pile
    //playerTurn is Player when it's the players turn to play and opponent when it's the opponents turn to play
    //current phase is the current phase your in, It can be playing or purchasing
    //cardsPlayed indicates the number of cards played by the player going first, 0 through 5. 
    //goingFirts indicaes who is going first this round. Either Player or opponent
    //resetIn indicates the number of turns till the row of cards for purchase is refreshed
    //resetFrequency indicates the frequency of purchase area card resets

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
    purchaseArea: {
        slot0: null,
        slot1: null,
        slot2: null,
        slot3: null,
        slot4: null,
    },
    playerDeck: [],
    opponentDeck: [],
    playerDiscard: [],
    opponentDiscard: [],
    wildCards: wildCards,
    playerReputation: 0,
    opponentReputation: 0,
    playerEnergy: 0,
    opponentEnergy: 0,
    playerTurn : "player",
    currentPhase: "playing",
    CardsPlayed: 0,
    goingFirst: "player",
    opponentMovesDecider: null,
    resetFrequency: 7,
    resetIn: 7,

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
        console.log("getNthHandSlot input invalid was ", n)
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
        gameState.playerhand.slot2 = newValue
    }
    else if (n===2){
        gameState.playerhand.slot3 = newValue
    }
    else if (n===3){
        gameState.playerhand.slot4 = newValue
    }
    else if (n===4){
        gameState.playerhand.slot5 = newValue
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
 * retunrs the Nth hand Slot data from gamestate in the purchase area
 * @param {the index of the handSlot you want, 0 to 4} n 
 */
function getPurchaseAreaNthSlot(n){
    if (n===0){
        return gameState.purchaseArea.slot0
    }
    else if (n===1){
        return gameState.purchaseArea.slot1
    }
    else if (n===2){
        return gameState.purchaseArea.slot2
    }
    else if (n===3){
        return gameState.purchaseArea.slot3
    }
    else if (n===4){
        return gameState.purchaseArea.slot4
    }
    else{
        console.log("getPurchaseAreaNthSlot input invalid")
    }

    
}


/**
 * this function puts newVlaue in the n-1th cardSlot of the purchase area, Note, this function is nothing but a side effect.
 * @param {the value of the cardSlot you wish to update, from 0 to 4} n 
 * @param {the new value to add to the cardSlot} newValue 
 */
function updatePurchaseAreaNthSlot(n, newValue){
    if (n===0){
        gameState.purchaseArea.slot0 = newValue
    }
    else if (n===1){
        gameState.purchaseArea.slot1 = newValue
    }
    else if (n===2){
        gameState.purchaseArea.slot2 = newValue
    }
    else if (n===3){
        gameState.purchaseArea.slot3 = newValue
    }
    else if (n===4){
        gameState.purchaseArea.slot4 = newValue
    }
    else{
        console.log("updatePurchaseAreaNthSlot n invalid")
    }

}

