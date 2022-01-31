const Block = require('./models/Block');
const Mempool = require('./models/Mempool');
const Transaction = require('./models/Transaction');
const UTXO = require('./models/UTXO');
const db = require('./db');
const {PUBLIC_KEY} = require('./config');
const TARGET_DIFFICULTY = BigInt("0x0" + "F".repeat(63));
const BLOCK_REWARD = 10;

let mining = true;
mine();


function startMining() {
  mining = true;
  mine();
}

function stopMining() {
  mining = false;
}

function poolTransaction(txn) {
  db.mempool.addPendingTransaction(new Transaction(txn[0], txn[1], txn[2]));
  //console.log(db.mempool.pendingTransactions);
}

function mine() {
  if(!mining) return;

  const block = new Block(db.blockchain.blocks[db.blockchain.blocks.length-1].blockNumber+1);

  // TODO: add transactions from the mempool

  //const coinbaseUTXO = new UTXO(PUBLIC_KEY, BLOCK_REWARD);
  const coinbaseTX = new Transaction("", PUBLIC_KEY, BLOCK_REWARD);
  block.addTransaction(coinbaseTX);
  block.addTransactions(db.mempool.removePendingTxns());

  block.previousHash = db.blockchain.getLatestBlock().currentHash;

  // proof of work
  while(BigInt('0x' + block.hash()) >= TARGET_DIFFICULTY) {
    block.nonce++;
  }

  block.difficulty = TARGET_DIFFICULTY;
  block.currentHash = block.hash();

  db.blockchain.addBlock(block);

  console.log(`Mined block #${db.blockchain.blockHeight()} with a hash of ${block.hash()} at nonce ${block.nonce}`);
  console.log(db.blockchain.blocks[db.blockchain.blocks.length-1].transactions);

  setTimeout(mine, 10000);
}

module.exports = {
  startMining,
  stopMining,
  poolTransaction,
};
