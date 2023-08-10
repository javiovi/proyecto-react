/**
 * Ejemplo de uso de :
 * useState()
 * useRef()
 * useEffect()
 * 
 */

import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {

const [contador1, setContador1] = useState(0);
const [contador2, setContador2] = useState(0);

//vamos acrear una referencia para asociar una variable con un elemento del DOM

const miRef = useRef();

function incrementar1(){
setContador1(contador1 
    + 1);
}

function incrementar2(){
setContador2(contador2 + 1);
}

/*Trabajando con UseEffect */

useEffect(() => {
    console.log('CAMBIO EN EL ESTADO DEL COMPONENTE')
    console.log('Mostrando referencia al elemento1')
   console.log(miRef);

},)



    return (
        <div>
            <h1>*** Ejemplo de useState(), useEffect(), useRef() *** </h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>
            <h4 ref={miRef}>
                Ejemplo de elemento referencial
            </h4>
            <div>
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
