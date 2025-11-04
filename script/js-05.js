const account = {
  accountName: 'Jane Doe',
  balance: 10000,
  getBalace() {
    return this.balance;
  },
  deposit() {
    let amount = parseFloat(prompt('Enter amount'));
  },

  withdrawal() {
    let amount = parseFloat(prompt('Enter amount'));
    let newBalance;

    if (amount > 0 || amount <= this.getBalace()) {
      newBalance = this.getBalace() - amount;

      return newBalance;
    }
  },
  getAccountName() {
    return this.accountName;
  },
  accountError() {
    if (this.getAccountName() !== 'Jane Doe') {
      console.log('Invalid Account Name');
    }
  },
};

// account.withdrawal(8000);

function atm() {
  const message = parseFloat(
    prompt(
      'Select a choice 1.) See balance 2.) Make a deposit 3.) Make withdral 4.) Get account name 5.) Exit'
    )
  );

  switch (message) {
    case 1:
      console.log(account.getBalace());
      break;
    case 2:
      console.log(account.deposit());
      break;
    case 3:
      console.log(account.withdrawal());
      break;
    case 5:
      console.log(account.getAccountName());
  }
}

atm();
