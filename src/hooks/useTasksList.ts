import { useTasksContext } from "./useTasksContext";

export function useTasksList() {
  const { tasks, update, remove } = useTasksContext();

  const toggleComplete = async (id: number) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    await update(id, { ...task, completed: !task.completed });
  };

  const deleteTask = async (id: number) => {
    await remove(id);
  };

  return {
    tasks,
    toggleComplete,
    deleteTask,
  };
}
