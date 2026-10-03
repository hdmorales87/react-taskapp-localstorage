export const VisibilityControl = ({ showCompleted, onToggleShowCompleted, onDeleteCompleted }) => {

    const handleDeleteCompleted = () => {
        if (window.confirm('Are you sure you want to clear all completed tasks?')) {
            onDeleteCompleted();
        }
    };

    return (
        <div className="d-flex justify-content-between
            bg-secondary text-white p-2 text-center border-secondary">
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    onChange={(e) => onToggleShowCompleted(e.target.checked)}
                    checked={showCompleted}
                />
                <label>Complete</label>
            </div>
            <button onClick={handleDeleteCompleted} className="btn btn-danger btn-sm">Clear</button>
        </div>
    );
}

export default VisibilityControl;
