function TodoItem({ tname, tdate, handleDelete }) {
  return (
    <div className="container">
      <div className="row t-row">
        <div className="col-6">{tname}</div>
        <div className="col-4">{tdate}</div>
        <div className="col-2">
          <button
            onClick={() => handleDelete(tname)}
            type="button"
            className="btn btn-danger but"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
