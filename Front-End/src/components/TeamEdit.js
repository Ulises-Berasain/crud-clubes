import React,{useState} from "react";
import {useLocation, useHistory} from "react-router-dom";
import "styled-components/TeamEdit.css";

export default function TeamEdit(props){
    let location = useLocation();
    const history = useHistory();

    const team = props.teams.filter(team=> {
        return team.name === location.pathname.split("/editar/")[1]
    });

    const [teamEdit, setTeamEdit] = useState(!!team[0]&&{ 
        title: team[0].title,
        name: team[0].name,
        stadium: team[0].stadium,
        tla: team[0].tla,
        website: team[0].website,
        image: team[0].image,
        country: team[0].country,
        id: team[0].id,
    });
  
    const submit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:8080/api/equipos`, {
            method: 'PATCH',
            body: JSON.stringify({ teamEdit }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'this-can-be-anything',
            },
        })
        .then(res => res.json())
        .then(json => console.log(json));

        history.replace("/");
        window.location.reload();
    };

    const onChange = (e)=>{
        const newTeam={...teamEdit};
        newTeam[e.target.name] = e.target.value;
        setTeamEdit(newTeam);
    };

    return(
        !!team[0] && 
        <form onSubmit={submit} action="http://localhost:8080/api/equipos" method="PATCH" encType="multipart/form-data" className="form-edit-team">
        <label>Nombre Completo: {team[0].title}</label>
        <input type="text" name="title" value={teamEdit.title} onChange={(e)=> onChange(e)} required/>

        <label>Nombre: {team[0].name}</label>
        <input type="text" name="name" value={teamEdit.name} onChange={(e)=> onChange(e)} required/>

        <label>Estadio: {team[0].stadium}</label>
        <input type="text" name="stadium" value={teamEdit.stadium} onChange={(e)=> onChange(e)} required/>

        <label>Siglas: {team[0].tla}</label>
        <input type="text" name="tla" value={teamEdit.tla} onChange={(e)=> onChange(e)} required/>

        <label>Website: {team[0].website}</label>
        <input type="text" name="website" value={teamEdit.website} onChange={(e)=> onChange(e)} required/>

        <label>País: {team[0].country}</label>
        <input type="text" name="country" value={teamEdit.country} onChange={(e)=> onChange(e)} required/>

        <label>Imagen del Equipo: <img src={team[0].image} alt={`Escudo de ${team[0].name}`} className="image-club"/></label>
        <input type="text" name="image" value={teamEdit.image} onChange={(e)=> onChange(e)} required/>

        <input type="submit" value="Guardar"/>
    </form>
    );
};
