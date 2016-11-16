import React, { Component } from 'react'
import styles from './index.scss'

class Icon extends Component {
    render() {
        const {icoName, className} = this.props;
        return (
            <i className={`${styles.iconfont} icon-${icoName} ${className?className:""}`} />
        )
    }
}

export default Icon;
