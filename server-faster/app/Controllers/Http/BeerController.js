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

  async getAllBeers({ response }) {
    try {
      const beers = await Beer.all();

      return response.json(beers);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getBeerById({ params, response }) {
    try {
      const beerId = params.id;
      
      const beer = await Beer.find(beerId);

      if (!beer) {
        return response.status(404).json({ message: 'Beer not found' });
      }

      return response.json(beer);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

module.exports = BeerController
