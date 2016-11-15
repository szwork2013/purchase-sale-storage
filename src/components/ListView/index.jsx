import React, { Component } from 'react'
import styles from './index.scss'

import Item from 'components'
class List extends Component {
    render() {
        const {children, title} = this.props
        return (
            <div className={styles.root}>
                {title ? <h2 className={styles.title}>{title}</h2> : null}
                {children}
            </div>
        );
    }
}
export default List;