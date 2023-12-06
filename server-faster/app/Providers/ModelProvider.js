'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class ModelProvider extends ServiceProvider {
  register() {
    
    this.app.bind('App/Models/Category', () => {
      const Category = require('App/Models/Category')
      return new Category()
    })
  }
}

module.exports = ModelProvider
