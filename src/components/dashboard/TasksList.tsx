"use client";

import { useTasksContext } from "@/hooks/useTasksContext";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Logs } from "lucide-react";
import { useTasksList } from "../../hooks/useTasksList";
import Container from "../commons/Container";
import EmptyTaskList from "./EmptyTaskList";
import { SortableTaskCard } from "./SortableTaskCard";
import TaskCardSkeleton from "./TaskCardSkeleton";

export default function TasksList() {
  const { tasks, toggleComplete, deleteTask, sensors, handleDragEnd } =
    useTasksList();
  const { isLoading } = useTasksContext();

  return (
    <Container>
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-2 mb-4">
          <Logs className="text-red text-lg sm:text-xl" />
          <h2 className="text-lg sm:text-2xl font-semibold">Suas Tarefas</h2>
        </div>
        {tasks.length > 0 && (
          <p className="text-sm text-gray-light mb-2">
            💡 Clique sobre uma tarefa para marcá-la como concluída
          </p>
        )}
        <div className="flex flex-col gap-3">
          {isLoading ? (
            <>
              <TaskCardSkeleton />
              <TaskCardSkeleton />
            </>
          ) : tasks.length === 0 ? (
            <EmptyTaskList />
          ) : (
            // Componente da biblioteca dnd-kit
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              {/* Componente da biblioteca dnd-kit */}
              <SortableContext
                items={tasks.map((task) => task.id)}
                strategy={verticalListSortingStrategy}
              >
                {tasks.map((task) => (
                  // Componente da biblioteca dnd-kit
                  <SortableTaskCard
                    key={task.id}
                    task={task}
                    onToggle={toggleComplete}
                    onDelete={deleteTask}
                  />
                ))}
              </SortableContext>
            </DndContext>
          )}
        </div>
      </section>
    </Container>
  );
}
