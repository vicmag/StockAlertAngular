import { Injectable } from '@angular/core';
import { ProductRepository } from '../repositories/product.repository';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private repository: ProductRepository) {}

  increaseStock(productName: string, increment: number): void {
    throw new Error('Método no implementado');
  }
}
