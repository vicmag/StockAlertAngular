import { TestBed } from '@angular/core/testing';
// TODO: Update the import path below if your Product model is located elsewhere
import { Product } from '../models/product.model'; // Adjust the path as needed
import { ProductRepository } from '../repositories/product.repository';
import { ProductService } from './product.service'; // Adjust the path if needed

//Definición del mock del repositorio
jest.mock('../repositories/product.repository', () => ({
  findByName: jest.fn(),
  save: jest.fn(),
}));

describe('ProductService', () => {
  const repositoryMock = require('../repositories/product.repository');
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductService,
        { provide: ProductRepository, useValue: repositoryMock },
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
    repositoryMock.findByName.mockReturnValue(product);
    repositoryMock.save.mockImplementation((product: Product) => product);

    //Act (Ejecución)
    service.increaseStock(productName, increment);

    //Assert (Validación)
    expect(repositoryMock.findByName).toHaveBeenCalledWith(productName);
    expect(repositoryMock.save).toHaveBeenCalledWith({
      name: productName,
      stock: initialStock + increment,
    });
  });
});
