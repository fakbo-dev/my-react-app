import { useState } from "react"

function ToDo() {

    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Walk the dog"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {

        setNewTask(event.target.value);
    }

    function addTask() {

        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {

        const updateTasks = tasks.filter((_, i) => i !== index);
        setTasks(updateTasks);
    }

    function moveTaskUp(index) {

        if (index > 0) {
            const updateTaks = [...tasks];

            [updateTaks[index], updateTaks[index - 1]] =
                [updateTaks[index - 1], updateTaks[index]];
            setTasks(updateTaks);
        }

    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updateTaks = [...tasks];

            [updateTaks[index], updateTaks[index + 1]] =
                [updateTaks[index + 1], updateTaks[index]];
            setTasks(updateTaks);
        }

    }

    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange} />
                <button
                    className="add-button"
                    onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index) => (
                    <li
                        key={index}><span className="text">{task}</span>
                        <button
                            onClick={() => deleteTask(index)}
                            className="delete-button">
                            Delete
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskUp(index)}>
                            Up
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskDown(index)}>
                            Down
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default ToDo