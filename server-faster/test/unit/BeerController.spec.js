// test/unit/BeerController.spec.js
const BeerController = use('App/Controllers/Http/BeerController');
const sinon = require('sinon');
const { assert } = require('chai');
const Beer = use('App/Models/Beer');

const { test, trait, beforeEach, afterEach } = use('Test/Suite')('BeerController test suite');
trait('Test/ApiClient');

beforeEach(() => {
  //sinon.stub(Beer, 'create');
  sinon.stub(Beer, 'find');
});

afterEach(() => {
  
  sinon.restore();
});

test('should return a list of beers', async ({ assert }) => {
  const fakeBeers = [{ name: 'Beer 1' }, { name: 'Beer 2' }];
  const beerAllStub = sinon.stub(Beer, 'all').resolves(fakeBeers);
  const responseMock = { json: sinon.stub() };

  const beersController = new BeerController();
  await beersController.getAllBeers({ response: responseMock });

  assert.isTrue(beerAllStub.calledOnce);
  assert.isTrue(responseMock.json.calledWith(fakeBeers));

  beerAllStub.restore();
});

test('should handle internal server error', async ({ assert }) => {
  const errorMessage = 'Mocked internal server error';
  const beerAllStub = sinon.stub(Beer, 'all').rejects(new Error(errorMessage));
  const responseMock = { status: sinon.stub().returnsThis(), json: sinon.stub() };

  const beersController = new BeerController();
  await beersController.getAllBeers({ response: responseMock });

  assert.isTrue(beerAllStub.calledOnce);
  assert.isTrue(responseMock.status.calledWith(500));
  assert.isTrue(responseMock.json.calledWith({ error: 'Internal Server Error' }));

  beerAllStub.restore();
});



test('should create a new beer', async () => {
  
  const requestMock = {
    only: sinon.stub().returns({
      name: 'Test Beer',
      description: 'Test description',
      image: 'test.jpg',
      category_id: 1,
    }),
  };
  
  const responseMock = {
    status: sinon.stub().returnsThis(),
    json: sinon.stub(),
  };

  const fakeBeerData = {
    id: 1,
    name: 'Test Beer',
    description: 'Test description',
    image: 'test.jpg',
    category_id: 1,
  };

  sinon.stub(Beer, 'create').resolves(fakeBeerData);

  
  const beersController = new BeerController();
  await beersController.create({ request: requestMock, response: responseMock });

  
  assert.isTrue(Beer.create.calledOnce);
  
  assert.isTrue(responseMock.status.calledWith(201));
  assert.isTrue(responseMock.json.calledOnce);
  
  assert.deepEqual(responseMock.json.firstCall.args[0], {
    id: 1,
    name: 'Test Beer',
    description: 'Test description',
    image: 'test.jpg',
    category_id: 1,
  });

  
  sinon.restore();
});


test('should get beer by ID', async ({ assert }) => {
  
  const expectedBeer = { id: 1, name: 'Test Beer', description: 'Test description', image: 'test.jpg', category_id: 1 };
  
  Beer.find.resolves(expectedBeer); 
  
  const beerController = new BeerController();
  const response = await beerController.getBeerById({ params: { id: 1 }, response: { json: data => data } });

  assert.deepEqual(response, expectedBeer);
  
});

test('should handle beer not found', async ({ assert }) => {
  
  Beer.find.resolves(null);
   
  const beerController = new BeerController();
  const response = await beerController.getBeerById({
    params: { id: 1 },
    response: {
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
    },
  });



  assert.equal(response.statusCode, 404);
  assert.deepEqual(response._lazyBody.content, { message: 'Beer not found' });
 
});


test('should handle internal server error', async ({ assert }) => {
  
  Beer.find.rejects(new Error('Mocked internal server error'));
    
  const beerController = new BeerController();
  const response = await beerController.getBeerById({ params: { id: 1 }, response: {
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
  assert.deepEqual(response._lazyBody.content, { message: 'Internal Server Error' });
});

