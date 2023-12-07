'use strict'

const Category = use('App/Models/Category')

class CategoryController {

  async create({ request, response }) {
    try {
      const data = request.only(['name']);
  
      
      if (!data.name) {
        return response.status(400).json({ error: 'The "name" field is required.' });
      }
  
      const category = await Category.create(data);
  
      return response.status(201).json(category);
    } catch (error) {
      
      console.error(error);
      return response.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async get({request, response }) {
    try {
      const categories = await Category.all();
  
      return response.status(200).json(categories);
    } catch (error) {
      
      console.error(error);
      return response.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getBeersByCategoryId({ params, response }) {
    try {
      
      if (!params.id) {
        return response.status(400).json({ error: 'Category ID is required' });
      }

      const category = await Category.findOrFail(params.id);
      const beers = await category.beers().fetch();

      return response.json({ category, beers });
    } catch (error) {
      console.log(error)
      if (error.name === 'ModelNotFoundException') {
        
        return response.status(404).json({ error: 'Category not found' });
      }

      
      return response.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async update({ params, request, response }) {
    try {
      const categoryId = params.id;
      const category = await Category.findOrFail(categoryId);

      const data = request.only(['name']);
      category.merge(data);
      await category.save();

      return response.status(200).json(category);
    } catch (error) {
      if (error.name === 'ModelNotFoundException') {
        return response.status(404).json({ error: 'Category not found' });
      }

      console.error(error);

      return response.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async delete({ params, response }) {
    try {
      const categoryId = params.id;
      const category = await Category.findOrFail(categoryId);

      await category.delete();

      return response.status(200).json({removed: true, id: params.id});
    } catch (error) {
      if (error.name === 'ModelNotFoundException') {
        return response.status(404).json({ error: 'Category not found' });
      }

      console.error(error);

      return response.status(500).json({ error: 'Internal Server Error' });
    }
  }


}

module.exports = CategoryController
