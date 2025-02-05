import { TypeItemData } from "../types"
interface TodoItemProps extends TypeItemData{
    deleteTodo:(id:string)=>void;
    toogleComplete:(id:string)=>void;
}




const TodoItem = ({id,completed,text,deleteTodo,toogleComplete}:TodoItemProps) => {
        return (
        <div >
            <input type="checkbox" checked={completed} onChange={()=>toogleComplete(id)}/>
            <span>{text}</span>
            <button
            onClick={()=>deleteTodo(id)}
            > Удалить</button>

        </div>
    )
}
export default TodoItem;