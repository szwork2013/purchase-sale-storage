import React, {Component} from 'react'
import styles from './index.scss'
import {Icon} from 'components'
class Stepper extends Component {
    static defaultProps = {
        value: 0,        // 当前值
        min: 0,          // 最小值
        max: 999,        //最大值
        step: 1          //步进数
    }

    constructor(props) {
        super(props)
        this.state = {
            num: this.props.value
        }
        this.add = this.add.bind(this)
        this.sub = this.sub.bind(this)
    }

    add() {
        this.state.num < this.props.max ? this.setState({num: this.state.num + this.props.step}) : null
    }

    sub() {
        this.state.num > this.props.min ? this.setState({num: this.state.num - this.props.step}) : null
    }

    render() {
        const {sub, add, props, state} = this
        return (
            <div className={styles.root}>
                <div className={styles.sub} onClick={sub}>
                    <Icon icoName="minus"/>
                </div>
                <div className={styles['input-num']}><span>{state.num}</span></div>
                <div className={styles.add} onClick={add}>
                    <Icon icoName="add"/>
                </div>
            </div>
        )
    }
}

export default Stepper