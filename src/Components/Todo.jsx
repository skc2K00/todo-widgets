import React,{useState,useRef} from "react";

const Todo = () => {
  const [todos, setTodos] = useState(["learn html", "css"]);
  const toDoRef = useRef();

  const addTodo = () => {
    console.log(toDoRef.current.value);
    const item = toDoRef.current.value;
    console.log(todos);
    return setTodos((prevTodos) => [...prevTodos, item]);
    toDoRef.current.value = "";
  };

  return (
    <div>
      <div>
        <input type="text" ref={toDoRef} />
        <button onClick={addTodo}>Add todo</button>
      </div>
      {todos.map((todo) => (
        <li>{todo}</li>
      ))}
    </div>
  );
};

export default Todo;
