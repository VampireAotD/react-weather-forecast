import React from 'react'
import styles from './Loader.module.css'

export default () => (
    <div className={styles.wrapper}>
        <div className={styles["lds-ring"]}>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    </div>
)