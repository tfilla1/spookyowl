//for simplicity : 2 users, deal out half the deck to each
let deck = [];
let users = [];
let gameplay = [];

let results = '';
setup();
function setup() {
    createDeck();
    users.push(new User('tom', 0, 0));
    users.push(new User('cpu', 1, 0));
    deal(users, deck);

    results += '<p>' + users[0].name + ': ' + users[0].hand.length + '</p>';
    results += '<p>' + users[1].name + ': ' + users[1].hand.length + '</p>';
    document.getElementById('results').innerHTML = results;
    results = '';
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
        //choose who won
        //take cards from loser and put into winner's hands
        //if (tie) then war();
        if (gameplay[0].rank > gameplay[1].rank){
            winner = gameplay[0].name; // + gameplay[0].userNumber;
            var num = gameplay[0].userNumber;
            users[num].hand.push(gameplay[0].card);
            users[num].hand.push(gameplay[1].card);
            //setHand(user[gameplay[0].userNumber].hand)
        } else if (gameplay[1].rank > gameplay[0].rank) {
            winner = gameplay[1].name; //+ gameplay[1].userNumber;
            var num = gameplay[1].userNumber;
            users[num].hand.push(gameplay[0].card);
            users[num].hand.push(gameplay[1].card);
        } else {
            //war
            winner = 'war';
        }
    }

    // let playerOneHandDisplay = '';
    // let playerTwoHandDisplay = '';
    // for (let card = 0; card < users[0].hand.length; card++) {
    //     playerOneHandDisplay += users[0].hand[card].suit + users[0].hand[card].rank + ', ';
    // }
    // for (let card = 0; card < users[1].hand.length; card++) {
    //     playerTwoHandDisplay += users[1].hand[card].suit + users[1].hand[card].rank + ', ';
    // }
    // document.querySelector('#playerOneHandDisplay').innerHTML = playerOneHandDisplay;
    // document.querySelector('#playerTwoHandDisplay').innerHTML = playerTwoHandDisplay;
    gameplay = [];
    results += '<p>' + winner + ' won that round!</p>';
    results += '<p>' + users[0].name + ': ' + users[0].hand.length + '</p>';
    results += '<p>' + users[1].name + ': ' + users[1].hand.length + '</p>';
    document.getElementById('results').innerHTML = results;
    results = '';
    console.log(winner);
}
