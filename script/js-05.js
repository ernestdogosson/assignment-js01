const account = {
  accountName: 'Jane Doe',
  balance: 10000,
  getBalace() {
    return `${this.balance}`;
  },
  withdrawal(amount) {
    if (amount > 0 || amount <= this.getBalace()) {
      return console.log(this.getBalace() - amount);
    }
  },
};

account.withdrawal(10000);
