import React from "react";
import "styled-components/TeamInfo.css";
import {useLocation, useHistory} from "react-router-dom";

export default function TeamInfo(props){
    let location = useLocation();
    const history = useHistory();

    const team = props.teams.filter(team=> {
        return team.name === location.pathname.split("/equipo/")[1]
    });

    const handleOnClickEdit = (e)=>{
        return history.replace(`/editar/${e.target.className}`)
    };

    const handleOnClickDelete = (e)=>{
        const teamToDelete = props.teams.filter(team => {
            return team.name === e.target.className? team.name : false
        });

        fetch(`http://localhost:8080/api/equipos`, {
        method: 'DELETE',
        body: JSON.stringify({teamToDelete}),
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
    
    return(
        !!team[0] &&
        <div className="container-team-info">
            <img className="team-image" src={team[0].image} alt={`Escudo del club ${team[0].name}`}/>
            <h2 className="team-title">{team[0].name}</h2>

            <table className="table-info">
                <thead>
                    <tr>
                        <th>Información</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nombre</td>
                        <td>{team[0].title}</td>
                    </tr>

                    <tr>
                        <td>Estadio</td>
                        <td>{team[0].stadium}</td>
                    </tr>

                    <tr>
                        <td>Siglas</td>
                        <td>{team[0].tla}</td>
                    </tr>

                    <tr>
                        <td>Website</td>
                        <td><a href={team[0].website} target="_blank" rel="noreferrer">{team[0].website}</a></td>
                    </tr>
                </tbody>
            </table>
            <div className="container-button">
                <button className={team[0].name} onClick={(e)=>{
                    handleOnClickEdit(e)
                }}>Editar</button>
                <button className={team[0].name} onClick={(e)=>{
                    handleOnClickDelete(e)
                }}>Eliminar</button>
            </div>
        </div>
    );
};
