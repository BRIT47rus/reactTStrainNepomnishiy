import { useRef } from "react";


type FormProps = {
    addTodo: (text:string) => void;
}
const FormTodo = ({ addTodo }: FormProps) => {
    const inpRef = useRef<HTMLInputElement|null>(null)
    const handleAddTask = () => {
        if(inpRef.current){

            addTodo(inpRef.current.value.trim())
        }
        inpRef.current.value = '';
      
    }


    return (
        <div>
            <input type="text" placeholder="Введдите текст" ref={inpRef}  />
            <button onClick={handleAddTask}>Добывить задачу</button>

        </div>
    )
}
export default FormTodo;