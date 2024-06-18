import React from 'react';
import { useParams } from 'react-router-dom';
import { items } from './json';
import Images from '../../../Assets/images/js/Images';
import { Link } from 'react-router-dom';

const DetailElements = () => {
    const { id } = useParams(); // URL'den ID'yi alırıq
    const item = items.find(item => item.id === parseInt(id)); // ID'ye göre productu axdaririq

    const { Location_gray, FiTag, Star_Yellow, Star_Gray, Liner, Heart2 } = Images;

    const [selectedImage, setSelectedImage] = React.useState(""); // Default şəkil
    const [hoverRating, setHoverRating] = React.useState(0); // hover edildikdə tutulan rating

    // Eğer ürün varsa ve carouselImages dizisi tanımlı ise ilk resmi seç
    React.useEffect(() => {
        if (item && item.carouselImages && item.carouselImages.length > 0) {
            setSelectedImage(item.carouselImages[0].img);
        }
    }, [item]);

    if (!item) {
        return (
            <div className='d-flex flex-column align-items-center w-100 h-100 justify-content-center'>
                <img src="https://cdn.dribbble.com/users/721524/screenshots/4117132/media/6dff4135f851cd4af82839d83e00d1d6.png?resize=800x600&vertical=center" alt="" />
                <h1>
                    Məhsul Tapılmadı !!!!
                </h1>
            </div>
        );
    }

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleMouseEnter = (ratingValue) => {
        setHoverRating(ratingValue);
    };

    const handleMouseLeave = () => {
        setHoverRating(0);
    };

    // Rating dəyəri
    const renderStars = (rating) => {
        const stars = [];
        const filledStars = Math.floor(rating);
        const hasHalfStar = rating - filledStars >= 0.5;

        for (let i = 1; i <= 5; i++) {
            if (i <= filledStars) {
                stars.push(<img key={i} src={Star_Yellow} alt="yellow-star" />);
            } else if (hasHalfStar && i === filledStars + 1) {
                stars.push(<img key={i} src={Star_Yellow} alt="yellow-star" />);
            } else {
                stars.push(<img key={i} src={Star_Gray} alt="gray-star" />);
            }
        }

        return stars;
    };

    return (
        <>
        <div className="myRow mt-3">
            <div className="row align-items-center justify-content-between border rounded" style={{ width: "537px", height: "655px" }}>
                {/* imgs carousel */}
                <div className="col-1 d-flex flex-column justify-content-between ms-3 p-0" style={{ width: "97px", height: "420px" }}>
                    {item.carouselImages && item.carouselImages.map((imageObj, index) => (
                        <button key={index} className="none" onClick={() => handleImageClick(imageObj.img)}>
                            <div className="d-flex border rounded w-100" style={{ height: "97px", padding: "6px" }}>
                                <img className="w-100" src={imageObj.img} alt={`carousel-img-${index}`} />
                            </div>
                        </button>
                    ))}
                </div>

                {/* img container start */}
                <div className="col-1 me-5" style={{ width: "325px", height: "300px" }}>
                    <img className="w-100" src={selectedImage} alt="selected-carousel" />
                </div>
                {/* img container end */}
            </div>

            <div className="row flex-column" style={{ width: "840px" }}>
                <div className="d-flex justify-content-between">
                    <div className="col-1 d-flex flex-column" style={{ width: "490px" }}>
                        <span className="d-flex">
                            <img src={FiTag} alt="" />
                            <p className="OemNo text-44 ms-2">{item.oemNo}</p>
                        </span>
                        <span className="mt-1 text-44">
                            <p className="Oem Oem2 d-flex align-items-baseline">
                                OEM № : <span className="OemNo OemNo2">{item.oemNo}</span>
                            </p>
                        </span>
                        <span>
                            <h3 className="BrandingName BrandingName2 mt-2">
                                {item.brandingName}
                                <span className="BrandingNameTwo">{item.brandingNameTwo}</span>
                            </h3>
                        </span>
                    </div>

                    <div className="col w-100 d-flex justify-content-end">
                        <div className="d-flex flex-column">
                            <span className="d-blok">
                                <div className="d-flex align-items-center">
                                    <p className="me-2 fb-500 f-14">{hoverRating > 0 ? hoverRating.toFixed(1) : item.rating}</p>
                                    <span onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={handleMouseLeave}>
                                        {renderStars(hoverRating > 0 ? hoverRating : item.rating)}
                                    </span>
                                </div>
                            </span>
                            <span className="d-flex mt-3 justify-content-end">
                                <p className="f-14 t_decoration text-44">{item.reviews} Degerlendirme</p>
                            </span>
                        </div>
                    </div>
                </div>

                <img className='mt-4' src={Liner} alt="" />

                <div className="row mt-4">
                    <div className="col">
                        <p className="f-24 text-44 fb-500">Vurğulanan Xüsusiyyətlər:</p>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <table>
                            <tbody>
                                <tr className="border-E9">
                                    <th className="row-header f-14">Maşın Markası</th>
                                    <td className="ms-1">{item.highlightedFeatures && item.highlightedFeatures[0] ? item.highlightedFeatures[0].value : ''}</td>
                                </tr>
                                <tr className="border-E9">
                                    <th className="row-header f-14">İstehsalçı adı</th>
                                    <td className="ms-1">{item.highlightedFeatures && item.highlightedFeatures[1] ? item.highlightedFeatures[1].value : ''}</td>
                                </tr>
                                <tr className="border-E9">
                                    <th className="row-header f-14">Qem No</th>
                                    <td className="ms-1">{item.highlightedFeatures && item.highlightedFeatures[2] ? item.highlightedFeatures[2].value : ''}</td>
                                </tr>
                                <tr className="border-E9">
                                    <th className="row-header f-14">Kod</th>
                                    <td className="ms-1">{item.highlightedFeatures && item.highlightedFeatures[3] ? item.highlightedFeatures[3].value : ''}</td>
                                </tr>
                                <tr className="border-E9">
                                    <th className="row-header f-14">Ad</th>
                                    <td className="ms-1">{item.highlightedFeatures && item.highlightedFeatures[4] ? item.highlightedFeatures[4].value : ''}</td>
                                </tr>
                                <tr className="border-E9">
                                    <th className="row-header f-14">Brend</th>
                                    <td className="ms-1">{item.highlightedFeatures && item.highlightedFeatures[5] ? item.highlightedFeatures[5].value : ''}</td>
                                </tr>
                                <tr className="border-E9">
                                    <th className="row-header f-14">Avtomobil Modeli</th>
                                    <td className="ms-1">{item.highlightedFeatures && item.highlightedFeatures[6] ? item.highlightedFeatures[6].value : ''}</td>
                                </tr>
                                <tr className="border-E9">
                                    <th className="row-header f-14">Mövcudluğu</th>
                                    <td className="ms-1 d-flex align-items-center">
                                        <img src={Location_gray} alt="" />
                                        <p className="ms-1"> Baku</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row mt-5 d-flex">
                    <div className="col d-flex justify-content-between">
                        <div className="counterCenter2">
                                <button className="del2">-</button>
                                <input type="text" name="" id="" className="counter2" />
                                <button className="plus2">+</button>
                            </div>

                            <div className="col-8 d-flex justify-content-between align-items-center">
                                <div className="d-flex buttonSebet align-items-center justify-content-center" style={{ width: "426px", height: "46px" }}>
                                    <button className="none">Səbətə At</button>
                                </div>
                                <Link to="">
                                    <div className="d-flex">
                                        <div className="Heart2">
                                            <img src={Heart2} alt="" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailElements;
