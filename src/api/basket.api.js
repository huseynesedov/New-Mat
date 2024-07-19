
import {BaseApi} from "../Const/api";
export const BasketApi = {
    AddToBasket(params){
        BaseApi.post('/basket/v1/BasketDetail/AddToBasket', params)
    },
    DeleteAll(params){
        BaseApi.delete('/basket/v1/BasketDetail/DeleteAll', params)
    },
    DeleteByIds(params){
        BaseApi.delete('/basket/v1/BasketDetail/DeleteByIds', params)
    },
    DeleteById(params){
        BaseApi.delete('/basket/v1/BasketDetail/DeleteById', params)
    },
    GetListByCurrent(params){
        BaseApi.get('/basket/v1/BasketDetail/GetListByCurrent', params)
    },
    GetListByProductType(params){
        BaseApi.get('/basket/v1/BasketDetail/GetListByProductType', params)
    },
    GetTotalPrice(params){
        BaseApi.get('/basket/v1/BasketDetail/GetTotalPrice', params)
    },
    UpdateQuantity(params){
        BaseApi.post('/basket/v1/BasketDetail/UpdateQuantity', params)
    },
    UpdateStatus(params){
        BaseApi.delete('/basket/v1/BasketDetail/UpdateStatus', params)
    },
    UpdateStatusByProductTypeId(params){
        BaseApi.delete('/basket/v1/BasketDetail/UpdateStatusByProductTypeId', params)
    },
}

