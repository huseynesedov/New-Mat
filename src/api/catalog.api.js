import { BaseApi } from "../Const/api";

export const CatalogApi = {
    // Manufacturer
    GetManufacturerListByProductType(params) {
        return BaseApi.get('/catalog/v1/Manufacturer/GetManufacturerListByProductType', { params });
    },
    ManufacturerTest(params) {
        return BaseApi.get('/catalog/v1/Manufacturer/Test', { params });
    },

    // Order
    GetOrderDetailStatusList(params) {
        return BaseApi.get('/catalog/v1/Order/GetOrderDetailStatusList', { params });
    },
    GetOrderStatusList(params) {
        return BaseApi.get('/catalog/v1/Order/GetOrderStatusList', { params });
    },
    GetOrderTypeList(params) {
        return BaseApi.get('/catalog/v1/Order/GetOrderTypeList', { params });
    },
    GetShipmentStatusList(params) {
        return BaseApi.get('/catalog/v1/Order/GetShipmentStatusList', { params });
    },
    GetShipmentTypeList(params) {
        return BaseApi.get('/catalog/v1/Order/GetShipmentTypeList', { params });
    },
    OrderTest(params) {
        return BaseApi.get('/catalog/v1/Order/Test', { params });
    },
    // Product
    GetProductGroupList(params) {
        return BaseApi.get('/catalog/v1/Product/GetProductGroupList', { params });
    },
    GetProductGroupListByProductType(params) {
        return BaseApi.get('/catalog/v1/Product/GetProductGroupListByProductType', { params });
    },
    GetProductTypeList(params) {
        return BaseApi.get('/catalog/v1/Product/GetProductTypeList', { params });
    },
    ProductTest(params) {
        return BaseApi.get('/catalog/v1/Product/Test', { params });
    },

    // VehicleBrand
    GetVehicleBrandListAsync(params) {
        return BaseApi.get('/catalog/v1/VehicleBrand/GetListAsync', { params });
    },
    VehicleBrandTest(params) {
        return BaseApi.get('/catalog/v1/VehicleBrand/Test', { params });
    },
};
