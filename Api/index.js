function Leer() {
    const personaje = document.getElementById("input").value;
    const api_url = `https://rickandmortyapi.com/api/character/?name=${personaje}`;
    buscar(api_url);
}

const buscar = async(api_url) => {
    try {
        const respuesta = await axios.get(api_url);
        const personajes = respuesta.data.results;
        console.log(personajes);
        if(personajes.length > 0) {
            document.getElementById("lista").innerHTML = '';
            personajes.map((p) => {
                document.getElementById("lista").innerHTML += `
                    <div style="margin-top:10px;">
                        <img width="100%" src="${p.image}" alt="No hay imagen disponible" />
                        <h3>${p.name}</h3>
                        <p>${p.species}</p>
                        <p>${p.gender}</p>
                    </div>
                `;
            });
        } else {
            document.getElementById("lista").innerHTML = '<p>No se encontraron personajes con ese nombre</p>';
        }
    } catch(error) {
        console.error(error);
        document.getElementById("lista").innerHTML = '<p>Ocurrió un error al buscar los personajes</p>';
    }
};

  
