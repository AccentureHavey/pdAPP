import {HTTP} from '../conmon/js/http.js'


class LoginApi extends HTTP {
    Login(data) {
        return this.request({
            url:'/auth/login',
            method:'POST',
            data
        })
    }

    //访问日志
    LoginLog(data) {
        return this.request({
            url:'/auth/LoginLog',
            method:'POST',
            data
        })
    }


    //保存介绍人,便于成单后，增加积分
    SaveIntroduce(data){
        return this.request({
            url:'/auth/LoginLog',
            method:'POST',
            data
        })
    }
}

export {
    LoginApi
}