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

const ShoppingCards = ({ reset }) => {
    const { openNotification } = useAuth()
    const { FiTag, Location, Down, Return, TagTwo, Vector2, Heart, Endirim } = Images;

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }


    useEffect(() => {
        setLoading(true)
        ProductApi.GetBestSeller(
            {
                page: 0,
                pageSize: 21
            }
        ).then((res) => {
            setData(shuffleArray(res.data))
        }).catch((err) => {
            openNotification('Xəta baş verdi' , err.response.data.message,  true)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [reset]);


    // useEffect(() => {
    //     setLoading(true)
    //     ProductApi.GetBestSeller(
    //         {
    //             page: 0,
    //             pageSize: 20
    //         }
    //     ).then((res) => {
    //         setData(res.data)
    //     }).catch((err) => {
    //         openNotification('Xəta baş verdi' , err.response.data.message,  true)
    //     }).finally(() => {
    //         setLoading(false)
    //     })
    // }, []);


    const addToBasket  = async (productData , idHash , quantity) => {
        await  BasketApi.AddToBasket( {
            productId: idHash,
            quantity
        }).then(() =>{
            openNotification('Əlavə edildi' , `${productData.name} səbətə əlavə edildi` , false )
        }).catch((err)=>{
            openNotification('Xəta baş verdi' , err.response.data.message , true )
        })
    }



    // const handleClick = async (idHash) => {
    //     console.log("Gönderilen idHash:", idHash); // idHash değerini kontrol edin

    //     try {
    //         const response = await ProductApi.GetProductById({ id: idHash });
    //         console.log("API Yanıtı:", response);
    //     } catch (error) {
    //         if (error.response) {
    //             console.error("Hata Detayları:", {
    //                 status: error.response.status,
    //                 data: error.response.data,
    //                 headers: error.response.headers,
    //             });
    //         } else {
    //             console.error('API isteği sırasında bir hata oluştu:', error.message);
    //         }
    //     }
    // };


    const dispatch = useDispatch();

    const handleQuantityChange = (id, increment) => {
        if (increment) {
            dispatch(incrementQuantity(id));
        } else {
            dispatch(decrementQuantity(id));
        }
    };


    const cartItems = useSelector(state => state.cart.items);

    const handleAddToCart = async (product) => {
        const itemInCart = cartItems.find(item => item.id === product.id);

        if (itemInCart) {
            handleQuantityChange(product.id, true);
        } else {
            try {
                // API'ye POST isteği gönder
                const response = await ProductApi.AddToBasket({
                    productId: product.id,
                    quantity: 1,
                    // Diğer gerekli ürün verilerini ekleyin
                });

                if (response && response.status === 200) {
                    // API isteği başarılıysa, ürünü Redux'a ekle
                    dispatch(addToCart(product));
                } else {
                    console.error('Ürün sepete eklenemedi:', response.status);
                }
            } catch (error) {
                console.error('API isteği sırasında bir hata oluştu:', error);
            }
        }
    };

    const newData = data

    return (
        <div className="container-fluid ">
            <div className="row">
                {
                    !loading ?
                        <>
                            {newData.map(d =>  <CardItem classes={'col-lg-4 col-md-6'} d={d}/>)}
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
