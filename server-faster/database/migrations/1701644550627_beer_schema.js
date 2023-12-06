'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BeerSchema extends Schema {
  up () {
    this.create('beers', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.text('description')
      table.string('image')
      table.integer('category_id').unsigned().references('id').inTable('categories').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('beers')
  }
}

module.exports = BeerSchema
