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




Factory.blueprint('App/Models/Category', async (faker) => {
  return {
    name: faker.word(),
  };
});

Factory.blueprint('App/Models/Beer', async (faker, index, data) => {
  
  return {
    name: `Beer ${index + 1}`,
    description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking  ${index + 1}`,
    image: data.image || 'https://source.unsplash.com/200x300/?beer',
    category_id: index + 1,
  };
});



