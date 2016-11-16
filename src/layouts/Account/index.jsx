import React, {Component} from 'react'

import {TabBar} from 'components'
import styles from './index.scss'
class Account extends Component {
    render() {
        return (
            <div>
                <User />
                <TabBar />
            </div>
        );
    }
}

class User extends Component {
    render() {
        return (
            <div>
                <div className={styles.user}>
                    <h2>Name</h2>
                    <img src="/src/public/images/avatar.jpg" alt=""/>
                </div>
            </div>
        )
    }
}

export default Account;