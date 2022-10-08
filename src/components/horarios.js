import React from 'react';
import '../assets/css/horarios.css'

const Horarios = (props) => {

    let linkeado = "http://openweathermap.org/img/w/" + props.dato.weather[0].icon + ".png";

    let fecha = props.dato.dt_txt.substring(8, 10) + '/' + props.dato.dt_txt.substring(5, 7) + '/' + props.dato.dt_txt.substring(0, 4);
    let schedule = props.dato.dt_txt.substring(11, 13);
    return (
        <div className='caja_horarios'>
            <p className='fecha_horarios'>{fecha} {schedule}h</p>
            <div className='tipo_horarios'>
                <p>{props.dato.weather[0].description}</p>
                <img src={linkeado} alt="" />
            </div>
            <p className='grado_horarios'>{(props.dato.main.temp -273).toFixed(1)}°C</p>
        </div>
    );
}

export default Horarios;
