import React, { useMemo } from "react";
import type { EmployeeStatus } from "../../../types";
import {
  useEmployees,
  useUpdateEmployeeStatus,
} from "../core/apis/employee-api";
import { EmployeeCard } from "./employee-card";
import { ERROR_MESSAGES } from "../core/constants";

interface EmployeeListProps {
  search: string;
  statusFilter: EmployeeStatus | "";
}

export const EmployeeList: React.FC<EmployeeListProps> = ({
  search,
  statusFilter,
}) => {
  const { data: employees = [], isLoading, error, refetch } = useEmployees();
  const updateStatusMutation = useUpdateEmployeeStatus();

  const handleStatusChange = async (id: number, newStatus: EmployeeStatus) => {
    try {
      await updateStatusMutation.mutateAsync({
        id,
        data: { status: newStatus },
      });
    } catch (err) {
      console.error("Error updating employee status:", err);
    }
  };

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const matchesSearch = employee.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesStatus = !statusFilter || employee.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [employees, search, statusFilter]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
          <span className="text-gray-600">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <p className="text-red-600 mb-4">{ERROR_MESSAGES.FETCH_EMPLOYEES}</p>
        <button
          onClick={() => refetch()}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredEmployees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onStatusChange={handleStatusChange}
        />
      ))}
      {filteredEmployees.length === 0 && (
        <div className="col-span-full text-center py-12">
          <div className="text-gray-500">
            <svg
              className="mx-auto h-12 w-12 text-gray-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
            <p className="text-lg font-medium">No employees found</p>
            <p className="text-sm">No employees match your search criteria.</p>
          </div>
        </div>
      )}
    </div>
  );
};
