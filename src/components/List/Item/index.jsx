import React, { Component } from 'react';
import styles from './index.scss'
class Item extends Component {
    render() {
        return (
            <div className={styles.root}>
                <div className={styles.left}>
                </div>
                <div className={styles.right}>
                </div>
            </div>
        );
    }
}

export default Item;