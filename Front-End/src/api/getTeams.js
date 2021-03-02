export default async function getTeams(){
    return await fetch(`http://localhost:8080/api/equipos`)
    .then(res => res.json())
    .then(response => {
        return response.map(resp =>{
            const title = resp.name;
            const name = resp.shortName;
            const id = resp.id;
            const image = resp.crestUrl;
            const tla = resp.tla;
            const stadium = resp.venue;
            const website = resp.website;
            const country = resp.area.name;

            return {title, name, id, image, tla, stadium, website, country}
        });
    })
    .catch(error => console.log(error));
};
