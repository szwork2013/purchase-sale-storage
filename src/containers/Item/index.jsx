import React, { Component } from 'react'
import styles from './index.scss'

class Item extends Component {
    render() {
        const {children} = this.props
        return (
            <div className={style.root}>
                {children}
            </div>
        );
    }
}

export default Item;