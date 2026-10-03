import { useState } from 'react';
import './App.css';
import TaskCreator from './components/TaskCreator';
import TaskTable from './components/TaskTable';
import VisibilityControl from './components/VisibilityControl';
import Container from './components/Container';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [showCompleted, setShowCompleted] = useState(false);

  const handleAddTask = (taskName) => {
    if (!taskName) return;

    const taskExists = tasks.some(task => task.name === taskName);
    if (taskExists) return;

    setTasks([...tasks, { name: taskName, done: false }]);
  };

  const handleToggleTask = (task) => {
    const updatedTasks = tasks.map(t =>
      t.name === task.name ? { ...t, done: !t.done } : t
    );
    setTasks(updatedTasks);
  };

  const handleDeleteCompleted = () => {
    setTasks(tasks.filter(task => !task.done));
    setShowCompleted(false);
  };

  const getTasksByStatus = (isCompleted) => {
    return tasks.filter(task => task.done === isCompleted);
  };

  return (
    <main className="bg-dark text-white vh-100">
      <Container>
        <TaskCreator onAddTask={handleAddTask} />
        <TaskTable
          tasks={getTasksByStatus(false)}
          onToggleTask={handleToggleTask}
        />
        <VisibilityControl
          showCompleted={showCompleted}
          onToggleShowCompleted={setShowCompleted}
          onDeleteCompleted={handleDeleteCompleted}
        />
        {showCompleted && (
          <TaskTable
            tasks={getTasksByStatus(true)}
            onToggleTask={handleToggleTask}
          />
        )}
      </Container>
    </main>
  );
}


export default App;
