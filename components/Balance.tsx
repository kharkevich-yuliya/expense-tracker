import * as React from 'react';

export default function Balance({ income, expense, balance }) {
  return (
    <div>
      <p>Your balance: {balance}</p>
      <div>Your income: {income}</div>
      <div>Your expense: {expense}</div>
    </div>
  );
}
