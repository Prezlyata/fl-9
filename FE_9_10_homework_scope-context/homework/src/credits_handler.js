function userCard(key){
  let balance = 100;
  let transactionLimit = -100;
  let historyLogs = [];
  return {
      getInfo(){
        return {balance, historyLogs, transactionLimit, key};
      },
      putCredits(cash){
      let date = new Date().toLocaleString();
        balance = balance + cash;
        historyLogs.push({operationType:'Received credits', credits:cash, operationTime: date})
      },
      takeCredits(cash){
      let date = new Date().toLocaleString();
      if(balance - cash > transactionLimit){
        balance = balance - cash;
        historyLogs.push({operationType:'Withdrawal of credits', credits:cash, operationTime: date})
        } else {
          console.log('Error')
          historyLogs.push({operationType:'Error', credits:cash, operationTime: date})
        }
      },
      transactionLimitChange(cash){
        let date = new Date().toLocaleString();
        transactionLimit = transactionLimit - cash;
        historyLogs.push({operationType:'Transaction limit change', credits:cash, operationTime: date})
      },
      transferCredits(cash, userCard){
        const taxes = 0.4;
        const hundred = 100;
        const transfer = cash * taxes / hundred + cash;
        if(transfer > balance){
          console.log('Error')
        } else {
        this.takeCredits(transfer);
        userCard.putCredits(cash);
      }
    }
  }
}

function UserAccount(name){
  this.name = name;
  let cards = [];
  let maxCards = 3;
  return {
    getInfo(){
      return {name, cards}
    },
    addCard(card){
    if(cards.length < maxCards){
      cards.push(card.getInfo());
    }else{
      console.log('Error, cards > 3')
      }
    },
    getCardByKey(key){
      let zero = 0;
      let arrOfCard = cards.filter(card => { 
        return card.key === key 
      });
      return arrOfCard[zero];
    }
  }
}