class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;

        this.compare = function(other) {
            if (this.value == other) {
                return 0;
            }
            else if (this.value < other ) {
                return -1;
            }
            else if (this.value > other) {
                return 1;
            }
        }
    }

}