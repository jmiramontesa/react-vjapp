import { useState, useEffect } from "react";
import { getVideojuegos } from '../funciones/funcionesVj';

//El custom hook se va llamar useFetchVideojuegos.
export const useFetchVideojuegos = (genero) => {
    //Establecemos el estado inicial del hook. Cuando utilizemos por primera vez el hook
    // useFecthVideojuegos, va tener este estado inicial.
    const [state, setState] = useState({
        infoVj: [],
        loading: true
    });

    //Utilizamos useEffect para invocar la función getVideojuegos. El segundo argumento que recibe useEffect
    // es una lista de dependencias. Si esa lista se manda vacía, el useEffect se va invocar solamente una vez
    // lo cual evitaría que tengamos incongruencias si por ejemplo estamos guardando información en una base
    // de datos cada vez que se manda llamar el método getVideojuegos o simplemente no queremos que se esté
    // invocando la llamada al api de RAWG cada vez que algo se actualice en el componente.
    useEffect( () => {
        //Invocamos la función que mudamos a funcionesVj.js. Esta función es un async por lo cual devuelve
        // un Promise
        getVideojuegos(genero)
            .then( resVj => {
                console.log(resVj);
                //Invocamos la función setState que declaramos en la desestructuración de useState.
                setState({
                    infoVj: resVj,
                    loading: false
                });
            })
    }, [genero]);

    return state;
}