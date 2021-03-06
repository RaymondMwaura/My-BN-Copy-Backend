module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('requests', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.ENUM,
      allowNull: false,
      defaultValue: 'open',
      values: [
        'open',
        'declined',
        'approved'
      ]
    },
    userId: {
      type: Sequelize.INTEGER
    },
    type: {
      type: Sequelize.ENUM,
      allowNull: false,
      defaultValue: 'single',
      values: [
        'single',
        'multi'
      ]
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface) => Promise.all([
    queryInterface.sequelize.query('DROP TYPE IF EXISTS enum_requests_status CASCADE'),
    queryInterface.sequelize.query('DROP TYPE IF EXISTS enum_requests_type CASCADE'),
    queryInterface.dropTable('requests'),
  ])
};
