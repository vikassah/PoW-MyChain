const Blockchain = require('./models/Blockchain');
const Mempool = require('./models/Mempool');

const db = {
  blockchain: new Blockchain(),
  mempool: new Mempool(2),
  utxos: [],
}

module.exports = db;
