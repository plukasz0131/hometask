import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type {
  Employee,
  CreateEmployeeRequest,
  UpdateStatusRequest,
} from "@/types";
import { API_ENDPOINTS } from "@/features/home/core/constants";

const API_BASE_URL = "http://localhost:8000";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// API functions
export const employeeApi = {
  getEmployees: async (): Promise<Employee[]> => {
    const response = await api.get<Employee[]>(API_ENDPOINTS.USERS);
    return response.data;
  },

  updateEmployeeStatus: async (
    id: number,
    data: UpdateStatusRequest
  ): Promise<Employee> => {
    const response = await api.post<Employee>(
      `${API_ENDPOINTS.USERS}/${id}`,
      data
    );
    return response.data;
  },

  createEmployee: async (data: CreateEmployeeRequest): Promise<Employee> => {
    const response = await api.post<Employee>(API_ENDPOINTS.USERS, data);
    return response.data;
  },
};

// React Query hooks
export const useEmployees = () => {
  return useQuery({
    queryKey: ["employees"],
    queryFn: employeeApi.getEmployees,
  });
};

export const useUpdateEmployeeStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: UpdateStatusRequest }) =>
      employeeApi.updateEmployeeStatus(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
  });
};

export const useCreateEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: employeeApi.createEmployee,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
  });
};
