import React from 'react';
import '../assets/css/box.css'
import Horarios from './horarios';

const Box = (props) => {

    let today = new Date();
    let date = today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear();


    let linkeado = "http://openweathermap.org/img/w/" + props.datos.weather[0].icon + ".png";

    return (
        <div className='box'>
            <section className='section1'>
                <article className='ciudad'>
                    <h2><i className="fa-solid fa-location-dot"></i> {props.datos.name}</h2>
                    <h4>{date}</h4>
                </article>
                <article className='temp'>
                    <h1 className="grados">{(props.datos.main.temp - 273).toFixed(1)}°C</h1>
                    <div className='estado'>
                        <img src={linkeado} alt="" />
                        <p>{props.datos.weather[0].description}</p>
                    </div>
                </article>
            </section>
            <section className='section2'>
                <article className='datos'>
                    <h5>Temperatura maxima: {(props.datos.main.temp_max - 273).toFixed(1)}°C</h5>
                    <h5>Temperatura Minima: {(props.datos.main.temp_min - 273).toFixed(1)}°C</h5>
                    <h5>Sensacion Termica: {(props.datos.main.feels_like - 273).toFixed(1)}°C</h5>
                    <h5>Humedad: {props.datos.main.humidity}%</h5>
                    <h5>Velocidad de viento: {props.datos.wind.speed}m/s</h5>
                </article>
                <article className='horarios'>
                    {props.horarios.map((dato) => {
                        return <Horarios dato={dato} />
                    })}
                </article>
            </section>
        </div>
    );
}

export default Box;
