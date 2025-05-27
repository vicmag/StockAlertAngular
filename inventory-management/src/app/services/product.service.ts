import { Injectable, inject } from '@angular/core';
import { PRODUCT_REPOSITORY } from '../repositories/product.repository';

@Injectable({
  providedIn: 'root',
})
export class ProductNotFoundError extends Error {
  constructor(productName: string) {
    super(`Producto no encontrado: ${productName}`);
  }
}
export class ProductService {
  private readonly repository = inject(PRODUCT_REPOSITORY);

  increaseStock(productName: string, increment: number) {
    const product = this.repository.findByName(productName);

    if (!product) {
      throw new Error('Artículo no encontrado');
    }

    product.stock += increment;
    this.repository.save(product);
  }
}
