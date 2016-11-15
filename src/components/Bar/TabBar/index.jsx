import React, { Component } from 'react'
import styles from './index.scss'

import { Footer } from 'containers'

import Tab from './Tab'

export default class TabBar extends Component {
    render() {
        return (
            <Footer className={styles.root} rest>
                <Tab
                    pathUrl="/"
                    icoName={"shouye"}
                    active={styles.active}
                    linkName="首页"
                    onlyActiveOnIndex
                    />
                <Tab
                    pathUrl="/cart"
                    icoName={"gouwuche"}
                    active={styles.active}
                    linkName="购物车"
                    />
                <Tab
                    pathUrl="/order"
                    icoName={"wodedingdan"}
                    active={styles.active}
                    linkName="订单"
                    />

                <Tab
                    pathUrl="/account"
                    icoName={"wodejuhuasuan"}
                    active={styles.active}
                    linkName="我的"
                    />
            </Footer>
        )
    }
} 