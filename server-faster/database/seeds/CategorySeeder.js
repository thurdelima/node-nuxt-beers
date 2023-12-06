'use strict'

/*
|--------------------------------------------------------------------------
| CategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Category = use('App/Models/Category');

class CategorySeeder {
  async run () {

    try {
      await Factory.model('App/Models/Category').createMany(10);
      
    } catch (error) {
      console.error(error)
    }
  }
  
}

module.exports = CategorySeeder
