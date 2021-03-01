///我的信息接口
import {HTTP} from '../conmon/js/http.js'


class PersonalApi extends HTTP {
    ///获取我的积分
    GetMyIntegral(data) {
        return this.request({
            url:'/personal/GetMyIntegral',
            method: 'POST',
            data
        })
    }

    ///提现
    TranslateIntegral(data) {
        return this.request({
            url:'/personal/GetMyIntegral',
            method: 'POST',
            data
        })
    }

    ///上传收款码
    UpdatePayCode(data){
        return this.request({
            url:'/personal/UpdatePayCode',
            method: 'POST',
            data
        })
    }

    ///删除收款码
    DeletePayCode(data){
        return this.request({
            url:'/personal/DeletePayCode',
            method: 'POST',
            data
        })
    }

    ///获取邀请码
    GetInvateCode(data){
        return this.request({
            url:'/personal/GetMyIntegral',
            method: 'POST',
            data
        })
    }


    ///获取报名信息（单数、已完成、已提交、待审核、已报名等）
    GetSignUpInfo(data){
        return this.request({
            url:'/personal/GetSignUpInfo',
            method: 'POST',
            data
        })
    }


    ///获取积分明细
    GetIntegralList(data){
        return this.request({
            url:'/personal/GetIntegralList',
            method: 'POST',
            data
        })
    }

}

export {
    PersonalApi
}