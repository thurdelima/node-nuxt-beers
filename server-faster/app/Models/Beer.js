'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

const Category = use('App/Models/Category')

class Beer extends Model {
  static boot() {
    super.boot()

    this.addHook('beforeCreate', async (beerInstance) => {
      
    })
  }

  static get table() {
    return 'beers'
  }

  static get primaryKey() {
    return 'id'
  }

  static get incrementing() {
    return true
  }

  static get visible() {
    return ['id', 'name', 'description', 'image', 'category_id']
  }

  static get fillable() {
    return ['name', 'description', 'image', 'category_id']
  }

 
  get name() {
    return this.$getAttribute('name')
  }

  set name(value) {
    this.$attributes.name = value
  }

  get description() {
    return this.$getAttribute('description')
  }

  set description(value) {
    this.$attributes.description = value
  }

  get image() {
    return this.$getAttribute('image')
  }

  set image(value) {
    this.$attributes.image = value
  }

  get category_id() {
    return this.$getAttribute('category_id')
  }

  set category_id(value) {
    this.$attributes.category_id = value
  }

  
  category() {
    return this.belongsTo(Category)
  }
}

module.exports = Beer
