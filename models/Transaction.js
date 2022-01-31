class Transaction {
  constructor(fromAddress, toAddress, amount) {
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
  }

  toString() {
    return(this.fromAddress + " " + this.toAddress + " " + this.amount);
  }

}

module.exports = Transaction;
