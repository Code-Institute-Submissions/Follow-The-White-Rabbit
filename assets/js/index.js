
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
const mediumCards = ["card_1","card_2","card_3","card_4","card_5","card_6"]
const randomImageArr = ["alice", "cat", "dodo", "caterpillar", "queen", "twins", "king", "madhatter", "oysters"];
function setRandomImages() {
    let randomNum = [];
    let i = 0;
    while (i < 4) {
    let num = Math.floor(Math.random() * randomImageArr.length);
    if (randomNum.indexOf(num) < 0) {
    i++;
    }
    
    console.log(num);
    console.log(randomNum);
    }

    let img = randomImageArr[ num ];
    console.log(img);
    let imgToPlace = document.getElementById(img);
    document.getElementById("card01").appendChild(imgToPlace); 
    
}

function randomPics () {
    let i = 0;
    let images = [];
    while (i < m) { 
        let n = Math.floor(Math.random() * randomImageArr.length);
        console.log(n);
        if (images.indexOf(n) < 0) {
        images.push(n);
        i++;
        }
    }
    console.log(images);
    let index = 0;
    while (index < images.length) {
        let img = randomImageArr[ images [index] ];
        console.log(index);
        let imgToPlace = document.getElementById(img);
        document.getElementById(mediumCards[index]).appendChild(imgToPlace); 
        index++;
    }
}











