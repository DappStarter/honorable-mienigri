require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half kiwi orange tooth bike curtain net pumpkin harvest clock olympic soft'; 
let testAccounts = [
"0xeeb809a0340d53a6224e58c8cdcd7f48eb7fb03b989c4d84c9d972ef7ed44923",
"0x54812cec508eab00298255a90490b12d1c27ba8e916f5a29fa028bdd0ef7933e",
"0x0cbd81d29816420b2229bdb1f0c78664e8e990676c518658896c7b92963901b1",
"0x6d1bb2bf8a69d68f908a14209a52ed79be4550cd203d6d4db15dfaed8977093e",
"0xe622e4426aed6237248b8ebc7f216c0e904a202b303daa25856793e193c623d7",
"0x581113b01b706d8b79e3ebdd16e54fd1c121bc48abffbe869a9b3941aa50e901",
"0x56261302ea7dcdec0b73fafd4d622981a43a3ed22b94d85af841d80b3e89bf28",
"0x3c8b3dbf7a6c528bf04b60ff13b0ef7b70278a09af11b8bd071bc124876dffca",
"0x2c4fd568e79cbcfc503a211be1449c2b2f5e356a7938c995e9cc0b7e33050b79",
"0x93cd417aeb34b2cc51a93616723776a05896b828ec4a6d65d0ab5b4509d64295"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
