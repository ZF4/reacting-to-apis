import React from 'react';
import PeopleCard from './PeopleCard';
import uuid from 'react-uuid';



let PeopleMap = (props) => {
    return props.people.map(pizza => <PeopleCard onePerson={pizza} key={uuid()}/>)
}

export default PeopleMap;