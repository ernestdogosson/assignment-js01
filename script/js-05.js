const account = {
  accountName: 'Jane Doe',
  balance: 10000,

  getBalance() {
    return this.balance;
  },

  deposit() {
    let amountD = parseFloat(prompt('Enter amount'));
    let newBalanceD;

    if (amountD > 0 && amountD <= this.getBalance()) {
      newBalanceD = this.getBalance() + amountD;
      return { amountD, newBalanceD };
    }
  },

  withdrawal() {
    let amountW = parseFloat(prompt('Enter amount'));
    let newBalanceW;

    if (amountW > 0 && amountW <= this.getBalance()) {
      newBalanceW = this.getBalance() - amountW;
    } else if (amountW > this.getBalance()) {
      console.log(this.accountError());
    } else {
      return { amountW, newBalanceW };
    }
  },

  getAccountName() {
    return this.accountName;
  },

  accountError() {
    let errorW = 'Insufficent account balance.';
    return errorW;
  },
};

function atm() {
  const message = parseFloat(
    prompt(
      'Select a choice 1.) See balance 2.) Make a deposit 3.) Make withdrawal 4.) Get account name 5.) Exit'
    )
  );

  switch (message) {
    case 1:
      let accountBalance = account.getBalance();
      console.log(`Your account balance is ${accountBalance} SEK`);
      break;
    case 2:
      const { amountD, newBalanceD } = account.deposit();
      console.log(`You deposited ${amountD} SEK. Your new account balance is ${newBalanceD} SEK`);
      break;
    case 3:
      const { amountW, newBalanceW } = account.withdrawal();
      console.log(`You withdrew ${amountW} SEK. Your new account balance is ${newBalanceW} SEK`);
      break;
    case 4:
      console.log(`Account Name: ${account.getAccountName()}4`);
  }
}

atm();
