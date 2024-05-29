const card1 = {
    name:"dragon",
    image:"dragon.jpg",
    effectText: "Dragions breath fire",
    cost: 12
}

/**
 * Draws the card in the element who's ID is given
 * @param card a card object to display
 * @param locationID the element the card is to be drawn on 
 */
function renderCard(card, locationID){
    console.log("renderCardCalled")
    const location = document.getElementById(locationID)
    const cardDisplyDiv = document.createElement("div");
    cardDisplyDiv.classList.add("cardDisplay")
    const cardTitleDiv = document.createElement("div");
    cardTitleDiv.classList.add("cardTitle")
    const cardNameDiv = document.createElement("div");
    const cardCostDiv = document.createElement("div");
    cardNameDiv.classList.add("cardName")
    cardCostDiv.classList.add("cardCost")
    const cardImageDiv = document.createElement("img");
    //add image source
    const cardEffectDiv = document.createElement("div");
    cardEffectDiv.classList.add("cardEffect")
    const cardEffectTextDiv = document.createElement("div");
    cardEffectTextDiv.classList.add("cardEffectText")
    cardDisplyDiv.appendChild(cardTitleDiv)
    cardDisplyDiv.appendChild(cardImageDiv)
    cardDisplyDiv.appendChild(cardEffectDiv)
    cardTitleDiv.appendChild(cardNameDiv)
    cardTitleDiv.appendChild(cardCostDiv)
    cardEffectDiv.appendChild(cardEffectTextDiv)

    const cardNameText = document.createTextNode(card.name);
    cardNameDiv.appendChild(cardNameText)
    const cardCost = document.createTextNode(card.cost);
    cardCostDiv.appendChild(cardCost)
    const effectText = document.createTextNode(card.effectText)
    cardEffectTextDiv.appendChild(effectText)
    cardImageDiv.setAttribute("src", `img/${card.image}`)


    location.appendChild(cardDisplyDiv);


}

function enterGame(){
    const header = document.getElementById("top")
    header.style.display = 'none'
    const soloButton = document.getElementById("soloButton")
    soloButton.style.display = "none"
    const multButton = document.getElementById("multButton")
    multButton.style.display = "none"
    cardSlotList = []
    const handWraper = document.getElementById("handWraper")
    for (let i=0; i<5; i++){
        cardSlotList.push(document.createElement("div"))
        cardSlotList[i].classList.add("handSlot")
        cardSlotList[i].id = "handSlotCard" + String(i)


        cardSlotList[i].addEventListener("dragover", function(e){
            e.preventDefault()
        });
        cardSlotList[i].addEventListener("drop", (event) => {
            for (const child of cardSlotList[i].children){
                child.style.display = "none"
            }
            renderCard(card1, cardSlotList[i].getAttribute("id"))
        })



        handWraper.appendChild(cardSlotList[i])
    }


    

}




function main(){
    console.log("ran main.js")
    const soloButton = document.createElement('button')
    soloButton.innerText = 'Solo'
    soloButton.id = 'soloButton'
    soloButton.addEventListener('click', () => {
        enterGame()
    })
    document.body.appendChild(soloButton)
    const multButton = document.createElement('button')
    multButton.innerText = 'Mult'
    multButton.id = 'multButton'
    multButton.addEventListener('click', () => {
        enterGame()
    })
    document.body.appendChild(multButton)


    const cardClassList = document.getElementsByClassName("cardDisplay")
    for (let classNumber = 0; classNumber<cardClassList.length; classNumber++){
        cardClassList[classNumber].setAttribute("draggable", "true")
        cardClassList[classNumber].addEventListener("dragstart", (event) => {
            
        });
        cardClassList[classNumber].addEventListener("dragend", (event) => {
            console.log("draged")
            console.log(event)
        });
    
    }
    const cardSlots = document.getElementsByClassName("cardSlot")
    for(let cardSlotNumber=0; cardSlotNumber<cardSlots.length; cardSlotNumber++){
        cardSlots[cardSlotNumber].addEventListener("dragover", function(e){
            e.preventDefault()
        });
        cardSlots[cardSlotNumber].addEventListener("drop", (event) => {
            for (const child of cardSlots[cardSlotNumber].children){
                child.style.display = "none"
            }
            renderCard(card1, cardSlots[cardSlotNumber].getAttribute("id"))

        })
    }
}

