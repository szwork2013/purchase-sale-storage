import React, { Component } from 'react'
import { Link } from 'react-router'
import { NavBar, TabBar, Icon } from 'components'
import Util from '../../public/js/Util.js'
import styles from './index.scss'

class Cart extends Component {
    constructor() {
        super()
        this.state = {
            data: {

            }
        }
    }
    render() {
        return (
            <div>
                {console.log(Util.isEmptyObject(1))}
                <NavBar title="购物车" />
                <Emp />
                <TabBar />

            </div>
        );
    }
}

class Emp extends Component {
    render() {
        return (
            <div className={styles.emp}>
                <Icon icoName="tishi" className={styles.icon} />
                <Link to="/">
                    返回首页
                </Link>
                <Link>
                    全部商品
                </Link>
            </div>
        )
    }
}

export default Cart;