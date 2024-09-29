import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import '@progress/kendo-theme-default/dist/all.css';
import "./style.scss";
import Images from "../../../Assets/images/js/Images";
import {CatalogApi} from "../../../api/catalog.api";

const statusColors = {
  'Tesdiqlendi': '#48BB78',
  'Birleshdir': '#FFCC00',
  'Legv Edilibdir': '#E53E3E',
};

const ProductStatus = ({ status }) => {
  const bgColor = statusColors[status] || 'white';
  const style = {
    marginBottom: '27px',
    borderRadius: '6px',
    color: 'white',
    backgroundColor: bgColor,
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div style={style}>
      <p style={{ margin: '0px 10px' }}>{status}</p>
    </div>
  );
};

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [orderStatusList, setOrderStatusList] = useState([]);

  const getOrdersByStatus = () =>{

  }

  const getOrderStatusList = () =>{
      CatalogApi.GetOrderStatusList().then((s) =>{
        console.log(s);
      })
  }



  useEffect(() => {
    // API çağrısını burada yapın ve ürünleri ayarlayın
    // const fetchProducts = async () => {
    //   const fetchedProducts = [
    //     { id: 1, status: 'Tesdiqlendi'  , price: 234.2  , date:'13.09.2024'},
    //     { id: 2, status: 'Birleshdir'  , price:  343.1 , date:'14.09.2024'},
    //     { id: 3, status: 'Legv Edilibdir' , price: 235.1 , date:'13.09.2024'},
    //     { id: 4, status: 'Legv Edilibdir'  , price: 432.1 , date:'13.09.2024'},
    //   ];
    //   setProducts(fetchedProducts);
    // };
    //
    // fetchProducts();

    getOrderStatusList()


  }, []);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const { chrevron_right } = Images;

  return (
    <>
      <div className="container-fluid d-flex justify-content-center mt-4">
        <div className="myRow align-items-start flex-column">
          <p className="text-44 f-14 d-flex fb-600">
            Ana sayfa
            <img src={chrevron_right} alt="" />
            <p className="t-01">
              Sifarisler
            </p>
          </p>
          <div className="border-bottom-line mt-4" style={{ width: '100%'}}></div>
        </div>
      </div>

      <div className="container-fluid d-flex justify-content-center mt-4">
        <div className="myRow mt-3">
          <div className="mat-TwoPage">
            <button className={`mat-ButtonInfo fb-500 ${currentPage === 1 ? 'Active' : ''}`} onClick={() => handlePageClick(1)}>
              Sifarişlərim
            </button>
            <button className={`mat-ButtonBack fb-500 ${currentPage === 2 ? 'Active' : ''}`} onClick={() => handlePageClick(2)}>
              Ləğv Edilmiş Sifarişlər
            </button>
            <button className={`mat-ButtonBack fb-500 ${currentPage === 3 ? 'Active' : ''}`} onClick={() => handlePageClick(3)}>
              icrada olan sifarişlər
            </button>
          </div>
        </div>
      </div>

      {currentPage === 1 && (
        <div className="container-fluid flex-column align-items-center d-flex justify-content-center">
          <div className="myRow mt-5">
            <Table className="OrderTable">
              <thead>
                <tr>
                  <th>Nomre</th>
                  <th>Sifaris tarixi</th>
                  <th>Tesdiq Tarixi</th>
                  <th>Status</th>
                  <th>Sifariş Geydleri</th>
                  <th>çatdirma Geydleri</th>
                  <th>izahat</th>
                  <th>Anbar</th>
                  <th>umumi cem</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, i) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.date}</td>
                    <td>{}</td>
                    <td className="d-flex">
                      <ProductStatus status={product.status} />
                    </td>
                    <td style={{ textAlign: "center" }}>Test</td>
                    <td style={{ textAlign: "center" }}>-----</td>
                    <td>123{i} Sifarişle birleşdi</td>
                    <td>Baku</td>
                    <td>{product.price} AZN</td>
                    <td className="d-flex align-items-center">
                      <Link className="text-decoration-none" to={`/Orders/OrderDetail/${product.id}`}>
                        <div className="view">
                          <p>view</p>
                        </div>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      )}

      {currentPage === 2 && (
        <div className="container-fluid flex-column align-items-center d-flex justify-content-center">
          <div className="myRow mt-5">
            <Table className="OrderTable">
              <thead>
                <tr>
                  <th>Nomre</th>
                  <th>Sifaris tarixi</th>
                  <th>Tesdiq Tarixi</th>
                  <th>Status</th>
                  <th>Sifariş Geydleri</th>
                  <th>çatdirma Geydleri</th>
                  <th>izahat</th>
                  <th>Anbar</th>
                  <th>umumi cem</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products.filter(product => product.status === 'Legv Edilibdir').map((product , i) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.date}</td>
                    <td>{}</td>
                    <td className="d-flex">
                      <ProductStatus status={product.status} />
                    </td>
                    <td style={{ textAlign: "center" }}>Tst</td>
                    <td style={{ textAlign: "center" }}>-----</td>
                    <td>122{i} Sifarişle birleşdi</td>
                    <td>Baku</td>
                    <td>{product.price}</td>
                    <td className="d-flex align-items-center">
                      <Link className="text-decoration-none" to={`/Orders/OrderDetail/${product.id}`}>
                        <div className="view">
                          <p>view</p>
                        </div>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      )}
      {currentPage === 3 && (
        <div className="container-fluid flex-column align-items-center d-flex justify-content-center">
          <div className="myRow mt-5">
            <Table className="OrderTable">
              <thead>
                <tr>
                  <th>Nomre</th>
                  <th>Sifaris tarixi</th>
                  <th>Tesdiq Tarixi</th>
                  <th>Status</th>
                  <th>Sifariş Geydleri</th>
                  <th>çatdirma Geydleri</th>
                  <th>izahat</th>
                  <th>Anbar</th>
                  <th>umumi cem</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products.filter(product => product.status === 'Birleshdir').map((product , i) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.date}</td>
                    <td>{product.date}</td>
                    <td className="d-flex">
                      <ProductStatus status={product.status} />
                    </td>
                    <td style={{ textAlign: "center" }}>test</td>
                    <td style={{ textAlign: "center" }}>-----</td>
                    <td>41324{i} Sifarişle birleşdi</td>
                    <td>Baku</td>
                    <td>22.97 AZN</td>
                    <td className="d-flex align-items-center">
                      <Link className="text-decoration-none" to={`/Orders/OrderDetail/${product.id}`}>
                        <div className="view">
                          <p>view</p>
                        </div>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      )}
    </>
  );
};

export default Orders;
