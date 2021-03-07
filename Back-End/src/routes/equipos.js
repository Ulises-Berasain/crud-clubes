const express = require("express");
const router = express.Router();
let teamsJson = require("../data/equipos.json");

router.post("/equipos", (req, res)=>{
    const team = req.body.team;
    const ids = teamsJson.map(teamJson => teamJson.id);
    const maxId = Math.max(...ids);
    
    const newTeam = {
        id: maxId +1,
        name: team.title,
        shortName: team.name,
        tla: team.tla,
        crestUrl: team.image,
        website: team.website,
        venue: team.stadium,
        area: {name: team.country},
    };

    teamsJson = [...teamsJson, newTeam];

    res.json(teamsJson);
});

router.patch("/equipos", (req, res)=>{
    const team = req.body.teamEdit;

    const editTeam = {
        id: team.id,
        name: team.title,
        shortName: team.name,
        tla: team.tla,
        crestUrl: team.image,
        website: team.website,
        venue: team.stadium,
        area: {name: team.country},
    };

    teamsJson = teamsJson.map(teamJson=>{
        return teamJson.id === editTeam.id ? teamJson = editTeam : teamJson
    });

    res.json(teamsJson);
});

router.delete("/equipos", (req, res)=>{
    const teamDelete = req.body.teamToDelete[0];

    teamsJson = teamsJson.filter(team => {
        return team.id !== teamDelete.id
    });

    res.json(teamsJson);
});

router.get("/equipos", (req, res)=>{
    res.json(teamsJson);
});

module.exports = router;
