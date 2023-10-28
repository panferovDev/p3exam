const { faker } = require('@faker-js/faker');

function createRandomUser() {
  return {
    name: faker.person.fullName(),
  };
}
const users = faker.helpers.multiple(createRandomUser, {
  count: 5,
});

console.log(users);
