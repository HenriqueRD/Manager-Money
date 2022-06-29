import Summary from '../Summary/Summary';
import Table from '../Table/Table';
import './Dashboard.scss'

export default function Dashboard() {
  return (
    <main className="container">
      <Summary />
      <Table />
    </main>
  );
}