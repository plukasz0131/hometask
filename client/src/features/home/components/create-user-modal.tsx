import React, { useState } from "react";
import type { EmployeeStatus } from "@/types";
import { useCreateEmployee } from "../core/apis/employee-api";
import {
  STATUS_OPTIONS,
  ERROR_MESSAGES,
  VALIDATION_PATTERNS,
} from "../core/constants";

interface CreateUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEmployeeCreated: () => void;
}

export const CreateUserModal: React.FC<CreateUserModalProps> = ({
  isOpen,
  onClose,
  onEmployeeCreated,
}) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState<EmployeeStatus>("Working");
  const [errorMessage, setErrorMessage] = useState("");

  const createEmployeeMutation = useCreateEmployee();

  if (!isOpen) return null;

  const handleCreate = async () => {
    if (!VALIDATION_PATTERNS.NAME.test(name)) {
      setErrorMessage(ERROR_MESSAGES.NAME_VALIDATION);
      return;
    }

    if (!name.trim()) {
      setErrorMessage(ERROR_MESSAGES.NAME_REQUIRED);
      return;
    }

    setErrorMessage("");

    try {
      await createEmployeeMutation.mutateAsync({ name: name.trim(), status });
      setName("");
      setStatus("Working");
      onClose();
      onEmployeeCreated();
    } catch (error) {
      console.error("Error creating user:", error);
      setErrorMessage(ERROR_MESSAGES.CREATE_EMPLOYEE);
    }
  };

  const handleCancel = () => {
    setErrorMessage("");
    setName("");
    setStatus("Working");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Create New User
        </h2>

        <div className="space-y-4">
          <div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name (English letters and spaces only)"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as EmployeeStatus)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {STATUS_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.emoji} {option.label}
                </option>
              ))}
            </select>
          </div>

          {errorMessage && (
            <p className="text-red-600 text-sm">{errorMessage}</p>
          )}

          <div className="flex space-x-3 pt-4">
            <button
              onClick={handleCreate}
              disabled={createEmployeeMutation.isPending}
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {createEmployeeMutation.isPending ? "Creating..." : "Create"}
            </button>
            <button
              onClick={handleCancel}
              className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
