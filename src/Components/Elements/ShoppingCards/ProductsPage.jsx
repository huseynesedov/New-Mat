import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Spin, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Images from '../../../Assets/images/js/Images';
import { addToCart, incrementQuantity, decrementQuantity } from '../../../Redux/actions/index';
import { ProductApi } from "../../../api/product.api";
import {useAuth} from "../../../AuthContext";
import {BasketApi} from "../../../api/basket.api";
import CardItem from "../CardItem";

const ShoppingCards = ({ reset , data , loading }) => {
    return (
        <div className="container-fluid ">
            <div className="row">
                {
                    !loading ?
                        <>
                            {data.map(d =>  <CardItem classes={'col-lg-4 col-md-6'} d={d}/>)}
                        </> : <>
                            <div className={'w-100 d-flex justify-content-center align-items-center'}>
                                <Space size="middle">
                                    <Spin size="large"/>
                                </Space>
                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default ShoppingCards;
