const llpLink_2xLongETHAbi = [
  {
    payable: true,
    stateMutability: 'payable',
    type: 'fallback'
  },
  {
    constant: true,
    inputs: [],
    name: 'ChainLinkAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'ChainLinkFulCrumAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'LLP_ERC20Token_GeneralAddress',
    outputs: [
      {
        internalType: 'contract LLP_ERC20Token_General',
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address payable',
        name: '_towhomtoIssueAddress',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_FulcrumAllocation',
        type: 'uint256'
      }
    ],
    name: 'LetsInvest',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    payable: true,
    stateMutability: 'payable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [],
    name: 'destruct',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'contract IERC20',
        name: '_TokenAddress',
        type: 'address'
      }
    ],
    name: 'inCaseTokengetsStuck',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_LLP_ERC20Token_GeneralAddress',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_ChainLinkAddress',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_ChainLinkFulCrumAddress',
        type: 'address'
      }
    ],
    name: 'initialize',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'isOwner',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address payable',
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_new_ChainLinkAddress',
        type: 'address'
      }
    ],
    name: 'set_ChainLinkAddress',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_new_ChainLinkFulCrumAddress',
        type: 'address'
      }
    ],
    name: 'set_ChainLinkFulCrumAddress',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_new_LLP_ERC20Token_GeneralAddress',
        type: 'address'
      }
    ],
    name: 'set_LLP_ERC20Token_GeneralAddress',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [],
    name: 'toggleContractActive',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address payable',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'transferOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [],
    name: 'withdraw',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  }
];

export default llpLink_2xLongETHAbi;
