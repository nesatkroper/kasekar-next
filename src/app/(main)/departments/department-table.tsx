"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DataTable,
  createSelectColumn,
  createTextColumn,
  createActionsColumn,
} from "@/components/base/data-table";
import { Department, Status } from "@/generated/prisma";

export default function DepartmentTable(departmentData: Department) {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentDepartment, setCurrentDepartment] = useState<Department | null>(
    null
  );

  // Custom column for status with badge
  const statusColumn = {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as Status;

      return (
        <Badge
          className={
            status === "active"
              ? "bg-green-100 text-green-800 hover:bg-green-100"
              : status === "inactive"
              ? "bg-red-100 text-red-800 hover:bg-red-100"
              : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
          }>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      );
    },
  };

  // Custom column for dates
  const dateColumn = (accessorKey: keyof Department, header: string) => ({
    accessorKey: accessorKey as string,
    header: header,
    cell: ({ row }) => {
      const date = row.getValue(accessorKey as string) as Date;
      return <div>{format(date, "MMM d, yyyy")}</div>;
    },
  });

  const handleEdit = (department: Department) => {
    setCurrentDepartment(department);
    setIsEditDialogOpen(true);
  };

  const handleDelete = (department: Department) => {
    setCurrentDepartment(department);
    setIsDeleteDialogOpen(true);
  };

  const handleSaveEdit = () => {
    // In a real app, you would save changes to the database here
    console.log("Saving changes to department:", currentDepartment);
    setIsEditDialogOpen(false);
  };

  const handleConfirmDelete = () => {
    // In a real app, you would delete from the database here
    console.log("Deleting department:", currentDepartment);
    setIsDeleteDialogOpen(false);
  };

  const columns = [
    createSelectColumn<Department>(),
    createTextColumn<Department>("departmentName", "Department Name", true),
    createTextColumn<Department>("departmentCode", "Code"),
    statusColumn,
    dateColumn("createdAt", "Created"),
    dateColumn("updatedAt", "Updated"),
    createActionsColumn<Department>([
      {
        label: "View Employees",
        action: (department) =>
          console.log("View employees for", department.departmentName),
      },
      {
        label: "View Positions",
        action: (department) =>
          console.log("View positions for", department.departmentName),
      },
      {
        label: "Edit Department",
        action: handleEdit,
      },
      {
        label: "Delete Department",
        action: handleDelete,
      },
    ]),
  ];

  return (
    <div className='space-y-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Departments</h1>
        <Button
          onClick={() => {
            setCurrentDepartment({
              departmentId: "",
              departmentName: "",
              departmentCode: "",
              memo: "",
              status: "active",
              createdAt: new Date(),
              updatedAt: new Date(),
            });
            setIsEditDialogOpen(true);
          }}>
          Add Department
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={departmentData}
        filterColumn='departmentName'
        filterPlaceholder='Filter departments...'
      />

      {/* Edit/Create Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className='sm:max-w-[500px]'>
          <DialogHeader>
            <DialogTitle>
              {currentDepartment?.departmentId
                ? "Edit Department"
                : "Create Department"}
            </DialogTitle>
            <DialogDescription>
              {currentDepartment?.departmentId
                ? "Make changes to the department details."
                : "Add a new department to the organization."}
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='departmentName' className='text-right'>
                Name
              </Label>
              <Input
                id='departmentName'
                value={currentDepartment?.departmentName || ""}
                onChange={(e) =>
                  setCurrentDepartment((prev) =>
                    prev ? { ...prev, departmentName: e.target.value } : null
                  )
                }
                className='col-span-3'
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='departmentCode' className='text-right'>
                Code
              </Label>
              <Input
                id='departmentCode'
                value={currentDepartment?.departmentCode || ""}
                onChange={(e) =>
                  setCurrentDepartment((prev) =>
                    prev ? { ...prev, departmentCode: e.target.value } : null
                  )
                }
                className='col-span-3'
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='status' className='text-right'>
                Status
              </Label>
              <Select
                value={currentDepartment?.status}
                onValueChange={(value: Status) =>
                  setCurrentDepartment((prev) =>
                    prev ? { ...prev, status: value } : null
                  )
                }>
                <SelectTrigger className='col-span-3'>
                  <SelectValue placeholder='Select status' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='active'>Active</SelectItem>
                  <SelectItem value='inactive'>Inactive</SelectItem>
                  <SelectItem value='pending'>Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='memo' className='text-right'>
                Memo
              </Label>
              <Textarea
                id='memo'
                value={currentDepartment?.memo || ""}
                onChange={(e) =>
                  setCurrentDepartment((prev) =>
                    prev ? { ...prev, memo: e.target.value } : null
                  )
                }
                className='col-span-3'
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant='outline'
              onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveEdit}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete the department "
              {currentDepartment?.departmentName}"? This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant='outline'
              onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant='destructive' onClick={handleConfirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
