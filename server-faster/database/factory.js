'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')
const Factory = use('Factory');
const Category = use('App/Models/Category');

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })

Factory.blueprint('App/Models/Category', async (faker) => {
  return {
    name: faker.word(),
  };
});

Factory.blueprint('App/Models/Beer', async (faker, index, data) => {
  return {
    name: `Beer ${index + 1}`,
    description: `Description for Beer ${index + 1}`,
    image: data.image || `https://placekitten.com/300/300?image=${index + 1}`,
    category_id: index + 1
  };
});


// Factory.blueprint('App/Models/Beer', async (faker) => {
//   return {
//     name: faker.word(),
//     description: faker.word(),
//     image: faker.word(), // Replace with actual beer image URLs
//   };
// });
