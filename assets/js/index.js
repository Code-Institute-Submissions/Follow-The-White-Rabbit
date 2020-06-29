
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
const easyCards = ["card01","card02","card03","card04"];
const mediumCards = ["card_1","card_2","card_3","card_4","card_5","card_6"];
const hardCards = ["card1","card2","card3","card4","card5","card6","card7","card8","card9"];
const randomImageArr = ["alice", "cat", "dodo", "caterpillar", "queen", "twins", "king", "madhatter", "oysters"];
const rabbit = ["rabbit"];
let images = [];

/* Function inseriting random pictures into game cards */

// document.getElementsByClassName(".level-card").addEventListener("click", randomPics);

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
        let img = randomImageArr[ images [index] ];
        let imgToPlace = document.getElementById(img);
        document.getElementById(b[index]).appendChild(imgToPlace); 
        index++;
    }
    console.log("images:" + images)
    return images;
}

<<<<<<< HEAD
function rabbitRun(a,b,run) {
=======

/* Idea for timer taken from www.w3schools.com  */
let rabbitRun = [];
function whiteRabbitRun(a,b) {
>>>>>>> origin/rabbitrun
    let i = 0;
    
    while (i < a) { 
        let n = Math.floor(Math.random() * b.length);
        if (rabbitRun.indexOf(n) < 0) {
        rabbitRun.push(n);
        i++;
        }
    }
    
    console.log("rabbitRun: " + rabbitRun);

<<<<<<< HEAD
    
    let index = 0;
    while (index < rabbitRun.length) {
        let card = document.getElementById(b [rabbitRun [index] ] );
        console.log(rabbitRun[index], card);        console.log(rabbitRun);
        let img = rabbitRun [index] ;
        let imageToRemove = document.getElementById(randomImageArr [images[img]]);
        let imageToPlace = document.getElementById(rabbit[0]);
        console.log(images);         console.log(img);         console.log(card, imageToRemove, imageToPlace);
       
            console.log(card);
            card.removeChild(imageToRemove);
            card.appendChild(imageToPlace);
        setTimeout(() => { 
            console.log(card);
            card.appendChild(imageToRemove);
            card.removeChild(imageToPlace);
            
            
        }, 500);  
        
        

        index++;
    }    
    

         


    
=======
    let index = 0;
    let rabbitImg = $("#rabbit");
    let card = b[rabbitRun[index]];  
    
    $("#" + card).find("img:first").hide(); // hide the first image (ie: Alice)
        //debugger; // turn-on to see it work "in action"

    $("#" + card).append($(rabbitImg)).show(); // append White Rabbit image and how him
        //debugger; // turn-on to see it work "in action"
>>>>>>> origin/rabbitrun

    //$("#" + card).find("img:last").remove(); // find White Rabbit image and remove him
        //debugger; // turn-on to see it work "in action"

    // $("#" + card).find("img:first").show(); // find first image and show it (ie: Alice)
        //debugger; // turn-on to see it work "in acti
    
    var myInterval = setInterval(function(){ 
        $("#" + card).find("img:last").remove(); // find White Rabbit image and remove him
        //debugger; // turn-on to see it work "in action"

        $("#" + card).find("img:first").show(); // find first image and show it (ie: Alice)
        //debugger; // turn-on to see it work "in acti
        index++;
         card = b[rabbitRun[index]];
       $("#" + card).find("img:first").hide(); // hide the first image (ie: Alice)
        //debugger; // turn-on to see it work "in action"

       $("#" + card).append($(rabbitImg)).show(); // append White Rabbit image and how him
        //debugger; // turn-on to see it work "in action"
        
        if  (index >= rabbitRun.length) {
            clearInterval(myInterval);
        }
       // $("#" + card).find("img:last").remove(); // find White Rabbit image and remove him
        //debugger; // turn-on to see it work "in action"

        //$("#" + card).find("img:first").show(); // find first image and show it (ie: Alice)
        //debugger; // turn-on to see it work "in acti
        
    }, 1000);
    
<<<<<<< HEAD
    
=======
}
   // while (index < rabbitRun.length) {
        
        // let img = rabbitRun[index];
        // let imageToRemove = document.getElementById(randomImageArr [images[img]]);
        // let imageToPlace = document.getElementById(rabbit[0]);
/*
        $("#" + card).find("img:first").hide(); // hide the first image (ie: Alice)
        debugger; // turn-on to see it work "in action"

        $("#" + card).append($(rabbitImg)).show(); // append White Rabbit image and how him
        debugger; // turn-on to see it work "in action"

        $("#" + card).find("img:last").remove(); // find White Rabbit image and remove him
        debugger; // turn-on to see it work "in action"

        $("#" + card).find("img:first").show(); // find first image and show it (ie: Alice)
        debugger; // turn-on to see it work "in action"

        index++;
    }    
    */
    console.log("function done: " + rabbitRun);
    //return rabbitRun;


/* Capturing players' clicks through game cards  */
let followRabbit = []; // defined globally, not in a function
$(".game-card").on("click", function() {     
    if (followRabbit.length === images.length) {
        return followRabbit;
    } 
    else {
    gameCardID = $(this).attr("id");
    //index = $(".board").indexOf(gameCardID);
    index = easyCards.indexOf(gameCardID);
    followRabbit.push(index);
    }    
    console.log("rabbitRun: " + rabbitRun.length + ": " + rabbitRun);
    console.log("followRabbit: " +followRabbit.length + ": " + followRabbit);
});


/* Comparison of randomly generated White Rabbit run across game cards vs a players' clicks  */
$(".game-card").on("click", function() { 
            if (followRabbit.length == rabbitRun.length && followRabbit.length < rabbitRun.length+1) {
                for (i=0; i < rabbitRun.length; i++) {
                    if (followRabbit[i] === rabbitRun[i]) {  
                       console.log("Caught Me!");
                    }
                    else  {
                    console.log("I am gone! Try again!");
                    }                   
                }
            } 
});


>>>>>>> origin/rabbitrun

