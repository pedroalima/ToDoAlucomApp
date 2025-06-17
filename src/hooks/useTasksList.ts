import { useEffect, useState } from "react";

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const initialTasks: Task[] = [
  // {
  //   id: 1,
  //   title: "lorem ipsum",
  //   description: "lorem ipsum dolor sit amet",
  //   completed: true,
  // },
  // {
  //   id: 2,
  //   title: "lorem ipsum 2",
  //   description: "",
  //   completed: true,
  // }
];

export function useTasksList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula uma chamada de API
    const timer = setTimeout(() => {
      setTasks(initialTasks);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const toggleComplete = (id: number) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  return {
    tasks,
    isLoading,
    toggleComplete,
    deleteTask,
  };
}
