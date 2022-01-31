export interface ProductType {
  productId: number;
  productName: string;
  outside: boolean;
  pointX: number;
  pointY: number;
  priceOriginal: number;
  priceDiscount: number;
  discountRate: number;
  imageUrl: string;
  selected: boolean;
}

export interface ResponseType {
  id: number;
  imageUrl: string;
  productList: ProductType[];
}
