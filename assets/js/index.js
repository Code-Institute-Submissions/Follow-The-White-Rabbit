/* Array of images from assets/images/random folder  --  index.html div id="card-images" */
var images = [];
const easyCards = ["card01","card02","card03","card04"],
 mediumCards = ["card_1","card_2","card_3","card_4","card_5","card_6"],
 hardCards = ["card1","card2","card3","card4","card5","card6","card7","card8","card9"],
 randomImageArr = ["alice", "cat", "dodo", "caterpillar", "queen", "twins", "king", "madhatter", "oysters"];

/* Choosing difficulty level and closing the modal   */
let modal = document.getElementById('myModal'),
 a, 
 b, 
 board, // Reference from Level divs to cardsArrays[easyCards, mediumCards, HardCards]
 clicksCounterEasy = 4,
 clicksCounterMedium = 6,
 clicksCounterHard = 9,
 speed = 350,
 level,
 score = 0,
 silence = false;

 /* Initial page load with level images, Difficulty level choice function, which generates randomly 4/6/9 pics  */
$(document).ready(function(){
    $(".level-image").on("click", function() {    
        let levelImg = $(this).attr("id");
        if (levelImg === "imageE") { 
            b = easyCards;
          	a = b.length;
            level = "#game-board-easy";
            clicksCounter = clicksCounterEasy;
            $("#pic_E").addClass("active"); // Make current level unclickable
            $("#pic_M, #pic_H").addClass("inactive"); //Show which level is currently active
        }
        if (levelImg === "imageM") { 
            b = mediumCards;
          	a = b.length; 
          	level = "#game-board-medium"; 
            clicksCounter = clicksCounterMedium;
            $("#pic_M").addClass("active"); // Make current level unclickable
            $("#pic_E, #pic_H").addClass("inactive"); 
        }
        if (levelImg === "imageH") { 
            b = hardCards;
          	a = b.length;
          	level = "#game-board-hard";
            clicksCounter = clicksCounterHard; 
            $("#pic_H").addClass("active"); // Make current level unclickable
            $("#pic_E, #pic_M").addClass("inactive"); 
        }
        $(modal).hide();
        $("#main, #player-board").show();
        $(level).show(); // shows level game cards board - 4, 6 or 9 cards
        randomPics(a,b); // generates random images into game cards
        $(".game-card, .card-image").css({"pointer-events": "none"}); // makes cards unclickable till Play button is clicked
        $("#btn-footer").show();  // show button for copyright info, which opens a modal with it
        board = b;
        playSound("#level-choice"); // INITIAL Level choice sound
        return board, level;
    }); 
});  

/* Switching between difficulty levels on the player info board  */
$(".info-level-image").on("click", function() { 
        let currentBoard;
        if (board.length === 4) { currentBoard = "#game-board-easy"; }
        if (board.length === 6) { currentBoard = "#game-board-medium"; } 
        if (board.length === 9) { currentBoard = "#game-board-hard";  }
        
        let index = 0; // while loop removes images from the board to be closed, so that if it is reopened, images are not double inserted
        while (index < board.length) { 
            let card = board[index];
            $("#" + card).find("img:last").remove();
        index++;    
        }
        $(currentBoard).hide(); // current card board is hidden
        
        let levelImg = $(this).attr("id");
        if (levelImg === "pic_E") { 
          	b = easyCards;
            a = b.length;
            level = "#game-board-easy"; }
        if (levelImg === "pic_M")  { 
          	b = mediumCards;
          	a = b.length;
          	level = "#game-board-medium"; } 
        if (levelImg === "pic_H") { 
          	b = hardCards;
          	a = b.length;
          	level = "#game-board-hard"; } 
        board = b;
        $(level).show(); //  new card board is shown
        images = [];
        rabbitRun = [];
        followRabbit = [];
        score = 0;  // Score count to zero upon level switch
        $("#score").text(score); 
        // Below: makes PlayButton active, in case it was clicked on any board and became inactive, then levels switched, 
        //  and switched back to the first board, so PlayButton does not stay deactivated
        $(".btn-play").prop("disabled",false).removeClass("btn-outline-success").addClass("btn-success"); 
        randomPics(a,b); // inserts new set of randomly generated images into the new card board "level"
        playSound("#level-change");
        return board;
});  

