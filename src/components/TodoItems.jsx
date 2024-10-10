import TodoItem from "./TodoItem";
function TodoItems({ todoItems, handleDelete }) {
  return (
    <div className="left">
      {todoItems.map((item) => (
        <TodoItem
          handleDelete={handleDelete}
          key={item.tname}
          tname={item.tname}
          tdate={item.tdate}
        ></TodoItem>
      ))}
    </div>
  );
}
export default TodoItems;
