## Chanhi Usage

This npm package demonstrates the usage of the Chanhi Handler for various blockchain actions.

### Installation
```bash
npm install chanhi-usage

Usage 

Replace "YOUR_API_KEY," "YOUR_RPC_ENDPOINT

const ChanhiUsage = require('chanhi-usage');

const apiKey = 'YOUR_API_KEY';
const blockchainConfig = {
  rpcEndpoint: 'YOUR_RPC_ENDPOINT',
  apiEndpoint: 'https://api.example.com'
};

const app = new ChanhiUsage(apiKey, blockchainConfig);

// Example: Perform a blockchain action
app.performBlockchainAction('0xYourAddress', '123456', '0xReceiverAddress', '1.5');


