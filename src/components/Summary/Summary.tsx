import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import './Summary.scss'

export default function Summary() {
  return (
    <section id="summary">
      <div className="container">
        <header>
          <div>
            <span>Entradas</span>
            <ArrowCircleUp size={38} color="#33CC95" />
          </div>
          <span><strong>R$ 1.456</strong>,00</span>
        </header>
        <header>
          <div>
            <span>Saídas</span>
            <ArrowCircleDown size={38} color="#E62E4D" />
          </div>
          <span><strong>R$ 256</strong>,00</span>
        </header>
        <header className="total">
          <div>
            <span>Total</span>
            <CurrencyDollar size={38} color="#fff" />
          </div>
          <span><strong>R$ 1.056</strong>,00</span>
        </header>
      </div>
    </section>
  );
}