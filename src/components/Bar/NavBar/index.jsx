import React, { Component } from 'react';
import styles from './index.scss'

import { Icon } from '../../'

class NavBar extends Component {
    render() {
        const {title} = this.props
        return (
            <div className={styles.root}>
                <div
                    onClick={() => history.go(-1)}
                    className={styles.left}
                    >
                    <Icon icoName={'xiangzuojiantou'} />
                </div>
                <div className={styles.title}>
                    <h1>{title}</h1>
                </div>
                <div className={styles.right}></div>
            </div>
        );
    }
}

export default NavBar;