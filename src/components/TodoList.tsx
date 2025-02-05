
import { TypeItemData } from "../types";
import TodoItem from "./TodoItem"
interface TodoLIstProps{
    deleteTodo:(id:string)=>void;
    toogleComplete:(id:string)=>void;
    dataProp:TypeItemData[];
}

const TodoList = ({dataProp,deleteTodo,toogleComplete}:TodoLIstProps) => {

    return (
        <div>
            <h4>Задачи</h4>
            {dataProp.map((item:TypeItemData) =><TodoItem key={item.id}
            toogleComplete={toogleComplete}
            deleteTodo={deleteTodo}
            {...item}
            />)}
     
        </div>
    )
}
export default TodoList;