const TaskRow = ({ task, onToggleTask }) => {
    return (
        <tr>
            <td className="d-flex justify-content-between">
                <span>{task.name}</span>
                <input type="checkbox"
                    checked={task.done}
                    onChange={() => { onToggleTask(task) }} />
            </td>
        </tr>
    );
};

export default TaskRow;