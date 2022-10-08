import React, { useState } from 'react';
import Box from './box';
import Busqueda from './busqueda';
import '../assets/css/contenedor.css'

const Contenedor = () => {

    const [local, setlocal] = useState([]);
    const [load, setload] = useState(false);
    const [error, seterror] = useState(false);
    const [forest, setforest] = useState([]);
    const [flag, setflag] = useState(true);


    let localizacion = async function (dat) {
        try {
            let hola = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${dat}&appid=0d1df5d87ad48229806a695db6d3c18e&lang=es`)
            let response = await hola.json();
            let result = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${dat}&appid=0d1df5d87ad48229806a695db6d3c18e&lang=es`)
            let forecast = await result.json();

            setflag(false)
            if (response.cod === '400' || response.cod === '404') {
                seterror(true)
                setload(false);
            } else {
                let elementos = [];
                let bandera = 0;
                forecast.list.filter((dato) => {
                    if (bandera < 3) {
                        elementos.push(dato)
                        bandera++;
                    }
                    return 0;
                })
                setload(false);
                setlocal(response)
                setforest(elementos)
                seterror(false)
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='contenedor'>
            <Busqueda localization={localizacion} loading={setload} />
            {
                flag === true ?
                    <div>
                    </div>
                    :
                    load === true ? (
                        <div className='spinner'></div>
                    )
                        : (
                            error === true ?
                                <div className='Error'>
                                    <p>Pais no encontrado</p>
                                </div>
                                :
                                <Box datos={local} horarios={forest} />
                        )
            }
        </div>
    );
}



export default Contenedor;
