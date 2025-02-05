
import { TypeItemData } from "../types";
import TodoItem from "./TodoItem"
interface TodoLIstProps{
    dataProp:TypeItemData[]
}

const TodoList = ({dataProp}:TodoLIstProps) => {

    return (
        <div>
            <h4>Задачи</h4>
            {dataProp.map((item:TypeItemData) =><TodoItem key={item.id}
            {...item}
            />)}
     
        </div>
    )
}
export default TodoList;