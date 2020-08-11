    (async () => {

    const prompt = require('prompt-sync')();
    const { Confirm } = require('enquirer');

    let player1Move = true;
    let continueGame = true;
    let player = "Player 1";
    let move = "";
    
    let gameBoard = [
        {position: "topLeft", coordinate: '["1","1"]', figure: " "},
        {position: "topMiddle", coordinate: '["2","1"]', figure: " "},
        {position: "topRight", coordinate: '["3","1"]', figure: " "},
        {position: "middleLeft", coordinate: '["1","2"]', figure: " "},
        {position: "middleMiddle", coordinate: '["2","2"]', figure: " "},
        {position: "middleRight", coordinate: '["3","2"]', figure: " "},
        {position: "bottomLeft", coordinate: '["1","3"]', figure: " "},
        {position: "bottomMiddle", coordinate: '["2","3"]', figure: " "},
        {position: "bottomRight", coordinate: '["3","3"]', figure: " "},
    ]

    function resetGameBoard() {
        for(let i=0;i < gameBoard.length;i++) {
            gameBoard[i].figure = " ";
        }
    }
    
    function displayBoard() {
        console.log("    1   2   3");
        console.log("  -------------");
        console.log(`1 | ${gameBoard[0].figure} | ${gameBoard[1].figure} | ${gameBoard[2].figure} |`);
        console.log("  -------------");
        console.log(`2 | ${gameBoard[3].figure} | ${gameBoard[4].figure} | ${gameBoard[5].figure} |`);
        console.log("  -------------");
        console.log(`3 | ${gameBoard[6].figure} | ${gameBoard[7].figure} | ${gameBoard[8].figure} |`);
        console.log("  -------------");
    }

    function validMove(move) {
        for(let i=0; i < gameBoard.length;i++) {
            if(gameBoard[i].coordinate === move && gameBoard[i].figure === " ") {
                return true;
            }
        }
        return false;
    }

    function playMove(move) {
        for(let i=0; i < gameBoard.length;i++) {
            if(gameBoard[i].coordinate === move) {
                player1Move ? gameBoard[i].figure = "X" : gameBoard[i].figure = "O";
                break;
            }
        }
    }


    function checkWinner() {
        if(gameBoard[0].figure === gameBoard[1].figure && gameBoard[2].figure === gameBoard[2].figure && (gameBoard[2].figure === "X" || gameBoard[2].figure === "O")) {
            return true;
        } 
        else if (gameBoard[3].figure === gameBoard[4].figure && gameBoard[4].figure === gameBoard[5].figure && (gameBoard[5].figure === "X" || gameBoard[5].figure === "O")) {
            return true;
        }
        else if (gameBoard[6].figure === gameBoard[7].figure && gameBoard[7].figure === gameBoard[8].figure && (gameBoard[8].figure === "X" || gameBoard[8].figure === "O")) {
            return true;
        }
        else if (gameBoard[0].figure === gameBoard[3].figure && gameBoard[3].figure === gameBoard[6].figure && (gameBoard[6].figure === "X" || gameBoard[6].figure === "O")) {
            return true;
        }
        else if (gameBoard[1].figure === gameBoard[4].figure && gameBoard[4].figure === gameBoard[7].figure && (gameBoard[7].figure === "X" || gameBoard[7].figure === "O")) {
            return true;
        }
        else if (gameBoard[2].figure === gameBoard[5].figure && gameBoard[5].figure === gameBoard[8].figure && (gameBoard[8].figure === "X" || gameBoard[8].figure === "O")) {
            return true;
        }
        else if (gameBoard[0].figure === gameBoard[4].figure && gameBoard[4].figure === gameBoard[8].figure && (gameBoard[8].figure === "X" || gameBoard[8].figure === "O")) {
            return true;
        }
        else if (gameBoard[2].figure === gameBoard[4].figure && gameBoard[4].figure === gameBoard[6].figure && (gameBoard[6].figure === "X" || gameBoard[6].figure === "O")) {
            return true;
        } else {
            return false;
        }
    }
    
    displayBoard();

    while (continueGame) {

        move = prompt(`${player}, Select a coordinate where you would like to play your move: `);
        move = move.split(",");
        move = JSON.stringify(move);

        if(validMove(move)) {
            playMove(move);
            displayBoard();
            if(checkWinner()) {
                console.log(`Congrats, ${player}, you won!`)

                const again = new Confirm({
                    name: 'question',
                    message: 'Do you want to play again?'
                });

                await again.run()
                    .then(answer => {
                        if(answer === true) {
                            resetGameBoard();
                            displayBoard();
                            Math.floor(Math.random()*2) + 1  === 1 ? player1Move = true : player1Move = false;
                        } else {
                            continueGame = false;
                            console.log("Thanks for playing. Hope you had fun!")
                        }
                    })
                    .catch(console.error);
            };
            player1Move = !player1Move;
            player1Move ? player = "Player 1" : player = "Player 2";
        } else {
            console.log("Invalid Move. That spot is already taken or you did not put the coordinates in the valid format, ex. 1,1. Try again.");
        }
    }

    moveCounter = 1;
    function computerMove() {
        if(moveCounter === 1) {
            randomComputerMove = Math.floor(Math.random()*2) + 5
            switch (randomComputerMove) {
                case 1:
                    
            }
        
        }
    };

})()
