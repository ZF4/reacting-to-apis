import React, {Fragment } from 'react';
import './styles.css'
// import App from './App';


let Cards = props => {
        return (
            <Fragment>
                <div className="card bg-secondary mb-3 cards">
                    <div className="card-body">
                        <h5 className="card-title text">{props.onePerson.name}</h5>
                        <p className="card-text text">{props.onePerson.gender}</p>
                        <p className="card-text text">{props.onePerson.age}</p>
                        <a href={props.onePerson.url}>
                            <button className="btn btn-dark">Click for raw data</button>
                        </a>
                    </div>
                </div>
            </Fragment>
        )
    }



export default Cards;
