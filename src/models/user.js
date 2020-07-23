'use strict';
const bcrypt = require('bcrypt');
const errorMessage = require('../helpers/errorMessage');
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    async comparePassword(password) {
      let user = this;
      let areSame = bcrypt.compare(password, user.password);
      return areSame;
    }
    static async findByEmail(email) {
      let [user] = await this.findAll({ where: { email } });
      return user;
    }

    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      movil: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
      hooks: {
        beforeCreate: async (user) => {
          try {
            let hashedPassword = await bcrypt.hash(user.password, 12);
            user.password = hashedPassword;
          } catch (error) {
            errorMessage(error, __filename);
          }
        },
      },
    },
  );

  return User;
};
