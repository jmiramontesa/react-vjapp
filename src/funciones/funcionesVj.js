//Invocamos el api de RAWG para obtener los videojuegos del género proporcionado en los parámetrs del
// componente.
export const getVideojuegos = async (genero) => {
    //URL del api de RAWG que validamos en postman. Le concatenamos el genero que recibimos como parámetro
    // en el componente.
    const url = 'https://api.rawg.io/api/games?key=db2d53b4e0ef446f8126054ba6cdbbf5&genres=' + encodeURI(genero);
    //Utilizamos Fetch API para invocar la url.
    const respuesta = await fetch(url);
    //Recuperamos el JSON de la respuesta, el cual contiene la información de los videojuegos.
    const { results } = await respuesta.json();
    //Obtenemos solamente la información que vamos a necesitar del json de la respuesta.
    const juegos = results.map(juego => {
        return {
            id: juego.id,
            nombre: juego.name,
            imagen: juego.background_image,
            rating: juego.rating,
            metacritic: juego.metacritic
        }
    });
    return juegos;   
}