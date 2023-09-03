import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  let message = '';

  if (total > 0) {
    message = "Good job managing your expenses 💵👍";
  } else if (total < 0) {
    message = "You need to manage your expenses better 💵👎";
  }

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>₹{total}</h1>
      <h3>{message}</h3>
    </div>
  )
}

export default Balance
