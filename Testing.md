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
    
    

4. xxxxxx