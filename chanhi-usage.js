// chanhi-usage.js
const ChanhiHandler = require('chanhi-handler');

class ChanhiUsage {
  constructor(apiKey, blockchainConfig) {
    this.handler = new ChanhiHandler(apiKey, blockchainConfig);
  }

  async performBlockchainAction(address, tokenId, receiver, amount) {
    const balance = await this.handler.getBalance(address);
    console.log('Balance:', balance);

    const gasPrice = await this.handler.getGasPrice();
    console.log('Gas Price:', gasPrice, 'gwei');

    const nftMetadata = await this.handler.fetchNFTMetadata(tokenId);
    console.log('NFT Metadata:', nftMetadata);

    const transactionHash = await this.handler.sendTransaction(address, receiver, amount);
    console.log('Transaction Hash:', transactionHash);

    const contractAddress = await this.handler.deploySmartContract('CONTRACT_BYTECODE', ['arg1', 'arg2']);
    console.log('Deployed Contract Address:', contractAddress);

    const contractMethodHash = await this.handler.callSmartContractMethod(contractAddress, 'methodName', ['arg1', 'arg2']);
    console.log('Smart Contract Method Hash:', contractMethodHash);

    const web3ContractMethodHash = await this.handler.interactWithWeb3Contract(
      contractAddress,
      'WEB3_CONTRACT_ABI',
      'methodName',
      ['arg1', 'arg2']
    );
    console.log('Web3 Contract Method Hash:', web3ContractMethodHash);

    // Add more actions using ChanhiHandler
  }
}

module.exports = ChanhiUsage;
