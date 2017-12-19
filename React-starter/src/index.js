import React from 'react';
import ReactDOM from 'react-dom';

class BankAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountBalance: 25.00
    }
  }
};

  render() {
    return (
      <div>
        <h3>Account Balance: ${this.state.accountBalance}</h3>
      </div>
    );
  }
}



ReactDOM.render(

<BankAccount/>
  , document.getElementById('root')
);
