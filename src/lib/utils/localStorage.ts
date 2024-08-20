

export const saveTask = (task: any) => {
    const tasks = getTasks();
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  
  export const getTasks = (): any[] => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  };
  
  export const deleteTask = (taskId: string) => {
    let tasks = getTasks();
    tasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  
  export const updateTask = (updatedTask: any) => {
    let tasks = getTasks();
    tasks = tasks.map(task => (task.id === updatedTask.id ? updatedTask : task));
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  