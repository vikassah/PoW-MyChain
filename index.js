const jayson = require('jayson');
const {startMining, stopMining, poolTransaction} = require('./mine');
const {PORT} = require('./config');
const {utxos} = require('./db');

// create a server
const server = jayson.server({
  startMining: function(_, callback) {
    callback(null, 'success!');
    startMining();
  },
  stopMining: function(_, callback) {
    callback(null, 'success!');
    stopMining();
  },

  poolTransaction: function([from, to, amount], callback) {
    callback(null, 'success!');
    poolTransaction([from, to, amount]);
  },
  /** 
  getBalance: function([address], callback) {
    const ourUTXOs = utxos.filter(x => {
      return x.owner === address && !x.spent;
    });
    const sum = ourUTXOs.reduce((p,c) => p + c.amount, 0);
    callback(null, sum);
  }*/
});

server.http().listen(PORT);
