"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {}

  Item.init(
    {
      nama_item: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      unit: {
        type: DataTypes.ENUM("kg", "pcs"),
        allowNull: false,
      },
      stok: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      harga_satuan: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      barang: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "item",
    }
  );

  Item.associate = (models) => {
    // associations can be defined here
  };

  return Item;
};
