import React, { Component } from "react";
import { Icon } from 'antd';
import { NavLink } from 'react-router-dom'

class Nav extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className='Nav'>
                <div>
                    
                        <NavLink activeClassName="selected" to="/" exact>
                        <Icon type="home" theme="filled" />
                        <p>首页</p>
                        </NavLink>
                    
                    
                        <NavLink activeClassName="selected" to='/ProductList'>
                        <Icon type="appstore" theme="filled" />
                        <p>菜单</p>
                        </NavLink>
                    
                        <NavLink activeClassName="selected" to='/11'>
                       <Icon type="shopping" theme="filled" />
                        <p>购物车</p>
                        </NavLink>
                 
                  
                        <NavLink activeClassName="selected" to='/33'>
                        <Icon type="smile" theme="filled" />
                        <p>我</p>
                        </NavLink>
                </div>
            </div>
        )
    }


}
export default Nav
