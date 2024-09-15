import React, { useState, useEffect } from 'react';
import { ProductApi } from "../../../api/product.api";
import { useAuth } from "../../../AuthContext"
import {Space, Spin} from "antd";
import CardItem from "../CardItem";
const ShoppingCards = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const { logout  , openNotification }= useAuth()

    useEffect(() => {
        setLoading(true)
        ProductApi.GetBestSeller(
            {
                page: 0,
                pageSize: 20
            }
        ).then((res) => {
            setData(res.data)
        }).catch((error)=>{
            if(error.response.status === 401){
                logout()
            }
            openNotification('Xəta baş verdi'  ,  error.response.data.message , true)
        }).finally(() =>{
            setLoading(false)
        })

    }, []);


    const newData = data.map(item => {
        if (item.prices[0].value && item.discountTitle) {
            const price = parseFloat(item.prices[0].value);
            const discountTitle = parseFloat(item.discountTitle);
            const indirimliFiyat = price - (price * (discountTitle / 100));
            return { ...item, indirimliFiyat: indirimliFiyat.toFixed(2) };
        } else {
            return { ...item, indirimliFiyat: item.prices[0].value };
        }
    });

    return (
        <div className="container-fluid mt-5">
            <div className="row">
                {!loading ?
                <>
                    {newData.map(d =>  <CardItem  classes={'col-lg-3 col-md-6'} d={d} /> )}
                </>
                    : <>
                        <div className={'w-100 d-flex justify-content-center align-items-center'}>
                            <Space size="middle">
                                <Spin size="large"/>
                            </Space>
                        </div>
                    </>}
            </div>
        </div>
    );
};

export default ShoppingCards;
