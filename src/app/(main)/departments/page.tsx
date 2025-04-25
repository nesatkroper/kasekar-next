import { Suspense } from "react";
import { getDepartments } from "@/app/(main)/actions/department-actions";
import DepartmentTable from "./department-table";
import { Skeleton } from "@/components/ui/skeleton";

export const dynamic = "force-dynamic";
export const revalidate = 0;

async function DepartmentsTableContainer() {
  const { departments, error } = await getDepartments();

  console.log(departments);

  if (error) {
    return <div className='text-red-500'>Error: {error}</div>;
  }

  return <DepartmentTable departmentData={departments || []} />;
}

export default function DepartmentsPage() {
  return (
    <Suspense fallback={<TableSkeleton />}>
      <DepartmentsTableContainer />
    </Suspense>
  );
}

function TableSkeleton() {
  return (
    <div className='space-y-4'>
      <div className='flex justify-between items-center'>
        <Skeleton className='h-8 w-40' />
        <Skeleton className='h-10 w-32' />
      </div>
      <div className='border rounded-md'>
        <div className='h-12 border-b px-4 flex items-center'>
          <Skeleton className='h-4 w-full' />
        </div>
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <div key={i} className='h-16 border-b px-4 flex items-center'>
              <Skeleton className='h-4 w-full' />
            </div>
          ))}
      </div>
    </div>
  );
}
