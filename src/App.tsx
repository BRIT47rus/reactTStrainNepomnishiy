
import { useState } from 'react';
import './App.css';
import FormTodo from './components/FormTodo';
import { TypeItemData } from './types';
import TodoList from './components/TodoList';


function App() {

  const [data, setData] = useState<TypeItemData[]>([])

  const addTodo = (text: string): void => {
    const newData: TypeItemData = {
      id: new Date().toString(),
      text,
      completed: false
    }

    setData([newData, ...data])
  }
  const deleteTodo = (id: string) => {
    setData(data.filter(item => item.id !== id      
    ))

  }
  const toogleComplete = (id: string) => {

    setData(data.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed }
      }
      return item
    }))


  }

  return (
    <div>
      <FormTodo addTodo={addTodo}
      />
      <TodoList
        dataProp={data}
        deleteTodo={deleteTodo}
        toogleComplete={toogleComplete}
      />
    </div>
  )
}

export default App;
