///推广信息接口
import {
    HTTP
} from '../conmon/js/http.js'

class SpreadApi extends HTTP {
    ///获取我推广的人员
    GetMyTeam(data) {
        return this.request({
            url: '/shop/GetMyTeam',
            method: 'POST',
            data
        })
    }

    ///获取推广介绍
    GetSpreadInfo(data) {
        return this.request({
            url: '/shop/GetSpreadInfo',
            method: 'POST',
            data
        })
    }

    ///获取推广收入明细
    GetSpreadIncome(data) {
        return this.request({
            url: '/shop/GetSpreadIncome',
            method: 'POST',
            data
        })
    }

}

export {
    SpreadApi
}