import * as React from 'react';
import './style.css';
import Tracker from './components/Tracker';

export default function App() {
  const style = {
    backgroundColor: 'red',
    width: '300px',
    height: '500px',
    margin: 'auto auto',
    display: 'flex',
    flexDirection: 'column',
  };
  return (
    <div style={style}>
      <p>Expense Tracker</p>
      <hr />
      <Tracker />
    </div>
  );
}
