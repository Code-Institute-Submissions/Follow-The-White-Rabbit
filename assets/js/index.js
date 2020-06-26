
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
        console.log(imgToPlace);
        index++;
    }
    return images;
    
}

/* Idea for timer taken from www.w3schools.com  */


function rabbitRun(a,b) {
    let i = 0;
    let rabbitRun = [];
    while (i < a) { 
        let n = Math.floor(Math.random() * b.length);
        if (rabbitRun.indexOf(n) < 0) {
        rabbitRun.push(n);
        i++;
        }
    }
    
    console.log("rabbitRun");

    let index = 0;
    
    while (index < rabbitRun.length) {
        let card = document.getElementById(b [rabbitRun [index] ] );
        console.log(rabbitRun[index], card);        console.log(rabbitRun);
        let img = rabbitRun [index] ;
        let imageToRemove = document.getElementById(randomImageArr [images[img]]);
        let imageToPlace = document.getElementById(rabbit[0]);
        console.log(images);         console.log(img);         console.log(card, imageToRemove, imageToPlace);
        
        
        card.replaceChild(imageToPlace, imageToRemove);
        
        setTimeout(() => { 
        card.appendChild(imageToRemove);
        card.removeChild(imageToPlace);
        
        }, 2000);  
    
       
      
        index++;    
    }    
         
    

    


    console.log(rabbitRun);
    return rabbitRun;
}


    
    /*
    let index = 0;
    while (index < rabbitRun.length) {
        let imgToPlace = document.getElementById("rabbit");
        console.log(imgToPlace, images[index]);
        
        document.getElementById(rabbitRun[index]).removeChild(images[index]).appendChild(imgToPlace);  
        console.log(rabbitRun[index]);
        console.log("test");
        index++;
    }
    console.log(rabbitRun);
}  
*/
    

console.log();
