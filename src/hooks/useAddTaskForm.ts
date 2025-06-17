import { TaskCreate } from "@/types";
import { useState } from "react";
import { useTasksContext } from "./useTasksContext";

export function useAddTaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState("");
  const { create } = useTasksContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      setTitleError("A tarefa precisa de um nome!");
      return;
    } else {
      setTitleError("");
    }

    const newTask: TaskCreate = {
      title,
      description,
      completed: false,
      priority: 1,
    };

    try {
      await create(newTask);
      setTitle("");
      setDescription("");
    } catch (error) {
      // Aqui você pode exibir um alerta ou mensagem de erro
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
