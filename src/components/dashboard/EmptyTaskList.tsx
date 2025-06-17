import { ScrollText } from "lucide-react";

export default function EmptyTaskList() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <ScrollText size={40} className="text-gray-light" />
      <p className="text-gray-light text-center py-4 text-md sm:text-lg">
        Não há itens na lista. Adicione uma tarefa para começar!
      </p>
    </div>
  );
}
