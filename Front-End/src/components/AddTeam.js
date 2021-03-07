import React,{useState} from "react";
import "styled-components/AddTeam.css";
import {useHistory} from "react-router-dom";

export default function AddTeam(){
    const [team, setTeam] = useState({
        title: "",
        name: "",
        stadium: "",
        tla: "",
        website: "",
        image: "",
        country: "",
    });
    const history = useHistory();
  
    const submit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:8080/api/equipos`, {
            method: 'POST',
            body: JSON.stringify({ team }),
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
        const newTeam={...team};
        newTeam[e.target.name] = e.target.value;
        setTeam(newTeam);
    };

    return(
        <form onSubmit={submit} action="http://localhost:8080/api/equipos" method="POST" encType="multipart/form-data" className="form-add-team">
            <label>Nombre Completo</label>
            <input type="text" name="title" value={team.title} onChange={(e)=> onChange(e)} placeholder="Ingrese nombre completo del equipo Ej: Arsenal FC" required/>
            <label>Nombre</label>
            <input type="text" name="name" value={team.name} onChange={(e)=> onChange(e)} placeholder="Ingrese nombre del equipo Ej: Arsenal" required/>
            <label>Estadio</label>
            <input type="text" name="stadium" value={team.stadium} onChange={(e)=> onChange(e)} placeholder="Ingrese nombre del estadio" required/>
            <label>Siglas</label>
            <input type="text" name="tla" value={team.tla} onChange={(e)=> onChange(e)}  placeholder="Ingrese las siglas del equipo Ej: ARS" required/>
            <label>Website</label>
            <input type="text" name="website" value={team.website} onChange={(e)=> onChange(e)} placeholder="Igrese el sitio web del equipo" required/>
            <label>País</label>
            <input type="text" name="country" value={team.country} onChange={(e)=> onChange(e)} placeholder="Igrese el país del equipo" required/>
            <label>Imagen del Equipo</label>
            <input type="text" name="image" value={team.image} onChange={(e)=> onChange(e)} placeholder="Ingrese la URL de la imagen con el escudo" required/>
            <input type="submit" value="Agregar"/>
        </form>
    );
};
