export default function CategoryEdit({ items }) {
  return (
    <div>
      <h1>Edit Category</h1>
      <p>Category ID: {items.id}</p>
      <p>Category Name: {items.categoryName}</p>
      {/* Add more fields as necessary */}
    </div>
  );
}
