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
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b border-gray-200 px-6 py-4 mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-blue-400">Employees</h1>
          <button className="px-4 py-1 text-blue-400 border border-blue-400 rounded-sm hover:bg-blue-50 transition-colors duration-200 focus:outline-none">
            Log Out
          </button>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
