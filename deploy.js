var sensor1 = 0;
var sensor2 = 0;
var sensor3 = 0;
var smartsensorContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"isLightsOff","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"inputs":[{"name":"sensor1","type":"uint256"},{"name":"sensor2","type":"uint256"},{"name":"sensor3","type":"uint256"}],"payable":false,"type":"constructor"}]);
var smartsensor = smartsensorContract.new(
   sensor1,
   sensor2,
   sensor3,
   {
     from: web3.eth.accounts[0], 
     data: '6060604052600060005560006001556000600255346100005760405160608061013c833981016040528080519060200190919080519060200190919080519060200190919050505b8260008190555081600181905550806002819055505b5050505b60ce8061006e6000396000f360606040526000357c0100000000000000000000000000000000000000000000000000000000900480631b3d602e146036575b6000565b3460005760406058565b60405180821515815260200191505060405180910390f35b60006000600054118015606d57506000600154115b15607c576001905060cb5660ca565b6000600254118015608f57506000600154115b15609e576001905060cb5660c9565b600060005411801560b157506000600154115b1560c0576001905060cb5660c8565b6000905060cb565b5b5b5b9056', 
     gas: 3000000
   }, function(e, contract){
    console.log(e, contract);
    if (typeof contract.address != 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })
