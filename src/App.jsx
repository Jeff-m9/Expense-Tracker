import { Form } from "./assets/components/Form";
import { Table } from "./assets/components/table";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);

  return (
    <div>
      <h1 className="text-5xl font-bold">Expense Traker</h1>
      <br />
      <p>
        Start taking control of your finances and life. Record, categorise and
        analyse your spending
      </p>

      <div className="flex pt-8 gap-8">
        <Form
          addedExpense={(expense) => {
            setExpenses((expenseList) => [...expenseList, expense]);
          }}
        />
        <Table expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
