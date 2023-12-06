'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('/categories', 'CategoryController.create')
  Route.get('/categories', 'CategoryController.get')
  Route.put('/categories/:id', 'CategoryController.update');
  Route.delete('/categories/:id', 'CategoryController.delete');

  Route.post('/beers', 'BeerController.create')
  
}).prefix('/api')

Route.on('/').render('welcome')


