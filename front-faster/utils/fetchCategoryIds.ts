

export default function fetchCategoryIds() {
  // Simulate fetching category data from an API or database
  const payload: any[] = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ];
  const response = payload;
  console.log(response)
  //await fetch('http://localhost:3000/categories');
 // const data = response.json();

  // Extract category IDs from the data (replace this with your actual data structure)
  const categoryIds = payload.map((category: any) => category.id);

  console.log(`category: `, categoryIds);

  return categoryIds;
}
