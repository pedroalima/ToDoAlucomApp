import { TaskCardProps } from "@/types";
import { Trash2 } from "lucide-react";

export default function TaskCard({ task, onToggle, onDelete }: TaskCardProps) {
  return (
    <div
      className={`flex items-center justify-between rounded-lg px-4 py-3 border border-blue-gray-light hover:border-red transition-colors cursor-pointer select-none ${
        task.completed ? "bg-blue-gray-light/80" : "bg-background"
      }`}
      onClick={() => onToggle(task.id)}
      tabIndex={0}
      role="button"
      aria-pressed={task.completed}
    >
      <div
        className={`flex flex-col flex-grow ${
          task.completed ? "line-through opacity-70" : "opacity-100"
        }`}
      >
        <span
          className={`font-semibold text-base sm:text-lg ${
            task.completed ? "text-gray-light" : "text-foreground"
          }`}
        >
          {task.title}
        </span>
        {task.description && (
          <p
            className={`text-sm sm:text-base ${
              task.completed ? "text-gray-light" : "text-gray-light/50"
            }`}
          >
            {task.description}
          </p>
        )}
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(task.id);
        }}
        className="text-gray-light hover:text-red-dark transition-colors"
        aria-label="Deletar tarefa"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
}
