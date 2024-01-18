import { useState } from "react";
import '../style/Boton.css';

function Boton(){

    const [show, setShow] = useState(true);

    return (
      <div className="container">
        <button onClick={() => setShow((show) => !show)}> Show / Hide</button>
        {show ? <h1>Welcome to React Challenges</h1> : null}
      </div>
    );
}
export default Boton;
