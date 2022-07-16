console.log("Hello World!")

let Round = class 
{
    playerPoints = 0;
    computerPoints = 0;
    constructor(playerPoints, computerPoints)
    {
        this.playerPoints = playerPoints;
        this.computerPoints = computerPoints; 
    }

    playRound(playerSelection, computerSelection)
    {
        console.log(playerSelection.toLowerCase());
        console.log(computerSelection);
        if ( playerSelection.toLowerCase() == "rock" && computerSelection == "paper" )
        {
            console.log("You Lose! Paper beats Rock");
            this.computerPoints++;
        }
        else if ( playerSelection.toLowerCase() == "rock" && computerSelection == "scissor" )
        {
            console.log("You Win! Rock beats Scissor");
            this.playerPoints++;
        }
        else if ( playerSelection.toLowerCase() == "rock" && computerSelection == "rock" )
        {
            console.log("Draw!")
        }
        else if ( playerSelection.toLowerCase() == "paper" && computerSelection == "rock" )
        {
            console.log("You Win! Paper beats Rock");
            this.playerPoints++;
        }
        else if ( playerSelection.toLowerCase() == "paper" && computerSelection == "scissor" )
        {
            console.log("You Lose! Scissor beats Paper");
            this.computerPoints++;
        }
        else if ( playerSelection.toLowerCase() == "paper" && computerSelection == "paper" )
        {
            console.log("Draw!");
        }
        else if ( playerSelection.toLowerCase() == "scissor" && computerSelection == "rock" )
        {
            console.log("You Lose! Rock beats Scissor");
            this.computerPoints++;
        }
        else if ( playerSelection.toLowerCase() == "scissor" && computerSelection == "paper" )
        {
            console.log("You Win! Scissor beats Paper");
            this.playerPoints++;
        }
        else 
        {
            console.log("Draw!")
        }
    }

    getComputerChoice()
    {
        let random = Math.floor(Math.random() * 3) + 1; 
        if ( random == 1 )
        {
            return "rock";
        }
        else if ( random == 2 )
        {
            return "paper";
        }
        else
        {
            return "scissor";
        }
    }

    game()
    { 
        for ( let i = 0; i < 5; i++ )
        {
            const playerSelection = "Rock";
            const computerSelection = this.getComputerChoice();
            round.playRound(playerSelection, computerSelection); 
            console.log(this.playerPoints);
        }
        if ( this.playerPoints >  this.computerPoints )
        {
            console.log("You Win the MattGame");
        }
        else
        {
            console.log("You Lose the CalvinGame");
        }
    }
}

let round = new Round(0, 0);
round.game()

