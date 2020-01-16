import {
  LENDER_CONTRACT_ADDRESS,
  ETHMAXIMALIST_CONTRACT_ADDRESS,
  DOUBLE_BULL_CONTRACT_ADDRESS,
  MODERATE_BULL_CONTRACT_ADDRESS,
  UNIPOOL_CHAI_CONTRACT_ADDRESS,
  UNIPOOL_CDAI_CONTRACT_ADDRESS,
  UNIPOOL_GENERAL_CONTRACT_ADDRESS,
  LEVERAGED_LIQUIDITY_POOL_DAI_ADDRESS,
  UNIPOOL_LINK_CONTRACT_ADDRESS,
  LEVERAGED_LIQUIDITY_POOL_LINK_ADDRESS,
  LLP_LINK_WITH_2XLINK_ADDRESS
} from '../web3/address';

import LENDER_ABI from '../web3/lenderAbi';
import ETHMAXIMALIST_ABI from '../web3/ethmaxAbi';
import SHORTTERMBULL_ABI from '../web3/DoubleBullAbi';
import MODERATE_BULL_ABI from '../web3/moderateBullAbi';
import UNIPOOL_CHAI_ABI from '../web3/unipoolChaiAbi';
import UNIPOOL_CDAI_ABI from '../web3/unipoolCdaiAbi';
import UNIPOOL_GENERAL_ABI from '../web3/unipoolGeneralAbi';
import LLP_DAI_ABI from '../web3/llpDAI';
import UNIPOOL_LINK_ABI from '../web3/unipoolLinkAbi';
import LINK_LLP_ABI from '../web3/llpLinkAbi';
import LINK_LLP_2X_ABI from '../web3/llpLink_2xLongETHAbi';

const contractProvider = name => {
  switch (name) {
    case 'Lender': {
      return {
        contractAbi: LENDER_ABI,
        contractAddress: LENDER_CONTRACT_ADDRESS,
        gas: 7000000
      };
    }
    case 'ETH Bull': {
      return {
        contractAbi: ETHMAXIMALIST_ABI,
        contractAddress: ETHMAXIMALIST_CONTRACT_ADDRESS,
        gas: 7000000
      };
    }
    case 'Moderate Bull': {
      return {
        contractAbi: MODERATE_BULL_ABI,
        contractAddress: MODERATE_BULL_CONTRACT_ADDRESS,
        gas: 2000000,
        gasPrice: '1000000000'
      };
    }
    case 'Double Bull': {
      return {
        contractAbi: SHORTTERMBULL_ABI,
        contractAddress: DOUBLE_BULL_CONTRACT_ADDRESS,
        gas: 7000000
      };
    }
    case 'CHAI Unipool': {
      return {
        contractAbi: UNIPOOL_CHAI_ABI,
        contractAddress: UNIPOOL_CHAI_CONTRACT_ADDRESS,
        gas: 1500000
      };
    }
    case 'cDAI Unipool': {
      return {
        contractAbi: UNIPOOL_CDAI_ABI,
        contractAddress: UNIPOOL_CDAI_CONTRACT_ADDRESS,
        gas: 1500000
      };
    }
    case 'DAI Unipool': {
      return {
        contractAbi: UNIPOOL_GENERAL_ABI,
        contractAddress: UNIPOOL_GENERAL_CONTRACT_ADDRESS,
        gas: 1500000
      };
    }
    case 'MKR Unipool': {
      return {
        contractAbi: UNIPOOL_GENERAL_ABI,
        contractAddress: UNIPOOL_GENERAL_CONTRACT_ADDRESS,
        gas: 1500000
      };
    }
    case 'SNX Unipool': {
      return {
        contractAbi: UNIPOOL_GENERAL_ABI,
        contractAddress: UNIPOOL_GENERAL_CONTRACT_ADDRESS,
        gas: 1500000
      };
    }
    case 'sETH Unipool': {
      return {
        contractAbi: UNIPOOL_GENERAL_ABI,
        contractAddress: UNIPOOL_GENERAL_CONTRACT_ADDRESS,
        gas: 1500000
      };
    }
    case 'DAI LLP': {
      return {
        contractAbi: LLP_DAI_ABI,
        contractAddress: LEVERAGED_LIQUIDITY_POOL_DAI_ADDRESS,
        gas: 5000000
      };
    }
    case 'LINK Unipool': {
      return {
        contractAbi: UNIPOOL_LINK_ABI,
        contractAddress: UNIPOOL_LINK_CONTRACT_ADDRESS,
        gas: 1000000
      };
    }
    case 'LINK LLP': {
      return {
        contractAbi: LINK_LLP_ABI,
        contractAddress: LEVERAGED_LIQUIDITY_POOL_LINK_ADDRESS,
        gas: 5000000
      };
    }
    case '2x LINK LLP': {
      return {
        contractAbi: LINK_LLP_2X_ABI,
        contractAddress: LLP_LINK_WITH_2XLINK_ADDRESS,
        gas: 5000000
      };
    }
    default:
      return null;
  }
};

export default contractProvider;
