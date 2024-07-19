import { BaseApi } from "../Const/api";

export const OrderApi = {
    // Base
    BaseTest(params) {
        return BaseApi.get('/order/v1/Base/Test', { params });
    },

    // Order
    AddOrder(data) {
        return BaseApi.post('/order/v1/Order/Add', data);
    },
    OrderTest(params) {
        return BaseApi.get('/order/v1/Order/Test', { params });
    },
};
