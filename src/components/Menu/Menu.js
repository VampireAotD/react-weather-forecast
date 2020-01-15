import React from 'react'
import styles from './Menu.module.css'
import MenuItems from './MenuItems/MenuItems'
import PropTypes from 'prop-types'

class Menu extends React.Component{
    render(){
        const cities = [styles["cities-list"]]

        if(this.props.isActiveMenu){
            cities.push(styles.active_menu)
        }

        return(

            this.props.isActiveMenu ?

            <div
                className={cities.join(' ')}
            >
                <div className={styles["menu-btn"]}>
                    <button
                        className={styles["close-menu-btn"]}
                        onClick={ () => this.props.onClick()}
                    >
                        <span></span>
                        <span></span>
                    </button>
                </div>

                <nav>
                    <MenuItems
                        onClick={this.props.onClick}
                    />
                </nav>

            </div>

            :

            null
        )
    }
}

Menu.propTypes = {
    isActiveMenu : PropTypes.bool.isRequired,
    onClick : PropTypes.func.isRequired
}

export default Menu