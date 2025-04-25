// In your types.ts
export type DepartmentDTO = {
  departmentName: string;
  departmentCode?: string;
  memo?: string;
};
export type Department = {
  departmentId: string;
  createdAt: Date;
  updatedAt: Date;
} & DepartmentDTO;
