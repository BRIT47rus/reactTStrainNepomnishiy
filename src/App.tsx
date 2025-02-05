
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

  return (
    <div>
      <FormTodo addTodo={addTodo}
      />
      <TodoList
      dataProp={data}
      />
    </div>
  )
}

export default App;
