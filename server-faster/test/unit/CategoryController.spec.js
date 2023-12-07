const { test, beforeEach, afterEach } = use('Test/Suite')('CategoryController test suite');
const sinon = require('sinon');

const CategoryController = use('App/Controllers/Http/CategoryController');  
const Category = use('App/Models/Category');

beforeEach(() => {
  
  sinon.stub(Category, 'all');
});

afterEach(() => {
  
  sinon.restore();
});

test('should return a list of categories', async ({ assert }) => {
  
  const expectedCategories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
  ];
  Category.all.resolves(expectedCategories);

  
  const categoryController = new CategoryController();
  const response = await categoryController.get({ response: { status: status => ({ json: data => data }) } });

  
  assert.deepEqual(response, expectedCategories);
});


test('should handle internal server error', async ({ assert }) => {
  
  Category.all.rejects(new Error('Mocked internal server error'));

  
  const categoryController = new CategoryController();
  const response = await categoryController.get({ response: {
    status: (code) => {
      return {
        json: (data) => {
          return {
            statusCode: code,
            _lazyBody: { content: data },
          };
        },
      };
    },
  } });
  
  
  assert.equal(response.statusCode, 500);
  assert.deepEqual(response._lazyBody.content, { error: 'Internal Server Error' });
});