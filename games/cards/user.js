class User {
    constructor(name, userNumber) {
        this.hand = [];
        this.name = name;
        this.userNumber = userNumber;
        this.setHand = function(hand) {
            this.hand = hand;
        }

        this.showHand = function() {
            console.log(this.hand);
            document.getElementById('displayHand').innerText = 'open console';
        }

        this.play = function () {
            //play top card
            gameplay.push({ name: this.name, 
                            userNumber: this.userNumber, 
                            card: { rank: this.hand[0].rank, suit: this.hand[0].suit, value: this.hand[0].value } , 
                            rank: this.hand[0].value[0] 
                        });
            results += '<p>' + this.name + ' - ' + this.hand[0].suit + " : " + this.hand[0].rank + '</p>';
            this.hand.splice(0,1);
    
        }
    }

}