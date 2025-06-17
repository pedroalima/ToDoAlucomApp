import { CheckCircle2 } from "lucide-react";

export default function Header() {
  return (
    <header className="text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-8 h-8 bg-red rounded-lg flex items-center justify-center">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <h1 className="text-3xl font-bold">ToDo Alucom</h1>
      </div>
      <p className="text-slate-300">Organize suas tarefas com eficiência</p>
    </header>
  );
}
