import { TestBed } from "@angular/core/testing";
import { MockProductRepository } from "./app/core/repositories/mock-product.repository";
import { ProductRepository } from "./app/core/repositories/product.repository";

export const configureTestBed = () => {
  TestBed.configureTestingModule({
    providers: [
      { provide: ProductRepository, useClass: MockProductRepository },
    ],
  });
};
