import { useState,useEffect } from 'react';
import Header from './component/header';
import Form from './component/form';
import './App.css';
import TodoList from './component/todoList';

function App() {
  const initialState=JSON.parse(localStorage.getItem("todos"))||[];  const [input,setInput]=useState("");
  const[todos,setTodos]=useState([]);
  const [editTodo,setEditTodo]=useState(null);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);
  return (
    <>
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Header/>
        </div>
        <div>
          <Form
           input={input}
           setInput={setInput}
           todos={todos}
           setTodos={setTodos}
           editTodo={editTodo}
           setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
        </div>
      </div>

    </div>
    </>
  );
}

export default App;
