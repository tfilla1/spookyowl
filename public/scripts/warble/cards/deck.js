class Deck {
    constructor () {
        this.deck = [
            {
                "rank" : "A",
                "suit" : "spade",
                "value" : [1,14]
            },
            {
                "rank" : "A",
                "suit" : "club",
                "value" : [1,14]
            },
            {
                "rank" : "A",
                "suit" : "heart",
                "value" : [1,14]
            },
            {
                "rank" : "A",
                "suit" : "diamond",
                "value" : [1,14]
            },
            {
                "rank" : "2",
                "suit" : "spade",
                "value" : [2]
            },
            {
                "rank" : "2",
                "suit" : "club",
                "value" : [2]
            },
            {
                "rank" : "2",
                "suit" : "heart",
                "value" : [2]
            },
            {
                "rank" : "2",
                "suit" : "diamond",
                "value" : [2]
            },
            {
                "rank" : "3",
                "suit" : "spade",
                "value" : [3]
            },
            {
                "rank" : "3",
                "suit" : "club",
                "value" : [3]
            },
            {
                "rank" : "3",
                "suit" : "heart",
                "value" : [3]
            },
            {
                "rank" : "3",
                "suit" : "diamond",
                "value" : [3]
            },
            {
                "rank" : "4",
                "suit" : "spade",
                "value" : [4]
            },
            {
                "rank" : "4",
                "suit" : "club",
                "value" : [4]
            },
            {
                "rank" : "4",
                "suit" : "heart",
                "value" : [4]
            },
            {
                "rank" : "4",
                "suit" : "diamond",
                "value" : [4]
            },
            {
                "rank" : "5",
                "suit" : "spade",
                "value" : [5]
            },
            {
                "rank" : "5",
                "suit" : "club",
                "value" : [5]
            },
            {
                "rank" : "5",
                "suit" : "heart",
                "value" : [5]
            },
            {
                "rank" : "5",
                "suit" : "diamond",
                "value" : [5]
            },
            {
                "rank" : "6",
                "suit" : "spade",
                "value" : [6]
            },
            {
                "rank" : "6",
                "suit" : "club",
                "value" : [6]
            },
            {
                "rank" : "6",
                "suit" : "heart",
                "value" : [6]
            },
            {
                "rank" : "6",
                "suit" : "diamond",
                "value" : [6]
            },
            {
                "rank" : "7",
                "suit" : "spade",
                "value" : [7]
            },
            {
                "rank" : "7",
                "suit" : "club",
                "value" : [7]
            },
            {
                "rank" : "7",
                "suit" : "heart",
                "value" : [7]
            },
            {
                "rank" : "7",
                "suit" : "diamond",
                "value" : [7]
            },
            {
                "rank" : "8",
                "suit" : "spade",
                "value" : [8]
            },
            {
                "rank" : "8",
                "suit" : "club",
                "value" : [8]
            },
            {
                "rank" : "8",
                "suit" : "heart",
                "value" : [7]
            },
            {
                "rank" : "8",
                "suit" : "diamond",
                "value" : [8]
            },
            {
                "rank" : "9",
                "suit" : "spade",
                "value" : [9]
            },
            {
                "rank" : "9",
                "suit" : "club",
                "value" : [9]
            },
            {
                "rank" : "9",
                "suit" : "heart",
                "value" : [9]
            },
            {
                "rank" : "9",
                "suit" : "diamond",
                "value" : [9]
            },
            {
                "rank" : "10",
                "suit" : "spade",
                "value" : [10]
            },
            {
                "rank" : "10",
                "suit" : "club",
                "value" : [10]
            },
            {
                "rank" : "10",
                "suit" : "heart",
                "value" : [10]
            },
            {
                "rank" : "10",
                "suit" : "diamond",
                "value" : [10]
            },
            {
                "rank" : "J",
                "suit" : "spade",
                "value" : [11]
            },
            {
                "rank" : "J",
                "suit" : "club",
                "value" : [11]
            },
            {
                "rank" : "J",
                "suit" : "heart",
                "value" : [11]
            },
            {
                "rank" : "J",
                "suit" : "diamond",
                "value" : [11]
            },
            {
                "rank" : "Q",
                "suit" : "spade",
                "value" : [12]
            },
            {
                "rank" : "Q",
                "suit" : "club",
                "value" : [12]
            },
            {
                "rank" : "Q",
                "suit" : "heart",
                "value" : [12]
            },
            {
                "rank" : "Q",
                "suit" : "diamond",
                "value" : [12]
            },
            {
                "rank" : "K",
                "suit" : "spade",
                "value" : [13]
            },
            {
                "rank" : "K",
                "suit" : "club",
                "value" : [13]
            },
            {
                "rank" : "K",
                "suit" : "heart",
                "value" : [13]
            },
            {
                "rank" : "K",
                "suit" : "diamond",
                "value" : [13]
            }
        ];
        this.shuffle = function () {
            const temp  = this.deck;
            let m = temp.length, i;

            while(m){
            i = Math.floor(Math.random() * m--);

            [temp[m], temp[i]] = [temp[i], temp[m]];
            }

            console.log(temp);
            return this;
        }
    }
}