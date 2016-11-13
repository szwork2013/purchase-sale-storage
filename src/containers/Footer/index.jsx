import React, { Component } from 'react';
import styles from './index.scss'

class Footer extends Component {
    render() {
        const { children, className } = this.props;
        return (
            <div className={`${styles.root} ${className}`}>
                {children}
            </div>
        );
    }
}

export default Footer;