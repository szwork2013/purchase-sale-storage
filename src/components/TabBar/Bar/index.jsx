import React, { Component } from 'react'
import styles from './index.scss'

import { Link } from 'react-router'

class Bar extends Component {
    render() {
        const { pathUrl, active, icoName, linkName, children } = this.props;
        return (
            <Link
                to={pathUrl}
                activeClassName={active}
                className={styles.root}
                >
                <i className={icoName + ' ' + styles.ico} />
                <span className={styles.text}>{linkName || children}</span>
            </Link>
        )
    }
}

export default Bar;