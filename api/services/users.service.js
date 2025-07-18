const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class UsersService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 20;

    for (let i = 0; i < limit; i++) {
    this.users.push({
      id: faker.string.uuid(),
      userName: faker.internet.username(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
    });
    // console.log(users);
  };
  };

  create(data) {
    const newUser = {
      id: faker.string.uuid(),
      ...data
    };
    this.users.push(newUser);
    return newUser;
  };

  find() {
    return this.users;
  };

  findOne(id) {
    const user = this.users.find( item => item.id === id );
    if(!user) {
      throw boom.notFound('User not found.');
    };
    return user;
  };

  update(id, changes) {
    const index = this.users.findIndex( item => item.id === id )
    if(index === -1) {
      throw boom.notFound('User not found.');
    };
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes
    };
    return this.users[index];
  };

  delete(id) {
    const index = this.users.findIndex( item => item.id === id )
    if(index === -1) {
      throw boom.notFound('User not found.');
    };
    this.users.splice(index, 1);
    return {
      message: 'Deleted successfully.',
      id
    }
  };
};

module.exports = UsersService;
