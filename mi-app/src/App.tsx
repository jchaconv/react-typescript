import { ContadorRed } from "./components/ContadorRed";
import { Counter } from "./components/Counter";
import { Formulario } from "./components/Formulario";
import { Formulario2 } from "./components/Formulario2";
import { TimerPadre } from "./components/TimerPadre";
import { UserRed } from "./components/UserRed";
import { Usuario } from "./components/Usuario";
import { Todo } from "./todo/Todo";


function App() {
    return (
      <>
        <h1>React - TypeScript</h1>
        <hr />

        <h2><u>useState:</u></h2>
        <Counter />
        <br />
        <Usuario />
        <br />

        <h2><u>useEffect - useRef:</u></h2>
        <TimerPadre />
        <br />

        <h2><u>useReducer:</u></h2>
        <ContadorRed />
        <br />
        <UserRed />
        <br />

        <Formulario />
        <br />
        <hr />

        <Formulario2 />
        <hr />
        <br />
        
        <Todo />
        

      </>
    );
}

export default App;
