import React, { Component } from "react";
import { Icon, notification} from 'antd';
const data = {
    productList: [
        { key: '0', text: "热卖新品" },
        { key: '1', text: "最近上架" },
        { key: '2', text: "特价优惠" },
    ],
    productDetails: [
        { key: '0', imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', title: '百搭小裙',
         text: '很适合女生的美丽裙子',price:'100' },
         { key: '1', imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', title: '百搭小裙',
         text: '很适合女生的美丽裙子',price:'100' }
    ]

}
const openNotificationWithIcon = (type) => {
    notification[type]({
      message: '已成功加入购物车',
      duration: 1,
    });
  };
class ProductList extends Component {
    constructor() {
        super();
        this.state = {
            listKey: '0'
        }
        this.getProduct = this.getProduct.bind(this);
        this.addShopBus = this.addShopBus.bind(this);
    }
    getProduct(key) {
        this.setState({
            listKey: key
        })
    }
    addShopBus(title){
        console.log(title)
    }
    render() {
        return (
            <div className='ProductList'>
                <div className='list'>
                    {data.productList.map((item, index) => (
                        <div key={item.key} className='list-item'
                            onClick={() => this.getProduct(item.key)}
                            style={this.state.listKey === item.key ? { backgroundColor: 'white', borderLeft: '1px solid #EE6A50' } : { backgroundColor: '#F8F8FF' }}>
                            {item.text}</div>)
                    )}
                </div>
                <div className='details'>
                    {data.productDetails.map((item) => (
                        <div key={item.key} className='details-item'>
                            <img src={item.imgUrl}></img>
                            <div className='text'>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                                <div className='text-bottom'>
                                <span style={{color:'blue'}}>￥{item.price}</span>
                                <div onClick={()=>{this.addShopBus(item.title);openNotificationWithIcon('success');}}><Icon type="shopping-cart" /></div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        )
    }
}
export default ProductList 
