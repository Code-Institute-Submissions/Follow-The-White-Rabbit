
console.log("test");

/* Modal loading on page loading 
The code was taken from https://www.tutorialrepublic.com/codelab.php?topic=faq&file=show-bootstrap-modal-on-page-load */ 

/* Choosing difficulty level and closing the modal   */
let modal = document.getElementById('myModal');
let imageE = document.getElementById('imageE');
let imageM = document.getElementById('imageM');
let imageH = document.getElementById('imageH');
let main = document.getElementById('main');
let playerBoard = document.getElementById('player-board');



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
const randomImageArr =["alice", "cat", "dodo", "caterillar", "queen", "twins"];
function setRandomImages(randomImageArr) {
    let num = randomImageArr[Math.floor(Math.random() * randomImageArr.length)];
    document.getElementById("card01").appendChild(num); 
    
}











