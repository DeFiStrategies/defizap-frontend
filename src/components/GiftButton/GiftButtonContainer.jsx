import React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Spinner from 'react-bootstrap/Spinner';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';
import isEmpty from 'lodash/isEmpty';
import styles from './GiftButton.module.css';
import '../../App.css';
import Loading from '../Loading';
import Confirmed from '../Confirmed';
import Rejected from '../Rejected';
import Simulator from '../Simulator';
import contractProvider from '../../utils/giftweb3DataProvider';
import { registerEvent } from '../../api/googleAnalytics';
import {
  BUY_ZAP,
  INITIATE_PURCHASE,
  SUCCESSFUL_PURCHASE
} from '../../constants/googleAnalytics';
import { getWeb3 } from '../../web3/web3';
import {
  fetchRequest,
  buildOptions,
  checkResponse
} from '../../api/apiHelpers';

class GiftButtonContainer extends React.Component {
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
      toAddress: '',
      txId: '',
      addressToPrint: '',
      tick: '',
      cross: ''
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
      const web3 = getWeb3();
      const networkId = await web3.eth.net.getId();
      const { ens } = web3.eth;

      const isInvalidAddress = !(await web3.utils.isAddress(
        this.state.toAddress
      ));

      await this.getGas();
      if (networkId !== 1 || isInvalidAddress) {
        if (isInvalidAddress) {
          alert(
            'Sorry, it seems like the ETH Address you entered is not valid.'
          );
        }
        if (networkId !== 1) {
          alert(
            'Sorry, you need to be on the Ethereum MainNet to use our services.'
          );
        }
      } else {
        const {
          contractAbi,
          contractAddress,
          gas,
          gasPrice
        } = contractProvider(this.props.name);
        console.log(contractAddress.slice(0, 2));
        const newAddress =
          contractAddress.slice(0, 2) === '0x'
            ? contractAddress
            : await ens.getAddress(contractAddress);
        const valueToInvest = this.state.value;
        const contract = new web3.eth.Contract(contractAbi, newAddress);
        this.setState({ showLoader: true, showCross: false, showCheck: false });
        let tx;
        if (this.props.name === 'Lender') {
          tx = await contract.methods.LetsInvest(this.state.toAddress, 90, 5);
        } else if (
          this.props.name === 'ETH Bull' ||
          this.props.name === 'Double Bull' ||
          this.props.name === 'Super Saver' ||
          this.props.name === 'Moderate Bull'
        ) {
          tx = await contract.methods.LetsInvest(this.state.toAddress, 50, 5);
        } else if (
          this.props.name === 'CHAI Unipool' ||
          this.props.name === 'cDAI Unipool'
        ) {
          tx = await contract.methods.LetsInvest(
            '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
            this.state.toAddress,
            5
          );
        } else if (this.props.name === 'DAI Unipool') {
          tx = await contract.methods.LetsInvest(
            '0x6b175474e89094c44da98b954eedeac495271d0f',
            this.state.toAddress
          );
        } else if (this.props.name === 'MKR Unipool') {
          tx = await contract.methods.LetsInvest(
            '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
            this.state.toAddress
          );
        } else if (this.props.name === 'SNX Unipool') {
          tx = await contract.methods.LetsInvest(
            '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
            this.state.toAddress
          );
        } else if (this.props.name === 'sETH Unipool') {
          tx = await contract.methods.LetsInvest(
            '0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb',
            this.state.toAddress
          );
        } else if (this.props.name === 'LINK Unipool') {
          tx = await contract.methods.LetsInvest(
            this.state.toAddress,
            5,
            false
          );
        } else if(this.props.name === 'LINK LLP') {
          tx = await contract.methods.LetsInvest(
            this.state.toAddress,
            34, 5, false);
        } else if(this.props.name === '2x LINK LLP)') {
          tx = await contract.methods.LetsInvest(
            this.state.toAddress, 34);
        } else if (this.props.name === 'DAI LLP') {
          tx = await contract.methods.LetsInvest(
            this.state.toAddress,
            33,
            this.props.tokenInfo.address,
            5,
            false
          );
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

  handleAddressChange = async event => {
    await this.setState({
      toAddress: event.target.value,
      addressToPrint: event.target.value
    });
    if (this.state.toAddress.length >= 1) {
      await this.setState({
        tick: (
          <Spinner animation="border" className={`${styles.loader}`}>
            <span className="sr-only">Loading...</span>
          </Spinner>
        )
      });
    } else {
      await this.setState({ tick: '', cross: '' });
    }
    let newAddress;
    const web3 = getWeb3();
    let flag = 1;
    const thisObj = this;
    if (
      this.state.toAddress.indexOf('.eth') !== -1 &&
      this.state.toAddress.length - this.state.toAddress.indexOf('.eth') === 4
    ) {
      await web3.eth.ens
        .getAddress(this.state.toAddress.trim())
        .then(function (address) {
          flag = 2;
          newAddress = address;
        })
        .catch(function () {
          thisObj.setState({
            tick: <Button className={`${styles.cross}`}>&nbsp;X&nbsp;</Button>
          });
        });

      if (flag === 2) {
        this.setState({
          toAddress: newAddress,
          tick: (
            <Button className={`${styles.tickbtn}`} variant="success">
              &nbsp;✓&nbsp;
            </Button>
          )
        });
      } else {
        this.setState({
          tick: <Button className={`${styles.cross}`}>&nbsp;X&nbsp;</Button>
        });
      }
    } else if (this.state.toAddress.length === 42) {
      const isInvalidAddress = !(await web3.utils.isAddress(
        this.state.toAddress
      ));
      if (!isInvalidAddress) {
        this.setState({
          tick: (
            <Button className={`${styles.tickbtn}`} variant="success">
              &nbsp;✓&nbsp;
            </Button>
          )
        });
      } else {
        this.setState({
          tick: (
            <Button className={`${styles.cross}`} variant="danger">
              &nbsp;X&nbsp;
            </Button>
          )
        });
      }
    }
  };

  handleAddressChangeBlur = async event => {
    if (
      this.state.toAddress.length === 42 &&
      event.target.value.indexOf('.eth') !== -1
    ) {
      this.setState({
        addressToPrint: `${event.target.value} : ${this.state.toAddress}`
      });
    }
  };

  handleAddressChangeFocus = async event => {
    if (
      event.target.value.length === this.state.addressToPrint.length &&
      this.state.addressToPrint.indexOf('.eth') !== -1
    ) {
      await this.setState({
        addressToPrint: this.state.addressToPrint.substring(
          0,
          this.state.addressToPrint.indexOf('.eth') + 4
        )
      });
    }
  };

  setGasMode = async gasMode => {
    await this.setState({ gasMode });
  };

  cancelAddress = async event => {
    this.setState({ toAddress: '', addressToPrint: '', tick: '', cross: '' });
  };

  async initialize() {
    try {
      const [account] = await window.ethereum.enable();
      this.setState({ account });
    } catch (error) {
      console.error(error);
      alert('You will need to connect web3 wallet');
      throw error;
    }
  }

  renderModal() {
    const { open, value, addressToPrint } = this.state;
    const {
      name,
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
              {paused ?(
                'Temporarily Paused'
              ) : (
                             <div>
                  <Row
                    className={`${styles.sendcontents} d-flex justify-content-center my-1 py-0`}
                  >
                    <Column xs={12}>
                      <div className={`${styles.buycontents}`}>
                        <p className={`${styles.buytext1}`}>Send to</p>
                      </div>
                    </Column>
                    <Column xs={12}>
                      {this.state.tick}
                      <input
                        type="text"
                        required
                        minLength="40"
                        onFocus={this.handleAddressChangeFocus}
                        onBlur={this.handleAddressChangeBlur}
                        onChange={this.handleAddressChange}
                        value={addressToPrint}
                        placeholder="Enter public address(0x) or ENS address..."
                        style={{ width: '80%' }}
                      />
                      {this.state.cross}
                    </Column>
                    <Column className="mt-2">
                      <b>
                        No ETH Wallet?{' '}
                        <a
                          href="https://docs.ethhub.io/ethereum-basics/resources/#wallets"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Make one                             </a>
                      </b>
                    </Column>
                  </Row>

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
                </div>) }
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
              {paused ? null: (
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
) }
            </div>
            <div className="my-4 row justify-content-center">
              {paused ? null: (
<input
                  type="submit"
                  className="font20 mx-3 btn btn-outline-success btn-large shadow px-4 py-2"
                  value="Confirm"
                />
) }
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
            className={`${styles.giftButton}`}
            onClick={() => {
              this.setState({ open: true });
              registerEvent({
                category: BUY_ZAP,
                action: name
              });
            }}
            disabled={!isOrderable}
            // variant="outline-danger"
            size={!isEmpty(size) ? size : 'md'}
            block={block}
          >
            🎁 Gift This Zap
          </Button>
        ) : null}
        {this.renderModal()}
      </>
    );
  }
}
export default GiftButtonContainer;
