import React from 'react';

//Recibimos como parámetro el juego que queremos mostrar.
export const InfoVideojuego = ({juego}) => {
    return(
        //Mostramos la información del juego. Se utiliza la propieda 'className' en lugar de 'class' para indicar el
        // estilo del elemento porque 'class' es una palabra reservada en JavaScript.
        <div className="card">
            <img src = {juego.imagen} alt={juego.nombre} />
            <p>{juego.nombre}</p>
            <p>Rating: {juego.rating}</p>
            <p>Metacritic: {juego.metacritic}</p>
        </div>
    )
}