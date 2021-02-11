const express = require("express");
const router = express.Router();
const equiposJson = require("../data/equipos.json");


router.get("/equipos", (req, res)=>{
    res.json(equiposJson);
});

module.exports = router;
