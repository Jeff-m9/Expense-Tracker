export function Form() {
  return (
    <div className="border p-2.5 rounded-2xl w-[20%]">
      <form>
        <h2 className="text-3xl font-bold">Add Expense</h2>
        <p>Enter your expense details below</p>

        <div className="flex flex-col space-y-4 mt-2.5">
          <div>
            <input
              type="text"
              placeholder="Expense name"
              className="p-1 border rounded-lg w-full"
            ></input>
          </div>
          <div>
            <input
              type="text"
              placeholder="Expense description"
              className="p-1 border rounded-lg w-full"
            ></input>
          </div>
          <div>
            <input
              type="text"
              placeholder="Expense category"
              className="p-1 border rounded-lg w-full"
            ></input>
          </div>
          <div>
            <input
              type="text"
              placeholder="Amount"
              className="p-1 border rounded-lg w-full"
            ></input>
          </div>
          <div>
            <input type="date" className="p-1 border rounded-lg w-full"></input>
          </div>
          <button className="p-1 border rounded-lg w-full bg-black text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
