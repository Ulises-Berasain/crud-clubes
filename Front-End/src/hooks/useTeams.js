import getTeams from "api/getTeams";
import {useState, useEffect} from "react";

export default function useTeams(){
    const [teams, setTeams] = useState([]);

    useEffect(()=>{
        getTeams()
        .then(resp =>{
            setTeams(resp)
        });
    }, [setTeams]);

    return {teams}
};
