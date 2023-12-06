'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
  static get table() {
    return 'categories';
  }
  static get primaryKey() {
    return 'id';
  }
  
  static get fillable() {
    return [ 'name'];
  }

  beers() {
    return this.hasMany('App/Models/Beer');
  }

  

  
  static get visible() {
    return [ 'id', 'name']
  }

  get name() {
    return this.$getAttribute('name')
  }

  set name(value) {
    this.$attributes.name = value
  }

}

module.exports = Category
