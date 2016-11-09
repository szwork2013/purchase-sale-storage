import React, { Component } from 'react'
import styles from './index.scss'

export default class Footer extends Component {
    render() {
        return (
            <div className={styles.root}>
                <div className={styles.bar}>
                tab1
                </div>
                <div className={styles.bar}>
                tab2
                </div>
                <div className={styles.bar}>
                tab3
                </div>
            </div>
        )
    }
} 