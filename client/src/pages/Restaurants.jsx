/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Layout, Table, Tag, Badge } from 'antd';
import "antd/dist/antd.css";
import './Login.css'
import { getRestaurants } from 'actions/restaurants';
import GlobalHeader from 'components/GlobalHeader';


const PastOrders = (props) => {

    const location = useLocation();
    const dispatch = useDispatch();

    const [restaurantData, setRestaurantData] = useState([]);

    const authData = useSelector((state) => state.auth);
    const restaurants = useSelector((state) => state.restaurants);

    useEffect(() => {
        dispatch(getRestaurants(authData.token));
    }, [dispatch]);

    useEffect(() => {

        const data = [];

        if (restaurants.length > 0) {
            let i = 1;
            for (const restaurant of restaurants) {

                let typeNameArr = [];
                for (const type of restaurant.types) {
                    typeNameArr.push(type.name);
                }

                const restData = {
                    key: i,
                    name: restaurant.name,
                    status: restaurant.open ? "Open" : "Closed",
                    cuisines: typeNameArr
                }

                data.push(restData);
                i++;
            }
        }
        setRestaurantData(data);
    }, [restaurants])


    const { Header, Content, Footer } = Layout;

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Status',
            key: 'state',
            dataIndex: 'status',
            filters: [
                {
                    text: 'Open',
                    value: 'Open',
                },
                {
                    text: 'Closed',
                    value: 'Closed',
                },

            ],
            render: (status) => (
                <span>
                    <Badge status={status === 'Open' ? 'success' : 'error'} />
                    {status}
                </span>
            ),
            onFilter: (value, record) => record.status == value,
        },
        {
            title: 'Cuisines',
            key: 'types',
            dataIndex: 'cuisines',
            render: (cuisines) => (
                <span>
                    {cuisines.map((tag) => {
                        return (
                            <Tag key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </span>
            ),
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
                    All Restaurants
                </div>
                <Table columns={columns} dataSource={restaurantData} pagination={false} loading={restaurants.length > 0 ? false : true} />

            </Content>

        </Layout>
    )
};

export default PastOrders;