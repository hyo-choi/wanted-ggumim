export interface ProductType {
  productId: string;
  productName: string;
  outside: boolean;
  pointX: number;
  pointY: number;
  priceOriginal: number;
  priceDiscount: number;
  discountRate: number;
  imageUrl: string;
}

export interface ResponseType {
  id: string;
  imageUrl: string;
  productList: ProductType[];
}
