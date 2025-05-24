import { TestBed } from '@angular/core/testing';
import { Product } from '../models/product.model'; // Adjust the path if needed
import {
  PRODUCT_REPOSITORY,
  ProductRepository,
} from '../repositories/product.repository';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let mockRepository: jest.Mocked<ProductRepository>;
  let service: ProductService;

  beforeEach(() => {
    mockRepository = {
      findByName: jest.fn(),
      save: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        ProductService,
        {
          provide: PRODUCT_REPOSITORY,
          useValue: mockRepository,
        },
      ],
    });

    service = TestBed.inject(ProductService);
  });

  it('debe incrementar stock correctamente', () => {
    //Action (configuración)
    const productName = 'Camiseta';
    const initialStock = 10;
    const increment = 5;
    const product: Product = {
      name: productName,
      stock: initialStock,
    };

    //Comportamiento del mock
    mockRepository.findByName.mockReturnValue(product);
    mockRepository.save.mockImplementation((product: Product) => product);

    //Act (Ejecución)
    service.increaseStock(productName, increment);

    //Assert (Validación)
    expect(mockRepository.findByName).toHaveBeenCalledWith(productName);
    expect(mockRepository.save).toHaveBeenCalledWith({
      name: productName,
      stock: initialStock + increment,
    });
  });
});
