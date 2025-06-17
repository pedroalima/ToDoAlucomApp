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
  priority: number;
}

export type TaskCreate = Omit<Task, "id">;

export interface TasksContextProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  isLoading: boolean;
  refreshTasks: () => Promise<void>;
  create: (task: TaskCreate) => Promise<void>;
  update: (id: number, task: Task) => Promise<void>;
  remove: (id: number) => Promise<void>;
}
