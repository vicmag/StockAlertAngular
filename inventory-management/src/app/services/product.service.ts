import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductRepository } from '../repositories/product.repository';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private repository: ProductRepository) {}

  increaseStock(productName: string, increment: number): void {
    const product = this.findProduct(productName);
    this.incrementStock(product, increment);
    this.persistProduct(product);
  }

  private findProduct(name: string): Product {
    return this.repository.findByName(name)!;
  }

  private incrementStock(product: Product, amount: number): void {
    product.stock += amount;
  }

  private persistProduct(product: Product): void {
    this.repository.save(product);
  }
}
