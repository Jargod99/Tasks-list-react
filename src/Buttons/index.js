
import "./style.css"
const Buttons = ({ tasks, hideTask }) => (
    !!tasks.length && (
        <div className="taskListButtons">
            <button
                className={`headerButton `}
                disabled={tasks.find(({ done }) => done)? "": "disabled"}
            >
                {tasks.some(({ done }) => done) && hideTask ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="headerButton"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )

)

export default Buttons;