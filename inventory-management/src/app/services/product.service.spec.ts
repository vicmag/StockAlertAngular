// src/app/services/product.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { ProductRepository } from '../repositories/product.repository';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
  let repositoryMock: jest.Mocked<ProductRepository>; // Cambiado a jest.Mocked

  beforeEach(() => {
    // Configuración del mock con Jest
    repositoryMock = {
      findByName: jest.fn(),
      save: jest.fn(),
      updateMinimumStock: jest.fn(),
    } as unknown as jest.Mocked<ProductRepository>;

    TestBed.configureTestingModule({
      providers: [
        ProductService,
        { provide: ProductRepository, useValue: repositoryMock },
      ],
    });

    service = TestBed.inject(ProductService);
  });

  it('debe incrementar stock correctamente', () => {
    const testProduct = { name: 'Camiseta', stock: 10, minimumStock: 5 };
    repositoryMock.findByName.mockReturnValue(testProduct);

    service.increaseStock('Camiseta', 3);

    expect(repositoryMock.save).toHaveBeenCalledWith({
      name: 'Camiseta',
      stock: 13,
      minimumStock: 5,
    });
  });
});
