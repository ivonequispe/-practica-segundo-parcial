

import React, { useState } from 'react';
import Nota from './Nota';
import '../style/Contenido.css';


function Contenido() {

    const [notas, setNotas] = useState([]);
    const [nuevaNota, setNuevaNota] = useState('');

    const agregarNota = () => {
        if (nuevaNota.trim() === '') return;
        setNotas([...notas, { id: Date.now(), texto: nuevaNota }]);
        setNuevaNota('');
    };

    function Boton({ texto, esBotonClick, funcionClick }) {

        return (
            <button className={esBotonClick ? "boton-click" : "boton-reinciar"}
                onClick={funcionClick}>
                {texto}
            </button>
        )
    }
    

    const eliminarNota = (id) => {
        setNotas((prevNotas) => prevNotas.filter((nota) => nota.id !== id));
    };

    const editarNota = (id, nuevoTexto) => {
        setNotas((prevNotas) =>
            prevNotas.map((nota) => (nota.id === id ? { ...nota, texto: nuevoTexto } : nota))
        );
    };

    return (
        <div className='contenedor-principal'>
            <h1 className='h1'>Mis metas</h1>
           <div className='agregado'>
           <input
                className="input"
                type="text"
                value={nuevaNota}
                onChange={(e) => setNuevaNota(e.target.value)}
            />
            <button className='boton' onClick={agregarNota}>Agregar</button>

           </div>
            <div className='contadores'>
                <div className='contador-c'><h2>Complidos: </h2> </div>
                <div className='contador-p'><h2>Pendientes:</h2> </div>

            </div>
            {notas.map((nota) => (
                <Nota
                    key={nota.id}
                    nota={nota}
                    onDelete={eliminarNota}
                    onEdit={editarNota}
                />

            ))}


        </div>
    );
}

export default Contenido;