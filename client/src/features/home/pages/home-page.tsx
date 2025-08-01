import React, { useState } from "react";
import type { EmployeeStatus } from "@/types";
import { FilterBar, EmployeeList, CreateUserModal } from "../components";

export const HomePage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<EmployeeStatus | "">("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleEmployeeCreated = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Employee Status Dashboard
          </h1>
          <p className="text-gray-600">
            Manage and monitor employee statuses in real-time
          </p>
        </div>

        <FilterBar
          search={search}
          onSearchChange={setSearch}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
          onCreateClick={handleCreateClick}
        />

        <EmployeeList search={search} statusFilter={statusFilter} />

        <CreateUserModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onEmployeeCreated={handleEmployeeCreated}
        />
      </div>
    </div>
  );
};
