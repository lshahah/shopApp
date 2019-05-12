import React, { Component } from "react";
import Home from './Home'
import ProductList from './ProductList '
import { Switch, Route } from 'react-router-dom'
import { BackTop } from 'antd';
class Main extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className='main'>
            <BackTop visibilityHeight={10}>
                        <div className="ant-back-top-inner">UP</div>
            </BackTop>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/ProductList" component={ProductList} />
                </Switch>
            </div>
        )
    }
}
export default Main
