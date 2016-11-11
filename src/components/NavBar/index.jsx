import React, { Component } from 'react';
import styles from './index.scss'

import { Icon } from '../'

class NavBar extends Component {
    render() {
        return (
            <div className={styles.root}>
                <Icon icoName={'xiangzuojiantou'} />
                <h1 onClick={(e) => console.log(e)} className={styles.title}>
                    标题
                </h1>
            </div>
        );
    }
}

export default NavBar;