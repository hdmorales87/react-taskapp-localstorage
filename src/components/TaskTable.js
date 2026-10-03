import TaskRow from "./TaskRow";

export const TaskTable = ({ tasks, onToggleTask }) => {

    const taskRows = tasks.map((task, index) => (
        <TaskRow key={index} task={task} onToggleTask={onToggleTask} />
    ));

    return (
        <table className="table table-striped table-dark">
            <thead>
                <tr className="table-primary">
                    <th>
                        <span>Tasks</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {taskRows}
            </tbody>
        </table>
    );
};

export default TaskTable;
