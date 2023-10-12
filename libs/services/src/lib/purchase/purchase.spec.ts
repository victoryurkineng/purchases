import { setupServer } from 'msw/node';
import { purchaseMock, purchaseMockHandlers } from './purchase.mock';
import { getPurchases } from './purchase';

const server = setupServer(...purchaseMockHandlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('Services', () => {
  it('getPurchases', async () => {
    const response = await getPurchases();
    expect(response).toEqual([purchaseMock]);
  });
});
