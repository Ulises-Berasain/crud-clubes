const express = require("express");
const router = express.Router();
let equiposJson = require("../data/equipos.json");
const multer = require("multer");
const upload = multer({dest: "../uploads/images"});

router.post("/equipos", upload.single("images"), (req, res)=>{
    const team = req.body.team;
    const ids = equiposJson.map(equipoJson => equipoJson.id);
    const maxId = Math.max(...ids)
    
    const newTeam = {
        id: maxId +1,
        name: team.title,
        shortName: team.name,
        tla: team.tla,
        crestUrl: team.image,
        website: team.website,
        venue: team.stadium,
        area: {name: team.country},
    }

    equiposJson = [...equiposJson, newTeam]

    res.json(equiposJson)
});

router.get("/equipos", (req, res)=>{
    res.json(equiposJson);
});

module.exports = router;
