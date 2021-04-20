import React from 'react';
import { InfoVideojuego } from './InfoVideojuego';
import { useFetchVideojuegos } from '../hooks/useFetchVideojuegos';

//Recibe como argumento el género que se va utilizar para hacer la búsqueda de los videojuegos
// utilizando el API de RAWG
export const ResultadoVideojuegos = ({genero}) => {

    //Utilizamos el custom hook useFetchVideojuegos
    const {infoVj, loading} = useFetchVideojuegos(genero);

    return(
        <>
            <h3>{genero}</h3>

            {/*
                Mostramos el mensaje "Cargando..." en base a la bandera 'loading' que contramos en el
                 custom hook useFetchVideojuegos
            */}
            { loading ? <p>Cargando...</p> : null }

            <div className="card-grid">            
                {/*
                    Creamos la lista de juegos con la información que recuperamos de la invocación del api de RAWG,
                    utilizando la variable infoJuegos que obtuvimos en la desestructuración del hook useState.
                */}
                {                
                    infoVj.map( infoJuego => (
                        <InfoVideojuego 
                            key={infoJuego.id}
                            juego={infoJuego}
                        />
                    ))
                }

            </div>
        </>
    )
}