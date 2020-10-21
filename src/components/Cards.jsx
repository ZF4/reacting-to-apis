import React, {Fragment } from 'react';
// import App from './App';


let Cards = props => {
        return (
            <Fragment>
                <div className="card bg-light mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{props.oneCard.title}</h5>
                        <p className="card-text">{props.oneCard.description}</p>
                    </div>
                </div>
            </Fragment>
        )
    }



export default Cards;
