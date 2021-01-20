import {HTTP} from '../conmon/js/http.js'


class OrderApi extends HTTP {
    ///获取拼单详情
    GetOrderById(orderId) {
        return this.request({
            url:'/auth/login'+orderId
        })
    }

    ///获取用户拼单数据
    GerOrderByUsId(Id) {
        return this.request({
            url:''+Id
        })
    }

    CreateOrder(data) {
        return this.request({
            
        })
    }

}

export {
    OrderApi
}