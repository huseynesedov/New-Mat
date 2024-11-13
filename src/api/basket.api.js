import { BaseApi } from "../const/api";
import { apiRoutes } from "../const/apiroutes";

export const BasketApi = {
    DecryptBase(params) {
        return BaseApi.get(apiRoutes.basket.decryptBase, { ...params });
    },
    EncryptBase(params) {
        return BaseApi.get(apiRoutes.basket.encryptBase, { ...params });
    },
    BaseTest(params) {
        return BaseApi.get(apiRoutes.basket.baseTest, { ...params });
    },
    AddToBasket(data) {
        return BaseApi.post(apiRoutes.basket.addToBasket, data, data);
    },
    DecryptBasketDetail(params) {
        return BaseApi.get(apiRoutes.basket.decryptBasketDetail, { ...params });
    },
    DeleteAll(params) {
        return BaseApi.delete(apiRoutes.basket.deleteAllBasketDetails, { ...params });
    },
    DeleteById(params) {
        return BaseApi.delete(apiRoutes.basket.deleteBasketDetailById, { ...params });
    },
    DeleteByIds(params) {
        console.log(params)
        return BaseApi.deleteNew(apiRoutes.basket.deleteBasketDetailByIds, params);
    },
    EncryptBasketDetail(params) {
        return BaseApi.get(apiRoutes.basket.encryptBasketDetail, { ...params });
    },
    GetListByCurrent(params) {
        return BaseApi.get(apiRoutes.basket.getListByCurrentCustomer, { ...params });
    },
    GetListByProductType(params) {
        return BaseApi.get(apiRoutes.basket.getListByProductType, { ...params });
    },
    GetTotalPrice(params) {
        return BaseApi.get(apiRoutes.basket.getTotalPrice, { ...params });
    },
    BasketDetailTest(params) {
        return BaseApi.get(apiRoutes.basket.basketDetailTest, { ...params });
    },
    UpdateQuantity(params) {
        return BaseApi.put(`${apiRoutes.basket.updateQuantity}?productId=${params.productId}&quantity=${params.quantity}`);
    },
    UpdateStatus(params) {
        return BaseApi.put(`${apiRoutes.basket.updateStatus}?statusId=${params.statusId}&id=${params.id}`);
    },
    UpdateStatusByProductTypeId(params) {
        return BaseApi.put(`${apiRoutes.basket.updateStatusByProductTypeId}?statusId=${params.statusId}&productTypeId=${params.productTypeId}`, { ...params });
    },
    ReturnProduct(data) {
        return BaseApi.post(apiRoutes.basket.returnProduct, data);
    },
    AddReturnProductCard(data) {
        return BaseApi.post(apiRoutes.basket.addReturnProductCard, data);
    },
    AddReturnProduct(note) {
        return BaseApi.post(`${apiRoutes.basket.addReturnProduct}?note=${note}`);
    },
    GetListByCurrentCustomer(params) {
        return BaseApi.get(apiRoutes.basket.returnProductCardDetail.getListByCurrent, { ...params });
    },
    GetTotalInfoByCurrentCustomer(params) {
        return BaseApi.get(apiRoutes.basket.returnProductCardDetail.getTotalInfo, { ...params });
    },
    UpdateReturnProductNote(id, note) {
        return BaseApi.put(`${apiRoutes.basket.returnProductCardDetail.updateNote}?id=${encodeURIComponent(id)}&note=${encodeURIComponent(note)}`);
    },
    UpdateReturnProductQuantity(id, quantity) {
        return BaseApi.put(`${apiRoutes.basket.returnProductCardDetail.updateQuantity}?id=${id}&quantity=${quantity}`);
    },
    UpdateStatusAndReturnProductId(id, returnProductId) {
        return BaseApi.put(`${apiRoutes.basket.returnProductCardDetail.updateStatusAndReturnProductId}?id=${id}&returnProductId=${returnProductId}`);
    },
    DeleteReturnProductById(id) {
        return BaseApi.delete(apiRoutes.basket.returnProductCardDetail.deleteById, {
            data:id,
        });
    },
};
