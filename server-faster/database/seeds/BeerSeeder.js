'use strict'

/*
|--------------------------------------------------------------------------
| BeerSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Beer = use('App/Models/Beer');

class BeerSeeder {
  async run() {
    await Factory.model('App/Models/Beer').createMany(10);
  }
}

module.exports = BeerSeeder
