import {HTTP} from '../conmon/js/http.js'


class LoginApi extends HTTP {
    Login(data) {
        return this.request({
            url:'/auth/login',
            method:'POST',
            data
        })
    }
}

export {
    LoginApi
}