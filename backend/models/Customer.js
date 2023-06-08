"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {}

  Customer.init(
    {
      nama: {
        type: DataTypes.STRING,
        allowNull: false
      },
      contact: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      alamat: {
        type: DataTypes.STRING,
        allowNull: false
      },
      diskon: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
      },
      tipe_diskon: {
        type: DataTypes.ENUM('persentase', 'fix diskon'),
        allowNull: true
      },
      ktp: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: "customer",
    }
  );

  Customer.associate = (models) => {
    // associations can be defined here
  };

  return Customer;
};
