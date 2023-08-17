/** Ejemplo para entender el uso de props.children */

/* The line `import React from 'react'` is importing the React library, which is necessary for writing
React components. */
import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div> 
        <h1> Ejemplo CHILDREN PROPS </h1>
        <h2>
        Nombre: {props.nombre}
        </h2>
        {/* props.children pintara por defecto aquello que se encuentre entre las etiquetas
        de apertura y cierre de este componente */}

        {props.children}
        </div>
    );
}

export default Ejemplo4;