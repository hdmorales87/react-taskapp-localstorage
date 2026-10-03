import { useState } from 'react';

const TaskCreator = ({ onAddTask }) => {

    const [taskName, setTaskName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTask(taskName);
        setTaskName('');
    }

    return (
        <form onSubmit={handleSubmit} className="my-3 row">
            <div className="col-9">
            <input
                type="text"
                placeholder="Add a task"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className="form-control"
            />
            </div>
            <div className="col-3">
            <button className="btn btn-primary btn-sm">Add</button>
            </div>
        </form>
    );
};

export default TaskCreator;