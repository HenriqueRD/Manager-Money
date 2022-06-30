import { useEffect } from 'react';
import { api } from '../../services/api';
import './Table.scss'


export default function Table() {

  useEffect(() => {
    api.get('transaction').then(x => console.log(x));
  }, [])

  return (
    <section id="table">
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Preço</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td  className="name">Desenvolvimento de site</td>
              <td className="green">R$ 12.000,00</td>
              <td>Venda</td>
              <td>13/04/2021</td>
            </tr>
            <tr>
              <td className="name"></td>
              <td className="red">R$ 12.000,00</td>
              <td>Venda</td>
              <td>13/04/2021</td>
            </tr>
            <tr>
              <td  className="name">Desenvolvimento de site</td>
              <td className="red">R$ 12.000,00</td>
              <td>Venda</td>
              <td>13/04/2021</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}