import React, { Component } from 'react'
import styles from './index.scss'

export default class Header extends Component {
    render() {
        const {children, className} = this.props;
        return (
            <div className={`${styles.root} ${className}`}>
                {children}
            </div>
        )
    }
} 