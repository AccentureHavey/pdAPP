import {
    HTTP
} from '../conmon/js/http.js'


class OrderApi extends HTTP {
    ///报名活动
    SignUp(data) {
        return this.request({
            url: '/Order/signUp',
            method: 'POST',
            data
        })
    }

    ///取消报名
    CancelOrder(data) {
        return this.request({
            url: '/Order/CancelOrder',
            method: 'POST',
            data
        })
    }
    ///上传订单截图
    updateOrderCut(data) {
        return this.request({
            url: '/Order/UpdateOrderCut',
            method: 'POST',
            data
        })

    }
    //上传评价截图
    updateCommonCut(data) {
        return this.request({
            url: '/Order/UpdateOrderCut',
            method: 'POST',
            data
        })
    }

    ///删除订单截图
    DeleteOrderCut(data) {
        return this.request({
            url: '/Order/DeleteOrderCut',
            method: 'POST',
            data
        })
    }


    ///删除评价截图
    DeleteCommonCut(data) {
        return this.request({
            url: '/Order/DeleteCommonCut',
            method: 'POST',
            data
        })
    }


    ///提交订单截图
    SubmitOrderCut(data) {
        return this.request({
            url: '/Order/SubmitOrderCut',
            method: 'POST',
            data
        })
    }


    ///提交评价截图
    SubmitCommonCut(data) {
        return this.request({
            url: '/Order/SubmitCommonCut',
            method: 'POST',
            data
        })
    }


    ///提交审核
    SubmitAudit(data){
        return this.request({
            url: '/Order/SubmitAudit',
            method: 'POST',
            data
        })
    }

    ///撤销审核
    CancelAudit(data){
        return this.request({
            url: '/Order/CancelAudit',
            method: 'POST',
            data
        })
    }


    ///给介绍人返现
    FeedBack(data){
        return this.request({
            url: '/Order/FeedBack',
            method: 'POST',
            data
        })
    }


}

export {
    OrderApi
}