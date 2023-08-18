import logo from './logo.svg';
import './App.css';

import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto  from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/* Componente propio greeting.jsx */}
     { /* <Greeting name="Javier"></Greeting>*/}
     {/* <GreetingF name="Javier"></GreetingF>*/}
     
     {/*<Ejemplo1></Ejemplo1>*/}
   {/*<Ejemplo2></Ejemplo2> */}
   {/*<MiComponenteConContexto></MiComponenteConContexto>*/}
     ¨{/* <Ejemplo4 nombre="Javier">
        <h3>COntenido props.children</h3>
      </Ejemplo4>*/}
      {/* <GreetingStyled name= "Javier"></GreetingStyled>*/}
     {/* </header> */}
     ´{/* <Father></Father>*/}
     <TaskListComponent></TaskListComponent>
 
 
 </div> 
 );
}

export default App;
