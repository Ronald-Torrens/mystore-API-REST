const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }
  generate() {
    const limit = 100;

    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        description: faker.commerce.productDescription(),
        image: faker.image.url(),
        isBlock: faker.datatype.boolean(),
      });
      // console.log(this.products)
    };
  }

  create(data) {
    const newProduct = {
      id: faker.string.uuid(),
      ...data
    };
    this.products.push(newProduct);
    return newProduct;
  };

  find() {
    return new Promise((resolve, reject) => {
      setTimeout( () => {
        resolve(this.products);
      }, 1500);
    });
  };

  findOne(id) {
    const product = this.products.find(item => item.id === id);
    if(!product) {
      throw boom.notFound('Product not found.');
    }
    if(product.isBlock) {
      throw boom.conflict('Product is blocked.')
    }
    return product;
  };

  update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1) {
      throw boom.notFound('Product not found.');
    };
    const product = this.products[index]
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  };

  delete(id) {
  const index = this.products.findIndex(item => item.id === id);
    if(index === -1) {
      throw boom.notFound('Product not found.');
    };
    this.products.splice(index, 1);
    return {
      message: 'Deleted successfully.',
      id
    };
  };
};

module.exports = ProductsService;
