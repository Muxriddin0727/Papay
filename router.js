const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.send("home sahifadasiz");
});

router.get("/menu", (req, res) => {
    res.send("Menu sahifasidasiz");
});

router.get("/community", (req,res) => {
    res.send("Jamiyat sahifasidasiz");
});

module.exports = router;