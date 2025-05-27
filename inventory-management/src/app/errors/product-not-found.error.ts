export class ProductNotFoundError extends Error {
  constructor(productName: string) {
    super(`Producto no encontrado: ${productName}`);
    this.name = "ProductNotFoundError";

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ProductNotFoundError);
    }
  }
}
