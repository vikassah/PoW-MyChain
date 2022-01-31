const Transaction = require("./Transaction");

class Mempool {

    constructor(maxTxnsPerBlock) {
        this.pendingTransactions = [];
        this.maxTxnsPerBlock = maxTxnsPerBlock;
    }
    
    addPendingTransaction(txn) {
        this.pendingTransactions.push(txn);
    }

    removePendingTxns() {
        let txns = this.pendingTransactions.length > this.maxTxnsPerBlock? 
        this.pendingTransactions.splice(0, this.maxTxnsPerBlock):
        this.pendingTransactions.splice(0, this.pendingTransactions.length);
        
        return(txns);
    }

    addAutomatedPendingTxns() {

    }
}

module.exports = Mempool;