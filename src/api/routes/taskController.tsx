type ITask = {
  text: string;
  day: string;
  reminder?: boolean;
};

class Routes {
  // fetch tasks
  static fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  //   fetch single task
  static fetchTask = async (id: number) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  //   add task
  static addTask = async (task: ITask) => {
    const res = await fetch("http://localhost:5000/tasks/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    return data;
  };

  //   toggle reminder
  static toggleReminder = async (id: number) => {
    const taskToToggle = await this.fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });
    return updatedTask;
  };

  static deleteTask = (id: number) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
  };
}

export default Routes;
