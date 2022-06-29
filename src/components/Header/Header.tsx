import { CurrencyDollar } from 'phosphor-react';
import './Header.scss'

export default function Header() {
  return (
    <header id="header">
      <div className="container">
        <div className="logo">
          <span className="logoImg">
            <CurrencyDollar size={32} color="#fff" />
          </span>
          <h1>Manager moneY</h1>
        </div>
        <button>Nova transação</button>
      </div>
    </header>
  );
}