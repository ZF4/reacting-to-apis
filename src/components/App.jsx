import React, { Component, Fragment } from 'react'
import 'es6-promise';
// import Cards from './Cards'
import Map from './Map'
// import styles from "./styles.css"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films: [],
            isLoaded: false,
        }
    }
    handleButton =() => {
        this.setState({isLoaded: !this.state.isLoaded })
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(response => response.json())
            .then(data => this.setState({ films: data }))
            .catch(err => console.log(err));
    }
    render() {
        if (this.state.isLoaded === false) {
            return (
                <Fragment>
                    <img src="https://i.pinimg.com/originals/03/51/71/0351711fe834c3a96656f65b4c54b2b2.jpg" width="400" height="340" alt="" />
                    <button onClick={this.handleButton} >films</button>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <img src="https://i.pinimg.com/originals/03/51/71/0351711fe834c3a96656f65b4c54b2b2.jpg" width="400" height="340" alt="" />
                    <button onClick={this.handleButton} >films</button>
                    <Map films={this.state.films} />
                </Fragment>
            )
        }
    }
}

export default App
