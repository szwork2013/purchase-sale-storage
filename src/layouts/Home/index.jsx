import React, { Component } from 'react'

import { Header, TabBar, ListView, Item } from 'components'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goodsList: [
                { title: 'test', price: 1, imgUrl: 'src/public/images/404.jpg' },
                { title: 'test', price: 2, imgUrl: 'src/public/images/avatar.jpg' },
                { title: 'test', price: 3, imgUrl: 'src/public/images/avatar.jpg' }
            ]
        }
    }
    render() {
        const {goodsList} = this.state;
        return (
            <div>
                <ListView title="最近热销">
                    {
                        goodsList.map((item, index) => {
                            return (
                                <Item
                                    key={index}
                                    url={`product/view?product_id=${index}`}
                                    imgUrl={item.imgUrl}
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