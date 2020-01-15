import React from 'react';
import City from './components/City/City'
import {Switch, Redirect} from 'react-router-dom'
import Header from './containers/Header/Header'
import Main from './containers/Main/Main'
import Menu from './components/Menu/Menu'
import Footer from './containers/Footer/Footer'
import './App.css';
import {connect} from "react-redux"
import PropTypes from 'prop-types'

class App extends React.Component {

    state = {
        activeMenu : false
    }

    bodyTransform = () => {
        const body = document.querySelector('body')
        const cities = document.querySelector('.Main_weather-forecast__28uo0')

        if(cities){
            if(!cities.classList.contains('menu_active')){
                body.classList.add('no-scroll')
            }
            else{
                body.classList.remove('no-scroll')
            }
        }

        return true
    }

    changeState = () => {
        this.setState({
            ...this.state,
            activeMenu : false
        })
    }

    render() {

        const menu_styles = ['cities-list']

        if(this.state.activeMenu){
            menu_styles.push('active_menu')
        }

        this.bodyTransform()

        return (
            <div className="App">
                <Header
                    onClick={() => this.setState({ ...this.state, activeMenu : true})}
                />

                <Main
                    isActiveMenu={this.state.activeMenu}
                >
                    {this.state.activeMenu ?
                        <Menu
                            isActiveMenu={this.state.activeMenu}
                            onClick={this.changeState}
                        />
                        :
                        null
                    }

                    <City
                        key={this.props.activePlace}
                        id={this.props.cities[this.props.activePlace].id}
                    />
                </Main>

                <Footer/>

                <Switch>
                    <Redirect to={'/'}/>
                </Switch>
            </div>
        )
    }
}

function mapStateFromProps(state) {
    return{
        cities : state.appReducer.cities,
        activePlace : state.appReducer.activePlace
    }
}

App.propTypes = {
    cities: PropTypes.array.isRequired,
    activePlace : PropTypes.number
}

export default connect(mapStateFromProps)(App);
