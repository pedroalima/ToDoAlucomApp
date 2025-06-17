"use client";

import { taskService } from "@/services/taskService";
import { Task, TaskCreate, TasksContextProps } from "@/types";
import { createContext, useEffect, useState } from "react";

export const TasksContext = createContext<TasksContextProps | undefined>(
  undefined
);

export function TasksProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const refreshTasks = async () => {
    setIsLoading(true);
    try {
      const data = await taskService.list();
      setTasks(data);
    } finally {
      setIsLoading(false);
    }
  };

  const create = async (task: TaskCreate) => {
    const updatedTasks = await taskService.create(task);
    setTasks(updatedTasks);
  };

  const update = async (id: number, task: Task) => {
    const updatedTasks = await taskService.update(id, task);
    setTasks(updatedTasks);
  };

  const remove = async (id: number) => {
    const updatedTasks = await taskService.delete(id);
    setTasks(updatedTasks);
  };

  useEffect(() => {
    refreshTasks();
  }, []);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        isLoading,
        refreshTasks,
        create,
        update,
        remove,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
