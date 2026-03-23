
import "./style.css"
const Tasks = ({ tasks, hideTask }) => (
    <ul className=" tasksList">
        {tasks.map(task => (
            <li key={task.id}
                className={task.done && hideTask ? "taskListHidden" : "taskList"}>
                <button className="toggleButton listButton">
             {task.done ? "👍" : "👎"}
             </button>
             <span className={task.done ? "taskDone" : ""}>
             {task.content}
             </span>
             <button className="removeButton listButton">
             🗑️
             </button>
            </li>
        ))}
    </ul>
);

export default Tasks;