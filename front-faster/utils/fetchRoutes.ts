// utils/fetchRoutes.ts
import fetchCategoryIds from './fetchCategoryIds';

export default async function fetchRoutes() {
  // Fetch the category IDs dynamically
  const categoryIds = await fetchCategoryIds();

  // Generate routes for each category ID
  const dynamicRoutes = categoryIds.map((id: any) => `/categories/${id}`);

  // Add other default routes
  const defaultRoutes = ['/', '/categories', '/beers'];

  // Combine dynamic and default routes
  const allRoutes = [...dynamicRoutes, ...defaultRoutes];

  return allRoutes;
}
