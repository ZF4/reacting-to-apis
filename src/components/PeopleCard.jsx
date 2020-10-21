import React, {Fragment } from 'react';
import './styles.css'
// import App from './App';


let Cards = props => {
        return (
            <Fragment>
                <div className="card bg-light mb-3 cards">
                    <div className="card-body">
                        <h5 className="card-title">{props.onePerson.name}</h5>
                        <p className="card-text">{props.onePerson.gender}</p>
                        <p className="card-text">{props.onePerson.age}</p>
                    </div>
                </div>
            </Fragment>
        )
    }



export default Cards;
