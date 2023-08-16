/* Ejemplo de uso del metodo compnentWillUnmount para componente clase
Ejemplo de uso de hooks para componente funcional( cuando el componente va a desaparecer) */


import React, { Component, useEffect } from 'react'

export default class WillUnMount extends Component {
    componentWillUnmount(){
        console.log('COmportamiento antes de que el componente desaparezca')
    }
  render() {
    return (
      <div><h1>WillUnMount</h1></div>
    )
  }
}




export const WillUnMountHook = () => {
    useEffect(() => {
        //Aqui nada
        return () => {
            cleanup
        };
    }, [input]);
}