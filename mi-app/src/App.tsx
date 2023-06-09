import { Counter } from "./components/Counter";
import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from "./components/Usuario";


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

      </>
    );
}

export default App;
