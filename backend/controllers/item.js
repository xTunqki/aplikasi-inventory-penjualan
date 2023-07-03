const express = require("express");
const router = express.Router();
const db = require("../models");
const { item } = db;
const { upload } = require("./multer");
const path = require('path');


// Router get with images from uploads folder
router.get("/", (req, res) => {
  item.findAll({}).then((allPosts) => res.json(allPosts));
});

router.get("/uploads/:filename", (req, res) => {
  res.sendFile(path.join(__dirname, '../uploads/') + req.params.filename);
});

router.post('/upload', upload.single('gambar_barang'), (req, res) => {
  res.json(req.file);
});

router.post("/", (req, res) => {
  let { nama_item, unit, stok, harga_satuan, barang} = req.body;

  item.create({ nama_item, unit, stok, harga_satuan, barang })
    .then((newPost) => {
      res.status(201).json(newPost);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  item.findByPk(id).then((mpost) => {
    if (!mpost) {
      return res.sendStatus(404);
    }

    res.json(mpost);
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  item.findByPk(id).then((mpost) => {
    if (!mpost) {
      return res.sendStatus(404);
    }

    mpost.content = req.body.content;
    mpost
      .save()
      .then((updatedPost) => {
        res.json(updatedPost);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  item.findByPk(id).then((mpost) => {
    if (!mpost) {
      return res.sendStatus(404);
    }

    mpost.destroy();
    res.sendStatus(204);
  });
});

module.exports = router;
