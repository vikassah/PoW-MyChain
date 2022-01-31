const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(blockNumber=0, previousHash = "") {
    this.blockNumber = blockNumber;
    this.previousHash = previousHash;
    this.timestamp = Date.now();
    this.nonce = 0;
    this.currentHash = "";
    this.difficulty = "";
    this.transactions = [];
  }

  addTransaction(tx) {
    this.transactions.push(tx);
  }

  addTransactions(txns) {
    for(let i=0; i<txns.length; i++) {
      this.transactions.push(txns[i]);
    }
  }

  hash() {
    return SHA256(
      this.timestamp + "" +
      this.nonce + "" +
      this.previousHash + "" +
      JSON.stringify(this.transactions)
    ).toString();
  }

}

module.exports = Block;
