import abi from './abi/drip-token.json'
import addresses from './smartcontracts-addresses'

class DripContract {
  constructor(web3) {
    this.contract = new web3.eth.Contract(abi, addresses.DRIP_TOKEN_ADDRESS)
  }

  getDripBalanceOf(address) {
    return this.contract.methods.balanceOf(address).call()
  }

  getAllowance(address) {
    return this.contract.methods
      .allowance(address, addresses.FOUNTAIN_ADDRESS)
      .call()
  }

  setAllowance(address, value) {
    return this.contract.methods
      .approve(addresses.FOUNTAIN_ADDRESS, value || '999999000000000000000000')
      .send({ from: address })
  }
}

export default DripContract
