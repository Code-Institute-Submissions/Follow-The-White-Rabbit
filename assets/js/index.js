
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
const randomImageArr = ["alice", "cat", "dodo", "caterpillar", "queen", "twins"];
function setRandomImages() {
    let randomNum = [];
    let i = 0;
    while (i < m) {
    let num = Math.floor(Math.random() * randomImageArr.length);
    if (randomNum.indexOf(num) < 0) {
    randomNum.push(num);
    }
    i++;
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
    while (i < 4) {
        
        
        let n = Math.floor(Math.random() * randomImageArr.length);
        console.log(n);
        images.push(n);
        
        i++;
    }
    console.log(images);

    function firstDuplicate() {
        const dup = {};
    
        for(let num of images) {

            if(dup.hasOwnProperty(num)) {
      
                 return num;
                 console.log(num);
            }
        }
    const double = firstDuplicate (images);
    console.log(double);
        
    }
    

}











