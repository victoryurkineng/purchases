import { get } from '@idme/clients-http';
import { Purchase } from '@idme/models';

export const getPurchases = async (): Promise<Purchase[]> => {
  const response = await get('/api/data.json');
  return response as Purchase[];
}
