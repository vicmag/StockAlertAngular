import { InjectionToken } from '@angular/core';
import { Product } from '../models/product.model';

export abstract class ProductRepository {
  abstract findByName(name: string): Product | undefined;
  abstract save(product: Product): void;
}

// Token para inyección de dependencias
export const PRODUCT_REPOSITORY = new InjectionToken<ProductRepository>(
  'ProductRepository'
);
