const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class OrdersService {
  constructor() {
    this.orders = [];
    this.generate();
  }
  generate() {
    const limit = 50;

    for (let i = 0; i < limit; i++) {
      this.orders.push({
        id: faker.string.uuid(),
        productName: faker.commerce.productName(),
        cost: parseInt(faker.commerce.price(), 10),
        description: faker.commerce.productDescription(),
        image: faker.image.url(),
      });
      // console.log(this.orders)
    };
  };

  create(data) {
    const newOrder = {
      id: faker.string.uuid(),
      ...data
    };
    this.orders.push(newOrder);
    return newOrder;
  };

  find() {
    return this.orders;
  };

  findOne(id) {
    const order = this.orders.find(item => item.id === id);
    if(!order) {
      throw boom.notFound('Order not found.');
    }
    return order;
  };

  update(id, changes) {
    const index = this.orders.findIndex(item => item.id === id);
    if(index === -1) {
      throw boom.notFound('Order not found.');
    };
    const order = this.orders[index]
    this.orders[index] = {
      ...order,
      ...changes
    };
    return this.orders[index];
  };

  delete(id) {
  const index = this.orders.findIndex(item => item.id === id);
    if(index === -1) {
      throw boom.notFound('Order not found.');
    };
    this.orders.splice(index, 1);
    return {
      message: 'Deleted successfully.',
      id
    };
  };
};

module.exports = OrdersService;
