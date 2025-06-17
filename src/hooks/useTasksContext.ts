import { TasksContext } from "@/contexts/TasksContext";
import { useContext } from "react";

export function useTasksContext() {
  const context = useContext(TasksContext);
  if (!context)
    throw new Error("useTasksContext deve ser usado dentro de TasksProvider");
  return context;
}
