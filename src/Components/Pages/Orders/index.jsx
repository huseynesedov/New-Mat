import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import '@progress/kendo-theme-default/dist/all.css';
import "./style.scss";
import Images from "../../../Assets/images/js/Images";
import {CatalogApi} from "../../../api/catalog.api";
import {OrderApi} from "../../../api/order.api";
import  { Spin } from "antd"
import moment from "moment";

const statusColors = {
  '3LlDuXpKEl0=': '#48BB78', //beklemede
  'xFsQPkFTRN0=': '#FFCC00', // onaylandi
  'a1LJadsYP0o=': '#E53E3E', // Silindi
  'sEED7RZFk_I=': '#FFCC00', // Havuzda bekleyen
  'TdxqvP8RuFw=': '#E53E3E', // Havuzda birleshdirildi
};

const ProductStatus = ({ status , orderStatusName,  orderStatusIdHash }) => {
  const bgColor = statusColors[orderStatusIdHash] || 'white';
  console.log(bgColor);
  const style = {
    marginBottom: '50px',
    borderRadius: '6px',
    color: 'white',
    backgroundColor: bgColor,
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div style={style}>
      <p style={{ margin: '0px 10px' }}>{orderStatusName}</p>
    </div>
  );
};

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [orderStatusList, setOrderStatusList] = useState([]);

  const getOrdersByStatus = (value) =>{
      setLoading(true)
      OrderApi.GetSearchTable({
        page: 0,
        pageSize: 20,
        filters: [
          {
            value,
            fieldName: "orderStatusIdHash",
            equalityType: "Equal"
          }
        ]
      }).then((res) => {
        console.log(res)
        setProducts(res.data)
      }).finally(()=>{
        setLoading(false)
      })
  }

  const getOrderStatusList = () =>{
      CatalogApi.GetOrderStatusList().then((s) =>{
        setOrderStatusList(s)
        getOrdersByStatus(s[0].valueHash)
      }).finally(()=>{
        setLoading(false)
      })
  }



  useEffect(() => {
    getOrderStatusList()
  }, []);

  const handlePageClick = (page, id) => {
    setCurrentPage(page);
    getOrdersByStatus(id)
  };

  const { chrevron_right } = Images;

  return (
      <>
      <div className="container-fluid d-flex justify-content-center mt-4">
        <div className="myRow align-items-start flex-column">
          <p className="text-44 f-14 d-flex fb-600">
            Ana sayfa
            <img src={chrevron_right} alt=""/>
            <p className="t-01">
              Sifarisler
            </p>
          </p>
          <div className="border-bottom-line mt-4" style={{width: '100%'}}></div>
        </div>
      </div>

      <div className="container-fluid d-flex justify-content-center mt-4">
        <div className="myRow mt-3">
          <div className="mat-TwoPage">
            {orderStatusList?.map((d, index) => {
              return <button key={d.valueHash}
                             className={`mat-ButtonInfo me-4 fb-500 ${currentPage === index + 1 ? 'Active' : ''}`}
                             onClick={() => handlePageClick(index + 1, d.valueHash)}>
                {d.displayText}
              </button>
            })}
          </div>
        </div>
      </div>


      <div className={'w-100'}>
        <Spin className={'w-100'} spinning={loading}>
          <div className="container-fluid flex-column align-items-center d-flex justify-content-center">
            <div className="myRow mt-5">
              <Table className="OrderTable">
                <thead>
                <tr>
                  <th>Nomre</th>
                  <th>Sifaris tarixi</th>
                  <th>Tesdiq tarixi</th>
                  <th>Status</th>
                  <th>Sifariş qeydleri</th>
                  <th>Çatdirma qeydleri</th>
                  <th>izahat</th>
                  <th>Anbar</th>
                  <th>Ümumi cəm</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                {products?.map((product, i) => (
                    <tr key={product.id}>
                      <td>{product.orderNumber}</td>
                      <td>{moment(product.createdDate).format('DD-MM-YYYY hh:mm')}</td>
                      <td>{product.confirmDate}</td>
                      <td className="d-flex">
                        <ProductStatus orderStatusName={product.orderStatusName} orderStatusIdHash={product.orderStatusIdHash}/>
                      </td>
                      <td style={{textAlign: "center"}}>{product.note}</td>
                      <td style={{textAlign: "center"}}>{product.shipmentNote}</td>
                      <td>{product.causeOfDeletion}</td>
                      <td>-------</td>
                      <td>{product.total} AZN</td>
                      <td className="d-flex align-items-center">
                        <Link className="text-decoration-none mb-5" to={`/Orders/OrderDetail/${product.idHash}`}>
                          <div className="view mb-5">
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
        </Spin>
      </div>

</>
)
  ;
};

export default Orders;
