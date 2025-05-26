import { Injectable, inject } from '@angular/core';
import { PRODUCT_REPOSITORY } from '../repositories/product.repository';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly repository = inject(PRODUCT_REPOSITORY);

  increaseStock(productName: string, increment: number) {
    const product = this.repository.findByName(productName); 
    product.stock += increment;
    this.repository.save(product);

  }
}
