const Zaps = {
  unipoollink: {
    id: 'unipoollink',
    name: 'LINK Unipool',
    text: 'Uni LINK',
    isOrderable: true,
    hasReturnsChart: true,
    ensAddress: 'LINKUnipool.DeFiZap.eth',
    illustration: 'unipool_link_illustration.svg',
    tokenAddress: '0xF173214C720f58E03e194085B1DB28B50aCDeeaD',
    tokenInfo: {
      address: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
      name: 'LINK',
      decimals: 18
      // icon: 'dai_logo.svg'
    },
    gasLimitRequirement: '1500000',
    paused: false,
    new: true,
    platformsUsed: [
      {
        key: 'uniswap',
        value: 'Uniswap',
        url: 'https://uniswap.io/',
        color: '#AF2CE4'
      }
    ],
    oneClickAccessTo: [{ text: '🦄 Pooling Rewards', color: '#66098e' }],
    numberOfInteractions: 5,
    outperformsDuring: ['Choppy Markets'],
    whatHappensUnderTheHood: '',
    whatHappensAfter: '',
    components: [
      {
        name: 'LINK Pool token',
        percent: 100,
        color: '#AF2CE4'
      }
    ],
    description: {
      textQuestion: 'What does this Zap do?',
      textAnswer: ['Sample text'],
      textLink: [
        {
          text: 'dummy text',
          hyperlink: 'https://google.com'
        }
      ],
      tutorialLink:
        'https://defitutorials.substack.com/p/pooling-with-defizap'
    },
    whatThisMeans: {
      text: [
        '50% converted to LINK',
        '50% leftover input + acquired tokens are added to the LINK/ETH Liquidity pool on Uniswap. Receive minted liquidity tracking tokens back to your wallet.'
      ]
    },
    metamaskInteractionsSaved: [{ saved: 3 }]
  },
  llplink: {
    id: 'llplink',
    name: 'LINK LLP',
    text: 'LINK LLP',
    type: 'LLP',
    isOrderable: true,
    hasReturnsChart: true,
    ensAddress: 'linkllp.defizap.eth',
    tokenAddress: '0xF173214C720f58E03e194085B1DB28B50aCDeeaD',
    tokenInfo: {
      address: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
      name: 'LINK',
      decimals: 18
      // icon: 'dai_logo.svg'
    },
    gasLimitRequirement: '5000000',
    paused: false,
    new: true,
    illustration: 'link_llp_illustration.svg',
    platformsUsed: [
      {
        key: 'uniswap',
        value: 'Uniswap',
        url: 'https://uniswap.io/',
        color: '#AF2CE4'
      },
      {
        key: 'Fulcrum',
        value: 'Fulcrum',
        url: 'https://fulcrum.trade/#/',
        color: '#407BF7'
      },
      {
        key: 'kyber',
        value: 'Kyber',
        url: 'https://kyberswap.com/swap/',
        color: '#FB795D'
      }
    ],
    oneClickAccessTo: [
      {
        text: '🦄 Pooling Rewards',
        color: '#66098e'
      },
      {
        text: '🚀 Long ETH with 2X Leverage',
        color: '#007BFF',
        url: 'https://fulcrum.trade/#/trade'
      }
    ],
    outperformsDuring: ['Choppy Markets'],
    whatHappensUnderTheHood: '',
    whatHappensAfter: '',
    components: [
      {
        name: 'LINK Pool token',
        percent: 66,
        color: '#AF2CE4'
      },
      {
        name: 'dLETH2x',
        percent: 34,
        color: '#007BFF'
      }
    ],
    description: {
      textQuestion: 'What does this Zap do?',
      textAnswer: ['Sample text'],
      textLink: [
        {
          text: 'dummy text',
          hyperlink: 'https://google.com'
        }
      ],
      tutorialLink:
        'https://defitutorials.substack.com/p/pooling-with-defizap'
    },
    whatThisMeans: {
      text: [
        '34% used to open ETH Long position with 2X leverage on Fulcrum (dLETH2x)',
        '33% converted to LINK',
        '33% leftover input + acquired tokens are added to the LINK/ETH Liquidity pool on Uniswap. Receive minted liquidity tracking tokens back to your wallet.'
      ]
    },
    metamaskInteractionsSaved: [{ saved: 5 }]
  },
  llplink2xlink: {
    id: 'llplink2xlink',
    name: '2x LINK LLP',
    text: '2x LINK LLP',
    type: 'LLP',
    isOrderable: true,
    hasReturnsChart: true,
    ensAddress: '2xLINKLLP.defizap.eth',
    tokenAddress: '0xF173214C720f58E03e194085B1DB28B50aCDeeaD',
    tokenInfo: {
      address: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
      name: 'LINK',
      decimals: 18
      // icon: 'dai_logo.svg'
    },
    gasLimitRequirement: '5000000',
    paused: false,
    new: true,
    illustration: '2xlink_llp_illustration.svg',
    platformsUsed: [
      {
        key: 'uniswap',
        value: 'Uniswap',
        url: 'https://uniswap.io/',
        color: '#AF2CE4'
      },
      {
        key: 'Fulcrum',
        value: 'Fulcrum',
        url: 'https://fulcrum.trade/#/',
        color: '#407BF7'
      },
      {
        key: 'kyber',
        value: 'Kyber',
        url: 'https://kyberswap.com/swap/',
        color: '#FB795D'
      }
    ],
    oneClickAccessTo: [
      {
        text: '🦄 Pooling Rewards',
        color: '#66098e'
      },
      {
        text: '🚀 Long LINK with 2X Leverage',
        color: '#3EA0F0',
        url: 'https://fulcrum.trade/#/trade'
      }
    ],
    outperformsDuring: ['Choppy Markets'],
    whatHappensUnderTheHood: '',
    whatHappensAfter: '',
    components: [
      {
        name: 'LINK Pool token',
        percent: 66,
        color: '#AF2CE4'
      },
      {
        name: 'dLLINK2x',
        percent: 34,
        color: '#3EA0F0'
      }
    ],
    description: {
      textQuestion: 'What does this Zap do?',
      textAnswer: ['Sample text'],
      textLink: [
        {
          text: 'dummy text',
          hyperlink: 'https://google.com'
        }
      ],
      tutorialLink:
        'https://defitutorials.substack.com/p/pooling-with-defizap'
    },
    whatThisMeans: {
      text: [
        '34% used to open ETH Long position with 2X leverage on Fulcrum (dLETH2x)',
        '33% converted to LINK',
        '33% leftover input + acquired tokens are added to the LINK/ETH Liquidity pool on Uniswap. Receive minted liquidity tracking tokens back to your wallet.'
      ]
    },
    metamaskInteractionsSaved: [{ saved: 5 }]
  },
  unipoolseth: {
    id: 'unipoolseth',
    name: 'sETH Unipool',
    text: 'Uni sETH',
    isOrderable: true,
    hasReturnsChart: true,
    ensAddress: 'sETHUnipool.DeFiZap.eth',
    tokenAddress: '0xe9cf7887b93150d4f2da7dfc6d502b216438f244',
    tokenInfo: {
      address: '0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb',
      name: 'sETH',
      decimals: 18
    },
    gasLimitRequirement: '1500000',
    paused: false,
    illustration: 'sETH_illustration.svg',
    platformsUsed: [
      {
        key: 'uniswap',
        value: 'Uniswap',
        url: 'https://uniswap.io/',
        color: '#AF2CE4'
      }
    ],
    oneClickAccessTo: [
      { text: '🦄 Pooling Rewards', color: '#66098e' },
      {
        text: '⛽ Staking Rewards',
        color: '#6C757D',
        url: 'https://github.com/Synthetixio/SIPs/blob/master/SIPS/sip-8.md'
      }
    ],
    numberOfInteractions: 5,
    outperformsDuring: ['Choppy Markets'],
    whatHappensUnderTheHood: '',
    whatHappensAfter: '',
    components: [
      {
        name: 'sETH Pool token',
        percent: 100,
        color: '#6C757D'
      }
    ],
    description: {
      textQuestion: 'What does this Zap do?',
      textAnswer: ['Sample text'],
      textLink: [
        {
          text: 'dummy text',
          hyperlink: 'https://google.com'
        }
      ],
      tutorialLink:
        'https://defitutorials.substack.com/p/seth-unipool-defizap-tutorial'
    },
    whatThisMeans: {
      text: [
        '50% converted to sETH',
        '50% leftover input + acquired tokens are added to the sETH/ETH Liquidity pool on Uniswap. Receive minted liquidity tracking tokens back to your wallet.'
      ]
    },
    metamaskInteractionsSaved: [{ saved: 3 }]
  },
  llpdai: {
    id: 'llpdai',
    name: 'DAI LLP',
    text: 'DAI LLP',
    type: 'LLP',
    isOrderable: true,
    hasReturnsChart: true,
    ensAddress: 'DaiLLP.DeFiZap.eth',
    tokenAddress: '0x2a1530c4c41db0b0b2bb646cb5eb1a67b7158667',
    tokenInfo: {
      address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      name: 'DAI',
      decimals: 18,
      icon: 'dai_logo.svg'
    },
    gasLimitRequirement: '5000000',
    paused: false,
    // new: true,
    illustration: 'dai_llp_Illustration.svg',
    platformsUsed: [
      {
        key: 'uniswap',
        value: 'Uniswap',
        url: 'https://uniswap.io/',
        color: '#AF2CE4'
      },
      {
        key: 'Fulcrum',
        value: 'Fulcrum',
        url: 'https://fulcrum.trade/#/',
        color: '#407BF7'
      },
      {
        key: 'kyber',
        value: 'Kyber',
        url: 'https://kyberswap.com/swap/',
        color: '#FB795D'
      }
    ],
    oneClickAccessTo: [
      {
        text: '🦄 Pooling Rewards',
        color: '#66098e'
      },
      {
        text: '🚀 Long ETH with 2X Leverage',
        color: '#007BFF',
        url: 'https://fulcrum.trade/#/trade'
      }
    ],
    numberOfInteractions: 4,
    outperformsDuring: ['Choppy Markets'],
    whatHappensUnderTheHood: '',
    whatHappensAfter: '',
    components: [
      {
        name: 'DAI Pool token',
        percent: 66,
        color: '#F59D0D'
      },
      {
        name: 'dLETH2x',
        percent: 34,
        color: '#007BFF'
      }
    ],
    description: {
      textQuestion: 'What does this Zap do?',
      textAnswer: ['Sample text'],
      textLink: [
        {
          text: 'dummy text',
          hyperlink: 'https://google.com'
        }
      ],
      tutorialLink:
        'https://defitutorials.substack.com/p/dai-leveraged-liquidity-pool-defizap'
    },
    whatThisMeans: {
      text: [
        '34% used to open ETH Long position with 2X leverage on Fulcrum (dLETH2x)',
        '33% converted to DAI',
        '33% leftover input + acquired tokens are added to the DAI/ETH Liquidity pool on Uniswap. Receive minted liquidity tracking tokens back to your wallet.'
      ]
    },
    metamaskInteractionsSaved: [{ saved: 5 }]
  },
  unipooldai: {
    id: 'unipooldai',
    name: 'DAI Unipool',
    text: 'Uni DAI',
    isOrderable: true,
    hasReturnsChart: true,
    ensAddress: 'DAIUnipool.DeFiZap.eth',
    tokenAddress: '0x2a1530c4c41db0b0b2bb646cb5eb1a67b7158667',
    tokenInfo: {
      address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      name: 'DAI',
      decimals: 18,
      icon: 'dai_logo.svg'
    },
    gasLimitRequirement: '1500000',
    paused: false,
    platformsUsed: [
      {
        key: 'uniswap',
        value: 'Uniswap',
        url: 'https://uniswap.io/',
        color: '#AF2CE4'
      }
    ],
    oneClickAccessTo: [{ text: '🦄 Pooling Rewards', color: '#66098e' }],
    numberOfInteractions: 5,
    outperformsDuring: ['Choppy Markets'],
    whatHappensUnderTheHood: '',
    whatHappensAfter: '',
    components: [
      {
        name: 'DAI Pool token',
        percent: 100,
        color: '#F59D0D'
      }
    ],
    description: {
      textQuestion: 'What does this Zap do?',
      textAnswer: ['Sample text'],
      textLink: [
        {
          text: 'dummy text',
          hyperlink: 'https://google.com'
        }
      ],
      tutorialLink:
        'https://defitutorials.substack.com/p/dai-unipool-defizap-tutorial'
    },
    whatThisMeans: {
      text: [
        '50% converted to DAI',
        '50% leftover input + acquired tokens are added to the DAI/ETH Liquidity pool on Uniswap. Receive minted liquidity tracking tokens back to your wallet.'
      ]
    },
    metamaskInteractionsSaved: [{ saved: 3 }]
  },
  unipoolmkr: {
    id: 'unipoolmkr',
    name: 'MKR Unipool',
    text: 'Uni MKR',
    isOrderable: true,
    hasReturnsChart: true,
    ensAddress: 'MKRUnipool.DeFiZap.eth',
    tokenAddress: '0x2c4bd064b998838076fa341a83d007fc2fa50957',
    tokenInfo: {
      address: '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2',
      name: 'MKR',
      decimals: 18,
      icon: 'maker_logo.svg'
    },
    gasLimitRequirement: '1500000',
    paused: false,
    illustration: 'mkr_illustration.svg',
    platformsUsed: [
      {
        key: 'uniswap',
        value: 'Uniswap',
        url: 'https://uniswap.io/',
        color: '#AF2CE4'
      }
    ],
    oneClickAccessTo: [{ text: '🦄 Pooling Rewards', color: '#66098e' }],
    numberOfInteractions: 3,
    outperformsDuring: ['Choppy Markets'],
    whatHappensUnderTheHood: '',
    whatHappensAfter: '',
    components: [
      {
        name: 'MKR Pool token',
        percent: 100,
        color: '#1AAB9B'
      }
    ],
    description: {
      textQuestion: 'What does this Zap do?',
      textAnswer: ['Sample text'],
      textLink: [
        {
          text: 'dummy text',
          hyperlink: 'https://google.com'
        }
      ],
      tutorialLink:
        'https://defitutorials.substack.com/p/mkr-unipool-defizap-tutorial'
    },
    whatThisMeans: {
      text: [
        '50% converted to MKR',
        '50% leftover input + acquired tokens are added to the MKR/ETH Liquidity pool on Uniswap. Receive minted liquidity tracking tokens back to your wallet.'
      ]
    },
    metamaskInteractionsSaved: [{ saved: 3 }]
  },
  unipoolsnx: {
    id: 'unipoolsnx',
    name: 'SNX Unipool',
    text: 'Uni SNX',
    isOrderable: true,
    hasReturnsChart: true,
    ensAddress: 'SNXUnipool.DeFiZap.eth',
    tokenAddress: '0x3958b4ec427f8fa24eb60f42821760e88d485f7f',
    tokenInfo: {
      address: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
      name: 'SNX',
      decimals: 18
    },
    gasLimitRequirement: '1500000',
    paused: false,
    illustration: 'snx_illustration.svg',
    platformsUsed: [
      {
        key: 'uniswap',
        value: 'Uniswap',
        url: 'https://uniswap.io/',
        color: '#AF2CE4'
      }
    ],
    oneClickAccessTo: [{ text: '🦄 Pooling Rewards', color: '#66098e' }],
    numberOfInteractions: 5,
    outperformsDuring: ['Choppy Markets'],
    whatHappensUnderTheHood: '',
    whatHappensAfter: '',
    components: [
      {
        name: 'SNX Pool token',
        percent: 100,
        color: '#000000'
      }
    ],
    description: {
      textQuestion: 'What does this Zap do?',
      textAnswer: ['Sample text'],
      textLink: [
        {
          text: 'dummy text',
          hyperlink: 'https://google.com'
        }
      ],
      tutorialLink:
        'https://defitutorials.substack.com/p/snx-unipool-defizap-tutorial'
    },
    whatThisMeans: {
      text: [
        '50% converted to SNX',
        '50% leftover input + acquired tokens are added to the SNX/ETH Liquidity pool on Uniswap. Receive minted liquidity tracking tokens back to your wallet.'
      ]
    },
    metamaskInteractionsSaved: [{ saved: 3 }]
  },
  unipoolchai: {
    id: 'unipoolchai',
    name: 'CHAI Unipool',
    text: 'Uni CHAI',
    isOrderable: true,
    hasReturnsChart: true,
    ensAddress: 'CHAIUnipool.DeFiZap.eth',
    tokenAddress: '0x6c3942b383bc3d0efd3f36efa1cbe7c8e12c8a2b',
    tokenInfo: {
      address: '0x06AF07097C9Eeb7fD685c692751D5C66dB49c215',
      name: 'CHAI',
      decimals: 18,
      icon: 'chai_logo.svg'
    },
    gasLimitRequirement: '1500000',
    paused: false,
    illustration: 'chai_illustration.svg',
    platformsUsed: [
      {
        key: 'uniswap',
        value: 'Uniswap',
        url: 'https://uniswap.io/',
        color: '#AF2CE4'
      },
      {
        key: 'kyber',
        value: 'Kyber',
        url: 'https://kyberswap.com/swap/',
        color: '#FB795D'
      },
      {
        key: 'Maker',
        value: 'Maker',
        url: 'https://chai.money',
        color: '#000000'
      }
    ],
    oneClickAccessTo: [
      { text: '🦄 Pooling Rewards', color: '#66098e' },
      {
        text: '📈DSR Rewards',
        color: '#1AAB9B',
        url:
          'https://community-development.makerdao.com/makerdao-mcd-faqs/faqs/dsr'
      }
    ],
    numberOfInteractions: 5,
    outperformsDuring: ['Choppy Markets'],
    whatHappensUnderTheHood: '',
    whatHappensAfter: '',
    components: [
      {
        name: 'CHAI Pool token',
        percent: 100,
        color: '#DE3443'
      }
    ],
    description: {
      textQuestion: 'What does this Zap do?',
      textAnswer: ['Sample text'],
      textLink: [
        {
          text: 'dummy text',
          hyperlink: 'https://google.com'
        }
      ],
      tutorialLink:
        'https://defitutorials.substack.com/p/chai-unipool-defizap-tutorial'
    },
    whatThisMeans: {
      text: [
        '50% of your ETH input is first converted to DAI on Kyber to avoid ETH->CHAI slippage',
        'Converted DAI is then wrapped into CHAI. Learn more on chai.money',
        'CHAI + other 50% ETH input are added to the ETH/CHAI Liquidity Pool on Uniswap. Receive minted liquidity tracking tokens back to your wallet.'
      ]
    },
    metamaskInteractionsSaved: [{ saved: 5 }]
  },
  unipoolcdai: {
    id: 'unipoolcdai',
    name: 'cDAI Unipool',
    text: 'Uni cDAI',
    isOrderable: true,
    hasReturnsChart: true,
    ensAddress: 'cDAIPool.DeFiZap.eth',
    tokenAddress: '0x34E89740adF97C3A9D3f63Cc2cE4a914382c230b',
    tokenInfo: {
      address: '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643',
      name: 'cDAI',
      decimals: 8
    },
    gasLimitRequirement: '1500000',
    paused: false,
    illustration: 'cdai_illustration.svg',
    platformsUsed: [
      {
        key: 'uniswap',
        value: 'Uniswap',
        url: 'https://uniswap.io/',
        color: '#AF2CE4'
      },
      {
        key: 'kyber',
        value: 'Kyber',
        url: 'https://kyberswap.com/swap/',
        color: '#FB795D'
      },
      {
        key: 'Compound',
        value: 'Compound',
        url: 'https://compound.finance/',
        color: '#28A745'
      }
    ],
    oneClickAccessTo: [
      { text: '🦄 Pooling Rewards', color: '#66098e' },
      {
        text: '💸 Lending Rewards',
        color: '#63d37b',
        url: 'https://compound.finance/markets'
      }
    ],
    numberOfInteractions: 5,
    outperformsDuring: ['Choppy Markets'],
    whatHappensUnderTheHood: '',
    whatHappensAfter: '',
    components: [
      {
        name: 'cDAI Pool token',
        percent: 100,
        color: '#00D395'
      }
    ],
    description: {
      textQuestion: 'What does this Zap do?',
      textAnswer: ['Sample text'],
      textLink: [
        {
          text: 'dummy text',
          hyperlink: 'https://google.com'
        }
      ],
      tutorialLink:
        'https://defitutorials.substack.com/p/chai-unipool-defizap-tutorial-9e2'
    },
    whatThisMeans: {
      text: [
        '50% of your ETH input is first converted to DAI on Kyber to avoid ETH<>cDAI slippage',
        'Converted DAI is then supplied on Compound to mint cDAI',
        'cDAI + other 50% ETH input are added to the ETH/cDAI Liquidity Pool on Uniswap. Receive minted liquidity tracking tokens back to your wallet.'
      ]
    },
    metamaskInteractionsSaved: [{ saved: 5 }]
  },
  doublebull: {
    id: 'doublebull',
    name: 'Double Bull',
    text: 'Double-Bull',
    isOrderable: true,
    hasReturnsChart: false,
    numberOfInteractions: 4,
    ensAddress: 'DoubleBull.DeFiZap.eth',
    gasLimitRequirement: '7000000',
    minValue: 0.15,
    paused: false,

    components: [
      {
        name: 'dLETH2x',
        percent: 50,
        color: '#007BFF'
      },
      {
        name: 'dLWBTC2x',
        percent: 50,
        color: '#FFC107'
      }
    ],
    description: {
      textQuestion: 'What does Double Bull do?',
      textAnswer: [
        'Your deposit is automatically split into opening Perpetual (no expiration) 2x Long on ETH(dLETH2x) + BTC(dLWBTC2x).',
        'For example, if you send 1 ETH to DoubleBull.DeFiZap.eth:',
        ' - 0.5 of your ETH will go towards opening Perpetual BTC Long position with 2x leverage.',
        ' - 0.5 ETH will be used to open Perpetual ETH Long with 2x leverage. This means you will have exposure to 1 ETH (0.5x2).',
        'After sending your deposit, you will immediately receive allocated bZx tokens (dLETH2x+dLWBTC2x) which track your open margin trade positions.',
        'Soon you will be able to manage your purchased assets right from DeFiZap Dashboard but for now you can visit Fulcrum.Trade to view your balances and trade your positions.'
      ],
      textLink: [
        {
          text: 'Check out this tutorial to see how Fulcrum works.',
          hyperlink:
            'https://defitutorials.substack.com/p/margin-trading-with-fulcrum'
        }
      ],
      tutorialLink:
        'https://defitutorials.substack.com/p/double-bull-defizap-walk-through'
    },
    whatThisMeans: {
      text: [
        '50% used to open ETH Long position with 2X leverage on Fulcrum (dLETH2x)',
        '50% used to open BTC Long position with 2X leverage on Fulcrum (dLWBTC2x)'
      ]
    },
    oneClickAccessTo: [
      {
        text: '🚀 Long ETH with 2X Leverage',
        color: '#007BFF',
        url: 'https://fulcrum.trade/#/trade'
      },
      {
        text: '🚀 Long BTC with 2X Leverage',
        color: '#FFC107',
        url: 'https://fulcrum.trade/#/trade'
      }
    ],
    platformsUsed: [
      {
        key: 'Fulcrum',
        value: 'Fulcrum',
        url: 'https://fulcrum.trade/#/',
        color: '#407BF7'
      }
    ],
    metamaskInteractionsSaved: [{ saved: 2 }]
  },
  lender: {
    id: 'lender',
    name: 'Lender',
    text: 'Lender',
    isOrderable: true,
    hasReturnsChart: false,
    numberOfInteractions: 4,
    ensAddress: 'Lender.DeFiZap.eth',
    gasLimitRequirement: '7000000',
    paused: false,
    components: [
      {
        name: 'cDAI',
        percent: 90,
        color: '#28A745'
      },
      {
        name: 'dLETH2x',
        percent: 10,
        color: '#407BF7'
      }
    ],
    description: {
      textQuestion: 'What does this Zap do?',
      textAnswer: [
        'Lender Zap allocates incoming deposits 90% to cDAI and 10% to dLETH2x.',
        'Therefore, if you send 1 ETH to this Lender.DeFiZap.eth, or buy from our website, 0.9 of your worth will go towards investing in Compound.Finance while 0.1 of your ETH will be used to open a Perpetual ETH Long with 2x leverage.',
        "Lender's Zap is interesting because, within a year, the interest generated from cDAI could completely cover your margin trade purchase. Think of it as trading with your future interest earned.",
        'After sending your ETH, you will immediately receive allocated tokens (cDAI+dLETH2x) which track your DAI lending balance + margin trade position. Once you receive these tokens you can visit Compound.Finance to view/withdraw interest earned and Fulcrum.Trade to view your ROI/ close position on dLETH2x.'
      ],
      textLink: [
        {
          text: 'Check out this tutorial we made to help you use Fulcrum',
          hyperlink:
            'https://defitutorials.substack.com/p/margin-trading-with-fulcrum'
        },
        {
          text: 'Compound.',
          hyperlink:
            'https://defitutorials.substack.com/p/earn-passive-income-with-compound'
        }
      ],
      tutorialLink:
        'https://defitutorials.substack.com/p/lender-zap-walk-through-tutorial'
    },
    whatThisMeans: {
      text: [
        '90% auto-converted into DAI + supplied to Compound to mint cDAI',
        '10% used to open ETH Long position with 2X leverage on Fulcrum (dLETH2x)'
      ]
    },
    oneClickAccessTo: [
      {
        text: '💸 Lending Rewards',
        color: '#63d37b',
        url: 'https://compound.finance/markets'
      },
      {
        text: '🚀 Long ETH with 2X Leverage',
        color: '#007BFF',
        url: 'https://fulcrum.trade/#/trade'
      }
    ],
    platformsUsed: [
      {
        key: 'Compound',
        value: 'Compound',
        url: 'https://compound.finance/',
        color: '#28A745'
      },
      {
        key: 'Fulcrum',
        value: 'Fulcrum',
        url: 'https://fulcrum.trade/#/',
        color: '#407BF7'
      },
      {
        key: 'kyber',
        value: 'Kyber',
        url: 'https://kyberswap.com/swap/',
        color: '#FB795D'
      }
    ],
    metamaskInteractionsSaved: [{ saved: 4 }]
  },
  ETHMaximalist: {
    id: 'ETHMaximalist',
    name: 'ETH Bull',
    text: 'Eth-Max',
    isOrderable: true,
    hasReturnsChart: false,
    numberOfInteractions: 6,
    ensAddress: 'EthBull.DeFiZap.eth',
    gasLimitRequirement: '7000000',
    paused: false,
    components: [
      {
        name: 'dLETH2x',
        percent: 50,
        color: '#007BFF'
      },
      {
        name: 'dsWBTC',
        percent: 50,
        color: '#DC3545'
      }
    ],
    description: {
      textQuestion: 'What does this Zap do?',
      textAnswer: [
        'Your deposit is automatically split between bZx Perpetual Short WBTC (dsWBTC) and bZx Perpetual Long ETH-DAI 2x(dLETH2x).  For example, if you send 1 ETH to Ethmax.DeFiZap.eth or buy from our website, 0.5 of your ETH will go towards opening a Perpetual (without expiration) BTC Short position on Fulcrum exchange while 0.5 will be used to open a Perpetual ETH Long with 2x leverage.',
        'This means you will have exposure to 1 ETH (0.5X2) and 0.5 ETH’s worth of WBTC Short position. After sending your ETH, you will immediately receive allocated tokens (dsWBTC+dLETH2x) which track your trade positions.',
        'Soon you will be able to manage your positions and assets directly from DeFiZap Dashboard.'
      ],
      textLink: [
        {
          text: 'Check out this tutorial we made to help you use Fulcrum.',
          hyperlink:
            'https://defitutorials.substack.com/p/margin-trading-with-fulcrum'
        }
      ],
      tutorialLink:
        'https://defitutorials.substack.com/p/eth-maximalist-zap-walk-through-tutorial'
    },
    whatThisMeans: {
      text: [
        '50% used to open ETH Long position with 2X leverage on Fulcrum (dLETH2x)',
        '50% used to open BTC Short position on Fulcrum (dsWBTC2x)'
      ]
    },
    oneClickAccessTo: [
      {
        text: '🚀 Long ETH with 2X Leverage',
        color: '#007BFF',
        url: 'https://fulcrum.trade/#/trade'
      },
      {
        text: '🐻 Short BTC',
        color: '#DC3545',
        url:
          'https://etherscan.io/token/0x9fc208947d92b1588f7bde245620439568a8587a'
      }
    ],
    platformsUsed: [
      {
        key: 'Fulcrum',
        value: 'Fulcrum',
        url: 'https://fulcrum.trade/#/',
        color: '#407BF7'
      }
    ],
    metamaskInteractionsSaved: [{ saved: 2 }]
  },
  moderatebull: {
    id: 'moderatebull',
    name: 'Moderate Bull',
    text: 'Mod-Bull',
    isOrderable: true,
    hasReturnsChart: false,
    numberOfInteractions: 4,
    ensAddress: 'ModerateBull.DeFiZap.eth',
    gasLimitRequirement: '2000000',
    paused: false,
    components: [
      {
        name: 'sETH',
        percent: 50,
        color: '#01ad75'
      },
      {
        name: 'sBTC',
        percent: 50,
        color: '#53B267'
      }
    ],
    description: {
      textQuestion: 'What does Moderate Bull Zap do?',
      textAnswer: [
        'Your deposit is automatically allocated 50% to sBTC and 50% to sETH Synths which represent BTC and ETH long positions on Synthetix’s protocol.',
        'For example, if you send 1 ETH to ModerateBull.DeFiZap.Eth:',
        ' - 0.5 of your ETH will go towards longing BTC by purchasing sBTC on Synthetix exchange.',
        ' - 0.5 of your ETH will go towards longing ETH by purchasing sETH on Synthetix exchange.',
        'After sending your deposit, you will immediately receive allocated Synths (sBTC+sETH) which track your trade positions.',
        'Soon you will be able to manage your purchased assets right from DeFiZap Dashboard but for now you can visit Synthetix.Exchange to view balances and trade your Synths.',
        'Please note:',
        '  (a). Etherscan will show you a warning error.  Please do not worry, that is just an internal check error that does not impact the transaction and you will receive the necessary sBTC and sETH in your wallet without any issues.',
        '  (b). If you are sending ETH directly to ModerateBull.DeFiZap.Eth, please ensure that the Gas Price is set to no more than 1 Gwei.'
      ],
      textLink: [
        {
          text:
            'Check out this tutorial to help you understand how Synthetix works.',
          hyperlink:
            'https://defitutorials.substack.com/p/the-ultimate-guide-to-synthetix'
        }
      ],
      tutorialLink:
        'https://defitutorials.substack.com/p/moderate-bull-defizap-walk-through'
    },
    whatThisMeans: {
      text: [
        '50% used to acquire sBTC on Synthetix exchange.',
        '50% used to acquire sETH on Synthetix exchange.'
      ]
    },
    oneClickAccessTo: [
      {
        text: '📊 Synthetic Assets',
        color: '#6C757D',
        url: 'https://dashboard.synthetix.io/'
      }
    ],
    platformsUsed: [
      {
        key: 'Synthetix',
        value: 'Synthetix',
        url: 'https://synthetix.exchange/',
        color: '#5F6E98'
      }
    ],
    metamaskInteractionsSaved: [{ saved: 3 }]
  },
  bullSharpe: {
    id: 'bullSharpe',
    name: 'Conservative Bull',
    isOrderable: false,
    components: [
      {
        name: 'cDAI',
        percent: 90
      },
      {
        name: 'ETHMINVOL',
        percent: 10
      }
    ]
  },
  bearSharpe: {
    id: 'bearSharpe',
    name: 'Conservative Bear',
    isOrderable: false,
    components: [
      {
        name: 'cDAI',
        percent: 90
      },
      {
        name: 'dSETH1x',
        percent: 10
      }
    ]
  },
  moderate: {
    id: 'moderate',
    name: 'Moderate',
    isOrderable: false,
    components: [
      {
        name: 'cDAI',
        percent: 50
      },
      {
        name: 'ETH12EMA',
        percent: 25
      },
      {
        name: 'ETHMINVOL',
        percent: 25
      }
    ]
  },
  moderateBear: {
    id: 'moderateBear',
    name: 'Moderate Bear',
    isOrderable: false,
    components: [
      {
        name: 'cDAI',
        percent: 50
      },
      {
        name: 'ETHHIVOL',
        percent: 25
      },
      {
        name: 'ETH12EMA',
        percent: 25
      }
    ]
  },
  longTermBull: {
    id: 'longTermBull',
    name: 'Long Term Bull',
    isOrderable: false,
    components: [
      {
        name: 'cDAI',
        percent: 20
      },
      {
        name: 'ETH20SMACO',
        percent: 40
      },
      {
        name: 'ETHMINVOL',
        percent: 40
      }
    ]
  },
  shortTermBear: {
    id: 'shortTermBear',
    name: 'Short Term Bear',
    isOrderable: false,
    components: [
      {
        name: 'cDAI',
        percent: 20
      },
      {
        name: 'ETHHIVOL',
        percent: 40
      },
      {
        name: 'ETH12EMA',
        percent: 40
      }
    ]
  },
  shortTermFlat: {
    id: 'shortTermFlat',
    name: 'Short Term Flat',
    isOrderable: false,
    components: [
      {
        name: 'ETHMINVOL',
        percent: 50
      },
      {
        name: 'ETH20SMACO',
        percent: 25
      },
      {
        name: 'ETH12EMA',
        percent: 25
      }
    ]
  },
  moderateDiversified: {
    id: 'moderateDiversified',
    name: 'Moderate Diversified',
    isOrderable: false,
    components: [
      {
        name: 'cDAI',
        percent: 25
      },
      {
        name: 'ETH12EMA',
        percent: 25
      },
      {
        name: 'ETH26EMA',
        percent: 25
      },
      {
        name: 'dLETH2x',
        percent: 25
      }
    ]
  },
  moderateFlat: {
    id: 'moderateFlat',
    name: 'Moderate Flat',
    isOrderable: false,
    components: [
      {
        name: 'cDAI',
        percent: 25
      },
      {
        name: 'ETHMINVOL',
        percent: 50
      },
      {
        name: 'ETH12EMA',
        percent: 25
      }
    ]
  },
  hedgedBull: {
    id: 'hedgedBull',
    name: 'Hedge Bull',
    isOrderable: false,
    components: [
      {
        name: 'cDAI',
        percent: 50
      },
      {
        name: 'ETHMINVOL',
        percent: 40
      },
      {
        name: 'dLETH2x',
        percent: 10
      }
    ]
  },
  beginnerBull: {
    id: 'beginnerBull',
    name: 'Beginner Bull',
    isOrderable: false,
    components: [
      {
        name: 'ETHMINVOL',
        percent: 50
      },
      {
        name: 'ETH20SMA',
        percent: 50
      }
    ]
  },
  beginnerBear: {
    id: 'beginnerBear',
    name: 'Beginner Bear',
    isOrderable: false,
    components: [
      {
        name: 'cDAI',
        percent: 50
      },
      {
        name: 'ETH12EMA',
        percent: 25
      },
      {
        name: 'ETH26EMA',
        percent: 25
      }
    ]
  },
  activeBear: {
    id: 'activeBear',
    name: 'Active Bear',
    isOrderable: false,
    components: [
      {
        name: 'ETHHIVOL',
        percent: 50
      },
      {
        name: 'ETH12EMA',
        percent: 25
      },
      {
        name: 'dSETH2x',
        percent: 25
      }
    ]
  },
  activeBull: {
    id: 'activeBull',
    name: 'Active Bull',
    isOrderable: false,
    components: [
      {
        name: 'ETHHIVOL',
        percent: 50
      },
      {
        name: 'ETH12EMA',
        percent: 50
      }
    ]
  },
  flatLands: {
    id: 'flatLands',
    name: 'Flat Lands',
    isOrderable: false,
    components: [
      {
        name: 'ETHMINVOL',
        percent: 50
      },
      {
        name: 'ETH12EMA',
        percent: 50
      }
    ]
  },
  riskyBear: {
    id: 'riskyBear',
    name: 'Risky Bear',
    isOrderable: false,
    components: [
      {
        name: 'ETHHIVOL',
        percent: 50
      },
      {
        name: 'ETH12EMA',
        percent: 25
      },
      {
        name: 'dLETH2x',
        percent: 25
      }
    ]
  },
  riskyBull: {
    id: 'riskyBull',
    name: 'Risky Bull',
    isOrderable: false,
    components: [
      {
        name: 'ETHMINVOL',
        percent: 25
      },
      {
        name: 'dLETH2x',
        percent: 75
      }
    ]
  }
};

export default Zaps;
