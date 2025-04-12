export function Table({ expenses }) {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Search Expense"
        className="p-1 border"
      ></input>

      <div className="border-2 mt-2.5 overflow-x-auto">
        <table className="w-full border-separate">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}>
                <td className="border p-2">{expense.name}</td>
                <td className="border p-2">{expense.description}</td>
                <td className="border p-2">{expense.category}</td>
                <td className="border p-2">{expense.amount}</td>
                <td className="border p-2">{expense.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
