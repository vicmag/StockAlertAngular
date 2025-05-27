import { Injectable, inject } from '@angular/core';
import { ProductNotFoundError } from '../errors/product-not-found.error';
import { PRODUCT_REPOSITORY } from '../repositories/product.repository';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly repository = inject(PRODUCT_REPOSITORY);

  increaseStock(productName: string, increment: number) {
    const product = this.repository.findByName(productName);

    if (!product) {
      throw new ProductNotFoundError(productName);
    }

    product.stock += increment;
    this.repository.save(product);
  }
}
