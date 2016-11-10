import React, { Component } from 'react'
import styles from './index.scss'

import Bar from './Bar'

export default class TabBar extends Component {
    render() {
        return (
            <div className={styles.root}>
                <Bar
                    pathUrl="/"
                    icoName={"i-zhuye42un"}
                    active={styles.navOne}
                    linkName="首页"
                    onlyActiveOnIndex
                    />
                <Bar
                    pathUrl="/order"
                    icoName={"i-youhui42un"}
                    active={styles.navThree}
                    linkName="订单"
                    />

                <Bar
                    pathUrl="/user"
                    icoName={"i-wode42un"}
                    active={styles.navFive}
                    linkName="我的"
                    />
            </div>
        )
    }
} 