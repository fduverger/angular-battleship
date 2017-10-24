# angular-battleship

[![Build Status](https://travis-ci.org/fduverger/angular-battleship.svg?branch=master)](https://travis-ci.org/fduverger/angular-battleship)

BattleShip Game

- Rules and game play:
        
        * Plot all of your ships by drawing an outline of each ship on the grid according to its size. For example, a battleship is four blocks, but an aircraft carrier is five blocks. This is illustrated in the key on the printable game page. Ships may not overlap.
        * Take turns firing upon the enemy by calling out plot points - for example: A-5. Mark your shot as a hit (X) or a miss (O) on your enemy ship grid according to your opponents reply.
        * When your enemy fires upon you, answer hit or miss, according to their shot. Mark your hit ships with an X on the "my ships" grid.
        * When the ships are sunk, you must inform your opponent that it is sunk and which ship it is, for example, "My aircraft carrier is sunk!".
        * The first person to sink all of the enemy ships wins the game.
    
Check the following url for more info(http://www.kidspot.com.au/things-to-do/activity-articles/how-to-play-battleships/news-story/d12ea620a56f61a3597d2ef67d5ce4fd)


This is a display only site that receives information from a remote battleship game and
renders the curent state.

Main Page

    State: [SHIPS BEING ADDED]   Players: [PLAYER COUNT]

    _____________________________________________________
    | | | | | | | | | | | | | | | | | | | | | | | | | | |
    | | |1|1|1| | | | | | | | | | | | | | | | | | | | |4|
    | | | | | | | | | | |2|2|2|2| | | | | | | | | | | |4|
    | | | | | | | | | | | | | | | | | | | | | | | | | | |
    | | | | | | | | | | | | | | | | | | | | | | | | | | |
    | | | | | |1| | | | | | | | | | | | | | | | | | |4| |
    | | | | | |1| | | | | | | |2| | | | | | | | | | |4| |
    | | | | | |1| | | | | | | |2| | | |3| | | | | | |4| |
    | | | | | | | | | | | | | | | | | |3| | | | | | |4| |
    | | | | | | | | | | | | | | | | | |3| | | | | | | | |
    | | | | | | | | | | | | | |3| |3| |3| | | | | | | | |
    | | | | | | | | | | | | | | | | | | | | | | | | | | |
    | | | | | | | | | | | | | | | | | | | | | | | | | | |
    _____________________________________________________

     [PLAYER NAME] [NUMBER SHIPS LEFT]
     [PLAYER NAME] [NUMBER SHIPS LEFT] [WINNER]
     [PLAYER NAME] [NUMBER SHIPS LEFT]
     [PLAYER NAME] [NUMBER SHIPS LEFT]
