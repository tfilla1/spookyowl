//for simplicity : 2 users, deal out half the deck to each
let deck = [];
let users = [];
let gameplay = [];
let results = '';
setup();
function setup() {
    createDeck();
    users.push(new User('tom', 0));
    users.push(new User('cpu', 1));
    deal(users, deck);
    console.log(users);
    console.log(deck);
}
document.getElementById('playButton').addEventListener('click', function(){
    users[0].play();
    users[1].play();
    check();
})
function check() {
    let winner = '';
    if (gameplay.length > 0){
        if (gameplay[0].rank > gameplay[1].rank){
            winner = gameplay[0].name + gameplay[0].userNumber;
            var num = gameplay[0].userNumber;
            var newHand = users[num].hand.push(gameplay[0].card);
            var newHand = users[num].hand.push(gameplay[1].card);
            console.log(newHand);
            //setHand(user[gameplay[0].userNumber].hand)

        } else if (gameplay[1].rank > gameplay[0].rank) {
            winner = gameplay[1].name + gameplay[1].userNumber;
            var num = gameplay[1].userNumber;
            var newHand = users[num].hand.push(gameplay[0].card);
            var newHand = users[num].hand.push(gameplay[1].card);
            console.log(newHand);
        } else {
            //war
            winner = 'war';
        }
    }
    gameplay = [];
    results += '<p>' + winner + '</p>';
    document.getElementById('results').innerHTML = results;
    results = '';
    console.log(winner);
}
