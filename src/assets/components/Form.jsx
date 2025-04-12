import { useState } from "react";

export function Form({ addedExpense }) {
  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="border p-2.5 rounded-2xl w-[20%]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addedExpense({ name, description, category, amount, date });
        }}
      >
        <h2 className="text-3xl font-bold">Add Expense</h2>
        <p>Enter your expense details below</p>

        <div className="flex flex-col space-y-6 mt-2.5">
          <div>
            <input
              type="text"
              placeholder="Expense name"
              className="p-1 border rounded-lg w-full"
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <input
              type="text"
              placeholder="Expense description"
              className="p-1 border rounded-lg w-full"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <input
              type="text"
              placeholder="Expense category"
              className="p-1 border rounded-lg w-full"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <input
              type="text"
              placeholder="Amount"
              className="p-1 border rounded-lg w-full"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <input
              type="date"
              className="p-1 border rounded-lg w-full"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            ></input>
          </div>
          <button className="p-1 border rounded-lg w-full bg-black text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
