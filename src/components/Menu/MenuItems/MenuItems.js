import React from 'react'
import styles from './MenuItems.module.css'
import {connect} from "react-redux"
import PropTypes from 'prop-types'
import Loader from '../../../components/Loader/Loader'
import {activePlace} from "../../../redux/actions/appActions";

class MenuItems extends React.Component{

    changeInputHandler = value => {
        const items = document.querySelectorAll('.MenuItems_city__2BCYj')

        items.forEach( (city) => {
            if(~city.innerText.toLowerCase().indexOf(value.toLowerCase())){
                city.style.display = 'block'
            }
            else{
                city.style.display = 'none'
            }
        })

        return value
    }

    renderCities = () => {
        return this.props.cities.map( (city, index) => {
            return(
                <div
                    key={city.name + index}
                    className={styles.city}
                    onClick={ () => {
                        this.props.onClick()
                        this.props.setActivePlace(index)
                    }}
                >
                    <span>{city.name}</span>
                </div>
            )
        })
    }

    render(){
        return(

            this.props.cities.length > 0 ?

                <React.Fragment>
                    <h1 className={styles.cities_h1}>Cities list <small>({this.props.cities.length})</small></h1>

                    <form
                        onSubmit={e => {e.preventDefault()}}
                    >
                        <input
                            type="search"
                            onChange={e => this.changeInputHandler(e.target.value)}
                            className={styles["search-input"]}
                            placeholder={'Search city by name'}
                        />
                    </form>


                    {this.renderCities()}
                </React.Fragment>

            :

                <Loader/>
        )
    }
}

function mapStateToProps(state) {
    return{
        activePlace : state.appReducer.activePlace,
        cities : state.appReducer.cities
    }
}

function mapDispatchToProps(dispatch) {
    return{
        setActivePlace : id => dispatch(activePlace(id))
    }
}

MenuItems.propTypes = {
    activePlace : PropTypes.number,
    cities: PropTypes.array.isRequired,
    setActivePlace : PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItems)