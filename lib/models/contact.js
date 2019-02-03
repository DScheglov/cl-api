const Sequelize = require('sequelize');

module.exports = sequelize => sequelize.define(
  'contact', {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    phone: Sequelize.STRING,
    address: Sequelize.TEXT,
  }, {
    indexes: [
      { fields: ['firstName'] },
      { fields: ['lastName'] },
      { fields: ['phone'] },
    ],
  });