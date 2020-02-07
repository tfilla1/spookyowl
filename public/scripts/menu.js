var menu = {
    "home" : [
        {
            "title": "games",
            "link" : "/games/"
        },
        {
            "title": "chorse",
            "link" : "/chorse/",
        },
        {
            "title": "free tacos",
            "link": "/freetacos/",
        },
        {
            "title": "old",
            "link": "/old/allthngs",
        }
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
        {
            "title": "flird",
            "link": "/games/flird/",
        },
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
        if (dir.includes('chorse')) {
            page = 'chorse';
        }
        if (dir.includes('freetacos')){
            page = 'freetacos';
        }
    }
    switch (page) {
        case 'home':
            menu.home.forEach(function(elmt){
                let element = document.createElement('div');
                let anchor = document.createElement('a')
                anchor.href = elmt.link;
                anchor.text = elmt.title;
            
                element.appendChild(anchor);
                menuHolder.appendChild(element);
            })
            break;
        case 'games':
            menu.games.forEach(function(elmt){
                var element = document.createElement('div');
                var anchor = document.createElement('a')
                anchor.href = elmt.link;
                anchor.text = elmt.title;
            
                element.appendChild(anchor);
                menuHolder.appendChild(element);
            })
            break;
        case 'freetacos':
            menu.freetacos.forEach(function(elmt){
                var element = document.createElement('div');
                var anchor = document.createElement('a')
                anchor.href = elmt.link;
                anchor.text = elmt.title;
            
                element.appendChild(anchor);
                menuHolder.appendChild(element);
            })

        break;

    } 
}


window.onload =  buildMenu;