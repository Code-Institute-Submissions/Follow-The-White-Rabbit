/* Modal loading on page loading 
The code was taken from https://www.tutorialrepublic.com/codelab.php?topic=faq&file=show-bootstrap-modal-on-page-load */ 

/* Choosing difficulty level and closing the modal   */
let modal = document.getElementById('myModal'),
 imageE = document.getElementById('imageE'),
 imageM = document.getElementById('imageM'),
 imageH = document.getElementById('imageH'),
 main = document.getElementById('main'),
 playerBoard = document.getElementById('player-board'),
 board, // Reference from Level divs to cardsArrays[easyCards, mediumCards, HardCards]
 clicksCounterEasy = 4,
 clicksCounterMedium = 6,
 clicksCounterHard = 9;

/* Initial page load with level images, Difficulty level choice function, which generates randomly 4/6/9 pics  */
$(document).ready(function(){
    $(".level-image").on("click", function() {    
        let level = $(this).attr("id");
        if (level == "imageE") b = easyCards, a = b.length, c = "#game-board-easy";
        if (level == "imageM") b = mediumCards, a = b.length, c = "#game-board-medium"; 
        if (level == "imageH") b = hardCards, a = b.length, c = "#game-board-hard"; 
       $('#myModal').hide();
       $("#main, #player-board").show();
       $(c).show();
       randomPics(a,b);
       $(".game-card,.card-image").css({"pointer-events": "none"});       
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
    while (i < a) { 
        let n = Math.floor(Math.random() * randomImageArr.length);
        if (images.indexOf(n) < 0) {
        images.push(n);
        i++;
        }
    }
    console.log("from randomPics 1: " + images)
    let index = 0;
    while (index < images.length) {
        console.log("images from while: " + images)
        //let img = randomImageArr[ images [index] ];
        let imgToPlace = document.getElementById(randomImageArr[ images [index] ]);
        let img = imgToPlace.cloneNode(true);
        console.log(imgToPlace);
        console.log(b[index]);
        document.getElementById(b[index]).appendChild(img); 
        index++;
    } console.log("from randomPics 2: " + images);
}

/* Function calculates a random pattern to insert WhiteRabbit image across game cards */
let rabbitRun = [];
$(".btn-play").on("click", function() {    
    let btnId = $(this).attr("id");
    if (btnId == "btn-play-easy") b = easyCards, a = easyCards.length; 
    if (btnId == "btn-play-medium") b = mediumCards, a = mediumCards.length; 
    if (btnId == "btn-play-hard") b = hardCards, a = hardCards.length; 
    
    let i = 0;
    while (i < a) { 
        let n = Math.floor(Math.random() * b.length);
        if (rabbitRun.indexOf(n) < 0) {
        rabbitRun.push(n);
        i++;
        }
        console.log("rabbitRun 1: " + rabbitRun);
    }
    
    // START - Code here was written with help from tutors: Stephen & Tim  
    let index = 0, 
     rabbitImg = $("#rabbit").clone();
     console.log(rabbitImg);
     card = b[rabbitRun[index]];  
        $("#" + card).find("img:first").hide(); // hide the first image 
        console.log("img:first");
        $("#" + card).append($(rabbitImg)).show(); // append White Rabbit image and how him
    var myInterval = setInterval(function(){ 
        $("#" + card).find("img:last").remove(); // find White Rabbit image and remove him
        console.log("img:last");
        $("#" + card).find("img:first").show(); // find first image and show it 
        console.log("rabbitRun 2: " + rabbitRun);
            index++;
            card = b[rabbitRun[index]];
            
        $("#" + card).find("img:first").hide(); // hide the first image
        $("#" + card).append($(rabbitImg)).show(); // append White Rabbit image and hide it
        console.log("rabbitRun 3: " + rabbitRun);
       if  (index >= rabbitRun.length) {
            clearInterval(myInterval);
        }      
    }, 500);
    console.log("rabbitRun 4: " + rabbitRun);
    return rabbitRun;
    
    // finish - Code here was writtne with help from tutors: Stephen & Tim  
});

/*  Identifier, clicks from which difficulty level to capture, for followRabbit below  */
$(".board").on("click", function() {    
    let boardId = $(this).attr("id");
    if (boardId == "game-board-easy") board = easyCards;
    if (boardId == "game-board-medium") board = mediumCards;
    if (boardId == "game-board-hard") board = hardCards;
    
    // $('.btn-play').fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.5); });
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

/* Comparison of randomly generated White Rabbit run across game cards vs players' clicks  */
// JSON.stringify code taken from here https://attacomsian.com/blog/javascript-compare-arrays
$(".game-card").on("click", function() { 
    if (followRabbit.length === rabbitRun.length && JSON.stringify(followRabbit) === JSON.stringify(rabbitRun))
        displayModal("#win-modal", "#caughtMe");
    if (followRabbit.length === rabbitRun.length && JSON.stringify(followRabbit) !== JSON.stringify(rabbitRun))
        displayModal("#lose-modal, #rabbitIsGone");
    
});

function displayModal(id) {
    setTimeout(function() {
        $(id).modal("show")
    }, 300);
}

/* Clicks countdown setup for each game boards */
let clicksCounter;
$(".btn-play").on("click", function() {    
     $(this).prop("disabled",true).css({"color":"white"}).addClass("btn-outline-success");
    // $(this).removeClass(".active");
    let btnId = $(this).attr("id");
    if (btnId == "btn-play-easy") clicksCounter = clicksCounterEasy; 
    if (btnId == "btn-play-medium") clicksCounter = clicksCounterMedium;
    if (btnId == "btn-play-hard") clicksCounter = clicksCounterHard;
    $(".game-card, .card-image").css({"pointer-events": "auto"});
});

/* Resetting clicks countdown on closing the win-lose modal */
$(".btn-reset, .btn-modal").on("click", function() {    
    if (board == easyCards) clicksCounter = clicksCounterEasy; 
    if (board == mediumCards) clicksCounter = clicksCounterMedium;
    if (board == hardCards) clicksCounter = clicksCounterHard;
    $('.click-counter').text("Clicks left: " + clicksCounter);
});

/* Cicks countdown while a player is clicking through cards */
$(".game-card").on("click", function() {
    clicksCounter--;
    let countedClicks = ("Clicks left: " + clicksCounter);
    $('.click-counter').text(countedClicks);
});

/* Resetting the whole game board on closing the win-lose modal */
$(".btn-reset, .btn-modal").on("click", function() {
        index = 0; 
        while (index < board.length) {
            card = board[index];
            $("#" + card).find("img:last").remove();
        index++;    
        }
        images = [];
        rabbitRun = [];
        followRabbit = [];
        $(".btn-play").prop("disabled",false).removeClass("btn-outline-success").addClass("btn-success");
        
        // $(".btn-play").addClass(".active"); maybe add active class to the button???? 
        $(".game-card,.card-image").css({"pointer-events": "none"});
        randomPics(a,b);  
});  