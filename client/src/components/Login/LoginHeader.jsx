
import React from 'react';
import { Layout, Menu } from 'antd';



export default (props) => {


    const { osDocument, presentFullScreen } = props;
    const { Header } = Layout;


    return (
        <Header className="header documentedit-header">
            <img src="/logoicon.png" alt="" className="document-logo" />
            <Menu mode="horizontal" style={{ backgroundColor: "#eee", marginLeft: 20 }} >

            </Menu>
          

           

        </Header>
    )
};