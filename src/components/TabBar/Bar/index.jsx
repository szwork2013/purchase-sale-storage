import React, { Component } from 'react'
import styles from './index.scss'

import { Link } from 'react-router'

import { Icon } from '../../'

class Bar extends Component {
    render() {
        const { pathUrl, active, icoName, linkName, children,...rest } = this.props;
        return (
            <Link
                {...rest}
                to={pathUrl}
                activeClassName={active}
                className={styles.root}
                >
                <Icon icoName={icoName} />
                {linkName ? <span className={styles.text}>{linkName || children}</span> : null}
            </Link>
        )
    }
}

export default Bar;