import type { EmployeeStatus } from "@/types";

export const API_ENDPOINTS = {
  USERS: "/users",
} as const;

export const STATUS_OPTIONS: { value: EmployeeStatus; label: string; emoji: string }[] = [
  { value: "Working", label: "Working", emoji: "🟢" },
  { value: "OnVacation", label: "OnVacation", emoji: "🟡" },
  { value: "LunchTime", label: "LunchTime", emoji: "🟠" },
  { value: "BusinessTrip", label: "BusinessTrip", emoji: "🟣" },
];

export const ERROR_MESSAGES = {
  FETCH_EMPLOYEES: "Failed to fetch employees",
  UPDATE_STATUS: "Failed to update employee status",
  CREATE_EMPLOYEE: "Failed to create user. Please try again.",
  NAME_REQUIRED: "Name is required.",
  NAME_VALIDATION: "Only English letters and spaces allowed for name.",
} as const;