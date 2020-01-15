import React from 'react'
import styles from './Main.module.css'

export default props => {
    const classes = [styles["weather-forecast"]]

    if(props.isActiveMenu){
        classes.push('menu_active')
    }

    return(
        <main className={classes.join(' ')}>
            {props.children}
        </main>
    )
}