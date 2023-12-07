// test/unit/BeerController.spec.js
const BeersController = use('App/Controllers/Http/BeerController');
const sinon = require('sinon');
const Beer = use('App/Models/Beer');

const { test, trait } = use('Test/Suite')('BeerController test suite');
trait('Test/ApiClient');

test('should return a list of beers', async ({ assert }) => {
  const fakeBeers = [{ name: 'Beer 1' }, { name: 'Beer 2' }];
  const beerAllStub = sinon.stub(Beer, 'all').resolves(fakeBeers);
  const responseMock = { json: sinon.stub() };

  const beersController = new BeersController();
  await beersController.getAllBeers({ response: responseMock });

  assert.isTrue(beerAllStub.calledOnce);
  assert.isTrue(responseMock.json.calledWith(fakeBeers));

  beerAllStub.restore();
});

test('should handle internal server error', async ({ assert }) => {
  const errorMessage = 'Mocked internal server error';
  const beerAllStub = sinon.stub(Beer, 'all').rejects(new Error(errorMessage));
  const responseMock = { status: sinon.stub().returnsThis(), json: sinon.stub() };

  const beersController = new BeersController();
  await beersController.getAllBeers({ response: responseMock });

  assert.isTrue(beerAllStub.calledOnce);
  assert.isTrue(responseMock.status.calledWith(500));
  assert.isTrue(responseMock.json.calledWith({ error: 'Internal Server Error' }));

  beerAllStub.restore();
});

