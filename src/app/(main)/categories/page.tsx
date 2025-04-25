import { getCategories } from "@/app/(main)/actions/category-actions";
import AppDataTable from "@/components/base/table/app-data-table";
import { CategoryColumns } from "./column";

export default async function CategoryPage() {
  // const categories = await getCategories();

  return (
    <div className='p-6'>
      <AppDataTable />
      {/* <h1 className='text-2xl font-bold mb-4'>📁 Categories</h1> */}

      {/* {categories.length === 0 ? (
        <p className='text-muted-foreground'>No categories found.</p>
      ) : (
        <ul className='space-y-4'>
          {categories.map((cat) => (
            <li
              key={cat.categoryId}
              className='border p-4 rounded-xl shadow-sm hover:shadow-md transition'>
              <div className='flex justify-between items-center'>
                <div>
                  <h2 className='text-xl font-semibold'>{cat.categoryName}</h2>
                  {cat.categoryCode && (
                    <p className='text-sm text-muted-foreground'>
                      Code: {cat.categoryCode}
                    </p>
                  )}
                  {cat.memo && (
                    <p className='text-sm text-muted-foreground mt-1'>
                      {cat.memo}
                    </p>
                  )}
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    cat.status === "active"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}>
                  {cat.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
}
