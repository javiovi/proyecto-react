/**
 * Ejemplo de uso del ciclo de vida del metodo
 * en componente clase y el hook del ciclo de vida en
 * componente funcional
 */


import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

componentDidMount(){
    console.log('Comportamiento antes de que el componente sea añadido en el DOM(renderice)');
}



    render() {
        return (
            <div>
                <h1>DiMount</h1>
            </div>
        );
    }
}

export const DidmountHook = () => {

    useEffect(()=> {
        console.log('Comportamineto antes de que el componente sea añadido a DOM');

    })


}


