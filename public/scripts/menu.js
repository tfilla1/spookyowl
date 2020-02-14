var menu = {
    "home" : [
        {
            "title": "games",
            "link" : "/games/"
        },
        {
            "title": "warble",
            "link" : "/warble/",
        },
        {
            "title": "free tacos",
            "link": "/freetacos/",
        }
        // {
        //     "title": "old",
        //     "link": "/old/allthngs",
        // }
    ],
    "games": [
        {
            "title": "baseball",
            "link" : "/games/baseball/"
        },
        // {
        //     "title": "cube",
        //     "link" : "/games/cube/",
        // },
        // {
        //     "title": "hopper",
        //     "link": "/games/hopper/",
        // },
        // {
        //     "title": "flird",
        //     "link": "/games/flird/",
        // },
        {
            "title": "flop",
            "link": "/games/flop/",
        },
        {
            "title": "cards",
            "link": "/games/cards/"
        }
    ],
    "freetacos" : [
        {
            "title": "music",
            "link" : "/freetacos/music/",
        },
        {
            "title": "videos",
            "link": "/freetacos/videos/"
        }
    ],
    "warble" : [
        {
            "title": "more to come",
            "link": "/warble/"
        }
    ]
}
let menuHolder = document.getElementById('menuContent');
function buildMenu () {

    let loc = window.location.pathname;
    let dir = loc.substring(0, loc.lastIndexOf('/'));
    let link, title;
    let page = (dir.replace('/', '') == '' ? 'home' : dir.replace('/', '') )
    //options - games, chorse, free tacos, home (blank)
    if (dir === '' ){
        page = 'home';
    } else {
        if (dir.includes('games')) {
            page = 'games';
        }
        if (dir.includes('warble')) {
            page = 'warble';
        }
        if (dir.includes('freetacos')){
            page = 'freetacos';
        }
    }
    switch (page) {
        case 'home':
            menu.home.forEach(function(elm){
                let element = createMenuElement(elm.link, elm.title);
                menuHolder.appendChild(element);
            })
            break;
        case 'games':
            menu.games.forEach(function(elm){
                let element = createMenuElement(elm.link, elm.title);
                menuHolder.appendChild(element);
            })
            break;
        case 'freetacos':
            menu.freetacos.forEach(function(elm){
                let element = createMenuElement(elm.link, elm.title);
                menuHolder.appendChild(element);
            })
        break;
        case 'warble':
            menu.warble.forEach(function(elm){
                let element = createMenuElement(elm.link, elm.title);
                menuHolder.appendChild(element);
            })
    } 
}

function createMenuElement(link, title) {
    var element = document.createElement('div');
    var anchor = document.createElement('a')
    anchor.href = link;
    anchor.text = title;

    element.appendChild(anchor);
    return element;
}

window.onload =  buildMenu;