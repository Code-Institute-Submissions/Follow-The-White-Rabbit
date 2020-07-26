# Interactive Frontend Project - TESTING write-up

This document is intended to record testing at various stages of development of the project, as well as different finctions, finctionalities, correct display of the project's page, etc. 

## Memory Game 

### Functions:

1. Random images generation and insertion into game cards.
    Functionality has been tested and the function generates a random set of 4/6/9 cards and adds them as children into card-game divs. 
    Function is called by a click on Easy-, Medium-, Hard- level image on the initial page.
    A player is taken to a game page with 4-6-9 cards, and each time a random (non repetitive) set of cards is displayed on a game board.

2. Random generation of White Rabbit Image "run" across game cards of chosen level of complexity - 4/6/9 cards.
    The function generates a random set of cards (different from Random images, point 1 above) where White Rabbit image is to be displayed at each game card, one after another, creating a random "run" pattern, 
    The bug: White Rabbit image replaces game card image, and is displayed on each card according to randomly generated patters, but it happens too fast for a player to see it. 
    - Contacted tutor-support, a truto helped to partly solve the problem, but the "run" is still not visible.
    - Booked a screen one-on-one session.

3. Capture of players' clicks and comparison to randomly generate White Rabbit "run" pattern
    Testing on all difficulty level boards:
    - Incorrect RabbitRun returns both Win and Lost messages.
    Corrected the code for rabbitRun & followRaabit, tested clicking through all three difficulty levels, both correct and wrong set of clicks, at least 6 times each, now works correctly. 
        

4. Clicks Countdown
    Each board will have a counter of clicks starting at 4/6/9 and decreasing at each click, so that a player knows how many clicks left.
    Tested clicks across three difficultty levels. Works correctly. 
    BUG: If reset button is pressed before Play Button for Rabbit Run after loading from the main screen, "Clicks left" shows "undefined" instead of 4/6/9.
        Fixed. 
    BUG: Wrong number of clicks left after choosing a level from the initial page - 4 clicks for all the boards. Working correctly on reset button and level switching.
        Fixed.

5. Win-Lose modal
    Added modals for both cases. Tested, works correctly: Win Modal in case a player repeated the Rabbit's run correctly, and Lose modal if otherwise. 

6. Reset Function
    Added a reset function, which should reset all the game cards, rabbit's run pattern and generate a new set of random images, and insert them into game cards on respective level.
    BUG: The function does not work properly, does not insert full amount (4 or 6 or 9) cards, and then crashes, with a warning message in Developers Tools Console.
    - The function is supposed to remove all the images inserted as children elements, generate randomly a new set of cards, and insert them into cards for a new game. The funciton retruns a null for some of the images, sometimes after correctly inserting 1 or 2 images. 
    Fixed: reset function works upon clicking modal button close, inserts new set of images into game cards, and Paly button is re-laucnhes the Rabbit Run across cards.
    
    BUG: If reset button(on game board) is pressed while Rabbit Run, inserted images are added on top of each in one cards, some cards have no images.
    Fixed: Blcoked reset button for the period of time it takes to complete Rabbit Run on each diff.level board

7. Swithcing between difficulty levels on player info board
    BUG: If a game is played on of the boards, and then levels switched, the Clicks left number does not get updated according to a board swhitched to, keeps showing the number from the a board where last game was played.
    The bug is fixed.
    BUG: If button Play is pressed, but no cards are played, button Play stays inactive, and if you switch between levels, and come back to the level where Play was pressed, it is still inactive.
    Fixed. 
    BUG: Added opacity to level images in player board to show which level is active. Does not change opacity correctly. Show correct active level only after second click on level image/button in player board.
    Fixed.