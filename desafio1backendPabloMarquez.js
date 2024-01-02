class ProductManager {
  #listOfProducts;

  constructor() {
      this.#listOfProducts = [];
  }

  addProduct(title, description, price) {
      const newProduct = {
          id: this.#listOfProducts.length + 1,
          title,
          description,
          price,
      };

      this.#validateFieldCode(newProduct);
      this.#listOfProducts.push(newProduct);
  }

  #validateFieldCode(product) {
      const result = this.#listOfProducts.some((p) => p.id === product.id);

      if (result) {
          throw new Error("There is already a product with that code");
      }
  }

  getProducts() {
      return [...this.#listOfProducts];
  }

  getProductById(id) {
      const product = this.#listOfProducts.find((p) => p.id === id);
      return product !== undefined ? product : "Not found";
  }
}

const manager = new ProductManager();

try {
  manager.addProduct('product one', 'Rg', 2500);
  manager.addProduct('product two', 'Rg', 3400);
  manager.addProduct('product three', 'Rg', 5000);
  manager.addProduct('product four', 'Rg', 1000);
  console.log(manager.getProducts());
} catch (error) {
  console.error(error.message);
}