
console.log("test");

/* Modal loading on page loading 
The code was taken from https://www.tutorialrepublic.com/codelab.php?topic=faq&file=show-bootstrap-modal-on-page-load */ 

/* Choosing difficulty level and closing the modal   */
let modal = document.getElementById('myModal'),
 imageE = document.getElementById('imageE'),
 imageM = document.getElementById('imageM'),
 imageH = document.getElementById('imageH'),
 main = document.getElementById('main'),
 playerBoard = document.getElementById('player-board'),
 board; // Reference from Level divs to cardsArrays[easyCards, mediumCards, HardCards]

$(document).ready(function(){
    $('#imageE').click(function() {

        $('.modal').hide();
        $('#main, #player-board, #game-board-easy').show();
        randomPics(easyCards.length,easyCards);
    });   

    $('#imageM').click(function() {
        $('.modal').hide();
        $('#main, #player-board, #game-board-medium').show();
        randomPics(mediumCards.length,mediumCards);
    });

    $('#imageH').click(function() {
        $('.modal').hide();
        $('#main, #main, #player-board, #game-board-hard').show();
        randomPics(hardCards.length,hardCards);
    });
});

/* Array of images from assets/images/random folder  --  index.html div id="card-images" */
const easyCards = ["card01","card02","card03","card04"];
const mediumCards = ["card_1","card_2","card_3","card_4","card_5","card_6"];
const hardCards = ["card1","card2","card3","card4","card5","card6","card7","card8","card9"];
const randomImageArr = ["alice", "cat", "dodo", "caterpillar", "queen", "twins", "king", "madhatter", "oysters"];



var images = [];
/* Function inseriting random pictures into game cards */
function randomPics(a,b) {
    
    let i = 0;
    console.log("from randomPics 1: " + images)
    while (i < a) { 
        let n = Math.floor(Math.random() * randomImageArr.length);
        console.log("n: " + n);
        if (images.indexOf(n) < 0) {
        images.push(n);
        i++;
        }
        console.log("from randomPics 2: " + images)
    }
    console.log("from randomPics 3: " + images)
    let index = 0;
    while (index < images.length) {
        let img = randomImageArr[ images [index] ];
        let imgToPlace = document.getElementById(img);
        console.log(b[index]);
        document.getElementById(b[index]).appendChild(imgToPlace); 
        index++;
    }
}

function reset(b){
    console.log("reset");
    let index = 0;
    while (index < images.length) {
        let img = randomImageArr[ images [index] ];
        let imgToPlace = document.getElementById(img);
        document.getElementById(b[index]).removeChild(imgToPlace); 
        index++;
    }
    images.length = 0;
    console.log("from reset:" + images); 
    
    return randomPics();
    return images;
}

let rabbitRun = [];
function whiteRabbitRun(a,b) {
    let i = 0;
    while (i < a) { 
        let n = Math.floor(Math.random() * b.length);
        if (rabbitRun.indexOf(n) < 0) {
        rabbitRun.push(n);
        i++;
        }
    }
        console.log("rabbitRun: " + rabbitRun);
    
    /* START - Code here was written with help from tutors: Stephen & Tim  */
    let index = 0, 
     rabbitImg = $("#rabbit"),
     card = b[rabbitRun[index]];  
        $("#" + card).find("img:first").hide(); // hide the first image 
        $("#" + card).append($(rabbitImg)).show(); // append White Rabbit image and how him
    var myInterval = setInterval(function(){ 
        $("#" + card).find("img:last").remove(); // find White Rabbit image and remove him
        $("#" + card).find("img:first").show(); // find first image and show it 
            index++;
            card = b[rabbitRun[index]];
        $("#" + card).find("img:first").hide(); // hide the first image
        $("#" + card).append($(rabbitImg)).show(); // append White Rabbit image and hide it
        
       if  (index >= rabbitRun.length) {
            clearInterval(myInterval);
        }      
    }, 500);
    return rabbitRun;
    
}
   /* finish - Code here was writtne with help from tutors: Stephen & Tim  */



$(".board").on("click", function() {    
    let boardId = $(this).attr("id");
    if (boardId == "game-board-easy") board = easyCards;
    if (boardId == "game-board-medium") board = mediumCards;
    if (boardId == "game-board-hard") board = hardCards;
});

/* Capturing players' clicks through game cards  */
let followRabbit = []; 
$(".game-card").on("click", function() {     
    if (followRabbit.length === images.length) 
        return followRabbit;
    else 
        index = board.indexOf($(this).attr("id"));
        followRabbit.push(index);
});
console.log()

/* Comparison of randomly generated White Rabbit run across game cards vs players' clicks  */
$(".game-card").on("click", function() { 
    if (followRabbit.length == rabbitRun.length && followRabbit.length < rabbitRun.length+1) {
        for (i=0; i < rabbitRun.length; i++) {
            if (followRabbit[i] === rabbitRun[i])  
                console.log("Caught Me!");
            else 
                console.log("I am gone! Try again!");
        }
    } 
});



