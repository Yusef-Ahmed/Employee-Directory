export interface IEmployee {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  departmentId: number;
  departmentName: string;
  jobTitleId: number;
  jobTitleName: string;
  status: boolean;
  createdAt: string;
  createdBy: number;
  updatedAt: string | null;
  updatedBy: number | null;
}