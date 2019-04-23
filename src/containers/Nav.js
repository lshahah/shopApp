import React, { Component } from "react";
import {  Icon } from 'antd';
class Nav extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className='Nav'>
                <ul>
                    <li>
                        <Icon type="home" />
                        <p>首页</p>
                    </li>
                    <li><Icon type="appstore" /></li>
                    <li><Icon type="shopping-cart" /></li>
                    <li><Icon type="user" /></li>
                </ul>
            </div>
        )
    }


}
export default Nav
