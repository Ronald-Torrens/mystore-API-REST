const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class CategoriesService {
  constructor() {
    this.categories = [];
    this.generate();
  };

  generate() {
    const limit = 15;

    for (let i = 0; i < limit; i++) {
      this.categories.push({
        id: faker.string.uuid(),
        category: faker.commerce.productMaterial(),
        design: faker.commerce.productAdjective(),
      });
    };
  };

  create(data) {
    const newCategory = {
      id: faker.string.uuid(),
      ...data,
    }
    this.categories.push(newCategory);
    return newCategory;
  };

  find() {
    return this.categories;
  };

  findOne(id) {
    const category = this.categories.find( item => item.id === id );
    if(!category) {
      throw boom.notFound('Category not found.');
    }
    return category;
  };

  update(id, changes) {
    const index = this.categories.findIndex( item => item.id === id );
    if( index === -1 ) {
      throw boom.notFound('Category not found.');
    }
    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...changes,
    }
    return this.categories[index];
  };

  delete(id) {
    const index = this.categories.findIndex( item => item.id === id );
    if( index === -1 ) {
      throw boom.notFound('Category not found.');
    }
    this.categories.splice(index, 1);
    return {
      message: 'Deleted successfully.',
      id
    };
  };

};

module.exports = CategoriesService;
