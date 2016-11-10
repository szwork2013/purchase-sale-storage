import React, { Component } from 'react';
import styles from './index.scss'

class Footer extends Component {
    render() {
        const { children } = this.props;
        return (
            <div>
                {children}
            </div>
        );
    }
}

export default Footer;