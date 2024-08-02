//This file holds information for the villons that players can track down and defiet earning them Honor and reputation


//A villon object is defined like this
//name, the name of the villon/crime
//Investigate the amount of investigation requited to catch them
//fight, the amount of fight required to catch them
//rewardText the text describing the reward for catching a villin
//rewardID the id of the function that triggers when the vollan is defeated


const mastermind = {
    name: "mastermind",
    investigate: 3,
    fight: 0,
    rewardText: "gain 3 honor",
    rewardID: "mastermind"
}

const mindlessBlob = {
    name: "mindlessBlob",
    investigate: 0,
    fight: 3,
    rewardText: "gain 3 honor",
    rewardID: "mindlessBlob",
}

const villains = [mastermind, mindlessBlob]

//here starts the reward functions
//here starts the reward functions
//here starts the reward functions
//here starts the reward functions
//here starts the reward functions
//here starts the reward functions
//here starts the reward functions
//here starts the reward functions
//here starts the reward functions
//here starts the reward functions
//here starts the reward functions
//here starts the reward functions
//here starts the reward functions
//here starts the reward functions
//here starts the reward functions
//here starts the reward functions
//here starts the reward functions
//here starts the reward functions


const villainRewards = new Map()


villainRewards.set("mastermind", (playingPlayer) => {
    gameState[`${playingPlayer}Honor`] = gameState[`${playingPlayer}Honor`] + 3;
})

villainRewards.set("mindlessBlob", (playingPlayer) => {
    gameState[`${playingPlayer}Honor`] = gameState[`${playingPlayer}Honor`] + 3;
})
