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


function main(){
    console.log("ran main.js")
    const SoloButton = document.createElement('button')
    SoloButton.innerText = 'Solo'
    SoloButton.id = 'SoloButton'
    SoloButton.addEventListener('click', () => {
        alert('Fill this in later')
        const header = document.getElementById("top")
        header.style.display = 'none'
    })
    document.body.appendChild(SoloButton)
    const MultButton = document.createElement('button')
    MultButton.innerText = 'Mult'
    MultButton.id = 'MultButton'
    MultButton.addEventListener('click', () => {
        alert('Fill this in later')
    })
    document.body.appendChild(MultButton)
    const cardClassList = document.getElementsByClassName("cardDisplay")
    for (let classNumber = 0; classNumber<cardClassList.length; classNumber++){
        cardClassList[classNumber].setAttribute("draggable", "true")
        cardClassList[classNumber].addEventListener("click", (event) => {
            alert("card Clicked")
        });
    }
    renderCard(card1, "homeCard")
}

