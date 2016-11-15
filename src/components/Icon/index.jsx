import React, { Component } from 'react'
import styles from './index.scss'

class Icon extends Component {
    render() {
        const {icoName, className} = this.props;
        return (
            <i className={`iconfont icon-${icoName} ${className}`} />
        )
    }
}

export default Icon;
