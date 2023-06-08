const express = require("express");
const router = express.Router();
const db = require("../models");
const { sales } = db;

router.get("/", (req, res) => {
  sales.findAll({}).then((allPosts) => res.json(allPosts));
});


router.post("/", (req, res) => {
  let { code_transaksi, tanggal_transaksi, customer, item, qty, total_diskon, total_harga, total_bayar } = req.body;

  sales.create({ code_transaksi, tanggal_transaksi, customer, item, qty, total_diskon, total_harga, total_bayar })
    .then((newPost) => {
      res.status(201).json(newPost);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  sales.findByPk(id).then((mpost) => {
    if (!mpost) {
      return res.sendStatus(404);
    }

    res.json(mpost);
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  sales.findByPk(id).then((mpost) => {
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
  sales.findByPk(id).then((mpost) => {
    if (!mpost) {
      return res.sendStatus(404);
    }

    mpost.destroy();
    res.sendStatus(204);
  });
});

module.exports = router;
