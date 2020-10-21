import React from 'react';
import Cards from './Cards';
import uuid from 'react-uuid';


let Map = (props) => {
    return props.films.map((pizza,key) => <Cards oneCard={pizza} key={uuid()}/>)
}


export default Map;