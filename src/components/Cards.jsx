import React, {Fragment } from 'react';
import './styles.css'
// import App from './App';


let Cards = props => {
        return (
            <Fragment>
                <div className="card bg-light mb-3 cards">
                    <div className="card-body">
                        <h5 className="card-title">{props.oneFilm.title}</h5>
                        <p className="card-text">{props.oneFilm.description}</p>
                    </div>
                </div>
            </Fragment>
        )
    }



export default Cards;
