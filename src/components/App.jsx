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
            .then(response => response.json())
            .then(data => this.setState({ films: data, filmButton: !this.state.filmButton }))
            .catch(err => console.log(err));
    }

    handlePeopleButton = () => {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(response => response.json())
            .then(data => this.setState({ people: data, peopleButton: !this.state.peopleButton }))
            .catch(err => console.log(err));
    }

render() {
    if (this.state.isLoaded === false) {
        return (
            <Fragment>
                <img src="https://i.pinimg.com/originals/03/51/71/0351711fe834c3a96656f65b4c54b2b2.jpg" width="400" height="340" alt="" />
                <button onClick={this.handleFilmButton}>films</button>
                <button onClick={this.handlePeopleButton}>people</button>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <img src="https://i.pinimg.com/originals/03/51/71/0351711fe834c3a96656f65b4c54b2b2.jpg" width="400" height="340" alt="" />
                <button onClick={this.handleFilmButton}>films</button>
                <button onClick={this.handlePeopleButton}>people</button>
                <br></br>
                <br></br>
                <FilmMap films={this.state.films} />
                <PeopleMap people={this.state.people}/>
            </Fragment>
        )
    }
}
}
export default App
