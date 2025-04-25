"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { Status } from "@/generated/prisma";

// Schema for department validation
const departmentSchema = z.object({
  departmentName: z.string().min(1, "Department name is required"),
  departmentCode: z.string().nullable(),
  memo: z.string().nullable(),
  status: z.enum(["active", "inactive", "pending"]),
});

// Type for department form data
export type DepartmentFormData = z.infer<typeof departmentSchema>;

// Get all departments
export async function getDepartments() {
  try {
    const departments = await prisma.department.findMany({
      orderBy: {
        departmentName: "asc",
      },
    });
    return { departments };
  } catch (error) {
    console.error("Failed to fetch departments:", error);
    return { error: "Failed to fetch departments" };
  }
}

// Get a single department by ID
export async function getDepartment(departmentId: string) {
  try {
    const department = await prisma.department.findUnique({
      where: { departmentId },
    });

    if (!department) {
      return { error: "Department not found" };
    }

    return { department };
  } catch (error) {
    console.error(`Failed to fetch department ${departmentId}:`, error);
    return { error: "Failed to fetch department" };
  }
}

// Create a new department
export async function createDepartment(data: DepartmentFormData) {
  try {
    // Validate input data
    const validatedData = departmentSchema.parse(data);

    // Create department in database
    const department = await prisma.department.create({
      data: {
        departmentName: validatedData.departmentName,
        departmentCode: validatedData.departmentCode,
        memo: validatedData.memo,
        status: validatedData.status as Status,
      },
    });

    // Revalidate the departments page to show the new department
    revalidatePath("/departments");

    return { department };
  } catch (error) {
    console.error("Failed to create department:", error);
    if (error instanceof z.ZodError) {
      return { error: error.errors.map((e) => e.message).join(", ") };
    }
    return { error: "Failed to create department" };
  }
}

// Update an existing department
export async function updateDepartment(
  departmentId: string,
  data: DepartmentFormData
) {
  try {
    // Validate input data
    const validatedData = departmentSchema.parse(data);

    // Check if department exists
    const existingDepartment = await prisma.department.findUnique({
      where: { departmentId },
    });

    if (!existingDepartment) {
      return { error: "Department not found" };
    }

    // Update department in database
    const department = await prisma.department.update({
      where: { departmentId },
      data: {
        departmentName: validatedData.departmentName,
        departmentCode: validatedData.departmentCode,
        memo: validatedData.memo,
        status: validatedData.status as Status,
      },
    });

    // Revalidate the departments page to show the updated department
    revalidatePath("/departments");

    return { department };
  } catch (error) {
    console.error(`Failed to update department ${departmentId}:`, error);
    if (error instanceof z.ZodError) {
      return { error: error.errors.map((e) => e.message).join(", ") };
    }
    return { error: "Failed to update department" };
  }
}

// Delete a department
export async function deleteDepartment(departmentId: string) {
  try {
    // Check if department exists
    const existingDepartment = await prisma.department.findUnique({
      where: { departmentId },
    });

    if (!existingDepartment) {
      return { error: "Department not found" };
    }

    // Delete department from database
    await prisma.department.delete({
      where: { departmentId },
    });

    // Revalidate the departments page to remove the deleted department
    revalidatePath("/departments");

    return { success: true };
  } catch (error) {
    console.error(`Failed to delete department ${departmentId}:`, error);
    return { error: "Failed to delete department" };
  }
}

// "use server";

// import { prisma } from "@/lib/prisma";
// import { revalidatePath } from "next/cache";
// import type { Department } from "@/app/types";

// // Utility function for consistent error handling
// const handlePrismaError = (error: unknown, context: string) => {
//   console.error(`Prisma error in ${context}:`, error);
//   throw new Error(`Database operation failed: ${context}`);
// };

// export async function getDepartments(): Promise<Department[]> {
//   try {
//     return await prisma.department.findMany({
//       orderBy: { createdAt: "desc" },
//     });
//   } catch (error) {
//     handlePrismaError(error, "fetching departments");
//   }
// }

// export async function getDepartment(id: string): Promise<Department | null> {
//   try {
//     return await prisma.department.findUnique({
//       where: { departmentId: id },
//     });
//   } catch (error) {
//     handlePrismaError(error, `fetching department ${id}`);
//   }
// }

// export async function createDepartment(
//   data: Omit<Department, "departmentId" | "createdAt" | "updatedAt">
// ) {
//   try {
//     const result = await prisma.department.create({ data });
//     revalidatePath("/departments");
//     return result;
//   } catch (error) {
//     handlePrismaError(error, "creating department");
//   }
// }

// export async function updateDepartment(id: string, data: Partial<Department>) {
//   try {
//     const result = await prisma.department.update({
//       where: { departmentId: id },
//       data,
//     });
//     revalidatePath("/departments");
//     return result;
//   } catch (error) {
//     handlePrismaError(error, `updating department ${id}`);
//   }
// }

// export async function deleteDepartment(id: string) {
//   try {
//     await prisma.department.delete({ where: { departmentId: id } });
//     revalidatePath("/departments");
//     return { success: true };
//   } catch (error) {
//     handlePrismaError(error, `deleting department ${id}`);
//   }
// }
