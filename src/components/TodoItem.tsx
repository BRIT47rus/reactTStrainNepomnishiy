import { TypeItemData } from "../types"





const TodoItem = ({id,completed,text}:TypeItemData) => {
    return (
        <div >
            <input type="checkbox" checked={completed} />
            <span>{text}</span>
            <button> &time</button>

        </div>
    )
}
export default TodoItem;