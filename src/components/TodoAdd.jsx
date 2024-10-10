import { useState } from "react";

function TodoAdd({ handlenewItem }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleDate = (event) => {
    setDate(event.target.value);
  };
  function passItems() {
    handlenewItem(name, date);
    setDate("");
    setName("");
  }
  return (
    <div className="container left">
      <div className="row t-row">
        <div className="col-6">
          <input
            onChange={handleName}
            type="text"
            placeholder="Enter your todo Item"
            value={name}
          />
        </div>
        <div className="col-4">
          <input onChange={handleDate} type="date" value={date} />
        </div>
        <div className="col-2">
          <button
            onClick={passItems}
            type="button"
            className="btn btn-success but"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoAdd;
