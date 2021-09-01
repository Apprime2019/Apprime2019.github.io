window.addEventListener('load', () => {
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else {
        console.log('No web3? You should consider trying MetaMask!');
        web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    }
});
