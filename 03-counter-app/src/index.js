import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterApp from './CounterApp';
import PrimeraApp from './PrimeraApp';


// ReactDOM.render(
//     <PrimeraApp saludo='hola mundo' />,
//     document.getElementById('root')
// );

ReactDOM.render(
    <PrimeraApp saludo='Goku' />,
    document.querySelector('#root')
)