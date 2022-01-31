require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hero flame shadow shock note prefer purchase install clog front stadium'; 
let testAccounts = [
"0x2d4b6cf08783bc0667d76546b4e8dd75193c659c82af0044114eafb9ece120d7",
"0x961a5416f95fc0adfc24b19482ccc532a4272a1f1ddc4a23cf7b927f9526107a",
"0x8736c271f87b7dcd40ff0f13f3db9249beb71911f21cd22662e7bf6d71a540d5",
"0x684b02f80f2eb57def87d2d79cb379454f2602d98eeed0f482eed4925ea4035f",
"0xd31f7a599894cecc823673b5fd98b858baf846bba603ae25627aaafdbcd62ba1",
"0x71af3f681be3eb30c0282d5c1b3302d1413640713ff865f8a9d78599f8426f91",
"0xed5644fc86448aa32c47cd3d9d42c53d6353c1d9b6843537aef440ba6f513d36",
"0x5fba18706e5521f7d48ee8dd8eacf7774f915a9c398abbe5f8d464447e060254",
"0x2b604aea146da8a7adbc381748a5d9d38129ff45c7606df3ebfddc547798db40",
"0x7725401fb2b95764f43ac328c9f059994733fb73ea57e575a958dccfa567455a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


