const account = {
  accountName: 'Jane Doe',
  balance: 10000,
  getBalance() {
    return this.balance;
  },

  deposit() {
    let amount = parseFloat(prompt('Enter amount'));
    let errorMsg = this.accountError(amount, this.getBalance(), 'deposit');
    if (errorMsg) {
      console.log(errorMsg);
      return null;
    }
    this.balance += amount;
    return { amount, newBalance: this.balance };
  },

  withdrawal() {
    let amount = parseFloat(prompt('Enter amount'));
    let errorMsg = this.accountError(amount, this.getBalance(), 'withdrawal');
    if (errorMsg) {
      console.log(errorMsg);
      return null;
    }
    this.balance -= amount;
    return { amount, newBalance: this.balance };
  },
  getAccountName() {
    return this.accountName;
  },

  accountError(amount, balance, type) {
    if (isNaN(amount)) {
      return 'Error: Please enter a valid number';
    }
    if (amount <= 0) {
      return 'Error: amount must be greater than 0';
    }
    if (type === 'withdrawal' && amount > balance) {
      return 'Error: Insufficient funds';
    }
    return null;
  },
};

function atm() {
  let running = true;
  while (running) {
    const input = prompt(
      'Select a choice:\n1.) See balance\n2.) Make a deposit\n3.) Make withdrawal\n4.) Get account name\n5.) Exit'
    );
    if (input === null) {
      console.log('Goodbye!');
      break;
    }
    const message = parseFloat(input);
    switch (message) {
      case 1:
        console.log(`Your account balance is ${account.getBalance()} SEK`);
        break;
      case 2:
        const depositResult = account.deposit();
        if (depositResult) {
          const { amount, newBalance } = depositResult;
          console.log(`You deposited ${amount} SEK. Your new account balance is ${newBalance} SEK`);
        }
        break;
      case 3:
        const withdrawalResult = account.withdrawal();
        if (withdrawalResult) {
          const { amount, newBalance } = withdrawalResult;
          console.log(`You withdrew ${amount} SEK. Your new account balance is ${newBalance} SEK`);
        }
        break;
      case 4:
        console.log(`Account Name: ${account.getAccountName()}`);
        break;
      case 5:
        console.log('Thank you for banking with us!');
        running = false;
        break;
      default:
        console.log('Invalid choice. Please select 1-5.');
    }
  }
}

atm();
