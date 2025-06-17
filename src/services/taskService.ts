import { Task, TaskCreate } from "@/types";
import axiosClient from "./axiosClient";

export const taskService = {
  async create(task: TaskCreate): Promise<Task[]> {
    const response = await axiosClient.post("/tasks", task);
    return response.data;
  },

  async list(): Promise<Task[]> {
    const response = await axiosClient.get("/tasks");
    return response.data;
  },

  async update(id: number, task: Task): Promise<Task[]> {
    const response = await axiosClient.put(`/tasks/:${id}`, task);
    return response.data;
  },

  async delete(id: number): Promise<Task[]> {
    const response = await axiosClient.delete(`/tasks/:${id}`);
    return response.data;
  },
};
