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
    cost: 2,
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

const combatBonuses = {
    name: "combatBonuses",
    image: "combatBonuses.jpg",
    effectText: "gain 5 reputation",
    cost: 2,
    effectID: "combatBonuses",
    type: "team"
}

const childcare = {
    name: "childcare",
    image: "childcare.jpg",
    effectText: "gain 7 reputation",
    cost: 3,
    effectID: "childcare",
    type: "team"
}

const coolHomeBase = {
    name: "coolHomeBase",
    image: "coolHomeBase.jpg",
    effectText: "gain 9 reputation",
    cost: 4,
    effectID: "coolHomeBase",
    type: "team"
}

const governmentPartnership = {
    name: "governmentPartnership",
    image: "governmentPartnership.jpg",
    effectText: "gain 12 reputation",
    cost: 5,
    effectID: "governmentPartnership",
    type: "team"
}



const publicityStunt = {
    name:"publicityStunt",
    image:"publicityStunt.jpg",
    effectText: "gain 14 reputation",
    cost: 6,
    effectID: "publicityStunt",
    type: "team",
}

const Garry = {
    name: "Garry",
    image: "garry.jpg",
    effectText: "gain 16 reputation, Garry needs no explination",
    cost: 5,
    effectID: "Garry",
    type: "team"
}

