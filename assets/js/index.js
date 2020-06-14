
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

$('#imageE').click(function() {
    easyLevel();
});

$('#imageM').click(function() {
    mediumLevel();
});

$('#imageH').click(function() {
    hardLevel();
});

function easyLevel() {
    $('.modal').addClass('invisible').removeClass('visible');
    $('#main').addClass('visible').removeClass('invisible');
    $('#player-board').addClass('visible').removeClass('invisible');
    $('#game-board-easy').addClass('visible').removeClass('invisible');
  
}

function mediumLevel() {
    $('.modal').addClass('invisible').removeClass('visible');
    $('#main').addClass('visible').removeClass('invisible');
    $('#player-board').addClass('visible').removeClass('invisible');
    $('#game-board-medium').addClass('visible').removeClass('invisible');
}

function hardLevel() {
    $('.modal').addClass('invisible').removeClass('visible');
    $('#main').addClass('visible').removeClass('invisible');
    $('#player-board').addClass('visible').removeClass('invisible');
    $('#game-board-hard').addClass('visible').removeClass('invisible');
}





