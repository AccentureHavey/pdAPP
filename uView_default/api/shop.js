///商家信息接口
import {HTTP} from '../conmon/js/http.js'


class ShopApi extends HTTP {
    ///获取商店详情
    GetShopByShopId(shopId) {
        return this.request({
            url:'/shop/getShopDetail'+shopId
        })
    }

    ///获取商店列表
    GetShopList(address) {
        return this.request({
            url:'/shop/getShopList'+address
        })
    }

}

export {
    ShopApi
}