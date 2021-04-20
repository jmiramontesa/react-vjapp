import React, { useState } from 'react';
import { AgregaGenero } from './componentes/AgregaGenero';
import { ResultadoVideojuegos } from './componentes/ResultadoVideojuegos';

export const VideojuegosApp = () => {

    //Utilizamos el hook useState para inicializar la lista de generos de videojuegos.
    const [generos, setGeneros] = useState(['action']);

    //Función que nos permite cambiar el estado de la lista de géneros para agregar
    // nuevos géneros a la lista.
    const agregaGenero = () => {
        //Se manda llamar la función setGeneros que regresa la desestructuración de useState. El 
        // parámetro estadoActualGeneros es el estado actual de useState, y lo que se hace es 
        // utilizar el operador "..." para obtener los elementos actuales del arreglo de géneros
        // y se le agrega un nuevo valor al arreglo que estamos devolviendo, el cual será el nuevo
        // estado de la lista. 
        setGeneros( estadoActualGeneros => [ ...estadoActualGeneros, 'Nuevo Género' ] );
    }

    return (
        <>
            <h2>Portal de Videojuegos</h2>
            {/*
                Creamos una propiedad 'setGeneros' al componente AgregaGenero y le pasamos como valor la
                 referencia de la función 'setGeneros' que obtuvimos en la desestructuración del useState
            */}
            <AgregaGenero setGeneros = {setGeneros}/>
            <hr />            

            {/*
                Creamos la lista de géneros
            */}
            <ol>
                {
                    generos.map( genero => (
                        //Reemplazamos el elemento <li> por la llamda al componente ResultadoVideojuegos, pasando
                        // como parámetro el género. Se tiene que utilizar la propiedad key al igual que se hizo 
                        // con el elemento <li> anteriormente
                        <ResultadoVideojuegos
                            key={genero}
                            genero={genero}
                        />
                    ))
                }
            </ol>

        </>
    )
}