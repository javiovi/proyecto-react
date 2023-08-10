/** Ejemplo de uso del Hook useState */
/**Crar un comonente del tipo funcion y acceder a su estado priado
 * a traves de un Hook y poder modificarlo
 */

import React, { useState } from 'react';

const Ejemplo1 = () => {
//valor Inicial para un contador
const valorInicial = 0;

//Valor inicial par auna persona

const personaInicial = {
    nombre : 'Javier',
    email: 'javieroviedo0512@gmail.com'
}

/**Queremos el VALORINICIAL Y PERSONAINICIAL
 * sea parte del estado de lcomopoente para gestionar su cambio
 * y se vea reflejado en la vista del componente
 *  const [nombreVariable, funcionParaCambiar] = useState
 *  */

const [contador, setContador] = useState(valorInicial);
const [persona, setPersona] = useState(personaInicial);

function incrementarContador() {
    // funcionParaCambiar(nuevoVal)
   setContador(contador + 1);
}
/* funcion par aactualizar el estado de persona */
function actualizarPersona(nombre){
 setPersona(
    {
        nombre: 'Pepe',
        email: 'pepe@imaginagroup.com'
    }
 )
}


    return (
        <div>
            <h1> ***Ejemplo de useState()***</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS PERSONA: </h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h4>EMAIL: {persona.email}</h4>
            {/* Bloque de botones para actualizar estado */}
            <button onClick={incrementarContador}>Incrementar Contador</button>
            <button onClick={actualizarPersona}>Actualizar Persona</button>
       
       
        </div>

    );
}

export default Ejemplo1;
