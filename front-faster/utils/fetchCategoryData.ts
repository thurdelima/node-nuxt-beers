// utils/fetchCategoryData.ts
export default async function fetchCategoryData() {
  // Simulate fetching category data from a fake API
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  // Extract category IDs from the data (replace this with your actual data structure)
  const categoryIds = data.map((category: any) => category.id);

  return categoryIds;
}
