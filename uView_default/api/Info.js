///商家信息接口
import {HTTP} from '../conmon/js/http.js'


class InfoApi extends HTTP {
    ///获取首页广告图
    GetMainBoardInfo(data) {
        return this.request({
            url:'/Info/GetMainBoardInfo',
            method:'POST',
            data
        })
    }

    ///获取通知
    GetInfo(data) {
        return this.request({
            url:'/Info/GetInfo',
            method:'POST',
            data
        })
    }


    ///获取联系我们信息
    GetService(data) {
        return this.request({
            url:'/Info/GetInfo',
            method:'POST',
            data
        })
    }

}

export {
    InfoApi
}