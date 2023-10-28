/** @type {import('sequelize-cli').Migration} */
const fs = require('fs/promises');
const path = require('path');
const getSudents = require('../../utils/getNames');

module.exports = {
  async up(queryInterface) {
    const imgs = await fs.readdir(path.join(__dirname, '..', '..', 'public', 'img'));
    const groups = [
      'arctics-foxes', 'bears', 'beavers', 'bees', 'eagles',
      'foxes', 'hedgehogs', 'jays', 'lynxes', 'owls',
      'raccons', 'snow-leopards', 'tigers', 'whales', 'wolves',
    ].map((name, index) => ({
      name, img: `${imgs[index]}`, createdAt: new Date(), updatedAt: new Date(),
    }));

    const students = getSudents(groups.length * 5).map((student, index) => ({
      ...student, groupId: Math.floor(index / 5) + 1, createdAt: new Date(), updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Groups', groups);
    await queryInterface.bulkInsert('Students', students);
  },

};
