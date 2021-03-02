import React from "react";
import "styled-components/Teams.css";
import {useHistory} from "react-router-dom";
import {Link} from "react-router-dom";

export default function TeamsTable(props){
    const history = useHistory();

    const handleOnClickInfo = (e)=>{
        return history.replace(`/equipo/${e.target.className}`)
    } 

    return(
        <React.Fragment>
            <h3 className="total-teams" >Hay {props.teams.length} equipos</h3>
            <Link className="button-add" to="/agregar">
                <button>Agregar</button>
            </Link>
            <table className="table-teams">
                <thead>
                    <tr>
                        <th><h2>Equipo</h2></th>
                        <th><h2>País</h2></th>
                        <th><h2>Acción</h2></th>
                    </tr>
                </thead>
                <tbody>
                    {props.teams.map(team => {
                        return (
                            <tr key={team.id}>
                                <td>
                                    <img className="club-image" src={team.image} alt={`Escudo del club ${team.name}`}/>
                                    <strong>{team.name}</strong>
                                </td> 

                                <td>
                                    <strong>{team.country}</strong>
                                </td>

                                <td>
                                    <button onClick={(e)=>{
                                        handleOnClickInfo(e)
                                    }} className={team.name}>Ver</button>
                                    <button onClick={props.edit}>Editar</button>
                                    <button onClick={props.delete}>Eliminar</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </React.Fragment>
    );
};
