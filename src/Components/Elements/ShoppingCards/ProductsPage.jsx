import React, { useState, useEffect } from 'react';
import { ProductApi } from "../../../api/product.api";
import { useAuth } from "../../../AuthContext"
import { Space, Spin } from "antd";
import CardItem from "../CardItem";
const ShoppingCards = ({data , loading}) => {

    const newData = data.map(item => {
        return { ...item };
    });

    return (
        <div className="container-fluid">
            <div className="row">
                {!loading ?
                    <>
                        {newData.map(d => <CardItem classes={'col-lg-4 col-md-6'} d={d} />)}

                    </>
                    : <>
                        <div className={'w-100 d-flex justify-content-center'}>
                            <Space size="middle">
                                <Spin size="large" />
                            </Space>
                        </div>
                    </>}
            </div>
        </div>
    );
};

export default ShoppingCards;
