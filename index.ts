import * as products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

  static findProductsBelow(precioBase: number) {
    return products.filter(function (item) {
      return item.price < precioBase;
    });
  }
}

class User {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  products: Product[] = [];
  addProduct(newProduct: Product) {
    return this.products.push(newProduct);
  }
  addProducts(newProducts: Product[]) {
    return this.products.concat(newProducts);
  }
}
export { User, Product };
