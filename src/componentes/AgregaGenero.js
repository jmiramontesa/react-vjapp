import React, { useState } from 'react';
import PropTypes from 'prop-types';

//Desestructuramos los argumentos del componente para recibir la función setGeneros
export const AgregaGenero = ({setGeneros}) => {

    //En la variable inputValue siempre vamos a tener el último valor que el usuario escribió en 
    // el input text.
    const [inputValue, setInputValue] = useState('Indica el Género');

    //Esta función se invoca cada vez que se detecta el evento onChange en el input text.
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    //Esta función se invoca cada vez que se presiona la tecla enter en el input text.
    const handleSubmit = (e) => {
        //La función preventDefault() nos sirve para que el formulario no refresque la página
        // ya que es un comportamiento que no queremos tener.
        e.preventDefault();
        console.log('Se hizo submit...');

        if(inputValue.trim().length > 4){
            //Mandamos llamar la función setGeneros que recuperamos de los argumentos del componente. Primero agregamos
            // el ultimo valor que escribió el usuario y al final las que ya teníamos.
            setGeneros( generosActuales => [inputValue, ...generosActuales] );
            //Limpiamos input value
            setInputValue('');
        }

        
    }

    return (
        /*
            Quitamos el fragment <></> y lo cambiamos por un form para poder invocar la función
             de handleSubmit.
            Hay que recordar que el fragment sólo nos sirve para agrupar varios elementos de un
             html, es como un <div> pero sin que nos pinte dicho div en el código html y nos coupe un
             espacio innecesario.
        */
        <form onSubmit={handleSubmit}>
            {/*
                Creamos un input text para que el usuario escriba el género de videojuegos que quiere
                 agregar a la lista, y hacemos un binding a la variable inputValue en la que vamos a guardar
                 lo que escriba el usuario en este input text.
                Cada vez que se escriba algo en el input text se manda llamar la función handleInputCange la
                 cual va actualizar el estado de la variable inputValue.
            */}
            <input 
                type="text" 
                value={inputValue}
                onChange={ handleInputChange  }
            />
        </form>
    )
}

//Configuramos los props del componente
AgregaGenero.propTypes = {
    setGeneros: PropTypes.func.isRequired
}