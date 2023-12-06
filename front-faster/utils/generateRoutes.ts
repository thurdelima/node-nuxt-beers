// utils/generateRoutes.ts
import fetchCategoryIds from './fetchCategoryIds';

export default function generateRoutes() {
  // Fetch the category IDs dynamically
  const categoryIds = fetchCategoryIds();

  // Generate routes for each category ID
  const dynamicRoutes = categoryIds.map((id: any) => `/categories/${id}`);

  // Add other default routes
  const defaultRoutes = ['/', '/categories', '/beers'];

  // Combine dynamic and default routes
  const allRoutes = [...dynamicRoutes, ...defaultRoutes];
  console.log(allRoutes);

  return allRoutes;
}
