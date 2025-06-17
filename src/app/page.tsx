import AddTaskForm from "@/components/dashboard/AddTaskForm";
import Header from "@/components/dashboard/Header";
import TasksList from "@/components/dashboard/TasksList";
import Footer from "../components/commons/Footer";

export default function Dashboard() {
  return (
    <div className="min-h-screen px-4 py-8">
      <main className="flex flex-col flex-1 items-center justify-center">
        <Header />
        <AddTaskForm />
        <TasksList />
      </main>

      <Footer />
    </div>
  );
}
