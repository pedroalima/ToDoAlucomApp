import AddTaskForm from "@/components/dashboard/AddTaskForm";
import Header from "@/components/dashboard/Header";

export default function Dashboard() {
  return (
    <div>
      <main className="min-h-screen px-4 py-10">
        <Header />
        <AddTaskForm />
      </main>
      <footer></footer>
    </div>
  );
}
