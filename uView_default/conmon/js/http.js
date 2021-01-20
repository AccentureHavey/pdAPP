import { config } from './config'
class HTTP {
    request ({
        url,
        data = {},
        method = 'GET'
    }) {
        return new Promise((resolve,reject) => {
            this._request(url,resolve,reject,data,method)
        })
    }

    _request (url,resolve,reject,data = {},method = 'GET'){
        uni.showLoading({
            title:'加载中'
        });
        uni.request({
            url: config.api_url + url,
            method : method,
            data : data,
            timeout: 30000,
            header: {
                'Content-Type': 'application/json',
                'Authorization': 'Ba ' + uni.getStorageSync("UserInfo").token
            },
            success: (res) => {
                uni.hideLoading();
                uni.stopPullDownRefresh();
                if(res.statusCode == 200) {
                    resolve(res.data)
                } else if(res.statusCode ==401){
                    uni.reLaunch({
                        url:'/pages/Login/index'
                    })
                    _show_error('请先登入！')
                } else {
                    reject(res)
                    _show_error(res.data.Message)
                }
            },
            fail:(err) => {
                _show_error('请求失败！')
                setTimeout(()=> {
                    uni.hideLoading()
                },1000)
            },
            complete:function () {
                uni.hideLoading()
            }
        })
    }

}

let _show_error = function (err_msg) {
    uni.showToast({
        title:err_msg,
        icon: 'none',
        duration: 2500
    })
}

export {
    HTTP
}
