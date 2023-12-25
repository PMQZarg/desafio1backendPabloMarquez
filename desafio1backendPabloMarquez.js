export class ProductManager {
    #listOfProducts;
    constructor() {
      this.#listOfProducts = [];
    }
  
    addProduct(product) {
      this.#validateInstance(product);
      this.#validateFieldCode(product);
      this.#listOfProducts.push(product);
    }

    #validateFieldCode(product) {
        const result = this.#listOfProducts.some((p) => p.equal(product));
    
        if (result) {
          throw new Error("There is already a product with that code");
        }
      }
    
      #validateInstance(object) {
        if (!(object instanceof Product)) {
          throw new Error("the value received is not a product");
        }
      }
    getProducts() {
        return [...this.#listOfProducts];
      }
    
      getProductById(id) {
        const product = this.#listOfProducts.find((p) => p.id === id);
        return product !== undefined ? product : "Not found";
      }
    addProduct( title, description, price, thumbnail, code, stock ){
        const newProduct = {

        id: this.product.length + 1,
        title,
        description, 
        price, 
        thumbnail,
        code,
        stock,
    }
    this.product.push(newProduct)
}

addtitle({pid}){
let result= this.product.find(prod=>prod.id===pid)
return result === 'undefine' ? 'The title is needed': result
}

adddescription({pid}){
    let result= this.product.find(prod=>prod.id===pid)
    return result === 'undefine' ? 'The description is needed': result
    }

addprice({pid}){
        let result= this.product.find(prod=>prod.id===pid)
        return result === 'undefine' ? 'Price is needed': result
        }

addThumbnail({pid}){
            let result= this.product.find(prod=>prod.id===pid)
            return result === 'undefine' ? 'Thumbnail is needed': result
            }

addcode({pid}){
                let result= this.product.find(prod=>prod.id===pid)
                return result === 'undefine' ? 'Code is needed': result
                }  
                
addstock({pid}){
                    let result= this.product.find(prod=>prod.id===pid)
                    return result === 'undefine' ? 'Stock is needed': result
                    }
}

const Manager = new Manager()
console.log(Manager.addProduct('product one', 'Rg', 2500))
console.log(Manager.addProduct('product two', 'Rg', 3400))
console.log(Manager.addProduct('product three', 'Rg', 5000))
console.log(Manager.addProduct('product four',' Rg', 1000))
console.log(Manager.getProduct())