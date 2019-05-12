import React, { Component } from "react";
import { Icon, Row, Col, Typography, Card, Button } from 'antd';
const { Meta } = Card;
const { Title, Paragraph, Text } = Typography;
const data = {
    shopTitle: '我的小店',
    particulars: {
        imgurl:'https://img.zcool.cn/community/0153a1554583eb0000019ae99927de.jpg@2o.jpg',
        wechatID: '213131313',
        phone: '1292919',
        text: '这是一家非常就好的微商店铺'
    },
    infrom: '今日口红半价',
    recommend: {
        imgurl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        title: '女神短裙',
        description: '好看美丽大气惹人喜爱',
        shopValue: '100元'
    }
}
class Home extends Component {
    constructor() {
        super();
        this.state = {
            infrom: '今日暂无活动!'
        }
    }
    render() {
        return (
            <div className='home'>
                <div className='title'>
                    <Icon type="shop" theme="twoTone" />
                    <span>{data.shopTitle}</span>
                </div>
                <div className='particulars'>
                    <Row>
                        <Col span={12} className='particulars-logo'>
                            <div>
                                <img src={data.particulars.imgurl}></img>
                            </div>
                        </Col>
                        <Col span={12} className='particulars-text'>
                            <p><b>店铺简介：</b><span style={{fontWeight:'400'}}>{data.particulars.text}</span></p>
                            <p><b>微信号：</b><a href="tel:10086">{data.particulars.wechatID}</a></p>
                            <p><b>联系电话：</b><a href="tel:10086">{data.particulars.phone}</a></p>
                        </Col>
                    </Row>
                </div>
                <hr></hr>
                <div className='inform'>
                    <Icon type="notification" theme="twoTone" />
                    <span>活动通知：</span>
                    <p style={{color:'#EE3B3B'}}>{this.state.infrom}</p>
                </div>
                <hr></hr>
                <div className='inform'>
                    <Icon type="fire" theme="twoTone" twoToneColor="#EE3B3B" />
                    <span>店长推荐：</span>
                    <Card
                        hoverable
                        style={{ width: '90%', margin: '25px auto' }}
                        cover={<img alt="example" src={data.recommend.imgurl} />}
                    >
                        <Meta
                            title={data.recommend.title}
                            description={data.recommend.description}
                        />
                        <h4 style={{marginTop:'10px',fontSize:'14px',color:'red'}}>售价：{data.recommend.shopValue}</h4>
                        <Button style={{ marginTop: '20px', backgroundColor: '#FF4040',color:'white' }} size={"large"}>
                        <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
                        立即购买</Button>
                    </Card>
                </div>
            </div>
        )
    }
}
export default Home
