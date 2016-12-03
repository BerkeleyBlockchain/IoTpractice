var sensorsContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"isLightsOff","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"}]);
var sensors = sensorsContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '6060604052346000575b6062806100166000396000f360606040526000357c0100000000000000000000000000000000000000000000000000000000900480631b3d602e146036575b6000565b3460005760406058565b60405180821515815260200191505060405180910390f35b6000600190505b9056', 
     gas: 3000000
   }, function(e, contract){
    console.log(e, contract);
    if (typeof contract.address != 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })