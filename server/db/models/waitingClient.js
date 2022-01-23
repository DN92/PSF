const Sequelize = require('sequelize')
const db = require('../db')

const waitingClient = db.define('waitingClient', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  aboutYou: {
    type: Sequelize.STRING(1000)
  },
  firstCat: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  otherPets: {
    type: Sequelize.STRING,
    defaultValue: 'none',
  },
  city: {
    type: Sequelize.STRING,
  },
  state: {
    type: Sequelize.STRING,
  },
  fB: {
    type: Sequelize.STRING,
  },
  iG: {
    type: Sequelize.STRING,
  },
  gender: {
    type: Sequelize.STRING,
  },
  ears: {
    type: Sequelize.ENUM('fold', 'straight')
  },
  color: {
    type: Sequelize.STRING,
  },
  mif: {
    type: Sequelize.STRING,
  }
})

module.exports = waitingClient
