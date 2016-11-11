import React, { Component } from 'react'
import styles from './index.scss'

export default class Header extends Component {
    render() {
        const {children} = this.props;
        return (
            <div className={styles.root}>
                {children}
            </div>
        )
    }
} 