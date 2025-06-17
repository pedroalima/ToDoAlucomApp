export interface TaskCardProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}
