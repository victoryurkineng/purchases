export enum PurchaseCategory {
  FOOD = 'Food',
}

export interface Purchase {
  id: number;
  location: string;
  purchaseDate: string;
  category: PurchaseCategory;
  description: string;
  price: number; 
  name: string;
}
