const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate({ Group }) {
      this.belongsTo(Group, { foreignKey: 'groupId' });
    }
  }
  Student.init({
    name: DataTypes.STRING,
    groupId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};
