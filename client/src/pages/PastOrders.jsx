/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Layout, Table } from 'antd';
import "antd/dist/antd.css";
import './Login.css'
import { getPastOrders } from 'actions/pastOrders';
import GlobalHeader from 'components/GlobalHeader';



const PastOrders = (props) => {

    const location = useLocation();
    const dispatch = useDispatch();

    const [pastOrdersData, setPastOrdersData] = useState([]);

    const authData = useSelector((state) => state.auth);
    const pastOrders = useSelector((state) => state.pastOrders);

    useEffect(() => {
        dispatch(getPastOrders(authData));
    }, [dispatch]);

    useEffect(() => {

        const data = [];

        if (pastOrders.length > 0) {

            let i = 1;
            for (const order of pastOrders) {

                const restData = {
                    key: i,
                    address: order.address.addressLine1,
                    date: order.orderDate,
                    name: order.restaurant.name,
                    total: order.total
                }

                data.push(restData);
                i++;
            }
        }

        setPastOrdersData(data);
    }, [pastOrders])



    const { Header, Content, Footer } = Layout;

    const columns = [
        {
            title: 'Address',
            dataIndex: 'address',
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ['descend'],
        }, {
            title: 'Date',
            dataIndex: 'date',
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Restaurant',
            dataIndex: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Total Amount',
            dataIndex: 'total',
            sorter: (a, b) => a.total - b.total,
            sortDirections: ['ascend', 'descend'],
        },
    ];

    return (
        <Layout className="layout" style={{ height: '100vh' }}>
            <GlobalHeader />
            <Content
                style={{
                    margin: '20px',
                    marginBottom: 0,
                    padding: '30px',
                    paddingBottom: 0,
                    backgroundColor: 'white',
                }}
            >
                <div style={{ fontSize: '2em', fontWeight: 600, color: 'rgb(19, 19, 211)', marginLeft: 10 }}>
                    Past Orders
                </div>
                <Table columns={columns} dataSource={pastOrdersData} loading={pastOrders.length > 0 ? false : true} />
            </Content>
        </Layout>
    )
};

export default PastOrders;