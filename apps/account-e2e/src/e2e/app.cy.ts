import { getHeader } from '../support/app.po';

describe('account', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Function helper example, see `../support/app.po.ts` file
    getHeader().contains('Purchases');
  });
});
