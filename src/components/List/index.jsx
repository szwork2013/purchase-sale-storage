import React, { Component } from 'react'
import styles from './index.scss'

class List extends Component {
    render() {
        return (
            <div className={styles.root}>
                {this.props.children}
            </div>
        );
    }
}

export default List;