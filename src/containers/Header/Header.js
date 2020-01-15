import React from 'react'
import styles from './Header.module.css'

export default props => (
    <header className={styles.header}>
        <button
            className={styles.menu_button}
            onClick={ () => props.onClick()}>
            <span></span>
            <span></span>
            <span></span>
        </button>
        <h1>React weather forecast app</h1>
    </header>
)