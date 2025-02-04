
import TodoItem from "./TodoItem"


const TodoList = ({data}:TypeItemData) => {

    return (
        <div>
            <h4>Задачи</h4>
            {data.map(todo=><TodoItem
            />)}
        </div>
    )
}
export default TodoList;