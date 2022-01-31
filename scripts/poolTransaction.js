const client = require('./client');
const {argv} = require('yargs');

client.request('poolTransaction', [argv.from, argv.to, argv.amount], function(err, response) {
  if(err) throw err;
  console.log(response.result);
});
