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


//A card has a 
//Name: the name displayed on the card
//image source, the filepath to image on the card
//effectText the text displayed on the card
//cost, the cost of purchesing the card
//effectID the 
//type the cardtype ("team", "")
const dragon = {
    name:"dragon",
    image:"dragon.jpg",
    effectText: "gain 1 energy",
    cost: 12,
    effectID: "dragon",
    type: "team",
}

const recruiter = {
    name: "recruiter",
    image: "superRecruiter.jpg",
    effectText: "Gain 1 reputation",
    cost: 1,
    effectID: "recruiter",
    type: "team",
}



const ninja = {
    name:"ninja",
    image:"ninja.jpg",
    effectText: "3 energy, lose 3 energy at the end of next turn",//not implemented yet
    cost: 2,
    effectID: "ninja",
    type: "team",
}
const thief = {
    name:"thief",
    image:"thief.jpg",
    effectText: "steal 2 energy from your opponent",
    cost: 3,
    effectID: "thief",
    type: "team",
}



const doomsayer = {
    name:"doomsayer",
    image:"dragon.jpg",
    effectText: "set both players reputation to 0",
    cost: 5,
    effectID: "doomsayer",
    type: "team",
}


const publicityOfficer = {
    name:"publicityOfficer",
    image:"excitedPoint.jpg",
    effectText: "gain 1 reputation for every 3 cards you have somewhere (rounded down)",
    cost: 2,
    effectID: "publicityOfficer",
    type: "team",
}
const bigEnergy = {
    name:"bigEnergy",
    image:"dragon.jpg",
    effectText: "gain 20 reputation",
    cost: 9,
    effectID: "bigEnergy",
    type: "team",
}


const instantPower = {
    name:"instantPower",
    image:"instantPower.jpg",
    effectText: "do nothing",
    cost: -5,
    effectID: "instantPower",
    type: "team",
}

const funDude = {
    name: "funDude",
    image: "funDude.jpg",
    effectText: "gain 2 reputation",
    cost: 0,
    effectID: "funDude",
    type: "team",
}

const chef = {
    name: "chef",
    image: "chef.jpg",
    effectText: "gain 3 reputation",
    cost: 1,
    effectID: "chef",
    type: "team",
}


const energyGenerator = {
    name: "energyGenerator",
    image: "dragon.jpg",
    effectText: "gain 7 energy",
    cost: 4,
    effectID: "energyGenerator",
    type: "team",
}

const energyUser = {
    name: "energyUser",
    image: "energyUser.jpg",
    effectText: "if you have at least 4 energy, turn 4 into 14 reputation",
    cost: 5,
    effectID: "energyUser",
    type: "team",
}

const unpopularVigilante = {
    name: "unpopularVigilante",
    image: "dragon.jpg",
    effectText: "turn your reputation into energy",
    cost: 6,
    effectID: "unpopularVigilante",
    type: "team",
}

const batteryFactory = {
    name: "batteryFactory",
    image: "dragon.jpg",
    effectText: "at the end of every future turn you take, gain 1 energy",
    cost: 0,//will the upped in future, low for testing
    effectID: "batteryFactory",
    type: "team",
}

const flyingSquaralMan = {
    name: "flyingSquaralMan",
    image: "dragon.jpg",
    effectText: "9 investigate, 1 fight",
    cost: 1,
    effectID: "flyingSquaralMan",
    type: "hero",
}

const theLoom = {
    name: "theLoom",
    image: "dragon.jpg",
    effectText: "0 investigate, 10 fight",
    cost: 1,
    effectID: "theLoom",
    type: "hero",
}


const wildCards = [ninja, thief, doomsayer, publicityOfficer, bigEnergy, instantPower, funDude, chef, energyGenerator, energyUser, unpopularVigilante,
     batteryFactory, flyingSquaralMan, theLoom,];























/**
 * This is a table of the function that creates the effect of playing every card. 
 * The indexes here are the same as the effectID feld in the card objects
 * The function take in a player who played the card, "player" for the player who's running the program, "opponent" for the opponent
 */
const cardEffects = new Map()

cardEffects.set('recruiter', (playingPlayer) => {
    if(playingPlayer === "player"){
        gameState.playerReputation++;
    }
    else if(playingPlayer === "opponent"){
        gameState.opponentReputation++;
    }
    else{
        console.log("Error, playingPlayer invalid");
    }
})