const onSightHealthcare = {
    name: "onSightHealthcare",
    image: "onSightHealthcare.jpg",
    effectText: "gain 18 reputation",
    cost: 5,
    effectID: "onSightHealthcare",
    type: "team"
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
    image:"doomsayer.jpg",
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


const instantPower = {
    name:"instantPower",
    image:"instantPower.jpg",
    effectText: "do nothing",
    cost: -5,
    effectID: "instantPower",
    type: "team",
}



const energyGenerator = {
    name: "energyGenerator",
    image: "energyGenerator.jpg",
    effectText: "gain 7 energy",
    cost: 4,
    effectID: "energyGenerator",
    type: "team",
}

const energyUser = {
    name: "energyUser",
    image: "energyUser.jpg",
    effectText: "if you have at least 4 energy, turn 4 into 14 fight",
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
    image: "batteryFactory.jpg",
    effectText: "at the end of every future turn you take, gain 1 energy",
    cost: 0,//will the upped in future, low for testing
    effectID: "batteryFactory",
    type: "team",
}

const flyingSquirrelMan = {
    name: "flyingSquirrelMan",
    image: "flyingSquirrelMan.jpg",
    effectText: "9 investigate, 1 fight",
    cost: 2,
    effectID: "flyingSquirrelMan",
    type: "hero",
}

const theLoom = {
    name: "theLoom",
    image: "theLoom.jpg",
    effectText: "10 fight",
    cost: 2,
    effectID: "theLoom",
    type: "hero",
}

const BatteryEnergyTechnologyResearch = {
    name: "BatteryResearch",
    image: "dragon.jpg",
    effectText: "at the end of each turn, increese your passive energy income by one",
    cost: 10,
    effectID: "BatteryEnergyTechnologyResearch",
    type: "team",
}


const hacker = {
    name: "hacker",
    image: "dragon.jpg",
    effectText: "Spend 5 energy for 20 investigate",
    cost: 5,
    effectID: "hacker",
    type: "hero",
}

const publicityCampaign = {
    name: "publicity campaign",
    image: "publicityCampaign.jpg",
    effectText: "loose energy for reputation 1→1, 2→3, 3→6, 4→7, 5→9, 6→10",
    cost: 3,
    effectID: "publicityCampaign",
    type: "team",
}


const retire = {
    name: "retire",
    image: "dragon.jpg",
    effectText: "retire the leftMost card in your hand",
    cost: 4,
    effectID: "retire",
    type: "team",
}

const targetedRetirment = {
    name: "targetedRetirment",
    image: "dragon.jpg",
    effectText: "retire the cheapest card in your hand",
    cost: 5,
    effectID: "targetedRetirment",
    type: "team",
}

const OrginizedRerirment = {
    name: "OrginizedRerirment",
    image: "dragon.jpg",
    effectText: "retire your cheapest card",
    cost: 6,
    effectID: "OrginizedRerirment",
    type: "team",
}

const teamRetirment = {
    name: "teamRetirment",
    image: "dragon.jpg",
    effectText: "retire your cheapest team card",
    cost: 6,
    effectID: "teamRetirment",
    type: "team",
}

const heroRetirment = {
    name: "heroRetirment",
    image: "dragon.jpg",
    effectText: "retire your cheapest hero card",
    cost: 6,
    effectID: "heroRetirment",
    type: "team",
}

const heroFocused = {
    name: "hero Focused",
    image: "dragon.jpg",
    effectText: "retire every team card in your hand",
    cost: 8,
    effectID: "heroFocused",
    type: "team",
}

const cuttingBureaucracy = {
    name: "cutting bureaucracy",
    image: "dragon.jpg",
    effectText: "retire the top 5 team cards in your deck",
    cost: 10,
    effectID: "cuttingBureaucracy",
    type: "team",
}


const sight = {
    name: "sight",
    image: "dragon.jpg",
    effectText: "3 fight, 2 investigate",
    cost: 1,
    effectID: "sight",
    type: "hero",
}

const flexMan = {
    name: "flexMan",
    image: "dragon.jpg",
    effectText: "gain 4 investigate, if the current villian needs more fight, gain that instead",
    cost: 1,
    effectID: "flexMan",
    type: "hero",
}

const questioner = {
    name: "questioner",
    image: "dragon.jpg",
    effectText: "lose 1 reputation and energy if possible, gain 11 investigate",
    cost: 1,
    effectID: "questioner",
    type: "hero",
}

const orc = {
    name: "orc",
    image: "dragon.jpg",
    effectText: "15 fight",
    cost: 3,
    effectID: "orc",
    type: "hero",
}

const carcajou = {
    name: "carcajou",
    image: "dragon.jpg",
    effectText: "8 fight, 7 investigate",
    cost: 3,
    effectID: "carcajou",
    type: "hero",
}

const superUltra = {
    name: "superUltra",
    image: "dragon.jpg",
    effectText: "40 fight",
    cost: 12,
    effectID: "superUltra",
    type: "hero",
}

const explodeWoman = {
    name: "explodeWoman",
    image: "dragon.jpg",
    effectText: "converts up to 10 enrgy into 2 fight each, 7 if first hero played",
    cost: 5,
    effectID: "explodeWoman",
    type: "hero",
}

const electricSpeedster = {
    name: "electric speedster",
    image: "dragon.jpg",
    effectText: "if you have 6 energy, use it for 15 fight, 15 investigate",
    cost: 4,
    effectID: "electricSpeedster",
    type: "hero",
}

const energychannel = {
    name: "energy channel",
    image: "dragon.jpg",
    effectText: "gain 1 fight for each energy you have WITHOUT LOOSING ENEGY",
    cost: 8,
    effectID: "energychannel",
    type: "hero",
}

const investigationBot = {
    name: "investigation Bot",
    image: "dragon.jpg",
    effectText: "gain 1 investigate for each energy you have WITHOUT LOOSING ENERGY",
    cost: 8,
    effectID: "investigationBot",
    type: "hero",
}



const wildCards = [ninja, thief, doomsayer, publicityOfficer, publicityStunt, instantPower, funDude, chef, energyGenerator, energyUser, unpopularVigilante,
    batteryFactory, flyingSquirrelMan, theLoom, BatteryEnergyTechnologyResearch, hacker, combatBonuses, childcare, coolHomeBase, governmentPartnership, 
    publicityStunt, Garry, onSightHealthcare, retire, targetedRetirment, OrginizedRerirment, teamRetirment, heroFocused, cuttingBureaucracy, sight, flexMan,
    questioner, superUltra, explodeWoman, electricSpeedster, energychannel, investigationBot,
    ];























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
        gameState.playerReputation = gameState.playerReputation + Math.floor((gameState.playerDeck.length + gameState.playerDiscard.length + (gameState.playerHand.slot1 != null) + (gameState.playerHand.slot2 != null) + (gameState.playerHand.slot3 != null) + (gameState.playerHand.slot4 != null) + (gameState.playerHand.slot5 != null))/2);
    }
    else if(playeringPlayer === "opponent"){
        gameState.playerReputation = gameState.playerReputation + Math.floor((gameState.opponentDeck.length + gameState.opponentDiscard.length + (gameState.opponentHand.slot1 != null) + (gameState.opponentHand.slot2 != null) + (gameState.opponentHand.slot3 != null) + (gameState.opponentHand.slot4 != null) + (gameState.opponentHand.slot5 != null))/2);
    }
    else{
        console.log("publicityOfficer Input invalid");
    }
})
cardEffects.set("publicityStunt", (playingPlayer) => {
    if (playingPlayer === "player"){
        gameState.playerReputation = gameState.playerReputation + 13;
    }
    else if (playingPlayer === "opponent"){
        gameState.playerReputation = gameState.playerReputation + 13;
    }
    else{
        console.log("publicityStunt Input invalid");
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
            gameState.playerFight = gameState.playerFight + 14;
        }
    }
    else if(playingPlayer === "opponent"){
        if(gameState.opponentEnergy >= 4){
            gameState.opponentEnergy = gameState.opponentEnergy - 4;
            gameState.opponentFight = gameState.opponentFight + 14;
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

cardEffects.set("flyingSquirrelMan", (playingPlayer) => {
    gameState[`${playingPlayer}Fight`] = gameState[`${playingPlayer}Fight`] + 1;
    gameState[`${playingPlayer}Investigate`] = gameState[`${playingPlayer}Investigate`] + 9;
})

cardEffects.set("theLoom", (playingPlayer) => {
    gameState[`${playingPlayer}Fight`] = gameState[`${playingPlayer}Fight`] + 10;
})


cardEffects.set("BatteryEnergyTechnologyResearch", (playingPlayer) => {
    gameState[`${playingPlayer}Statuses`].passiveBatteryFactory = gameState[`${playingPlayer}Statuses`].passiveBatteryFactory + 1;
})


cardEffects.set("hacker", (playingPlayer) => {
    if(gameState[`${playingPlayer}Energy`] >= 5){
        gameState[`${playingPlayer}Energy`] = gameState[`${playingPlayer}Energy`] - 5;
        gameState[`${playingPlayer}Investigate`] = gameState[`${playingPlayer}Investigate`] + 20;
    }
})

cardEffects.set("publicityCampaign", (playingPlayer) => {
    if(gameState[`${playingPlayer}Energy`] >= 3){
        gameState[`${playingPlayer}Energy`] = gameState[`${playingPlayer}Energy`] - 3;
        gameState[`${playingPlayer}Reputation`] = gameState[`${playingPlayer}Reputation`] + 6;
    }
    if(gameState[`${playingPlayer}Energy`] >= 2){
        gameState[`${playingPlayer}Energy`] = gameState[`${playingPlayer}Energy`] - 2;
        gameState[`${playingPlayer}Reputation`] = gameState[`${playingPlayer}Reputation`] + 3;
    }
    if(gameState[`${playingPlayer}Energy`] >= 1){
        gameState[`${playingPlayer}Energy`] = gameState[`${playingPlayer}Energy`] - 1;
        gameState[`${playingPlayer}Reputation`] = gameState[`${playingPlayer}Reputation`] + 1;
    }

})

cardEffects.set("combatBonuses", (playingPlayer) => {
    gameState[`${playingPlayer}Reputation`] += 5;
})

cardEffects.set("childcare", (playingPlayer) => {
    gameState[`${playingPlayer}Reputation`] += 7;
})

cardEffects.set("coolHomeBase", (playingPlayer) => {
    gameState[`${playingPlayer}Reputation`] += 9;
})

cardEffects.set("governmentPartnership", (playingPlayer) => {
    gameState[`${playingPlayer}Reputation`] += 12;
})

cardEffects.set("publicityStunt", (playingPlayer) => {
    gameState[`${playingPlayer}Reputation`] += 14;
})


cardEffects.set("Garry", (playingPlayer) => {
    gameState[`${playingPlayer}Reputation`] += 16;
})


cardEffects.set("onSightHealthcare", (playingPlayer) => {
    gameState[`${playingPlayer}Reputation`] += 18;
})


cardEffects.set("retire", (playingPlayer) => {
    let LocationIndex;
    if(gameState[`${playingPlayer}Hand`].slot0.effectID === "retire"){
        LocationIndex = 1;
    }
    else{
        LocationIndex = 0;
    }
    retireCard(playingPlayer, "handslot", LocationIndex);
})

cardEffects.set("targetedRetirment", (playingPlayer) => {
    let cheapest = 0;
    for(let i=1; i<5; i++){
        if(gameState[`${playingPlayer}Hand`][`slot${i}`].cost < gameState[`${playingPlayer}Hand`][`slot${cheapest}`].cost && gameState[`${playingPlayer}Hand`][`slot${i}`].effectID !== "targetedRetirment"){
            cheapest = i;
        }
    }
    retireCard(playingPlayer, "handSlot", cheapest);
})

cardEffects.set("OrginizedRerirment", (playingPlayer) => {
    const cheapest = {
        cardLocation: null,
        cardLocationIndex: null,
        cost: Number.NEGATIVE_INFINITY,
    }
    for (let i=0; i<5; i++){
        if(gameState[`${playingPlayer}Hand`][`slot${i}`] !== null){
            if(gameState[`${playingPlayer}Hand`][`slot${i}`].cost < cheapest.cost){
                cheapest.cardLocationIndex = i;
                cheapest.cost = gameState[`${playingPlayer}Hand`][`slot${i}`].cost;
                cheapest.cardLocation = "handslot";
            }
        }
    }
    for(let i=0; i<gameState[`${playingPlayer}Deck`].length; i++){
        if(gameState[`${playingPlayer}Deck`][i].cost < cheapest.cost){
            cheapest.cost = gameState[`${playingPlayer}Deck`][i].cost;
            cheapest.cardLocation = "deck";
            cheapest.cardLocationIndex = i;
        }
    }
    for(let i=0; i<gameState[`${playingPlayer}Discard`].length; i++){
        if(gameState[`${playingPlayer}Discard`][i].cost < cheapest.cost){
            cheapest.cost = gameState[`${playingPlayer}Discard`][i].cost;
            cheapest.cardLocation = "discard";
            cheapest.cardLocationIndex = i;
        }
    }
    for(let i=0; i<gameState[`${playingPlayer}BoughtCards`].length; i++){
        if(gameState[`${playingPlayer}BoughtCards`][i].cost < cheapest.cost){
            cheapest.cost = gameState[`${playingPlayer}BoughtCards`][i].cost;
            cheapest.cardLocation = "boughtCards";
            cheapest.cardLocationIndex = i;
        }
    }
    if(cheapest.cost !== Number.NEGATIVE_INFINITY){
        retireCard(playingPlayer, cheapest.cardLocation, cheapest.cardLocationIndex);
    }
    else{
        console.log("no cards to retire, possibly a valid gamestate or possibly an error");
    }
})

cardEffects.set("teamRetirment", (playingPlayer) => {
    const cheapest = {
        cardLocation: null,
        cardLocationIndex: null,
        cost: Number.NEGATIVE_INFINITY,
    }
    for (let i=0; i<5; i++){
        if(gameState[`${playingPlayer}Hand`][`slot${i}`] !== null){
            if(gameState[`${playingPlayer}Hand`][`slot${i}`].cost < cheapest.cost && gameState[`${playingPlayer}Hand`][`slot${i}`].type === "team"){
                cheapest.cardLocationIndex = i;
                cheapest.cost = gameState[`${playingPlayer}Hand`][`slot${i}`].cost;
                cheapest.cardLocation = "handslot";
            }
        }
    }
    for(let i=0; i<gameState[`${playingPlayer}Deck`].length; i++){
        if(gameState[`${playingPlayer}Deck`][i].cost < cheapest.cost && gameState[`${playingPlayer}Deck`][i].type === "team"){
            cheapest.cost = gameState[`${playingPlayer}Deck`][i].cost;
            cheapest.cardLocation = "deck";
            cheapest.cardLocationIndex = i;
        }
    }
    for(let i=0; i<gameState[`${playingPlayer}Discard`].length; i++){
        if(gameState[`${playingPlayer}Discard`][i].cost < cheapest.cost && gameState[`${playingPlayer}Discard`][i].type === "team"){
            cheapest.cost = gameState[`${playingPlayer}Discard`][i].cost;
            cheapest.cardLocation = "discard";
            cheapest.cardLocationIndex = i;
        }
    }
    for(let i=0; i<gameState[`${playingPlayer}BoughtCards`].length; i++){
        if(gameState[`${playingPlayer}BoughtCards`][i].cost < cheapest.cost && gameState[`${playingPlayer}BoughtCards`][i].type === "team"){
            cheapest.cost = gameState[`${playingPlayer}BoughtCards`][i].cost;
            cheapest.cardLocation = "boughtCards";
            cheapest.cardLocationIndex = i;
        }
    }
    if(cheapest.cost !== Number.NEGATIVE_INFINITY){
        retireCard(playingPlayer, cheapest.cardLocation, cheapest.cardLocationIndex);
    }
    else{
        console.log("no cards to retire, possibly a valid gamestate or possibly an error");
    }
})


cardEffects.set("heroRetirment", (playingPlayer) => {
    const cheapest = {
        cardLocation: null,
        cardLocationIndex: null,
        cost: Number.NEGATIVE_INFINITY,
    }
    for (let i=0; i<5; i++){
        if(gameState[`${playingPlayer}Hand`][`slot${i}`] !== null){
            if(gameState[`${playingPlayer}Hand`][`slot${i}`].cost < cheapest.cost && gameState[`${playingPlayer}Hand`][`slot${i}`].type === "hero"){
                cheapest.cardLocationIndex = i;
                cheapest.cost = gameState[`${playingPlayer}Hand`][`slot${i}`].cost;
                cheapest.cardLocation = "handslot";
            }
        }
    }
    for(let i=0; i<gameState[`${playingPlayer}Deck`].length; i++){
        if(gameState[`${playingPlayer}Deck`][i].cost < cheapest.cost && gameState[`${playingPlayer}Deck`][i].type === "hero"){
            cheapest.cost = gameState[`${playingPlayer}Deck`][i].cost;
            cheapest.cardLocation = "deck";
            cheapest.cardLocationIndex = i;
        }
    }
    for(let i=0; i<gameState[`${playingPlayer}Discard`].length; i++){
        if(gameState[`${playingPlayer}Discard`][i].cost < cheapest.cost && gameState[`${playingPlayer}Discard`][i].type === "hero"){
            cheapest.cost = gameState[`${playingPlayer}Discard`][i].cost;
            cheapest.cardLocation = "discard";
            cheapest.cardLocationIndex = i;
        }
    }
    for(let i=0; i<gameState[`${playingPlayer}BoughtCards`].length; i++){
        if(gameState[`${playingPlayer}BoughtCards`][i].cost < cheapest.cost && gameState[`${playingPlayer}BoughtCards`][i].type === "hero"){
            cheapest.cost = gameState[`${playingPlayer}BoughtCards`][i].cost;
            cheapest.cardLocation = "boughtCards";
            cheapest.cardLocationIndex = i;
        }
    }
    if(cheapest.cost !== Number.NEGATIVE_INFINITY){
        retireCard(playingPlayer, cheapest.cardLocation, cheapest.cardLocationIndex);
    }
    else{
        console.log("no cards to retire, possibly a valid gamestate or possibly an error");
    }
})

cardEffects.set("heroFocused", (playingPlayer) => {
    for(let i=0; i<5; i++){
        if(gameState[`${playingPlayer}Hand`][`slot${i}`].type === "team" && gameState[`${playingPlayer}Hand`][`slot${i}`].effectID !== "heroFocused"){
            retireCard(playingPlayer, "handSlot", i);
        }
    }
})

cardEffects.set("cuttingBureaucracy", (playingPlayer) => {
    let teamCardsFound = [];
    let i = gameState[`${playingPlayer}Deck`].length - 1;
    while(teamCardsFound.length < 5 && i > -1){
        if(gameState[`${playingPlayer}Deck`][i].type === "team"){
            teamCardsFound.push(i);
        }
    }
    for(let j=0; j<teamCardsFound.length; j++){
        retireCard(playingPlayer, "deck", teamCardsFound[j]);
    }
})

cardEffects.set("sight", (playingPlayer) => {
    gameState[`${playingPlayer}Fight`] += 3;
    gameState[`${playingPlayer}investigate`] += 2;
})

cardEffects.set("flexMan", (playingPlayer) => {
    if(gameState.currVillain.fight > gameState.currVillain.investigate){
        gameState[`${playingPlayer}Fight`] += 4;
    }
    else{
        gameState[`${playingPlayer}investigate`] += 4;
    }
})

cardEffects.set("questioner", (playingPlayer) => {
    if(gameState[`${playingPlayer}Energy`] >= 1){
        gameState[`${playingPlayer}Energy`] = gameState[`${playingPlayer}Energy`] - 1;
    }
    if(gameState[`${playingPlayer}Reputation`] >= 1){
        gameState[`${playingPlayer}Reputation`] = gameState[`${playingPlayer}Reputation`] - 1;
    }
    gameState[`${playingPlayer}Investigate`] += 11;
})

cardEffects.set("orc", (playingPlayer) => {
    gameState[`${playingPlayer}Fight`] += 15;
})

cardEffects.set("carcajou", (playingPlayer) => {
    gameState[`${playingPlayer}Fight`] += 8;
    gameState[`${playingPlayer}Investigate`] += 7;
})

cardEffects.set("superUltra", (playingPlayer) => {
    gameState[`${playingPlayer}Fight`] += 40;
})

cardEffects.set("explodeWoman", (playingPlayer) => {
    let energyReturn = 0;
    if(gameState[`${playingPlayer}HeroTeam`].length === 0){
        energyReturn = 2;
    }
    else{
        energyReturn = 7;
    }
    const playerEnergyQuantity = gameState[`${playingPlayer}Energy`];
    if(playerEnergyQuantity >= 10){
        gameState[`${playingPlayer}Energy`] += -10;
        gameState[`${playingPlayer}Fight`] += (10*energyReturn);
    }
    else{
        gameState[`${playingPlayer}Energy`] = 0;
        gameState[`${playingPlayer}Fight`] += gameState[`${playingPlayer}Fight`]*playerEnergyQuantity;
    }
})

cardEffects.set("electricSpeedster", (playingPlayer) => {
    if(gameState[`${playingPlayer}Energy`] >= 6){
        gameState[`${playingPlayer}Energy`] = gameState[`${playingPlayer}Energy`] - 6;
        gameState[`${playingPlayer}Investigate`] += 15;
        gameState[`${playingPlayer}Fight`] += 15;
    }
})

cardEffects.set("energychannel", (playingPlayer) => {
    gameState[`${playingPlayer}Fight`] = gameState[`${playingPlayer}Fight`] + gameState[`${playingPlayer}Energy`];
})

cardEffects.set("investigationBot", (playingPlayer) => {
    gameState[`${playingPlayer}Investigate`] = gameState[`${playingPlayer}Investigate`] + gameState[`${playingPlayer}Energy`];
})



const retireEffects = new Map();

retireEffects.set("recruiter", (retiringPlayer) => {
    gameState[`${retiringPlayer}Energy`] = gameState[`${retiringPlayer}Energy`] + 100//temp for testing
})

/**
 * This is the fucntion you call when you wish to reture a card
 * retirment removes the card, draws a new card if the card is in your hand and triggers the onreture effect of the card
 *      retiringPlayer: a string indicating who is returing the card
 *      cardLocation: the location of the card as a string. possibly handslot, deck, discard, or boughtCards
 *      cardLocationIndex: if the card is in your hand, this it its slotNumber, 
 *          if the card is in your deck, discard, or boughtCards this is the index within the list of the card
 * } 
 */

function retireCard(retiringPlayer, cardLocation, cardLocationIndex){
    let retiringCard;
    if(cardLocation === "handslot"){
        retiringCard = getNthHandSlot(cardLocationIndex);
        updateNthHandSlot(cardLocationIndex, null);
        drawCard(retiringPlayer, cardLocationIndex);
    }
    else if(cardLocation === "deck" || cardLocation === "discard" || cardLocation === "handslot"){
        const containingList = gameState[`${retiringPlayer}` + cardLocation[0].toUpperCase() + cardLocation.substring(1)];
        retiringCard = containingList[cardLocationIndex];
        containingList.splice(cardLocationIndex, 1);
    }
    else{
        console.log("input object for retireCard, cardLocation feild not a valid value")
    }
    const onTrashEffect = retireEffects.get(retiringCard.effectID);
    if(onTrashEffect !== undefined){
        onTrashEffect(retiringPlayer);
    }
}

