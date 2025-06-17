"use client";

import { ListTodo, Plus } from "lucide-react";
import { useAddTaskForm } from "../../hooks/useAddTaskForm";
import Input from "../commons/Input";

export default function AddTaskForm() {
  const { title, setTitle, description, setDescription, handleSubmit } =
    useAddTaskForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-blue-gray rounded-lg p-4 sm:p-6 mb-6 border border-blue-gray-light max-w-full sm:max-w-3/5 w-full mx-auto"
    >
      <div className="flex items-center justify-between mb-4 gap-2">
        <div className="flex items-center gap-2">
          <ListTodo className="text-red text-lg sm:text-xl" />
          <h2 className="text-lg sm:text-2xl font-semibold">Nova Tarefa</h2>
        </div>
        <button
          type="submit"
          className="bg-red hover:bg-red-dark rounded px-3 sm:px-4 flex items-center justify-center text-lg sm:text-xl transition-colors min-h-[40px]"
        >
          <Plus />
        </button>
      </div>
      <div className="flex flex-col lg:flex-row gap-2">
        <Input
          placeholder="Nome..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          placeholder="Descrição..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
    </form>
  );
}