cardEffects.set("dragon", (playingPlayer) => {
    if(playingPlayer === "player"){
        gameState.playerEnergy++;
    }
    else if(playingPlayer === "opponent"){
        gameState.opponentEnergy++;
    }
    else{
        console.log("Error, playing player invalid");
    }
    },
)
cardEffects.set("ninja", (playingPlayer) => {
    if(playingPlayer === "player"){
        gameState.playerEnergy = gameState.playerEnergy + 3;
        gameState.playerStatuses.energyLossNextTurn = gameState.playerStatuses.energyLossNextTurn + 3;
    }
    else if(playingPlayer === "opponent"){
        gameState.opponentEnergy = gameState.opponentEnergy + 3;
        gameState.opponentStatuses.energyLossNextTurn = gameState.opponentStatuses.energyLossNextTurn + 3;
    }
    else{
        console.log("ninja input invalid");
    }
})
cardEffects.set("thief", (playingPlayer) => {
    if(playingPlayer === "player"){
        if (gameState.opponentEnergy >= 2){
            gameState.playerEnergy = gameState.playerEnergy + 2;
            gameState.opponentEnergy = gameState.opponentEnergy - 2;
        }
        else if(gameState.opponentEnergy === 1){
            gameState.playerEnergy = gameState.playerEnergy + 1;
            gameState.opponentEnergy = 0;
        }
    }
    else if(playingPlayer === "opponent"){
        if (gameState.playerEnergy >= 2){
            gameState.opponentEnergy = gameState.opponentEnergy + 2;
            gameState.playerEnergy = gameState.playerEnergy - 2;  
        }
        else if(gameState.playerEnergy === 1){
            gameState.opponentEnergy = gameState.opponentEnergy + 1;
            gameState.playerEnergy = 0;
        }
    }
    else{
        console.log("ninja input invalid");
    }
})

cardEffects.set("doomsayer", (playingPlayer) => {
    gameState.playerEnergy = 0;
    gameState.opponentEnergy = 0;
}
)

cardEffects.set("publicityOfficer", (playeringPlayer) => {
    if (playeringPlayer === "player"){
        gameState.playerReputation = gameState.playerReputation + Math.floor((gameState.playerDeck.length + gameState.playerDiscard.length + (gameState.playerhand.slot1 != null) + (gameState.playerhand.slot2 != null) + (gameState.playerhand.slot3 != null) + (gameState.playerhand.slot4 != null) + (gameState.playerhand.slot5 != null))/2);
    }
    else if(playeringPlayer === "opponent"){
        gameState.playerReputation = gameState.playerReputation + Math.floor((gameState.opponentDeck.length + gameState.opponentDiscard.length + (gameState.opponentHand.slot1 != null) + (gameState.opponentHand.slot2 != null) + (gameState.opponentHand.slot3 != null) + (gameState.opponentHand.slot4 != null) + (gameState.opponentHand.slot5 != null))/2);
    }
    else{
        console.log("publicityOfficer Input invalid");
    }
})
cardEffects.set("bigEnergy", (playingPlayer) => {
    if (playingPlayer === "player"){
        gameState.playerReputation = gameState.playerReputation + 20;
    }
    else if (playingPlayer === "opponent"){
        gameState.playerReputation = gameState.playerReputation + 20;
    }
    else{
        console.log("bigEnergy Input invalid");
    }
    
})

cardEffects.set("instantPower", (playingPlayer) => {

})

cardEffects.set("funDude", (playingPlayer) => {
    if(playingPlayer === "player"){
        gameState.playerReputation = gameState.playerReputation + 2;
    }
    else if(playingPlayer === "opponent"){
        gameState.opponentReputation = gameState.opponentReputation + 2;
    }
    else{
        console.log("error playing fun dude");
    }
})

cardEffects.set("chef", (playingPlayer) => {
    if(playingPlayer === "player"){
        gameState.playerReputation = gameState.playerReputation + 3;
    }
    else if(playingPlayer === "opponent"){
        gameState.opponentReputation = gameState.opponentReputation + 3;
    }
    else{
        console.log("error playing chef");
    }
})

cardEffects.set("energyGenerator", (playingPlayer) => {
    if(playingPlayer === "player"){
        gameState.playerEnergy = gameState.playerEnergy + 7;
    }
    else if(playingPlayer === "opponent"){
        gameState.opponentEnergy = gameState.opponentEnergy + 7;
    }
    else{
        console.log("error playing energyGenerator");
    }
    
})

cardEffects.set("energyUser", (playingPlayer) => {
    if(playingPlayer === "player"){
        if(gameState.playerEnergy >= 4){
            gameState.playerEnergy = gameState.playerEnergy - 4;
            gameState.playerReputation = gameState.playerReputation + 14;
        }
    }
    else if(playingPlayer === "opponent"){
        if(gameState.opponentEnergy >= 4){
            gameState.opponentEnergy = gameState.opponentEnergy - 4;
            gameState.opponentReputation = gameState.opponentReputation + 14;
        }
}
    else{
        console.log("error playing energyUser");
    }
})

cardEffects.set("unpopularVigilante", (playingPlayer) => {
    if(playingPlayer === "player"){
        gameState.playerEnergy = gameState.playerEnergy - gameState.playerReputation;
        gameState.playerReputation = 0;
    }
    else if(playingPlayer === "opponent"){
        gameState.opponentEnergy = gameState.opponentEnergy - gameState.opponentReputation;
        gameState.opponentReputation = 0;
    }
    else{
        console.log("error playing energyUser");
    }
})

cardEffects.set("batteryFactory", (playingPlayer) => {
    gameState[`${playingPlayer}Statuses`].passiveEnergy = gameState[`${playingPlayer}Statuses`].passiveEnergy + 1
})

cardEffects.set("flyingSquaralMan", (playingPlayer) => {
    console.log("cardEffect not implimented");
})

cardEffects.set("theLoom", (playingPlayer) => {
    console.log("cardEffect not implimented");
})

