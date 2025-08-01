import React, { useState } from 'react';
import type { EmployeeStatus } from '@/types';
import { EmployeeList } from '../components/employee-list';

export const HomePage: React.FC = () => {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState<EmployeeStatus | "">("");
    
    return (
        <div>
            <h1>Home Page</h1>
            <EmployeeList search={search} statusFilter={statusFilter} />
        </div>
    )
}