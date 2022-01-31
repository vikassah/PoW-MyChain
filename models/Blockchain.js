const Block = require("./Block");

class Blockchain {
  constructor() {
    this.blocks = [this.addGenesisBlock()];
  }

  addGenesisBlock() {
    return(new Block());
  }

  getLatestBlock() {
    return(this.blocks[this.blocks.length - 1]);
  }

  addBlock(block) {
    this.blocks.push(block);
  }
  blockHeight() {
    return this.blocks.length;
  }
}

module.exports = Blockchain;
