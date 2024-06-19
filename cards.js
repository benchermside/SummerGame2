const card1 = {
    name:"dragon",
    image:"dragon.jpg",
    effectText: "Dragions breath fire",
    cost: 12,
    effectID: "card1"
}

const recurtor = {
    name: "recrutor",
    image: "superRecrutor.jpg",
    effectText: "Gain 1 reputation",
    cost: 1,
    effectID: "recurtor"

}



const ninga = {
    name:"ninga",
    image:"dragon.jpg",
    effectText: "3 energy, loose 3 energy at the end of next turn",//not implimented yet
    cost: 2,
    effectID: "ninga"
}
const thief = {
    name:"thief",
    image:"dragon.jpg",
    effectText: "steal 2 energy from your opponent",
    cost: 3,
    effectID: "thief",
}



const doomsayer = {
    name:"doomsayer",
    image:"dragon.jpg",
    effectText: "set both players reputation to 0",
    cost: 5,
    effectID: "doomsayer"
}


const publicityOfficer = {
    name:"publicityOfficer",
    image:"dragon.jpg",
    effectText: "gain 1 reputatiin for every 3 cards you have somewhere (rounded down)",
    cost: 2,
    effectID: "publicityOfficer"
}
const bigEnergy = {
    name:"bigEnergy",
    image:"dragon.jpg",
    effectText: "gain 20 reputation",
    cost: 0,
    effectID: "bigEnergy"
}


const instantPower = {
    name:"instantPower",
    image:"dragon.jpg",
    effectText: "do nothing",
    cost: -5,
    effectID: "instantPower"
}

const wildCards = [ninga, thief, doomsayer, publicityOfficer, bigEnergy, instantPower]



// const card1 = {
//     name:"dragon",
//     image:"dragon.jpg",
//     effectText: "Dragions breath fire",
//     cost: 12,
//     effectID: "card1"
// }
// const card1 = {
//     name:"dragon",
//     image:"dragon.jpg",
//     effectText: "Dragions breath fire",
//     cost: 12,
//     effectID: "card1"
// }
// const card1 = {
//     name:"dragon",
//     image:"dragon.jpg",
//     effectText: "Dragions breath fire",
//     cost: 12,
//     effectID: "card1"
// }
// const card1 = {
//     name:"dragon",
//     image:"dragon.jpg",
//     effectText: "Dragions breath fire",
//     cost: 12,
//     effectID: "card1"
// }





/**
 * This is a table of the function that creates the effect of playing every card. 
 * The indexes here are the same as the effectID feld in the card objects
 * The function take in a player who played the card, "player" for the player who's running the program, "opponent" for the opponent
 */
const cardEffects = new Map()

cardEffects.set('recurtor', (playingPlayer) => {
    if(playingPlayer === "player"){
        gameState.playerReputation++
    }
    else if(playingPlayer === "opponent"){
        gameState.opponentReputation++
    }
    else{
        console.log("Error, playingPlayer invalid")
    }
    console.log("Player Reputation is ", gameState.playerReputation) //Deleate This
})

cardEffects.set("card1", (playingPlayer) => {
    console.log("card1Played")
    },
)
cardEffects.set("ninga", (playingPlayer) => {
    if(playingPlayer === "player"){
        gameState.playerEnergy = gameState.playerEnergy + 3
    }
    else if(playingPlayer === "opponent"){
        gameState.opponenetEnergy = gameState.opponenetEnergy + 3
    }
    else{
        console.log("ninga input invalid")
    }
})
cardEffects.set("thief", (playingPlayer) => {
    if(playingPlayer === "player"){
        if (gameState.opponenetEnergy >= 2){
            gameState.playerEnergy = gameState.playerEnergy + 2
            gameState.opponenetEnergy = gameState.opponenetEnergy - 2    
        }
        else if(gameState.opponenetEnergy === 1){
            gameState.playerEnergy = gameState.playerEnergy + 1
            gameState.opponenetEnergy = 0
        }
    }
    else if(playingPlayer === "opponent"){
        if (gameState.playerEnergy >= 2){
            gameState.opponenetEnergy = gameState.opponenetEnergy + 2
            gameState.playerEnergy = gameState.playerEnergy - 2    
        }
        else if(gameState.playerEnergy === 1){
            gameState.opponenetEnergy = gameState.opponenetEnergy + 1
            gameState.playerEnergy = 0
        }
    }
    else{
        console.log("ninga input invalid")
    }
})

cardEffects.set("doomsayer", (playingPlayer) => {
    gameState.playerEnergy = 0
    gameState.opponenetEnergy = 0
}
)

cardEffects.set("publicityOfficer", (playeringPlayer) => {
    if (playeringPlayer === "player"){
        gameState.playerReputation = gameState.playerReputation + Math.floor((gameState.playerDeck.length + gameState.playerDiscard.length + (gameState.playerhand.slot1 != null) + (gameState.playerhand.slot2 != null) + (gameState.playerhand.slot3 != null) + (gameState.playerhand.slot4 != null) + (gameState.playerhand.slot5 != null))/2)
    }
    else if(playeringPlayer === "opponent"){
        gameState.playerReputation = gameState.playerReputation + Math.floor((gameState.opponentDeck.length + gameState.opponentDiscard.length + (gameState.opponentHand.slot1 != null) + (gameState.opponentHand.slot2 != null) + (gameState.opponentHand.slot3 != null) + (gameState.opponentHand.slot4 != null) + (gameState.opponentHand.slot5 != null))/2)
    }
    else{
        console.log("publicityOfficer Input invalid")
    }
})
cardEffects.set("bigEnergy", (playingPlayer) => {
    if (playingPlayer === "player"){
        gameState.playerReputation = gameState.playerReputation + 20
    }
    else if (playingPlayer === "opponent"){
        gameState.playerReputation = gameState.playerReputation + 20
    }
    else{
        console.log("bigEnergy Input invalid")        
    }
    
})

cardEffects.set("instantPower", (playeringPlayer) => {

})



