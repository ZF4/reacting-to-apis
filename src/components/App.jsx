import React, { Component, Fragment } from 'react'
import 'es6-promise';
// import Cards from './Cards'
import FilmMap from './Map'
import PeopleMap from './PeopleMap'
import './styles.css'
// import styles from "./styles.css"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films: [],
            people: [],
            filmButton: false,
            peopleButton: false,
        }
    }
    handleFilmButton = () => {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(data => data.json())
            .then(data => this.setState({ films: data, filmButton: true, peopleButton: false }))
            .catch(err => console.log(err));
    }

    handlePeopleButton = () => {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(data => data.json())
            .then(data => this.setState({ people: data, peopleButton: true, filmButton: false }))
            .catch(err => console.log(err));
    }

    render() {
        if (this.state.filmButton) {
            return (
                <Fragment>
                    <div className="cards">
                    <img src="https://i.pinimg.com/originals/03/51/71/0351711fe834c3a96656f65b4c54b2b2.jpg" width="400" height="340" alt="" />
                    <button className="mx-1 btn btn-dark" onClick={this.handleFilmButton}>Films</button>
                    <button className="mx-1 btn btn-dark" onClick={this.handlePeopleButton}>People</button>
                    <div className="container">
                    <FilmMap films={this.state.films} />
                    </div>
                    </div>
                </Fragment>
            )
        } else if (this.state.peopleButton) {
            return (
                <Fragment>
                    <div className="cards">
                    <img src="https://i.pinimg.com/originals/03/51/71/0351711fe834c3a96656f65b4c54b2b2.jpg" width="400" height="340" alt="" />
                    <button className="mx-1 btn btn-dark" onClick={this.handleFilmButton}>Films</button>
                    <button className="mx-1 btn btn-dark" onClick={this.handlePeopleButton}>People</button>
                    <div className="container">
                    <PeopleMap people={this.state.people} />
                    </div>
                    </div>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <div className="cards">
                    <img src="https://i.pinimg.com/originals/03/51/71/0351711fe834c3a96656f65b4c54b2b2.jpg" width="400" height="340" alt="" />
                    <div className="container">
                    <button className="mx-1 btn btn-dark" onClick={this.handleFilmButton}>Films</button>
                    <button className="mx-1 btn btn-dark" onClick={this.handlePeopleButton}>People</button>
                    </div>
                    </div>
                </Fragment>
            )
        }
    }
}
export default App