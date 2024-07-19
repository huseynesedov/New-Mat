import { BaseApi } from "../Const/api";

export const ProductApi = {
    // Base
    DecryptBase(params) {
        return BaseApi.get('/product/v1/Base/Decrypt', { params });
    },
    EncryptBase(params) {
        return BaseApi.get('/product/v1/Base/Encrypt', { params });
    },

    // Product
    DecryptProduct(params) {
        return BaseApi.get('/product/v1/Product/Decrypt', { params });
    },
    EncryptProduct(params) {
        return BaseApi.get('/product/v1/Product/Encrypt', { params });
    },
    GetProductById(params) {
        return BaseApi.get('/product/v1/Product/GetById', { params });
    },
    GetCrossListByProductId(params) {
        return BaseApi.get('/product/v1/Product/GetCrossListByProductId', { params });
    },
    GetManufacturerAdditionalDiscountById(params) {
        return BaseApi.get('/product/v1/Product/GetManufacturerAdditionalDiscountById', { params });
    },
    GetOemByProductId(params) {
        return BaseApi.get('/product/v1/Product/GetOemByProductId', { params });
    },
    GetProductAdditionalDiscountById(params) {
        return BaseApi.get('/product/v1/Product/GetProductAdditionalDiscountById', { params });
    },
    GetProductGroupsById(params) {
        return BaseApi.get('/product/v1/Product/GetProductGroupsById', { params });
    },
    GetProductPricesById(params) {
        return BaseApi.get('/product/v1/Product/GetProductPricesById', { params });
    },
    GetProductQuantitiesById(params) {
        return BaseApi.get('/product/v1/Product/GetProductQuantitiesById', { params });
    },
    GetSearchTable(data) {
        return BaseApi.post('/product/v1/Product/GetSearchTable', data);
    },
    GetShelfAdressesById(params) {
        return BaseApi.get('/product/v1/Product/GetShelfAdressesById', { params });
    },
    GetVehicleBrandById(params) {
        return BaseApi.get('/product/v1/Product/GetVehicleBrandById', { params });
    },
    GetVehicleListByProductId(params) {
        return BaseApi.get('/product/v1/Product/GetVehicleListByProductId', { params });
    },
    GetVehicleModelById(params) {
        return BaseApi.get('/product/v1/Product/GetVehicleModelById', { params });
    },
};
