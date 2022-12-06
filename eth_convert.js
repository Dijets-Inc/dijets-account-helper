// Given an ethereum private key, convert it to dijets priavte key and display address
var Web3 = require('web3');
const Buffer = require('buffer/').Buffer;
const Utils = require('dijets/dist/utils')
const AVM = require('dijets/dist/apis/avm');


let hrp = Utils.getPreferredHRP(1);
let keychain = new AVM.AVMKeyChain(hrp,'X');


var web3 = new Web3(Web3.givenProvider);

let prompt = require('prompt');


console.log("\n");
console.log("Enter your Utility Chain address - HEX format starting with 0x..")
prompt.get(['dijets_hex_key'], (err, result) => {
    try{
        let key = result.dijets_hex_key;

        // Strip the 0x if exists
        if(key.substr(0,2) === '0x'){
            key = key.substr(2);
        }


        let account = web3.eth.accounts.privateKeyToAccount(key);
        let address = account.address;

        let pkBuffer = new Buffer(key, 'hex');

        console.log('\n---------------------------\n');

        console.log("Dijets Utility Chain Address:\t",address)
        let djtxKey = keychain.importKey(pkBuffer);

        let djtxPk = djtxKey.getPrivateKeyString();
        let djtxAddr = djtxKey.getAddressString();


        console.log("Dijets Key:\t",djtxPk);
        console.log("Dijets Address:\t",djtxAddr);
        console.log("\n");
    }catch (e) {
        let msg = e.message || "Failed conversion."
        console.log(msg);
    }
});
