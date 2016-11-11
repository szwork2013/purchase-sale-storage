import React, { Component } from 'react'
import styles from './index.scss'

class Icon extends Component {
    render() {
        const {icoName} = this.props;
        return (
            <i className={`iconfont icon-${icoName} `+styles.root} />
        )
    }
}

export default Icon;