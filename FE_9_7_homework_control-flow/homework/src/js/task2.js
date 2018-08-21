let playGame = confirm('Do you want to play a game? ');
let ten = 10;
let five = 5;
let one = 1;
let interval = 5;
let attempts = 3;
let totalPrize = 0;
let possilePrize = 10;

let getRandom = (n) => {
	return Math.floor(Math.random() * (n+one)*ten/ten);
}

let game = (interval, attempts, totalPrize, possilePrize) => {
	return prompt(`Enter a number from 0 to ${interval} 
  Attempts left: ${attempts} 
  Total prize: ${totalPrize}$ 
  Possible prize on current attempt: ${possilePrize}`);
}

if (playGame !== true) {
  alert('You did not become a millionaire, but can.');
} else {
	while(attempts !== 0) {
        let number = parseInt(game(interval, attempts, totalPrize, possilePrize), 10);
        let randomNumber = getRandom(interval);
            
        if(number === randomNumber) {
            totalPrize += possilePrize;
        } 

        attempts -= one;
        
        if(attempts === 2) {
            possilePrize = five;
        }
        if (attempts === one) {
            possilePrize = 2;
        }
        
        if (attempts === 0) {
            alert(`Thank you for a game. Your prize is: ${totalPrize}$`);
        }
  }
}