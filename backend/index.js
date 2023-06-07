const Sequelize = require('sequelize');

const sequelize = new Sequelize('hello_world', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: true
});


const Item = sequelize.define('item', {
  nama_item: {
    type: Sequelize.STRING,
    allowNull: false
  },
  unit: {
    type: Sequelize.ENUM('kg', 'pcs'),
    allowNull: false
  },
  stok: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  harga_satuan: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  },
  barang: {
    type: Sequelize.STRING,
    allowNull: true
  },
});


const Customer = sequelize.define('customer', {
  nama: {
    type: Sequelize.STRING,
    allowNull: false
  },
  contact: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  alamat: {
    type: Sequelize.STRING,
    allowNull: false
  },
  diskon: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: true
  },
  tipe_diskon: {
    type: Sequelize.ENUM('persentase', 'fix diskon'),
    allowNull: true
  },
  ktp: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

const Sales = sequelize.define('sales', {
  code_transaksi: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tanggal_transaksi: {
    type: Sequelize.DATE,
    allowNull: false
  },
  customer: {
    type: Sequelize.STRING,
    allowNull: false
  },
  item: {
    type: Sequelize.STRING,
    allowNull: false
  },
  qty: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  total_diskon: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  },
  total_harga: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  },
  total_bayar: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  }
});

// Sync all defined models to the database
sequelize.sync({ force: false })
  .then(() => {
    console.log('All models were synchronized successfully.');
  })
  .catch((error) => {
    console.error('Error occurred while synchronizing models:', error);
  });

