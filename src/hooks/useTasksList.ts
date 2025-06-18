import {
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useTasksContext } from "./useTasksContext";

export function useTasksList() {
  const { tasks, update, remove, setTasks } = useTasksContext();

  const toggleComplete = async (id: number) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    await update(id, { ...task, completed: !task.completed });
  };

  const deleteTask = async (id: number) => {
    await remove(id);
  };

  // Lógica de movimentação vertical das tarefas (basta segurar e soltar uma tarefa para reordenar),
  // código padrão da biblioteca dnd-kit, para mais informações acesse: https://github.com/clauderic/dnd-kit
  const reorderTasks = (oldIndex: number, newIndex: number) => {
    const newTasks = arrayMove(tasks, oldIndex, newIndex);
    setTasks(newTasks);
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
        delay: 0,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = tasks.findIndex((task) => task.id === active.id);
      const newIndex = tasks.findIndex((task) => task.id === over.id);
      reorderTasks(oldIndex, newIndex);
    }
  };
  // Fim do código padrão

  return {
    tasks,
    toggleComplete,
    deleteTask,
    reorderTasks,
    sensors,
    handleDragEnd,
  };
}
