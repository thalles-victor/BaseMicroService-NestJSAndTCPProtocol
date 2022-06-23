import { Injectable } from '@nestjs/common';

interface IProduct {
  id: number;
  productName: string;
  description: string;
  priceInCent: number;
}

const products: IProduct[] = [];

@Injectable()
export class AppService {
  all(): IProduct[] {
    return products;
  }

  create(product: IProduct): void {
    products.push(product);
  }
}
