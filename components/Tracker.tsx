import * as React from 'react';
import History from './History';
import NewTransaction from './NewTransaction';
import Balance from './Balance';
import { useState } from 'react';

export default function Tracker() {
  const style = {
    backgroundColor: 'blue',
  };
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  return (
    <div style={style}>
      <Balance income={income} expense={expense} balance={balance} />
      <hr />
      <History />
      <hr />
      <NewTransaction />
    </div>
  );
}
