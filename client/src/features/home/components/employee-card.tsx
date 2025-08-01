import React from "react";
import type { Employee, EmployeeStatus } from "../../../types";
import { STATUS_OPTIONS } from "../core/constants";

interface EmployeeCardProps {
  employee: Employee;
  onStatusChange: (id: number, status: EmployeeStatus) => void;
}

export const EmployeeCard: React.FC<EmployeeCardProps> = ({
  employee,
  onStatusChange,
}) => {
  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = event.target.value as EmployeeStatus;
    onStatusChange(employee.id, newStatus);
  };

  return (
    <div className="bg-white rounded-sm p-6 hover:shadow-md shadow-blue-300 transition-shadow duration-200">
      <div className="flex items-end space-x-4">
        <img
          src={employee.img}
          alt={employee.name}
          className="w-32 h-32 rounded-full object-cover border-2 border-gray-200"
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {employee.name}
          </h3>
          <div className="mt-2">
            <select
              value={employee.status}
              onChange={handleStatusChange}
              className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none bg-white text-sm"
            >
              {STATUS_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.emoji} {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
