import React, { Component } from 'react'
import { Header, TabBar, ListView, Item } from 'components'

import product from '../../../mock/product'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goodsList: Product.data.list
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
                                    imgUrl={item.img_url}
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