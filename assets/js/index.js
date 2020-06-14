
console.log("test");

/* Modal loading on page loading 
The code was taken from https://www.tutorialrepublic.com/codelab.php?topic=faq&file=show-bootstrap-modal-on-page-load */ 



let modal = document.getElementById('myModal');
let imageE = document.getElementById('imageE');
let imageM = document.getElementById('imageM');
let imageH = document.getElementById('imageH');
let main = document.getElementById('main');
let playerBoard = document.getElementById('player-board');

$('#imageE').click(function() {
    easyLevel();
});

function easyLevel() {
    $('.modal').addClass('invisible').removeClass('visible');
    $('#main').addClass('visible').removeClass('invisible');
    $('#player-board').addClass('visible').removeClass('invisible');
    $('#game-board-hard').addClass('visible').removeClass('invisible');
  
}

$('#imageM').click(function() {
    mediumLevel();
});

function mediumLevel() {
    $('.modal').addClass('invisible').removeClass('visible');
    $('#main').addClass('visible').removeClass('invisible');
    $('#player-board').addClass('visible').removeClass('invisible');
    $('#game-board-hard').addClass('visible').removeClass('invisible');
  
}
$('#imageH').click(function() {
    hardLevel();
});

function hardLevel() {
    $('.modal').addClass('invisible').removeClass('visible');
    $('#main').addClass('visible').removeClass('invisible');
    $('#player-board').addClass('visible').removeClass('invisible');
    $('#game-board-hard').addClass('visible').removeClass('invisible');
  
}





