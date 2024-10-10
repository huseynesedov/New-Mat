import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Images from '../../../Assets/images/js/Images';
import { useAuth } from "../../../AuthContext"
import {Tooltip, Spin, List, Modal, Select} from "antd";

import { InfoCircleOutlined } from '@ant-design/icons'
import {BasketApi} from "../../../api/basket.api";
import { useTranslation } from 'react-i18next';


const {Option} = Select
const CardItem = ({d, classes}) => {
    const {t} = useTranslation()
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { FiTag, Location, Down, Return, TagTwo, Vector2, Heart, Endirim } = Images;
    let [quantity , setQuantity] = useState(1)
    const [loading, setLoading] = useState(false);
    const { logout  , openNotification }= useAuth()
    useEffect(() => {
        setQuantity(d.minOrderAmount)
    }, []);
    const handleAddToCart = async (product) => {
        setLoading(true)
        await  BasketApi.AddToBasket( {
            productId: product.idHash,
            quantity
        }).then(() =>{
            openNotification('Əlavə edildi' , `${product.name} səbətə əlavə edildi` , false )
        }).catch((err)=>{
            openNotification('Xəta baş verdi' , err.response.data.message , true )
        }).finally(() =>{
            setLoading(false)
        })
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return <div className={`d-block text-decoration-none position-relative ${classes}`}
                key={d.idHash}>
        <div className="CartCenterMain">
            {d.discount > 0 ? (
                <div className="position-absolute" style={{left: "-21px", top: "-17px"}}>
                    <img src={Endirim} alt="Discount"/>
                    <p className="text-white position-absolute discount">
                        {d.discountTitle}% endirim
                    </p>
                </div>
            ) : ''}


                <div className="ImgTitleMain">
                    <div className="ImgBrendingTitle">
                        <Link to={`/detail/${d.idHash}`}>
                            <div className="ImgFocus">
                                <img style={{objectFit: "contain"}} src={`${d.defaultContent}`} alt="Product"/>
                            </div>
                        </Link>
                        <div className="TitleCenter ms-3">
                                <Link to={`/detail/${d.idHash}`}>
                                    <span className="Tag">
                                        <img src={FiTag} alt="FiTag"/>
                                        <p className="OemNo product text-44">
                                            {d.code}
                                        </p>
                                    </span>
                                </Link>
                                <div className={'d-flex'}>
                                    {d.vehicleBrands.map((s)=> {
                                        return <span className="TagTwo">
                                            <div className="ImgCenters">
                                                <img src={`${s.vehicleBrandContent}`} alt="Product"/>
                                            </div>
                                            {/*<p className="brendNo">*/}
                                            {/*    {s.vehicleBrandIdName}*/}
                                            {/*</p>*/}
                                        </span>
                                    })}

                                    <Tooltip onClick={()=>{
                                        setIsModalVisible(true)
                                    }} placement={'topRight'} title={'Models'}>
                                        <InfoCircleOutlined className={'text-dark ms-2'}  />
                                    </Tooltip>
                                </div>
                        </div>
                    </div>
                    <Link to={`/detail/${d.idHash}`}>
                        <div className="OemTextCenter">
                            <p className="Oem">
                                OEM № :
                                <p className="OemNo text-44">
                                    {d.oemCode}
                                </p>
                            </p>
                        </div>
                    </Link>
                </div>

            <div className="LocationBrendNameCenter">
                <div className="d-flex LocationBrend">
                    {d?.storages?.length ?

                        <div className="Location">
                            <p className="LocationName d-flex">
                                <Select
                                    size={'small'}
                                    style={{
                                        backgroundColor: '#f0f0f0', // Your desired background color
                                        border: 'none',             // No border
                                        borderRadius: '30px',       // 30px border radius
                                        padding: '5px 0px'         // Padding for a better look
                                    }}
                                    dropdownStyle={{
                                        backgroundColor: '#f0f0f0'  // Same background color for the dropdown
                                    }}
                                    className="custom-select2"
                                    defaultValue={d?.storages[0]?.storageIdHash}
                                    showSearch // Enables the search functionality
                                    optionFilterProp="children" // Search will be based on the option's displayed text
                                    filterOption={(input, option) =>
                                        (option?.children?.props?.children ?? '').toLowerCase().includes(input.toLowerCase())
                                    } // Custom filter logic (optional)
                                >
                                    {d?.storages?.map((s) => (
                                        <Option key={s.valueHash} value={s.storageIdHash}>
                                            <img src={Location} alt="Location"/>
                                            <span style={{marginLeft: '8px'}}>{s.storageCode}</span>
                                        </Option>
                                    ))}
                                </Select>
                            </p>
                        </div>
                        :''
                    }
                    <div className="Brend">
                        <img height={'18px'} src={d.manufacturerContent} alt="TagTwo"/>
                        <p className="BrendTitle">
                            {d.manufacturerName}
                        </p>
                    </div>
                </div>
                <div className="Returun">
                    <Link className="text-decoration-none" to="/">
                        <img src={Return} alt="Return"/>
                        <p className="ReturunTitle">
                            {t("Global.return")}
                        </p>
                    </Link>
                </div>
            </div>

            <Link to={`/detail/${d.idHash}`} className="BrendingDetailTitle text-decoration-none">
                <div className="BrendTitleCenter mt-2">
                    <h3 className="BrandingName">
                        {d.name}
                        <p className="BrandingNameTwo">
                            {d.description}
                        </p>
                    </h3>
                </div>
            </Link>

            <div className="PriceCounter">
                <div className="prices">
                    {d.price.formattedDiscountPrice > 0 ? (
                        <p className="DelPrice">
                            <del>
                                {d.price?.formattedDiscountedPrice} {d.price?.currencyName}
                            </del>
                        </p>
                    ) : ''}
                    <p className="Price fb-800">
                        {d.price.value} {d.price?.currencyName}
                    </p>
                </div>

                <div className="counterCenter">
                    <button className="del" onClick={() => {
                        if (quantity > d.minOrderAmount) {
                            setQuantity(  quantity -= 1)
                        }
                        else {
                            openNotification('Məhsul sayı düzgün deyil' , `Minimal sifariş sayı ${d.minOrderAmount} olmalıdır.` , false )
                        }
                    }}>
                        -
                    </button>
                    <input
                        value={quantity}
                        pattern="[0-9]*"
                        onChange={(e) => {
                         let q =   e.target.value.replace(/[^1-9]/g, '');
                           if(Number(q)< d.minOrderAmount)  {
                               setQuantity(d.minOrderAmount);
                           }
                           else {
                               setQuantity(Number(q));
                           }
                        }}
                        className="counter"
                    />
                    <button className="plus" onClick={() => {
                      setQuantity(  quantity += 1)
                    }}>
                        +
                    </button>
                </div>
            </div>

            <div className="BasketLikeCenter my-2">
                <button className="Basket" onClick={() => handleAddToCart(d)}>
                    {loading ? <Spin className="custom-spin"  size={'small'}/> : ''}
                    <img src={Vector2} alt="Add to Basket"/>
                    <p className="BasketTitle">
                        {t("Global.basket")}
                    </p>
                </button>
                <div className="Heart">
                    <img src={Heart} alt="Favorite"/>
                </div>
            </div>
        </div>



        <Modal
            title="Models"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <List size="large" bordered style={{ marginTop: 20 }}>
                {d.vehicleModels.map((item, index) => (
                    <List.Item key={index}>{item.vehicleModelIdName}</List.Item>
                ))}
            </List>
        </Modal>


    </div>
}

export default CardItem;
