import React, { useEffect, useState } from 'react';
import { Item } from "./items";
import Images from "../../../Assets/images/js/Images";

const BasketItems = () => {
    let { FiTag, Down, Location, TagTwo, TabloDelete, Add_Bin } = Images;

    const [data, setData] = useState([]);
    const [selectedItems, setSelectedItems] = useState({});

    useEffect(() => {
        setData(Item);
    }, []);

    const groupedData = data.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    const handleDelete = (id, category) => {
        setData(prevData => prevData.filter(item => item.id !== id));
        setSelectedItems(prevSelectedItems => {
            const updatedCategory = { ...prevSelectedItems[category] };
            delete updatedCategory[id];
            return { ...prevSelectedItems, [category]: updatedCategory };
        });
    };

    const handleDeleteAll = (category) => {
        setData(prevData => prevData.filter(item => item.category !== category));
        setSelectedItems(prevSelectedItems => ({ ...prevSelectedItems, [category]: {} }));
    };

    const handleDeleteSelected = (category) => {
        const selectedIds = Object.keys(selectedItems[category]).filter(id => selectedItems[category][id]);
        setData(prevData => prevData.filter(item => !selectedIds.includes(item.id.toString())));
        setSelectedItems(prevSelectedItems => ({ ...prevSelectedItems, [category]: {} }));
    };

    const handleCheckboxChange = (id, category) => {
        setSelectedItems(prevSelectedItems => ({
            ...prevSelectedItems,
            [category]: {
                ...prevSelectedItems[category],
                [id]: !prevSelectedItems[category]?.[id]
            }
        }));
    };

    return (
        <>
            {Object.keys(groupedData).map((category, categoryIndex) => (
                <div className="myContainer position-relative gy-4 rounded" style={{ padding: "0rem 0rem 0.8rem 0rem" }} key={categoryIndex}>
                    <div className="row ms-4 mt-3">
                        <p className="text-44 fb-600">
                            {category}
                        </p>
                    </div>
                    {categoryIndex === 0 && (
                        <div className="col d-flex position-absolute top-2 right-2">
                            <button className="AllDel me-3" onClick={() => handleDeleteAll(category)}>
                                <img src={Add_Bin} alt="" />
                                <p className='ms-2'>Hamısını Sil</p>
                            </button>
                            <button className="AllDel" onClick={() => handleDeleteSelected(category)}>
                                <img src={Add_Bin} alt="" />
                                <p className='ms-2'>Seçilmişləri Sil</p>
                            </button>
                        </div>
                    )}
                    <div className="myContainer">
                        {groupedData[category].map((Data, index) => (
                            <div className="row rounded bg-white ms-3 mt-4 me-3" key={index} style={{ height: "120px" }}>
                                <div className="col-1 d-flex align-items-center h-100" style={{ width: "20px" }}>
                                    <div className="checkbox">
                                        <input
                                            type="checkbox"
                                            id={`checkbox${categoryIndex}-${index}`}
                                            checked={!!selectedItems[category]?.[Data.id]}
                                            onChange={() => handleCheckboxChange(Data.id, category)}
                                        />
                                        <label htmlFor={`checkbox${categoryIndex}-${index}`} className="checkmark" />
                                    </div>
                                </div>
                                <div className="col d-flex justify-content-between">
                                    <div className="d-flex">
                                        <div className="col-1 ms-3 d-flex align-items-center h-100">
                                            <img src="https://limonoto.com/wp-content/uploads/2023/04/11144-61YG.jpeg" width="47px" height="43px" alt="" />
                                        </div>
                                        <div className="col-2 mt-3 ms-4" style={{ width: "421px" }}>
                                            <div className="col w-100 d-flex justify-content-between">
                                                <div className='d-flex'>
                                                    <img src={FiTag} alt="" />
                                                    <p className="OemNo text-44 ms-2">
                                                        {Data.tag_name}
                                                    </p>
                                                </div>
                                                <div className="d-flex">
                                                    <p className="Oem">
                                                        OEM № :
                                                        <span className="OemNo">
                                                            {Data.tag_name}
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center justify-content-between w-100 mt-2">
                                                <div className='d-flex align-items-center'>
                                                    <div className="Location2 d-flex align-items-center">
                                                        <img src={Location} alt="" />
                                                        <p className="LocationName">
                                                            {Data.location}
                                                        </p>
                                                        <img src={Down} alt="" />
                                                    </div>
                                                    <div className="Brend ms-3 d-flex align-items-center">
                                                        <img src={TagTwo} alt="" />
                                                        <p className="BrendTitle ms-1">
                                                            {Data.car_name}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center me-5">
                                                    <div className="ImgCenters">
                                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/900px-BMW.svg.png" alt="" />
                                                    </div>
                                                    <p className="brendNo ms-2">
                                                        {Data.tag_Title}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col mt-2">
                                            <h3 className="BrandingName">
                                                    {Data.brand_name}
                                                    <span className="BrandingNameTwo">
                                                        {Data.brand_title}
                                                    </span>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 d-flex align-items-center">
                                        <div className="counterCenter">
                                            <button className="del">
                                                -
                                            </button>
                                            <input type="text" name="" id="" className="counter" />
                                            <button className="plus">
                                                +
                                            </button>
                                        </div>
                                        <div className='d-flex flex-column align-items-end'>
                                            <button className="none" onClick={() => handleDelete(Data.id, category)}>
                                                <img width="24px" className='' src={TabloDelete} alt="" />
                                            </button>
                                            <div className="prices2 mt-2">
                                                <p className="Price">
                                                    {Data.price}
                                                </p>
                                                <p className="DelPrice">
                                                    <del>
                                                        {Data.del_price}
                                                    </del>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default BasketItems;
