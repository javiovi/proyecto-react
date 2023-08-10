/** 
 * Ejemplo Hooks:
 * - useState()
 * - useContext()
 */

import React, {useState, useContext } from 'react';

const miContexto = React.createContext(null)
const Componente1 = () => {
  
  
  const state = useContext(miContexto);
  
    return (
        <div>
            <h1> EL Token es: {state.token}
            </h1>
            {/* Pintamos componente 2 */}
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto);
    return (
        <div>
            <h2> La sesion es: {state.sesion}</h2>
        </div>
    );
}


export default function MiComponenteConContexto(){
    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }
    

    //Creamos el estado del componente
   const [sessionData, setSessionData] = useState(estadoInicial);
   function actualizarSesion(){
    sessionData (
        {
            token: 'JWT123456789',
            sesion: sessionData.sesion + 1
        }
    );
   }
   
   return (
  <miContexto.Provider value={sessionData}>
   <Componente1></Componente1>
   <button onClick={actualizarSesion}> Actualizar Sesion</button>
  </miContexto.Provider>
        )
}
