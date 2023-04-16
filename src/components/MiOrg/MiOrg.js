import React, { useState } from 'react';
import './MiOrg.css';

export const MiOrg = ({setMostrarFormulario}) => {
    // Estado - hooks
    // useState
    //const [ nombre, useNombre ] = useState(''); 

    //const [mostrar, setMostrar] = useState(true);

    const manejarClick = () => {
        setMostrarFormulario((mostrar) => !mostrar);
    }

    return (
        <>
            <section className="orgSection">
                <h3 className='title'>Mi organización</h3>
                <img src='/img/add.png' alt="add" onClick={manejarClick} />
            </section>
        </>
    )
}
