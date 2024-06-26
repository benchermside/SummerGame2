//Card images should be 130 by 84 or some multible like 260x168
//matches
// 130	84
// 260	168
// 390	252
// 520	336
// 650	420
// 780	504
// 910	588
// 1040	672
// 1170	756
// 1300	840
// 1430	924
// 1560	1008
// 1690	1092
// 1820	1176
// 1950	1260
// 2080	1344
// 2210	1428
// 2340	1512
// 2470	1596
// 2600	1680
// 2730	1764
// 2860	1848
// 2990	1932
// 3120	2016
// 3250	2100
// 3380	2184
// 3510	2268
// 3640	2352
// 3770	2436
// 3900	2520
// 4030	2604
// 4160	2688
// 4290	2772
// 4420	2856
// 4550	2940
// 4680	3024
// 4810	3108
// 4940	3192
// 5070	3276
// 5200	3360
// 5330	3444
// 5460	3528
// 5590	3612
// 5720	3696
// 5850	3780
// 5980	3864
// 6110	3948
// 6240	4032
// 6370	4116
// 6500	4200
// 6630	4284
// 6760	4368
// 6890	4452
// 7020	4536
// 7150	4620
// 7280	4704
// 7410	4788
// 7540	4872
// 7670	4956
// 7800	5040
// 7930	5124
// 8060	5208
// 8190	5292
// 8320	5376

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



const ninja = {
    name:"ninja",
    image:"ninja.jpg",
    effectText: "3 energy, loose 3 energy at the end of next turn",//not implimented yet
    cost: 2,
    effectID: "ninja"
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

const wildCards = [ninja, thief, doomsayer, publicityOfficer, bigEnergy, instantPower]



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
cardEffects.set("ninja", (playingPlayer) => {
    if(playingPlayer === "player"){
        gameState.playerEnergy = gameState.playerEnergy + 3
    }
    else if(playingPlayer === "opponent"){
        gameState.opponenetEnergy = gameState.opponenetEnergy + 3
    }
    else{
        console.log("ninja input invalid")
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
        console.log("ninja input invalid")
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



