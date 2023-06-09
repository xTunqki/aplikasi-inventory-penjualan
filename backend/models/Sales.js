"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Sales extends Model {}

  Sales.init(
    {
      code_transaksi: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      tanggal_transaksi: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      customer: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      item: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      qty: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total_diskon: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      total_harga: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      total_bayar: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "sales",
    }
  );

  Sales.associate = (models) => {
    // associations can be defined here
    Sales.belongsTo(models.customer, {  foreignKey: 'customer', as: 'customer_data' });
    Sales.belongsTo(models.item, {  foreignKey: 'item', as: 'item_data' });
  };

  return Sales;
};
