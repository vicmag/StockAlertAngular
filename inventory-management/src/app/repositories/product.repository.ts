import { Product } from '../models/product.model';

export abstract class ProductRepository {
  abstract findByName(name: string): Product | undefined;
  abstract save(product: Product): void;
  abstract updateMinimumStock(name: string, minimum: number): void;
}
