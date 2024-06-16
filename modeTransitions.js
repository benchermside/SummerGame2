/**
 * Enters the game
 */

function enterGame(){
    const header = document.getElementById("top")
    header.style.display = 'none'
    const soloButton = document.getElementById("soloButton")
    soloButton.style.display = "none"
    const multButton = document.getElementById("multButton")
    multButton.style.display = "none"
    const sampleCard= document.getElementById("sampleCard")
    sampleCard.style.display = "none"

    const cardPlayArea = document.createElement("div")
    cardPlayArea.id = "cardPlayArea"
    cardPlayArea.classList.add("cardPlayArea")
    cardPlayArea.addEventListener("dragover", function(e){
        e.preventDefault()
        cardPlayArea.style.borderStyle = "solid"
    });
    cardPlayArea.addEventListener("dragleave", function(e){
        cardPlayArea.style.borderStyle = "dashed"
    });
    cardPlayArea.addEventListener("drop", (event) => {

        playCard(draggingCard, "player")
    })


    //this creates the players deck
    for (let i=0; i<10; i++){
        gameState.playerDeck.push(structuredClone(recurtor))
    }
    for (let i=0; i<5; i++){
        gameState.playerDeck.push(structuredClone(card1))
    }
    shufflePlayerDeck()








    //this creates the players hand
    cardSlotList = []
    const handWraper = document.getElementById("handWraper")
    let currCardSlot = null
    for (let i=0; i<5; i++){
        const cardIndex = i
        cardSlotList.push(document.createElement("div"))
        currCardSlot = cardSlotList[i]
        currCardSlot.classList.add("handSlot")
        currCardSlot.id = "handSlotCard" + String(i)


        currCardSlot.addEventListener("dragover", function(e){
            e.preventDefault()
        });
        cardSlotList[i].addEventListener("drop", (event) => {
            cardSlotList[i].style.border = "none"
            renderCard(card1, cardSlotList[i].getAttribute("id"))
            cardSlotList[i].lastChild.setAttribute("draggable", "true")
            cardSlotList[i].addEventListener("dragstart", (event) => {
                try{
                    document.getElementById("cardPlayArea").style.borderStyle = "dashed"
                }
                catch(TypeError){}    
                
                draggingCard = getNthHandSlot(cardIndex)

            })
            cardSlotList[i].addEventListener("dragend", (event) => {
                try{
                    document.getElementById("cardPlayArea").style.borderStyle = "none"
                }
                catch(TypeError){}   

            })
        })



        handWraper.appendChild(currCardSlot)
    }
    


    //Give the players hand it's starting cards

    for (let slotNum = 0; slotNum<5;slotNum++){
        let nextCard = gameState.playerDeck.pop()
        updateNthHandSlot(slotNum, nextCard)
    }



    
    document.body.insertBefore(cardPlayArea, handWraper)


    //This creates the opponents hand
    opponentCardList = []
    opponetHandWrapper = document.createElement("div")
    opponetHandWrapper.classList.add("playerHand")
    for (let i=0; i<5; i++){
        opponentCardList.push(document.createElement("div"))
        currCardSlot = opponentCardList[i]
        currCardSlot.classList.add("handSlot")
        currCardSlot.id = "OpponentHandSlotCard" + String(i)
        updateOpponentsNthHandSlot(i, "cardBack")
        opponetHandWrapper.appendChild(currCardSlot)
    }
    const firstElement = document.body.firstChild
    document.body.insertBefore(opponetHandWrapper, firstElement)

    
    //Handles purches area
    const purchesArea = document.createElement("div")
    const purchesAreaSlotList = []
    purchesArea.classList.add("purchesArea")
    purchesArea.id = "purchesArea"
    for (let i=0; i<5; i++){
        purchesAreaSlotList.push(document.createElement("div"))
        purchesAreaSlotList[i].classList.add("cardSlot")
        purchesAreaSlotList[i].id = `purchesAreaSlot${i}`
        updatePurchesAreaNthSlot(i, null)//Note, Line is redundent
        purchesArea.appendChild(purchesAreaSlotList[i])
    }
    cardPlayArea.appendChild(purchesArea)

    //This creates the skipPhase button
    const skipPhaseButton = document.createElement("button")
    skipPhaseButton.classList.add("SkipPhase")
    skipPhaseButton.innerText = "Skip Phase"
    skipPhaseButton.addEventListener('click', () => {
        endPhaseButton()
    })
    const cardPlayPlace = document.getElementById("cardPlayArea")
    cardPlayPlace.appendChild(skipPhaseButton)
    







    //Call update gameState
    renderGameState()
    //Temporary code to create a starting card to play around with
    const startCard = document.getElementsByClassName("cardDisplay")
    let count = 0
    for(let card of startCard){
        const index = count
        card.setAttribute("draggable", "true")
        card.addEventListener("dragstart", (event) => {
            try{
                document.getElementById("cardPlayArea").style.borderStyle = "dashed"
            }
            catch(TypeError){}
            draggingCard = getNthHandSlot(index)
        });
        card.addEventListener("dragend", (event) => {
            try{
                document.getElementById("cardPlayArea").style.borderStyle = "none"
            }
            catch{}

        });
        count++
    }
    //Temporary code to create a starting card to play around with


}

/**
 * sets the starting player and enters the corrosponding mode
 * for now, alwese sets to player, in future, will set or player or opponent random
 */
function setStartingPlayer(){
    return "player"
}


/**
 * Plays a card
 */
function playCard(card, player){
    cardEffects.get(card.effectID)(player)
    gameState.currentPhase = "purchasing"


}

/**
 * occures when end phase button pressed
 * 
 */
function endPhaseButton(){
    console.log("button pressed")
    if (gameState.playerTurn === "player"){// in The future, this should chck that the player has had there turn for some minimum time, possibly 5 seconds
        if (gameState.currentPhase === "playing"){
            gameState.currentPhase = "purchasing"
            gameState.CardsPlayed = gameState.CardsPlayed + 1
            return
        }
        else if(gameState.currentPhase === "purchasing"){
            gameState.playerTurn = "opponent"
            gameState.currentPhase = "playing"

        }
    }
}


