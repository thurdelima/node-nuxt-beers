'use strict'

const Beer = use('App/Models/Beer')

class BeerController {

  async create({ request, response }) {
    try {
      
      const data = request.only(['name', 'description', 'image', 'category_id'])
      if (!data.name || !data.description || !data.image || !data.category_id) {
        return response.status(400).json({ message: 'Missing required fields' })
      }

      
      const beer = await Beer.create(data)

      return response.status(201).json(beer)
    } catch (error) {
      console.error(error)
      return response.status(500).json({ message: 'Internal server error' })
    }
  }
}

module.exports = BeerController