/* Highelight level button/image which is currently active */
$(".info-level-image").on("click", function() {
    let levelImg = $(this).attr("id");
    if (levelImg === "pic_E") {
        $("#pic_E").removeClass("inactive").addClass("active"); //show which level is currently active
        $("#pic_M, #pic_H").removeClass("active").addClass("inactive");
    }
    if (levelImg === "pic_M") {
        $("#pic_M").removeClass("inactive").addClass("active"); //show which level is currently active
        $("#pic_E, #pic_H").removeClass("active").addClass("inactive"); 
    }
    if (levelImg === "pic_H") {
        $("#pic_H").removeClass("inactive").addClass("active"); //show which level is currently active
        $("#pic_E, #pic_M").removeClass("active").addClass("inactive");
    }
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
    return images;
}

/* Function calculates a random pattern to insert WhiteRabbit image across game cards */
let rabbitRun = [];
$(".btn-play").on("click", function() { 
     // To give some time between pressing Play and start of Rabbit Run
        let btnId = $(this).attr("id");
        if (btnId === "btn-play-easy") { 
            b = easyCards;
            a = easyCards.length;
            playSound("#steps-4");  //Sound for Rabbit Run             
        }
        if (btnId === "btn-play-medium") { 
            b = mediumCards;
            a = mediumCards.length;
            playSound("#steps-6");  //Sound for Rabbit Run 
        }
        if (btnId === "btn-play-hard") { 
            b = hardCards;
            a = hardCards.length;
            playSound("#steps-9");  //Sound for Rabbit Run 
            }
        
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
        let card = b[rabbitRun[index]];  
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
    console.log("rabbitRun: " + rabbitRun);
    return rabbitRun;
    // Finish - Code here was writtne with help from tutors: Stephen & Tim
});

/*  Identifier, clicks from which difficulty level to capture, for followRabbit below  */
$(".board").on("click", function() {    
    let boardId = $(this).attr("id");
    if (boardId === "game-board-easy") { board = easyCards; }
    if (boardId === "game-board-medium") { board = mediumCards; }
    if (boardId === "game-board-hard") { board = hardCards; }
    return board;
});

/* Capturing players' clicks through game cards  */
let followRabbit = []; 
let index;
$(".game-card").on("click", function() {     
    playSound("#cardClick"); //Game card click sound 
    if (followRabbit.length === images.length) 
        return followRabbit;
    else
        index = board.indexOf($(this).attr("id"));
        followRabbit.push(index);
});

/* Makes cards-images inactive after respectively 4-6-9 clicks  */
$(".game-card").on("click", function() {     
    if (followRabbit.length === images.length) 
    { $(".game-card, .card-image").css({"pointer-events": "none"}); }    
});

/* Comparison of randomly generated White Rabbit run across game cards vs players' clicks  */
/* JSON.stringify code taken from here https://attacomsian.com/blog/javascript-compare-arrays */
$(".game-card").on("click", function() { 
    if (followRabbit.length === rabbitRun.length && JSON.stringify(followRabbit) === JSON.stringify(rabbitRun))
        {  displayModal("#win-modal"); }
    if (followRabbit.length === rabbitRun.length && JSON.stringify(followRabbit) !== JSON.stringify(rabbitRun))
        { displayModal("#lose-modal"); }
});

/* Delay in showing win-lose modal after last cards has been clicked */
function displayModal(id) {
    setTimeout(function() {
        $(id).modal("show");
        if (id === "#win-modal") {
            playSound("#win") ; //WIN Modal sound
        }
        if (id === "#lose-modal") {
            playSound("#lose"); // LOSE Modal sound
        }
    }, 300);
}

/*  Game rules modal loading + sound */
$(".btn-rules").on("click", function() {
    $("#rules").modal("show");
    playSound("#rulesModal"); //RULES Modal opening sound
});

/* Clicks countdown setup for a new game, for each game board, PLay Button is deactivated, reset button re-activated after Rabbit Run is finished  */
let clicksCounter;
$(".btn-play").on("click", function() {    
    $(this).prop("disabled",true).css({"color":"white"}).addClass("btn-outline-success"); // deactivate Play button when game cards are active
    $(".btn-reset").prop("disabled",true); // Reset button is de-activated for the period of Rabbit Run
    let btnId = $(this).attr("id");
    if (btnId == "btn-play-easy") { clicksCounter = clicksCounterEasy,
        setTimeout(function() {
            $(".game-card, .card-image").css({"pointer-events": "auto"}); // Game cards activation 
            $(".btn-reset").prop("disabled",false); // Reset button is activated for the period of Rabbit Run
        }, speed*4); } // Delayed activation of game cards, so a player cannot click while Rabbit Run
    if (btnId == "btn-play-medium") { clicksCounter = clicksCounterMedium, 
        setTimeout(function() {
            $(".game-card, .card-image").css({"pointer-events": "auto"}); // Game cards activation 
            $(".btn-reset").prop("disabled",false); // Reset button is activated for the period of Rabbit Run
        }, speed*6); } // Delayed activation of game cards, so a player cannot click while Rabbit Run
    if (btnId == "btn-play-hard") { clicksCounter = clicksCounterHard, 
        setTimeout(function() {
            $(".game-card, .card-image").css({"pointer-events": "auto"}); // Game cards activation 
            $(".btn-reset").prop("disabled",false); // Reset button is activated for the period of Rabbit Run
        }, speed*9); } // Delayed activation of game cards, so a player cannot click while Rabbit Run
});

/* Resetting clicks countdown on closing the win-lose modal, switching levels */
$(".btn-reset, .btn-modal, .info-level-image, .level-card").on("click", function() {    
    if (board === easyCards) { clicksCounter = clicksCounterEasy; } 
    if (board === mediumCards) { clicksCounter = clicksCounterMedium; }
    if (board === hardCards) { clicksCounter = clicksCounterHard; }
    $('.click-counter').text(clicksCounter);
});

/* Cicks countdown while a player is clicking through cards */
$(".game-card").on("click", function() {
    clicksCounter--;
    let countedClicks = (clicksCounter);
    $('.click-counter').text(countedClicks);
});

/* Resetting the whole game board on closing the win-lose modal */
$(".btn-reset, .btn-modal").on("click", function() {
        index = 0; 
  		let card;
        while (index < board.length) {
            card = board[index];
            $("#" + card).find("img:last").remove();
        index++;    
        }
        images = [];
        rabbitRun = [];
        followRabbit = [];
        $(".btn-play").prop("disabled",false).removeClass("btn-outline-success").addClass("btn-success");
        $(".game-card,.card-image").css({"pointer-events": "none"});
        randomPics(a,b);  
});  

/* Sound for game cards reset */
$(".btn-reset").on("click", function() {
    playSound("#resetSound");
});

/* Calculating score on closing modal */
$(".btn-modal, .close-modal").on("click", function() {
    let btn = $(this).attr("id");
    if (btn === "modal-btn-win") { score++; }
    if ((btn === "modal-btn-lose" && score > 0)) { score--; }
    $("#score").text(score);    
    playSound("#close-modal"); // CLOSE Modal sound
});

/* Modal suggesting to go a level up  */
$("#modal-btn-win").on("click", function() {
    if (score === 7 && (board === easyCards || board === mediumCards)) { 
        setTimeout(function() {
            displayModal("#levelUp");
            playSound("#level-up");    
    }, 800); } 

    if (score === 7 && board === hardCards) { 
        setTimeout(function() {
            displayModal("#finalWin");
            playSound("#final-win");
    }, 800); } 
});

/* Sound to open copyright info & mute off button  */
$("#btn-footer, .btn-sound").on("click", function() {
    playSound("#close-modal");
});

/* Mute On / Off button function */
$('.btn-sound').click(function() {
    let allaudio = $('audio');
    if (silence) {
        for (let j = 0; j < allaudio.length; j++) {
            allaudio[j].muted = false;
        }
        silence = false;
    }
    else {
        for (let j = 0; j < allaudio.length; j++) {
            allaudio[j].muted = true;
        }
        silence = true;
    }
    $('.btn-sound i').toggleClass('fa fa-volume-off');
});

function playSound(id) {
    $(id)[0].currentTime = 0; 
    $(id)[0].play();
}