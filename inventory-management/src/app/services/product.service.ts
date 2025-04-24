import { Injectable } from '@angular/core';
import { ProductRepository } from '../repositories/product.repository';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private repository: ProductRepository) {}

  increaseStock(productName: string, increment: number): void {
    const product = this.repository.findByName(productName);
    product!.stock += increment;
    this.repository.save(product!);
  }
}
