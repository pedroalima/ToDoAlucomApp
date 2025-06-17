import { TaskCreate } from "@/types";
import { useState } from "react";
import { useTasksContext } from "./useTasksContext";

export function useAddTaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState("");
  const { create, tasks } = useTasksContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verifica se a tarefa tem um nome
    if (!title.trim()) {
      setTitleError("A tarefa precisa de um nome!");
      return;
    } else {
      setTitleError("");
    }

    // Encontra a maior prioridade atual e adiciona 1 para a nova tarefa
    const maxPriority =
      tasks.length > 0 ? Math.max(...tasks.map((task) => task.priority)) : -1;

    const newTask: TaskCreate = {
      title,
      description,
      completed: false,
      priority: maxPriority + 1,
    };

    try {
      await create(newTask);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
    }
  };

  return {
    title,
    setTitle,
    description,
    setDescription,
    handleSubmit,
    titleError,
  };
}
