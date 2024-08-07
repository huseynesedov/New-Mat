export const apiRoutes = {
    // Manufacturer
    manufacturer: {
        getManufacturerListByProductType: '/catalog/v1/Manufacturer/GetManufacturerListByProductType',
        test: '/catalog/v1/Manufacturer/Test',
    },

    // Order
    order: {
        getOrderDetailStatusList: '/catalog/v1/Order/GetOrderDetailStatusList',
        getOrderStatusList: '/catalog/v1/Order/GetOrderStatusList',
        getOrderTypeList: '/catalog/v1/Order/GetOrderTypeList',
        getShipmentStatusList: '/catalog/v1/Order/GetShipmentStatusList',
        getShipmentTypeList: '/catalog/v1/Order/GetShipmentTypeList',
        test: '/catalog/v1/Order/Test',
        add: '/order/v1/Order/Add',
        baseTest: '/order/v1/Base/Test',
    },

    // Product
    product: {
        decryptBase: '/product/v1/Base/Decrypt',
        encryptBase: '/product/v1/Base/Encrypt',
        decryptProduct: '/product/v1/Product/Decrypt',
        encryptProduct: '/product/v1/Product/Encrypt',
        getById: '/product/v1/Product/GetById',
        getCrossListByProductId: '/product/v1/Product/GetCrossListByProductId',
        getManufacturerAdditionalDiscountById: '/product/v1/Product/GetManufacturerAdditionalDiscountById',
        getOemByProductId: '/product/v1/Product/GetOemByProductId',
        getProductAdditionalDiscountById: '/product/v1/Product/GetProductAdditionalDiscountById',
        getProductGroupsById: '/product/v1/Product/GetProductGroupsById',
        getProductPricesById: '/product/v1/Product/GetProductPricesById',
        getProductQuantitiesById: '/product/v1/Product/GetProductQuantitiesById',
        getSearchTable: '/product/v1/Product/GetSearchTable',
        getShelfAdressesById: '/product/v1/Product/GetShelfAdressesById',
        getVehicleBrandById: '/product/v1/Product/GetVehicleBrandById',
        getVehicleListByProductId: '/product/v1/Product/GetVehicleListByProductId',
        getVehicleModelById: '/product/v1/Product/GetVehicleModelById',
    },

    // VehicleBrand
    vehicleBrand: {
        getListAsync: '/catalog/v1/VehicleBrand/GetListAsync',
        test: '/catalog/v1/VehicleBrand/Test',
    },

    // Basket
    basket: {
        decryptBase: '/basket/v1/Base/Decrypt',
        encryptBase: '/basket/v1/Base/Encrypt',
        baseTest: '/basket/v1/Base/Test',
        addToBasket: '/basket/v1/BasketDetail/AddToBasket',
        decryptBasketDetail: '/basket/v1/BasketDetail/Decrypt',
        deleteAllBasketDetails: '/basket/v1/BasketDetail/DeleteAll',
        deleteBasketDetailById: '/basket/v1/BasketDetail/DeleteById',
        deleteBasketDetailByIds: '/basket/v1/BasketDetail/DeleteByIds',
        encryptBasketDetail: '/basket/v1/BasketDetail/Encrypt',
        getListByCurrentCustomer: '/basket/v1/BasketDetail/GetListByCurrent',
        getListByProductType: '/basket/v1/BasketDetail/GetListByProductType',
        getTotalPrice: '/basket/v1/BasketDetail/GetTotalPrice',
        basketDetailTest: '/basket/v1/BasketDetail/Test',
        updateQuantity: '/basket/v1/BasketDetail/UpdateQuantity',
        updateStatus: '/basket/v1/BasketDetail/UpdateStatus',
        updateStatusByProductTypeId: '/basket/v1/BasketDetail/UpdateStatusByProductTypeId',
    },

    // Catalog
    catalog: {
        baseTest: '/catalog/v1/Base/Test',
        getProductGroupList: '/catalog/v1/Product/GetProductGroupList',
        getProductGroupListByProductType: '/catalog/v1/Product/GetProductGroupListByProductType',
        getProductTypeList: '/catalog/v1/Product/GetProductTypeList',
        productTest: '/catalog/v1/Product/Test',
    }
};
