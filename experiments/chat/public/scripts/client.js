var socket = io();
var messageForm = document.querySelector('#messageForm');
var nameForm = document.querySelector('#nameForm');
var user;

messageForm.addEventListener('submit', function(e) {
    e.preventDefault();
    socket.emit('chat message', document.querySelector('#m').value);
    document.querySelector('#m').value = '';
    console.log('submitted');
    return false;
});

nameForm.addEventListener('submit', function(e) {
    e.preventDefault();
    user.name = document.querySelector('#newUsername').value;
    console.log(user);
    socket.emit('name change', user);
})

function switchClasses(selector, newClass, oldClass) {
    var tmpElement = document.querySelector(selector);
    if (oldClass != ''){
        if (tmpElement.classList.contains(oldClass)) {
            tmpElement.classList.remove(oldClass);
        }
    }

    if (newClass != ''){
        tmpElement.classList.add(newClass);
    }
}

function usernamePrompt(show) {
    if (show) {
        switchClasses('.modal', '', 'hide');
        switchClasses('.container', 'hide', '');
    } else {
        switchClasses('.modal', 'hide', '');
        switchClasses('.container', '', 'hide');
    }
}

function updateName() {

}

function newUser() {
    //get value for username
    var username = document.querySelector('#username').value;
    user = new User(username);

    socket.emit('new user', user);
}

function showNameForm() {
    switchClasses('#nameForm', '', 'hide');
}
function changeName() {
    var newName = document.querySelector('#username').value;
    console.log(newName);
    socket.emit('name change', newName);
}
function attachMessage(msg) {
    var li = document.createElement('li');
    li.classList.add('message');
    li.innerText = msg;
    document.querySelector('#messages').appendChild(li);
}
// socket.on('no user', function(msg){
//     usernamePrompt(true);
// })
socket.on('chat message', function(msg) {
   attachMessage(msg);
    console.log(msg);
});
socket.on('connected', function(msg) {
    // var user = {
    //     name: "test"
    // };
    // socket.emit('new user', user);
console.log(msg);
usernamePrompt(false);
    //attachMessage(msg);
});
socket.on('name change', function(user) {
    console.log(user);
    attachMessage('Someone changed their name: ' + user.id);

    document.querySelector('#currName').innerHTML = user.name;
    switchClasses('#nameForm', 'hide', '');
    switchClasses('#currentNameDisplay', '', 'hide');
})