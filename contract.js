import "dev.oraclize.it/api.sol";

contract KrakenPriceTicker is usingOraclize {
    string public myIP;

    function SetUrl() {
        oraclize_setNetwork(networkID_testnet);
        oraclize_setProof(proofType_TLSNotary | proofStorage_IPFS);
        oraclize_query("URL", "json(http://ip.jsontest.com/ ");
    }

    function __callback(bytes32 myid, string result, bytes proof) {
        if (msg.sender != oraclize_cbAddress()) throw;
        myIP = result;
    }
} 