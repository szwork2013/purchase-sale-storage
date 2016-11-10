import React, { Component } from 'react'

import { Header, TabBar, ListView, Item } from '../../components'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goodsList: [
                { title: 'test', price: 1, img: 'src/public/images/avatar.jpg' },
                { title: 'test', price: 2, img: 'src/public/images/avatar.jpg' },
                { title: 'test', price: 3, img: 'src/public/images/avatar.jpg' }
            ]
        }
    }
    render() {
        const {goodsList} = this.state;
        return (
            <div>
                <ListView>
                    {
                        goodsList.map((item, index) => {
                            return (
                                <Item
                                    key={index}
                                    img={item.img}
                                    title={item.title}
                                    price={item.price}
                                    />
                            )
                        })
                    }
                </ListView>
                <TabBar />
            </div>
        )
    }
}

export default Home