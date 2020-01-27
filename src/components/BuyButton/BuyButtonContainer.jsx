import React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
// import Tooltip from 'react-bootstrap/Tooltip';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';
import Web3 from 'web3';
import isEmpty from 'lodash/isEmpty';
import styles from './BuyButton.module.css';
import '../../App.css';
import Loading from '../Loading';
import Confirmed from '../Confirmed';
import Rejected from '../Rejected';
import Simulator from '../Simulator';

import contractProvider from '../../utils/web3DataProvider';
import { registerEvent } from '../../api/googleAnalytics';
import {
  BUY_ZAP,
  INITIATE_PURCHASE,
  SUCCESSFUL_PURCHASE
} from '../../constants/googleAnalytics';
import {
  fetchRequest,
  buildOptions,
  checkResponse
} from '../../api/apiHelpers';

import SimpleID from 'simpleid-js-sdk';

const simple = new SimpleID({
  appOrigin: window.location.origin,
  appName: "DeFiZap",
  appId: "ADD YOUR APP ID HERE",
  useSimpledIdWidget: true,
  network: 'mainnet'
});

class BuyButtonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: '',
      account: null,
      showLoader: false,
      showCross: false,
      showCheck: false,
      gasMode: 'average',
      txId: ''
    };
  }

  async getGas() {
    const response = await fetchRequest(
      'https://ethgasstation.info/json/ethgasAPI.json',
      () => buildOptions()
    ).then(checkResponse('Failed to get gas from Gas Station'));
    const { gasMode } = this.state;
    const gasValue = (response[`${gasMode}`] / 10) * 1000000000;
    this.setState({ gasValue });
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  toggle = () => {
    this.setState({
      open: !this.state.open,
      showCheck: false,
      showCross: false
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    registerEvent({
      category: INITIATE_PURCHASE,
      action: this.props.name
    });
    try {
      await this.initialize();
      let web3;
      if (
        typeof window.ethereum !== 'undefined' ||
        typeof window.web3 !== 'undefined'
      ) {
        const provider = window.ethereum || window.web3.currentProvider;
        web3 = new Web3(provider);
      }
      const networkId = await web3.eth.net.getId();
      const { ens } = web3.eth;
      await this.getGas();
      if (networkId !== 1) {
        alert(
          'Sorry, you need to be on the Ethereum MainNet to use our services.'
        );
      } else {
        const {
          contractAbi,
          contractAddress,
          gas,
          gasPrice
        } = contractProvider(this.props.name);
        const newAddress =
          contractAddress.slice(0, 2) === '0x'
            ? contractAddress
            : await ens.getAddress(contractAddress);
        const valueToInvest = this.state.value;
        const contract = new web3.eth.Contract(contractAbi, newAddress);
        this.setState({ showLoader: true, showCross: false, showCheck: false });
        let tx;
        if (this.props.name === 'Lender') {
          tx = await contract.methods.LetsInvest(
            window.web3.currentProvider.selectedAddress,
            90,
            5
          );
        } else if (
          this.props.name === 'ETH Bull' ||
          this.props.name === 'Double Bull' ||
          this.props.name === 'Super Saver' ||
          this.props.name === 'Moderate Bull'
        ) {
          tx = await contract.methods.LetsInvest(
            window.web3.currentProvider.selectedAddress,
            50,
            5
          );
        } else if (
          this.props.name === 'CHAI Unipool' ||
          this.props.name === 'cDAI Unipool'
        ) {
          tx = await contract.methods.LetsInvest(
            '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
            window.web3.currentProvider.selectedAddress,
            5
          );
        } else if (this.props.name === 'DAI LLP') {
          tx = await contract.methods.LetsInvest(
            window.web3.currentProvider.selectedAddress,
            33,
            this.props.tokenInfo.address,
            5,
            false
          );
        } else if (this.props.name === 'LINK Unipool') {
          tx = await contract.methods.LetsInvest(
            window.web3.currentProvider.selectedAddress,
            5,
            false
          );
        } else if (this.props.name === 'LINK LLP') {
          tx = await contract.methods.LetsInvest(
            window.web3.currentProvider.selectedAddress,
            34,
            5,
            false
          );
        } else if (this.props.name === '2x LINK LLP') {
          tx = await contract.methods.LetsInvest(
            window.web3.currentProvider.selectedAddress,
            34
          );
        } else if (this.props.name === 'DAI Unipool' || 'MKR Unipool' || 'SNX Unipool' || 'sETH Unipool') {
          tx = await contract.methods.LetsInvest();
        } else {
          tx = await contract.methods.LetsInvest();
        }
        tx.send({
          from: this.state.account,
          value: web3.utils.toWei(valueToInvest, 'ether'),
          gas,
          gasPrice: isEmpty(gasPrice) ? String(this.state.gasValue) : gasPrice
        })
          .on('receipt', receipt => {
            console.log(
              'the tx hash of the sendInvestment function is',
              receipt.transactionHash
            );
            registerEvent({
              category: SUCCESSFUL_PURCHASE,
              action: this.props.name
            });
            this.setState({
              showLoader: false,
              showCheck: true,
              txId: receipt.transactionHash
            });
          })
          .on('error', error => {
            this.setState({ showLoader: false, showCross: true });

            alert(
              'Sorry, we encountered an error, please try again or reach out to us if this persists.'
            );
          });
        console.log(tx);
      }
    } catch (error) {
      console.log(error);
    }
  };

  setGasMode = async gasMode => {
    await this.setState({ gasMode });
  };

  async initialize() {
    try {
      const [account] = await window.ethereum.enable();
      console.log(account)
      this.setState({ account });
      //Check if SimpleID has previously been called
      const userData = simple.getUserData()
      if(userData && userData.wallet) {
        //Nothing to do here right now
      } else {
        //Need to pass user's address to SimpleID
        if(account) {
          const userInfo = {
            address: account
          }
          const signedIn = await simple.passUserInfo(userInfo)
          console.log(signedIn)
        } else {
          console.log("No ethereum address")
        }
      }
    } catch (error) {
      console.error(error);
      alert('You will need to connect web3 wallet');
      throw error;
    }
  }

  renderModal() {
    const { open, value } = this.state;
    const {
      name,
      ensAddress,
      gasLimitRequirement,
      hasReturnsChart,
      tokenInfo,
      tokenAddress,
      paused,
      type,
      stats,
      minValue
    } = this.props;

    return (
      <Modal isOpen={open} toggle={this.toggle} centered>
        <ModalBody>
          <form onSubmit={this.handleSubmit}>
            <div className={`${styles.buycontainer}`}>
              <h1>{name}</h1>

              {paused ? (
                'Temporarily Paused'
              ) : (
              <div className={`${styles.buycontents}`}>
                  <p className={`${styles.buytext} pt-4 mr-2`}>INPUT</p>
                  <input
                    min={minValue || 0.01}
                    type="number"
                    step={0.001}
                    value={value}
                    onChange={this.handleChange}
                    placeholder="0.0"
                    required
                    style={
                      value && value.length > 3
                        ? {
                          width: `${90 + value.length * 20}px`
                        }
                        : {
                          width: '90px'
                        }
                    }
                  />
                  <p className={`${styles.buytext} pt-4 ml-2`}>ETH</p>
                </div>
              )
              }

              {hasReturnsChart ? (
                <Simulator
                  value={this.state.value}
                  tokenInfo={tokenInfo}
                  tokenAddress={tokenAddress}
                  type={type}
                  name={name}
                  stats={stats}
                />
              ) : null}
              {/* <div className='justify-content-center pl-4'>Slippage</div> */}
              {/* {hasReturnsChart ? 
              <Row className="justify-content-center pe-4 pt-2">
                <div className='justify-content-center pl-4'>
                  Slippage{' '}
                  <OverlayTrigger
                    overlay={<Tooltip>Our zaps are designed to reject any transaction that registers over 5% slippage. We do not control the slippage that eventually gets executed (under 5%) on UniSwap.</Tooltip>}
                    placement="right"
                  >
                    <FontAwesomeIcon icon={faQuestionCircle} />

                  </OverlayTrigger>
                </div>
              </Row>
              : null} */}
              {paused ? null : (
<div>
                  <Row className="justify-content-center py-3">
                    Select Transaction Speed:{' '}
                  </Row>
                  <Row className="justify-content-center">
                    <ToggleButtonGroup
                      type="radio"
                      name="gasOptions"
                      value={this.state.gasMode}
                      onChange={this.setGasMode}
                    >
                      <ToggleButton
                        variant="outline-success"
                        size="lg"
                        value="average"
                      >
                        Slow
                  </ToggleButton>
                      <ToggleButton
                        variant="outline-success"
                        size="lg"
                        value="fast"
                      >
                        Average
                  </ToggleButton>
                      <ToggleButton
                        size="lg"
                        value="fastest"
                        variant="outline-success"
                      >
                        Fast
                  </ToggleButton>
                    </ToggleButtonGroup>
                  </Row>
                </div>
)}
              {/* <Row className='justify-content-center py-2'>1.3 Gwei ($0.28)</Row> */}
              {paused ? null : (
<Row>
                  <Column sm={12} mb={8}>
                    <p className="pt-2" style={{ fontSize: '0.75em' }}>
                      Alternatively send ETH directly to {ensAddress} using
                    <i> minimum </i>
                      <span onCopy={gasLimitRequirement} />
                      {gasLimitRequirement} gas.
                  </p>
                  </Column>
                </Row>
)}
            </div>
            <div className="my-4 row justify-content-center">
              {paused ? null : (
<input
                  type="submit"
                  className="font20 mx-3 btn btn-outline-success btn-large shadow px-4 py-2"
                  value="Confirm"
                />
)}
              <div
                className="font20 btn btn-outline-dark btn-large shadow px-4 py-2 mx-3"
                onClick={this.toggle}
              >
                Cancel
              </div>
              {this.state.showLoader ? <Loading /> : null}
              {this.state.showCross ? <Rejected /> : null}
              {this.state.showCheck ? (
                <Confirmed txId={this.state.txId} />
              ) : null}
            </div>
          </form>
        </ModalBody>
      </Modal>
    );
  }

  render() {
    const { isOrderable, name, block, size } = this.props;
    return (
      <>
        {isOrderable ? (
          // eslint-disable-next-line jsx-a11y/accessible-emoji
          <Button
            className={`${styles.buyButton}`}
            onClick={() => {
              this.setState({ open: true });
              registerEvent({
                category: BUY_ZAP,
                action: name
              });
            }}
            disabled={!isOrderable}
            // variant="outline-primary"
            size={!isEmpty(size) ? size : 'md'}
            block={block}
          >
            ⚡ Use This Zap
          </Button>
        ) : null}
        {this.renderModal()}
      </>
    );
  }
}

export default BuyButtonContainer;
