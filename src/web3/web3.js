//import Onboard from 'bnc-onboard';
import Web3 from 'web3';
/*
// eslint-disable-next-line import/no-mutable-exports
let web3;

const FORTMATIC_KEY = process.env.REACT_APP_FORTMATIC_KEY;
const PORTIS_KEY = process.env.REACT_APP_PORTIS_KEY;
// const SQUARELINK_KEY = process.env.REACT_APP_SQUARELINK_KEY;
// const INFURA_KEY = process.env.REACT_APP_INFURA_KEY;

const wallets = [
  { walletName: 'metamask', preferred: true },
  {
    walletName: 'fortmatic',
    apiKey: FORTMATIC_KEY,
    preferred: true
  },
  {
    walletName: 'portis',
    apiKey: PORTIS_KEY,
    preferred: true
  }
  // { walletName: 'dapper', preferred: true },
  // {
  //   walletName: 'squarelink',
  //   apiKey: SQUARELINK_KEY
  // },
  // { walletName: 'authereum' },
  // {
  //   walletName: 'walletConnect',
  //   infuraKey: INFURA_KEY
  // },
  // { walletName: 'coinbase', preferred: true },
  // { walletName: 'trust', preferred: true }
];


const initializationOptions = {
  dappId: process.env.REACT_APP_BLOCKNATIVE_ID,
  networkId: 1,
  darkMode: true,
  subscriptions: {
    wallet: wallet => {
      web3 = new Web3(wallet.provider);
    }
  },
  walletSelect: {
    heading: 'Select a Wallet',
    description: `
    <h5><u>
    If your wallet is a smart contract wallet,
    please ensure that your wallet supports accepting the tokens that you shall receive.
    </u></h5>`,
    wallets
  }
};

const onboard = Onboard(initializationOptions);
*/
 export const getWeb3 = () => {
  let web3;
    if (
      typeof window.ethereum !== 'undefined' ||
      typeof window.web3 !== 'undefined'
    ) {
      const provider = window.ethereum || window.web3.currentProvider;
      web3 = new Web3(provider);
    }
    return web3;
}

//export { getWeb3};
