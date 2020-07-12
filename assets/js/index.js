/* Modal loading on page loading 
The code was taken from https://www.tutorialrepublic.com/codelab.php?topic=faq&file=show-bootstrap-modal-on-page-load */ 

/* Array of images from assets/images/random folder  --  index.html div id="card-images" */
const easyCards = ["card01","card02","card03","card04"];
const mediumCards = ["card_1","card_2","card_3","card_4","card_5","card_6"];
const hardCards = ["card1","card2","card3","card4","card5","card6","card7","card8","card9"];
const randomImageArr = ["alice", "cat", "dodo", "caterpillar", "queen", "twins", "king", "madhatter", "oysters"];
var images = [];

/* Choosing difficulty level and closing the modal   */
let modal = document.getElementById('myModal'),
 imageE = document.getElementById('imageE'),
 imageM = document.getElementById('imageM'),
 imageH = document.getElementById('imageH'),
 main = document.getElementById('main'),
 playerBoard = document.getElementById('player-board'),
 userName,
 board, // Reference from Level divs to cardsArrays[easyCards, mediumCards, HardCards]
 clicksCounterEasy = 4,
 clicksCounterMedium = 6,
 clicksCounterHard = 9,
 speed = 500,
 level,
 score = 0;

function getUserName() {
	    userName = $('#username').val();
	    localStorage.setItem("userName", userName);
        $('.username').text(userName);
}

/* Initial page load with level images, Difficulty level choice function, which generates randomly 4/6/9 pics  */
$(document).ready(function(){
    $(".level-image").on("click", function() {    
        let levelImg = $(this).attr("id");
        if (levelImg == "imageE") b = easyCards, a = b.length, level = "#game-board-easy";
        if (levelImg == "imageM") b = mediumCards, a = b.length, level = "#game-board-medium"; 
        if (levelImg == "imageH") b = hardCards, a = b.length, level = "#game-board-hard"; 
        getUserName();
        if ((userName != null) && (userName != "Player") && (userName != "")) {
            $('#myModal').hide();
            $("#main, #player-board").show();
            $(level).show(); // shows level game board
            randomPics(a,b); // generates random images into game cards
            $(".game-card,.card-image").css({"pointer-events": "none"}); // makes cards unclickable till Play button is clicked
        }
        board = b;
        return board, level;
    }); 
});  

/* Change Level funciton  */
$(".info-level-image").on("click", function() { 
        console.log("level: " + level)
        let board = level;
        console.log("board: " + board)
        let levelImg = $(this).attr("id");
        if (levelImg == "pictureE") b = easyCards, a = b.length, level = "#game-board-easy";
        if (levelImg == "pictureM") b = mediumCards, a = b.length, level = "#game-board-medium"; 
        if (levelImg == "pictureH") b = hardCards, a = b.length, level = "#game-board-hard"; 
       console.log(levelImg);
       console.log("level: " + level);
       $(board).hide();
       $(level).show();
       randomPics(a,b);
       $(".game-card,.card-image").css({"pointer-events": "none"});       
    }); 

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
    
    let index = 0;
    while (index < images.length) {   
        let imgToPlace = document.getElementById(randomImageArr[ images [index] ]);
        let img = imgToPlace.cloneNode(true);
        document.getElementById(b[index]).appendChild(img); 
        index++;
    }
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
    }
    
    // START - Code here was written with help from tutors: Stephen & Tim  
    let index = 0, 
     rabbitImg = $("#rabbit").clone();
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
    }, speed);
    return rabbitRun;
    // finish - Code here was writtne with help from tutors: Stephen & Tim  
});

/*  Identifier, clicks from which difficulty level to capture, for followRabbit below  */
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

/* Comparison of randomly generated White Rabbit run across game cards vs players' clicks  */
// JSON.stringify code taken from here https://attacomsian.com/blog/javascript-compare-arrays
$(".game-card").on("click", function() { 
    if (followRabbit.length === rabbitRun.length && JSON.stringify(followRabbit) === JSON.stringify(rabbitRun))
        displayModal("#win-modal", "#caughtMe");
    if (followRabbit.length === rabbitRun.length && JSON.stringify(followRabbit) !== JSON.stringify(rabbitRun))
        displayModal("#lose-modal, #rabbitIsGone");
    
});

// Delay in showing win-lose modal //
function displayModal(id) {
    setTimeout(function() {
        $(id).modal("show")
    }, 300);
}

/* Clicks countdown setup for a new game, for each game board  */
let clicksCounter;
$(".btn-play").on("click", function() {    
    $(this).prop("disabled",true).css({"color":"white"}).addClass("btn-outline-success");
    $(".btn-reset").prop("disabled",true);
    let btnId = $(this).attr("id");
    if (btnId == "btn-play-easy") clicksCounter = clicksCounterEasy,
        setTimeout(function() {
            $(".game-card, .card-image").css({"pointer-events": "auto"});
            $(".btn-reset").prop("disabled",false);
        }, speed*4); // Delayed activation of game cards, so a player cannot click while Rabbit Run
    if (btnId == "btn-play-medium") clicksCounter = clicksCounterMedium, 
        setTimeout(function() {
            $(".game-card, .card-image").css({"pointer-events": "auto"});
            $(".btn-reset").prop("disabled",false);
        }, speed*6); // Delayed activation of game cards, so a player cannot click while Rabbit Run
    if (btnId == "btn-play-hard") clicksCounter = clicksCounterHard, 
        setTimeout(function() {
            $(".game-card, .card-image").css({"pointer-events": "auto"});
            $(".btn-reset").prop("disabled",false);
        }, speed*9); // Delayed activation of game cards, so a player cannot click while Rabbit Run
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

/*
//Additing click reaction to a game card
$(".game-card").on("click", function() {
    let card = $(this).attr("id");
    $(card).css({"border":"orange solid 2px"});
    console.log(card);
    setTimeout(function() {
        $(card).css({"border":"white solid 2px"});
        console.log(card);
    }, 2000);
});  */

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

/* Calculating score on closing modal */
$(".btn-modal").on("click", function() {
    let btn = $(this).attr("id");
    console.log(btn);
    if (btn == "modal-btn-win") score++, console.log(score);
    if ((btn == "modal-btn-lose" && score > 0)) score--, console.log(score);
    $(".score").text(score);    
    console.log(score);
});