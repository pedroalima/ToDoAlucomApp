import AddTaskForm from "@/components/dashboard/AddTaskForm";
import Header from "@/components/dashboard/Header";
import TasksList from "@/components/dashboard/TasksList";

export default function Dashboard() {
  return (
    <div>
      <main className="min-h-screen px-4 py-10">
        <Header />
        <AddTaskForm />
        <TasksList />
      </main>
      <footer></footer>
    </div>
  );
}
