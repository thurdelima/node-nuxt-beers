// https://nuxt.com/docs/api/configuration/nuxt-config



 import fetchCategoryIds from './utils/fetchCategoryIds';
 import fetchRoutes from './utils/fetchRoutes';
import fetchCategoryData from './utils/fetchCategoryData';
import generateRoutes from './utils/generateRoutes';


export default defineNuxtConfig({
  devtools: { enabled: false },

  plugins: [
    '~/plugins/bootstrap.ts',
    '~/plugins/bootstrap-icons.ts',
  ],

  components: [
    '~/components',
    '~/components/layouts',
    '~/components/partials',
    //'~/components/pages',
  ],

  build: {
    transpile: ['bootstrap'],
  },

  

  // hooks: {
  //   async generate() {
  //     // Fetch the category IDs dynamically (replace this with your data fetching logic)
  //     const categoryIds = await fetchCategoryData();

  //     // Generate routes for each category ID
  //     const dynamicRoutes = categoryIds.map((id: any) => `/categories/${id}`);

  //     // Add other default routes
  //     const defaultRoutes = ['/', '/categories', '/beers'];

  //     // Combine dynamic and default routes
  //     const allRoutes = [...dynamicRoutes, ...defaultRoutes];

  //     // Log for verification
  //     console.log('Generated Routes:', allRoutes);
  //   },


    
  // },

  

  

   //generate: {
    // routes: [
    //   '/',
    //   '/categories',
    //   //'/categories/1',
    //   { path: '/categories/:id', component: './pages/categories/[id].vue' },
    //   '/beers'
    // ],

    // async routes() {
    //   const categoryIds = await fetchCategoryData();
    //   return [
    //     '/',
    //     '/categories',
    //     '/beers',
    //     // Dynamic route for categories with :id placeholder
    //     ...categoryIds.map((id) => `/categories/${id}`),
    //   ];
    // },
  // routes: async () => {
  //   const categoryIds = await fetchCategoryData();
  //   return categoryIds.map((id) => `/categories/${id}`);
  // },

     //routes: generateRoutes(),

    // routes: async () => {
    //   // Fetch fake category data
    //   const categoryIds = await fetchCategoryData();

    //   // Generate routes for each category ID
    //   const dynamicRoutes = categoryIds.map((id) => `/categories/${id}`);

    //   // Add other default routes
    //   const defaultRoutes = ['/', '/categories', '/beers'];

    //   // Combine dynamic and default routes
    //   const allRoutes = [...dynamicRoutes, ...defaultRoutes];

    //   return allRoutes;
    // },
  // },


  // async routes() {
  //   return await fetchRoutes();
  // },

  // async routes()  {
  //   console.log(`entrou `)
  //   // Fetch the category IDs dynamically (replace this with your data fetching logic)
  //   const categoryIds = await fetchCategoryIds();
  //   console.log('categoryIds: ', categoryIds);

  //   // Generate routes for each category ID
  //   const dynamicRoutes = categoryIds.map((id: any) => `/categories/${id}`);

  //   // Add other default routes
  //   const defaultRoutes = [
  //       '/',
  //   '/categories',
  //   //'/categories/1',
  //   '/beers'
  //   ];

  //   // Combine dynamic and default routes
  //   const allRoutes = [...dynamicRoutes, ...defaultRoutes];

  //   return allRoutes;
  //  }
    //},

  
  
  
})


// async function fetchCategoryIds() {
//   // Simulate fetching category data from an API or database
//   const response = await fetch('http://localhost:3000/categories');
//   const data = await response.json();

//   // Extract category IDs from the data (replace this with your actual data structure)
//   const categoryIds = data.map((category: any) => category.id);

//   console.log('categoryIds: ', categoryIds);

//   return categoryIds;
// }
