export interface Department {
  departmentId: string
  departmentName: string
  departmentCode?: string | null
  memo?: string | null
  status: "active" | "inactive"
  createdAt: Date
  updatedAt: Date
}
