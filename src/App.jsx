import { Form } from "./assets/components/Form";
import { Table } from "./assets/components/table";

function App() {
  return (
    <div>
      <h1 className="text-5xl font-bold">Expense Traker</h1>
      <br/>
      <p>
        Start taking control of your finances and life. Record, categorise and
        analyse your spending
      </p>

      <div className="flex pt-8 gap-8">
        <Form />
        <Table />
      </div>
    </div>
  );
}

export default App;
