export interface Employee {
  id: number;
  name: string;
  status: EmployeeStatus;
  img: string;
}

export type EmployeeStatus = 'Working' | 'OnVacation' | 'LunchTime' | 'BusinessTrip';

export interface CreateEmployeeRequest {
  name: string;
  status: EmployeeStatus;
}

export interface UpdateStatusRequest {
  status: EmployeeStatus;
} 