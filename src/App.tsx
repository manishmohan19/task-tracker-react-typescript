import React, { useState, useEffect } from "react";
import AddTasks from "./components/AddTasks";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";
import Routes from "./api/routes/taskController";

interface IState {
  tasks: { id: number; text: string; day: string; reminder?: boolean }[];
}

interface ITask {
  text: string;
  day: string;
  reminder?: boolean;
}

const App = () => {
  const [tasks, setTasks] = useState<IState["tasks"]>([]);

  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await Routes.fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const onAdd = () => {
    setShowAddTask(!showAddTask);
  };

  // add task
  const addTask = async (task: ITask) => {
    const data = await Routes.addTask(task);
    setTasks([...tasks, data]);
  };

  // delete task
  const deleteTask = (id: number) => {
    Routes.deleteTask(id);

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle reminder
  const toggleReminder = async (id: number) => {
    const updatedTask = await Routes.toggleReminder(id);

    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...updatedTask } : task;
      })
    );
  };

  return (
    <Router>
      <div className="container">
        <Header onAdd={onAdd} showAdd={showAddTask} />
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddTask ? <AddTasks onAddTask={addTask} /> : false}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "No tasks to show"
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
