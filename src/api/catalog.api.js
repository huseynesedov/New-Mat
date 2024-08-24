import { BaseApi } from "../const/api";
import { apiRoutes } from "../const/apiroutes";

export const CatalogApi = {
    // Manufacturer
    GetManufacturerListByProductType(params) {
        return BaseApi.get(apiRoutes.manufacturer.getManufacturerListByProductType, { params });
    },
    ManufacturerTest(params) {
        return BaseApi.get(apiRoutes.manufacturer.test, { params });
    },

    // Order
    GetOrderDetailStatusList(params) {
        return BaseApi.get(apiRoutes.order.getOrderDetailStatusList, { params });
    },
    GetOrderStatusList(params) {
        return BaseApi.get(apiRoutes.order.getOrderStatusList, { params });
    },
    GetOrderTypeList(params) {
        return BaseApi.get(apiRoutes.order.getOrderTypeList, { params });
    },
    GetShipmentStatusList(params) {
        return BaseApi.get(apiRoutes.order.getShipmentStatusList, { params });
    },
    GetShipmentTypeList(params) {
        return BaseApi.get(apiRoutes.order.getShipmentTypeList, { params });
    },
    OrderTest(params) {
        return BaseApi.get(apiRoutes.order.test, { params });
    },

    // Product
    GetProductGroupList(params) {
        return BaseApi.get(apiRoutes.catalog.getProductGroupList, { params });
    },
    GetProductGroupListByProductType(params) {
        return BaseApi.get(apiRoutes.catalog.getProductGroupListByProductType, { params });
    },
    GetProductTypeList(params) {
        return BaseApi.get(apiRoutes.catalog.getProductTypeList, { params });
    },
    ProductTest(params) {
        return BaseApi.get(apiRoutes.catalog.productTest, { params });
    },

    // VehicleBrand
    GetVehicleBrandListAsync(params) {
        return BaseApi.get(apiRoutes.vehicleBrand.getListAsync, { params });
    },
    VehicleBrandTest(params) {
        return BaseApi.get(apiRoutes.vehicleBrand.test, { params });
    },
};
