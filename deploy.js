var sensor1 = 1000 ;
var sensor2 = 1000 ;
var sensor3 = 1000 ;
var smartsensorContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"isLightsOff","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"sensor2val","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"sensor3val","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"sensor1val","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"sensor1","type":"uint256"},{"name":"sensor2","type":"uint256"},{"name":"sensor3","type":"uint256"}],"name":"changeValues","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"sensor1","type":"uint256"},{"name":"sensor2","type":"uint256"},{"name":"sensor3","type":"uint256"}],"payable":false,"type":"constructor"}]);
var smartsensor = smartsensorContract.new(
   sensor1,
   sensor2,
   sensor3,
   {
     from: web3.eth.accounts[0], 
     data: '0x60606040523461000057604051606080610237833981016040528080519060200190919080519060200190919080519060200190919050505b8260008190555081600181905550806002819055505b5050505b6101d7806100606000396000f360606040526000357c0100000000000000000000000000000000000000000000000000000000900480631b3d602e146100645780633da3033c146100895780635b0000be146100ac578063b83a0900146100cf578063d4c2655f146100f2575b610000565b3461000057610071610121565b60405180821515815260200191505060405180910390f35b34610000576100966101aa565b6040518082815260200191505060405180910390f35b34610000576100b96101b0565b6040518082815260200191505060405180910390f35b34610000576100dc6101b6565b6040518082815260200191505060405180910390f35b346100005761011f60048080359060200190919080359060200190919080359060200190919050506101bc565b005b60006103206000541080156101395750610320600154105b1561014b57600190506101a7566101a6565b6103206002541080156101615750610320600154105b1561017357600190506101a7566101a5565b6103206000541080156101895750610320600154105b1561019b57600190506101a7566101a4565b600090506101a7565b5b5b5b90565b60015481565b60025481565b60005481565b8260008190555081600181905550806002819055505b50505056', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })