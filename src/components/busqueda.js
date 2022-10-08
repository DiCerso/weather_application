import React from 'react';
import '../assets/css/busqueda.css'
import {useRef} from 'react'

const Busqueda = (props) => {

    let dato = useRef()

    let subir = async (e) =>{
        e.preventDefault()
        props.localization(dato.current.value);
        props.loading(true)
    }

    return (
        <form className='form' onSubmit={subir}>
            <input ref={dato} type="text" className='input' placeholder='Pais'/>
            <button type='submit' className='buscar' >Buscar</button>
        </form>
    );
}

export default Busqueda;
