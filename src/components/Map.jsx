import React from 'react';
import Cards from './Cards';
import uuid from 'react-uuid';


let FilmMap = (props) => {
    return props.films.map((pizza,key) => <Cards oneFilm={pizza} key={uuid()}/>)
}

export default FilmMap;