"use client";

import { ListTodo, Plus } from "lucide-react";
import { useAddTaskForm } from "../../hooks/useAddTaskForm";
import Container from "../commons/Container";
import Input from "../commons/Input";
import SpanError from "../commons/SpanError";

export default function AddTaskForm() {
  const {
    title,
    setTitle,
    description,
    setDescription,
    handleSubmit,
    titleError,
  } = useAddTaskForm();

  return (
    <Container>
      <form onSubmit={handleSubmit}>
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
          <div className="flex flex-col flex-1">
            <Input
              placeholder="Nome..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <SpanError message={titleError} />
          </div>
          <div className="flex flex-col flex-1">
            <Input
              placeholder="Descrição..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
      </form>
    </Container>
  );
}
