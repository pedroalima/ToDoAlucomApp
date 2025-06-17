import { useState } from "react";

export function useAddTaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      completed: false,
      priority: 1,
    };

    console.log(newTask);

    setTitle("");
    setDescription("");
  };

  return {
    title,
    setTitle,
    description,
    setDescription,
    handleSubmit,
  };
}
