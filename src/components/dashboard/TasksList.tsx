"use client";

import { Logs } from "lucide-react";
import { useTasksList } from "../../hooks/useTasksList";
import Container from "../commons/Container";
import EmptyTaskList from "./EmptyTaskList";
import TaskCard from "./TaskCard";
import TaskCardSkeleton from "./TaskCardSkeleton";

export default function TasksList() {
  const { tasks, toggleComplete, deleteTask, isLoading } = useTasksList();

  return (
    <Container>
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-2 mb-4">
          <Logs className="text-red text-lg sm:text-xl" />
          <h2 className="text-lg sm:text-2xl font-semibold">Suas Tarefas</h2>
        </div>
        <div className="flex flex-col gap-3">
          {isLoading ? (
            <>
              <TaskCardSkeleton />
              <TaskCardSkeleton />
            </>
          ) : tasks.length === 0 ? (
            <EmptyTaskList />
          ) : (
            tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onToggle={toggleComplete}
                onDelete={deleteTask}
              />
            ))
          )}
        </div>
      </section>
    </Container>
  );
}
