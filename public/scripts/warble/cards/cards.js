class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;

        this.compare = function(other) {
            var value;
            if (Array.isArray(this.value) && this.value.length > 1) {
                value = this.value[1];
            } else {
                value = this.value;
            }
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