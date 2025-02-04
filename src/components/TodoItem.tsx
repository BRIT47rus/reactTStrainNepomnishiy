import { TypeItemData } from "../types"





const TodoItem = ({id,completed,text}:TypeItemData) => {
    return (
        <div key={id}>
            <input type="checkbox" checked={completed} />
            <span>{text}</span>
            <button> &time</button>

        </div>
    )
}
export default TodoItem;