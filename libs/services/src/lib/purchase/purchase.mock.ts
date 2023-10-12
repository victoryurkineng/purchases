import { rest } from 'msw';
import { Purchase, PurchaseCategory } from '@idme/models';

export const purchaseMock: Purchase = {
  id: 1,
  location: 'https://picsum.photos/id/0/200',
  purchaseDate: '2020-12-27T00:00:00.000Z',
  category: PurchaseCategory.FOOD,
  description:
    'connecting the card won&#x27;t do anything, we need to back up the digital HDD driver!',
  price: 99882,
  name: 'auxiliary generating microchip',
};

export const purchaseMockHandlers = [
  rest.get('*/api/data.json', (req, res, ctx) => {
    const purchases: Purchase[] = [purchaseMock];
    return res(ctx.status(200), ctx.json(purchases));
  }),
];
