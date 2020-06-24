
console.log("test");

/* Modal loading on page loading 
The code was taken from https://www.tutorialrepublic.com/codelab.php?topic=faq&file=show-bootstrap-modal-on-page-load */ 

/* Choosing difficulty level and closing the modal   */
let modal = document.getElementById('myModal'),
 imageE = document.getElementById('imageE'),
 imageM = document.getElementById('imageM'),
 imageH = document.getElementById('imageH'),
 main = document.getElementById('main'),
 playerBoard = document.getElementById('player-board');




$(document).ready(function(){
    $('#imageE').click(function() {
        $('.modal').hide();
        $('#main, #player-board, #game-board-easy').show();
    });   

    $('#imageM').click(function() {
        $('.modal').hide();
        $('#main, #player-board, #game-board-medium').show();
    });

    $('#imageH').click(function() {
        $('.modal').hide();
        $('#main, #main, #player-board, #game-board-hard').show();
    });
});

/* Array of images from assets/images/random folder  --  index.html div id="card-images" */
const e = 4;
const m = 6;
const h = 9;
const easyCards = ["card01","card02","card03","card04"];
const mediumCards = ["card_1","card_2","card_3","card_4","card_5","card_6"];
const hardCards = ["card1","card2","card3","card4","card5","card6","card7","card8","card9"];
const randomImageArr = ["alice", "cat", "dodo", "caterpillar", "queen", "twins", "king", "madhatter", "oysters"];

function randomPics(a,b) {
    let i = 0;
    let images = [];
    while (i < a) { 
        let n = Math.floor(Math.random() * randomImageArr.length);
        if (images.indexOf(n) < 0) {
        images.push(n);
        i++;
        }
        console.log(a);
    }
    let index = 0;
    while (index < images.length) {
        let img = randomImageArr[ images [index] ];
        let imgToPlace = document.getElementById(img);
        document.getElementById(b[index]).appendChild(imgToPlace); 
        index++;
    }
}

/*
function randomPics () {
    let i = 0;
    let images = [];
    while (i < mediumCards.length) { 
        let n = Math.floor(Math.random() * randomImageArr.length);
        if (images.indexOf(n) < 0) {
        images.push(n);
        i++;
        }
    }
    let index = 0;
    while (index < images.length) {
        let img = randomImageArr[ images [index] ];
        let imgToPlace = document.getElementById(img);
        document.getElementById(mediumCards[index]).appendChild(imgToPlace); 
        index++;
    }
}

function randomPics2 () {
    let i = 0;
    let images = [];
    while (i < hardCards.length) { 
        let n = Math.floor(Math.random() * randomImageArr.length);
        if (images.indexOf(n) < 0) {
        images.push(n);
        i++;
        }
    }
    let index = 0;
    while (index < images.length) {
        let img = randomImageArr[ images [index] ];
        let imgToPlace = document.getElementById(img);
        document.getElementById(hardCards[index]).appendChild(imgToPlace); 
        index++;
    }
}
*/










