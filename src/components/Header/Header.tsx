import { CurrencyDollar } from 'phosphor-react';
import './Header.scss'

type Modal = {
  handleOpenModal(): void
}

export default function Header(props: Modal) {
  
  return (
    <header id="header">
      <div className="container">
        <div className="logo">
          <span className="logoImg">
            <CurrencyDollar size={32} color="#fff" />
          </span>
          <h1>Manager moneY</h1>
        </div>
        <button onClick={props.handleOpenModal}>Nova transação</button>
      </div>
    </header>
  );
}