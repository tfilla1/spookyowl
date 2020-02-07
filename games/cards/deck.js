//let deck = [];

function createDeck() {
    let available = deckData.cards;
    /*
     - go through deckData.cards (52)
     - add one card to deck
     - remove that card from available
    */ 
    for (var i = 0; i < 52; i++){
        //shuffle and deal
        let cardNumber = Math.floor(Math.random() * (available.length - 1)); 
        //console.log(available);
        //console.log(cardNumber);

        deck.push(available[cardNumber]);
        available.splice(cardNumber, 1);

    }
}

function deal(users, deck) {
    //users is an array of users
    //divide deck between users
    users[0].setHand(deck.slice(0, deck.length/2));
    users[1].setHand(deck.slice(deck.length/2, deck.length));
    
}