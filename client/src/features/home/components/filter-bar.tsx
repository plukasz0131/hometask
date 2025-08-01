import React from "react";
import type { EmployeeStatus } from "@/types";
import { STATUS_OPTIONS } from "../core/constants";

interface FilterBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  statusFilter: EmployeeStatus | "";
  onStatusFilterChange: (value: EmployeeStatus | "") => void;
  onCreateClick: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  search,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  onCreateClick,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center mb-12">
      <button
        onClick={onCreateClick}
        className="bg-blue-500 text-white px-8 py-4 rounded-sm hover:bg-blue-700 focus:outline-none flex items-center space-x-2 transition-colors duration-200"
      >
        <span>Create</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
        >
          <path
            d="M8 1V15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M1 8H15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <div className="flex w-full flex-col sm:flex-row gap-4 items-center bg-white rounded-sm shadow-sm p-2">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Type to search"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-3 border-r-2 border-gray-400 focus:outline-none"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#808080" width="16px" height="16px" viewBox="0 -0.24 28.423 28.423" id="_02_-_Search_Button" data-name="02 - Search Button">
              <path id="Path_215" data-name="Path 215" d="M14.953,2.547A12.643,12.643,0,1,0,27.6,15.19,12.649,12.649,0,0,0,14.953,2.547Zm0,2A10.643,10.643,0,1,1,4.31,15.19,10.648,10.648,0,0,1,14.953,4.547Z" transform="translate(-2.31 -2.547)" fill-rule="evenodd"/>
              <path id="Path_216" data-name="Path 216" d="M30.441,28.789l-6.276-6.276a1,1,0,1,0-1.414,1.414L29.027,30.2a1,1,0,1,0,1.414-1.414Z" transform="translate(-2.31 -2.547)" fill-rule="evenodd"/>
            </svg>
          </span>  
        </div>
        <select
          value={statusFilter}
          onChange={(e) =>
            onStatusFilterChange(e.target.value as EmployeeStatus | "")
          }
          className="w-auto px-3 py-2 focus:outline-none"
        >
          <option value="">Filter by status</option>
          {STATUS_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.emoji} {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
