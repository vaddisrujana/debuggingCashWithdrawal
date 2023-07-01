import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {money: 2000}

  remove = value => {
    const {money} = this.state
    if (value <= money) {
      this.setState(prevState => ({
        money: prevState.money - value,
      }))
    }
  }

  render() {
    const {money} = this.state
    const {denominationsList} = this.props

    return (
      <div className="background">
        <div className="background1">
          <div className="background2">
            <p className="para1">S</p>
            <h1 className="head">Sarah Williams</h1>
          </div>

          <div className="background3">
            <p className="para2">Your Balance</p>
            <p className="para3">
              {money}
              <br /> <span className="para4">in rupees</span>
            </p>
          </div>
          <div className="background4">
            <p className="para5">Withdraw</p>
            <p className="para6">CHOOSE SUM (IN RUPEES)</p>
            <ul>
              {denominationsList.map(each => (
                <DenominationItem
                  denominationsList={each}
                  remove={this.remove}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
