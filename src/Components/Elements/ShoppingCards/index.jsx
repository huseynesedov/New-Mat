import React, { useState, useEffect } from 'react';
import { ProductApi } from "../../../api/product.api";
import { useAuth } from "../../../AuthContext"
import { Space, Spin } from "antd";
import CardItem from "../CardItem";
const ShoppingCards = ({detailedId}) => {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const { logout, openNotification } = useAuth()


    useEffect(() => {
        setLoading(true)
        if(detailedId){
            ProductApi.GetProductGroupsById({
                id:detailedId
            }).then((res) => {
                setData(res)
                setCount(res.length)
            }).catch((error)=>{
                if (error.response.data.status === 2017) {
                    logout()
                }
                openNotification('Xəta baş verdi', error.response.data.message, true)
            }).finally(() => {
                setLoading(false)
            })
        }
        else{
            ProductApi.GetBestSeller(
                {
                    page: page - 1,
                    pageSize: 20
                }
            ).then((res) => {
                setData(res.data)
                setCount(res.count)
            }).catch((error)=>{
                if (error.response.data.status === 2017) {
                    logout()
                }
                openNotification('Xəta baş verdi', error.response.data.message, true)
            }).finally(() => {
                setLoading(false)
            })
        }


    }, [page]);


    const newData = data.map(item => {
        return { ...item };
    });

    return (
        <div className="container-fluid mt-5">
            <div className="row">
                {!loading ?
                    <>
                        {newData.map(d => <CardItem classes={'col-lg-3 col-md-6'} d={d} />)}

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
