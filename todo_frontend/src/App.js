import React from "react";
import AddTodo from "./component/addTodo";
import  TodoProvider from "./context/todoContext";

function App() {
  return (
      <TodoProvider >
        <AddTodo />
      </TodoProvider>
  );
}

export default App;
